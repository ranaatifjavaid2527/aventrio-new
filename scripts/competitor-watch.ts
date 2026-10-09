#!/usr/bin/env node
/**
 * Competitor content watch. Fetches each page in reports/competitors/pages.json,
 * records its title tag, meta description and H1, and diffs against last
 * week's snapshot. Needs no paid API.
 *
 *   pnpm report:competitors
 *
 * Writes reports/competitors/YYYY-MM-DD.md and updates snapshot.json.
 * A page that blocks automated requests is reported as blocked, never guessed.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const DIR = join(ROOT, 'reports/competitors')
const UA = 'Mozilla/5.0 (compatible; AventrioCompetitorWatch/1.0; +https://aventrio.co)'

type Snap = {
  url: string
  status: number | 'error'
  title: string
  description: string
  h1: string
}

const decode = (s: string) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

function pick(html: string) {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ''
  const description =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1] ??
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i)?.[1] ??
    ''
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? ''
  return { title: decode(title), description: decode(description), h1: decode(h1) }
}

async function snapshot(url: string): Promise<Snap> {
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': UA },
      redirect: 'follow',
      signal: AbortSignal.timeout(20_000),
    })
    const html = await res.text()
    if (!res.ok || /Attention Required! \| Cloudflare|you have been blocked/i.test(html)) {
      return { url, status: res.ok ? 403 : res.status, title: '', description: '', h1: '' }
    }
    return { url, status: res.status, ...pick(html) }
  } catch {
    return { url, status: 'error', title: '', description: '', h1: '' }
  }
}

async function main() {
  const pages = JSON.parse(readFileSync(join(DIR, 'pages.json'), 'utf8')) as string[]
  const snapFile = join(DIR, 'snapshot.json')
  const before: Record<string, Snap> = existsSync(snapFile)
    ? JSON.parse(readFileSync(snapFile, 'utf8'))
    : {}

  const now: Record<string, Snap> = {}
  for (const url of pages) now[url] = await snapshot(url)

  const changes: string[] = []
  const blocked: string[] = []
  for (const url of pages) {
    const a = now[url]
    const b = before[url]
    if (!a) continue
    if (a.status !== 200) {
      blocked.push(
        `- ${url}: ${a.status === 'error' ? 'request failed' : `HTTP ${a.status} (blocked or unavailable)`}`,
      )
      continue
    }
    if (!b || b.status !== 200) {
      changes.push(`### ${url}\nFirst snapshot recorded.\n- Title: ${a.title}\n- H1: ${a.h1}`)
      continue
    }
    const diffs = (['title', 'description', 'h1'] as const)
      .filter((k) => a[k] !== b[k])
      .map((k) => `- **${k}**\n  - was: ${b[k] || '(empty)'}\n  - now: ${a[k] || '(empty)'}`)
    if (diffs.length) changes.push(`### ${url}\n${diffs.join('\n')}`)
  }

  const today = new Date().toISOString().slice(0, 10)
  const md = [
    `# Competitor watch, ${today}`,
    '',
    `Checked ${pages.length} pages for changes to the title tag, meta description and H1 since the last run.`,
    '',
    '## Changes',
    '',
    changes.length ? changes.join('\n\n') : 'No changes since the last snapshot.',
    '',
    ...(blocked.length
      ? [
          '## Not checked',
          '',
          'These pages refused automated requests or failed. Nothing is inferred for them.',
          '',
          ...blocked,
          '',
        ]
      : []),
  ].join('\n')

  mkdirSync(DIR, { recursive: true })
  writeFileSync(join(DIR, `${today}.md`), md)
  writeFileSync(
    snapFile,
    JSON.stringify(
      { ...before, ...Object.fromEntries(Object.entries(now).filter(([, s]) => s.status === 200)) },
      null,
      2,
    ) + '\n',
  )
  console.log(
    `✓ Wrote reports/competitors/${today}.md (${changes.length} changed, ${blocked.length} not checked)`,
  )
}

main().catch((err: unknown) => {
  console.error(err)
  process.exit(1)
})
