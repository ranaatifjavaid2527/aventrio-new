#!/usr/bin/env node
/**
 * Weekly search report from Google Search Console.
 *
 *   GSC_SITE_URL=sc-domain:aventrio.co \
 *   GSC_SERVICE_ACCOUNT_JSON="$(cat service-account.json)" \
 *   pnpm report:weekly
 *
 * Writes reports/YYYY-MM-DD.md with clicks, impressions, CTR and average
 * position for the last complete week, the week before, the change, top
 * queries and pages, a scorecard for every blog post, the blog's share of
 * search traffic, and the tracked keywords from reports/tracked-keywords.json
 * with the page that ranks for each.
 *
 * It never estimates. If Search Console is not connected, or returns no rows,
 * it says so and exits non-zero rather than writing numbers it does not have.
 * No dependencies: the service account JWT is signed with node:crypto.
 */
import { createSign } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly'

type ServiceAccount = { client_email: string; private_key: string }
type Row = { keys?: string[]; clicks: number; impressions: number; ctr: number; position: number }

function die(message: string): never {
  console.error(`\n✗ Weekly report not generated.\n\n${message}\n`)
  process.exit(1)
}

function readConfig() {
  // The property is verified as a Domain property; override only if that changes
  const siteUrl = process.env.GSC_SITE_URL?.trim() || 'sc-domain:aventrio.co'
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON?.trim()
  if (!raw) {
    die(
      [
        'Google Search Console is not connected yet, so there is no ranking data to report.',
        'This script will not estimate or invent numbers.',
        '',
        'The property sc-domain:aventrio.co is verified and the reader account',
        'search-console-reader@silken-waters-512311-t1.iam.gserviceaccount.com has access.',
        'One step remains: create a JSON key for that account and add it to GitHub as the',
        'repository secret GSC_SERVICE_ACCOUNT_JSON. See docs/search-console-setup.md.',
      ].join('\n'),
    )
  }
  let account: ServiceAccount
  try {
    account = JSON.parse(raw) as ServiceAccount
  } catch {
    die('GSC_SERVICE_ACCOUNT_JSON is set but is not valid JSON. Paste the whole key file contents.')
  }
  if (!account.client_email || !account.private_key) {
    die(
      'GSC_SERVICE_ACCOUNT_JSON is missing client_email or private_key. Use a service account key file.',
    )
  }
  return { siteUrl, account }
}

const b64url = (input: string | Buffer) => Buffer.from(input).toString('base64url')

async function accessToken(account: ServiceAccount) {
  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claims = b64url(
    JSON.stringify({
      iss: account.client_email,
      scope: SCOPE,
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    }),
  )
  const signer = createSign('RSA-SHA256')
  signer.update(`${header}.${claims}`)
  const jwt = `${header}.${claims}.${b64url(signer.sign(account.private_key))}`

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })
  if (!res.ok) die(`Google rejected the service account (${res.status}). ${await res.text()}`)
  return ((await res.json()) as { access_token: string }).access_token
}

async function query(
  token: string,
  siteUrl: string,
  body: Record<string, unknown>,
): Promise<Row[]> {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`
  const res = await fetch(url, {
    method: 'POST',
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (res.status === 403) {
    die(
      `Search Console returned 403 for ${siteUrl}. Add the service account email as a user on that property ` +
        '(Search Console, Settings, Users and permissions, Add user, Restricted is enough).',
    )
  }
  if (!res.ok) die(`Search Console query failed (${res.status}). ${await res.text()}`)
  return ((await res.json()) as { rows?: Row[] }).rows ?? []
}

/** Search Console data lags about two to three days, so the "week" ends three days ago. */
function weeks() {
  const day = 86_400_000
  const iso = (d: Date) => d.toISOString().slice(0, 10)
  const end = new Date(Date.now() - 3 * day)
  const start = new Date(end.getTime() - 6 * day)
  const prevEnd = new Date(start.getTime() - day)
  const prevStart = new Date(prevEnd.getTime() - 6 * day)
  return { cur: [iso(start), iso(end)] as const, prev: [iso(prevStart), iso(prevEnd)] as const }
}

const fmt = {
  n: (v: number) => Math.round(v).toLocaleString('en-US'),
  pct: (v: number) => `${(v * 100).toFixed(1)}%`,
  pos: (v: number) => v.toFixed(1),
  delta: (a: number, b: number, lowerIsBetter = false) => {
    if (!b) return a ? 'new' : 'no change'
    const d = a - b
    if (Math.abs(d) < 1e-9) return 'no change'
    const better = lowerIsBetter ? d < 0 : d > 0
    const sign = d > 0 ? '+' : ''
    return `${sign}${lowerIsBetter ? d.toFixed(1) : Math.round(d).toLocaleString('en-US')} ${better ? '(better)' : '(worse)'}`
  },
}

function table(head: string[], rows: string[][]) {
  return [
    `| ${head.join(' | ')} |`,
    `| ${head.map(() => '---').join(' | ')} |`,
    ...rows.map((r) => `| ${r.join(' | ')} |`),
  ].join('\n')
}

async function main() {
  const { siteUrl, account } = readConfig()
  const token = await accessToken(account)
  const { cur, prev } = weeks()
  const range = (r: readonly [string, string]) => ({ startDate: r[0], endDate: r[1] })

  const blogFilter = {
    dimensionFilterGroups: [
      { filters: [{ dimension: 'page', operator: 'contains', expression: '/blog/' }] },
    ],
  }
  const [totCur, totPrev, qCur, qPrev, pages, blogCur, blogPrev, blogQueries, queryPages] =
    await Promise.all([
      query(token, siteUrl, { ...range(cur) }),
      query(token, siteUrl, { ...range(prev) }),
      query(token, siteUrl, { ...range(cur), dimensions: ['query'], rowLimit: 250 }),
      query(token, siteUrl, { ...range(prev), dimensions: ['query'], rowLimit: 250 }),
      query(token, siteUrl, { ...range(cur), dimensions: ['page'], rowLimit: 20 }),
      query(token, siteUrl, { ...range(cur), dimensions: ['page'], rowLimit: 100, ...blogFilter }),
      query(token, siteUrl, { ...range(prev), dimensions: ['page'], rowLimit: 100, ...blogFilter }),
      query(token, siteUrl, {
        ...range(cur),
        dimensions: ['page', 'query'],
        rowLimit: 500,
        ...blogFilter,
      }),
      query(token, siteUrl, { ...range(cur), dimensions: ['query', 'page'], rowLimit: 1000 }),
    ])

  // Connected but no rows is a real result for a young site: report zeros, do not fail
  const a = totCur[0]
  const b = totPrev[0]
  const zero: Row = { clicks: 0, impressions: 0, ctr: 0, position: 0 }
  const A = a ?? zero
  const B = b ?? zero

  const prevByQuery = new Map(qPrev.map((r) => [r.keys?.[0] ?? '', r]))
  const topQueries = [...qCur]
    .sort((x, y) => y.clicks - x.clicks || y.impressions - x.impressions)
    .slice(0, 20)

  const trackedFile = join(ROOT, 'reports/tracked-keywords.json')
  const tracked: string[] = existsSync(trackedFile)
    ? (JSON.parse(readFileSync(trackedFile, 'utf8')) as string[])
    : []
  const curByQuery = new Map(qCur.map((r) => [r.keys?.[0]?.toLowerCase() ?? '', r]))

  const path = (url: string) => {
    try {
      return new URL(url).pathname
    } catch {
      return url
    }
  }

  // Blog scorecard: every published post, including ones with no impressions yet
  const sitemapPosts = await fetch('https://aventrio.co/sitemap.xml')
    .then((r) => (r.ok ? r.text() : ''))
    .then((xml) =>
      [...xml.matchAll(/<loc>([^<]*\/blog\/[^<]+)<\/loc>/g)].map((m) => path(m[1] ?? '')),
    )
    .catch(() => [] as string[])
  const blogPaths = [
    ...new Set([...sitemapPosts, ...blogCur.map((r) => path(r.keys?.[0] ?? ''))]),
  ].filter(Boolean)
  const byPath = (rows: Row[]) => new Map(rows.map((r) => [path(r.keys?.[0] ?? ''), r]))
  const blogNow = byPath(blogCur)
  const blogBefore = byPath(blogPrev)
  const topQueryFor = (p: string) =>
    blogQueries
      .filter((r) => path(r.keys?.[0] ?? '') === p)
      .sort((x, y) => y.impressions - x.impressions)
      .slice(0, 3)
      .map((r) => `${r.keys?.[1]} (${fmt.pos(r.position)})`)
      .join(', ')
  const blogTotals = blogCur.reduce(
    (t, r) => ({ clicks: t.clicks + r.clicks, impressions: t.impressions + r.impressions }),
    { clicks: 0, impressions: 0 },
  )
  const share = (part: number, whole: number) => (whole ? fmt.pct(part / whole) : 'n/a')

  // Which page ranks for each tracked keyword
  const rankingPage = (k: string) => {
    const rows = queryPages
      .filter((r) => r.keys?.[0]?.toLowerCase() === k.toLowerCase())
      .sort((x, y) => x.position - y.position)
    return rows[0] ? path(rows[0].keys?.[1] ?? '') : ''
  }

  const today = new Date().toISOString().slice(0, 10)
  const md = [
    `# Weekly search report, ${today}`,
    '',
    `Source: Google Search Console, property \`${siteUrl}\`. Week: ${cur[0]} to ${cur[1]}, compared with ${prev[0]} to ${prev[1]}.`,
    'Every number below comes from Search Console. Nothing is estimated.',
    '',
    '## Summary',
    '',
    table(
      ['Metric', 'This week', 'Last week', 'Change'],
      [
        ['Clicks', fmt.n(A.clicks), fmt.n(B.clicks), fmt.delta(A.clicks, B.clicks)],
        [
          'Impressions',
          fmt.n(A.impressions),
          fmt.n(B.impressions),
          fmt.delta(A.impressions, B.impressions),
        ],
        [
          'CTR',
          fmt.pct(A.ctr),
          fmt.pct(B.ctr),
          A.ctr === B.ctr ? 'no change' : `${((A.ctr - B.ctr) * 100).toFixed(1)} pts`,
        ],
        [
          'Average position',
          fmt.pos(A.position),
          fmt.pos(B.position),
          fmt.delta(A.position, B.position, true),
        ],
      ],
    ),
    '',
    ...(a
      ? []
      : [
          '> Search Console is connected but recorded no impressions this week. That is normal for a',
          '> young site: Google indexes first, then shows pages for long, specific searches. Watch the',
          '> blog scorecard below for the first impressions.',
          '',
        ]),
    '## Blog scorecard',
    '',
    `The blog earned ${fmt.n(blogTotals.impressions)} impressions (${share(blogTotals.impressions, A.impressions)} of the site) and ${fmt.n(blogTotals.clicks)} clicks (${share(blogTotals.clicks, A.clicks)} of the site) this week.`,
    '',
    blogPaths.length
      ? table(
          [
            'Post',
            'Impressions',
            'Clicks',
            'Position',
            'Position change',
            'Top searches (position)',
          ],
          blogPaths.map((p) => {
            const r = blogNow.get(p)
            const before = blogBefore.get(p)
            return r
              ? [
                  p,
                  fmt.n(r.impressions),
                  fmt.n(r.clicks),
                  fmt.pos(r.position),
                  before ? fmt.delta(r.position, before.position, true) : 'new',
                  topQueryFor(p) || 'none yet',
                ]
              : [p, '0', '0', 'not shown yet', '', '']
          }),
        )
      : 'No blog posts found in the sitemap.',
    '',
    '## Top queries',
    '',
    topQueries.length
      ? table(
          ['Query', 'Clicks', 'Impressions', 'Position', 'Position change'],
          topQueries.map((r) => {
            const q = r.keys?.[0] ?? ''
            const p = prevByQuery.get(q)
            return [
              q,
              fmt.n(r.clicks),
              fmt.n(r.impressions),
              fmt.pos(r.position),
              p ? fmt.delta(r.position, p.position, true) : 'new',
            ]
          }),
        )
      : 'No queries with impressions this week.',
    '',
    '## Top pages',
    '',
    pages.length
      ? table(
          ['Page', 'Clicks', 'Impressions', 'Position'],
          pages.map((r) => [
            r.keys?.[0] ?? '',
            fmt.n(r.clicks),
            fmt.n(r.impressions),
            fmt.pos(r.position),
          ]),
        )
      : 'No pages with impressions this week.',
    '',
    '## Tracked keywords',
    '',
    tracked.length
      ? table(
          ['Keyword', 'Position', 'Impressions', 'Ranking page'],
          tracked.map((k) => {
            const r = curByQuery.get(k.toLowerCase())
            return r
              ? [k, fmt.pos(r.position), fmt.n(r.impressions), rankingPage(k) || 'n/a']
              : [k, 'not shown this week', '0', '']
          }),
        )
      : 'Add keywords to reports/tracked-keywords.json to track them here.',
    '',
    '## What this report cannot tell you',
    '',
    '- Search volume. Search Console shows impressions for queries the site already appears for, not total demand. Demand data needs a paid tool.',
    '- Competitor rankings. See the competitor watch section for their title and H1 changes instead.',
    '- "Not shown this week" means the site had no impressions for that keyword, not that its rank is known.',
    '',
  ].join('\n')

  mkdirSync(join(ROOT, 'reports'), { recursive: true })
  const out = join(ROOT, `reports/${today}.md`)
  writeFileSync(out, md)
  console.log(`✓ Wrote ${out}`)
}

main().catch((err: unknown) => die(err instanceof Error ? err.message : String(err)))
