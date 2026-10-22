#!/usr/bin/env node
/**
 * Post-build quality gate for aventrio.co, ported from legacy/tools/validate.py.
 *
 * Starts the production server (unless BASE_URL is given), crawls every page
 * and checks: status, balanced markup, a single <h1>, heading order, valid
 * JSON-LD, required meta tags, alt text, no broken internal links or anchors,
 * no en/em dashes, no unfilled placeholders, security headers, old .html
 * redirects, robots and sitemap, and that CSS tokens match lib/tokens.ts.
 *
 *   pnpm build && pnpm validate
 *   BASE_URL=https://preview.example.vercel.app pnpm validate
 */
import { spawn } from 'node:child_process'
import { readFileSync } from 'node:fs'

const ROOT = new URL('..', import.meta.url).pathname
const PORT = process.env.PORT || '3311'
const BASE = process.env.BASE_URL || `http://localhost:${PORT}`
const PAGES = [
  '/',
  '/about',
  '/privacy',
  '/terms',
  '/book',
  '/services/outsourced-sdr',
  '/services/pipeline-audit',
  '/services/account-executives',
  '/compare/in-house-vs-outsourced-sdr',
]
const PAIRED = [
  'section',
  'div',
  'span',
  'p',
  'a',
  'h1',
  'h2',
  'h3',
  'h4',
  'article',
  'details',
  'summary',
  'table',
  'tr',
  'td',
  'th',
  'ul',
  'ol',
  'li',
  'button',
  'form',
  'nav',
  'header',
  'footer',
  'main',
  'figure',
  'dl',
]
const REQUIRED_META = [
  ['title', /<title>[^<]{10,}<\/title>/],
  ['meta description', /<meta name="description" content="[^"]{50,}"/],
  ['canonical', /<link rel="canonical" href="https:\/\/aventrio\.co[^"]*"/],
  ['og:title', /<meta property="og:title"/],
  ['og:description', /<meta property="og:description"/],
  ['og:image', /<meta property="og:image"/],
  ['twitter:card', /<meta name="twitter:card" content="summary_large_image"/],
  ['robots', /<meta name="robots" content="index, follow"/],
]
const REQUIRED_HEADERS = [
  'content-security-policy',
  'strict-transport-security',
  'x-content-type-options',
  'referrer-policy',
  'permissions-policy',
  'x-frame-options',
]
const BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-SearchBot',
  'PerplexityBot',
  'Google-Extended',
]

const errors = []
const fail = (where, msg) => errors.push(`${where}: ${msg}`)

const visibleText = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')

async function get(path, init) {
  return fetch(new URL(path, BASE), { redirect: 'manual', ...init })
}

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(BASE)
      if (r.status < 500) return
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error(`server did not start at ${BASE}`)
}

function checkTokens() {
  const css = readFileSync(`${ROOT}app/globals.css`, 'utf8')
  const ts = readFileSync(`${ROOT}lib/tokens.ts`, 'utf8')
  const tsVals = Object.fromEntries(
    [...ts.matchAll(/(\w+): '([^']+)'/g)].map((m) => [m[1], m[2].toLowerCase().replace(/\s/g, '')]),
  )
  const kebab = (k) =>
    k.replace(/([A-Z0-9])/g, (c) => `-${c.toLowerCase()}`).replace(/-(\d)/, '-$1')
  for (const [k, v] of Object.entries(tsVals)) {
    const name = `--${kebab(k)}`.replace('surface-2', 'surface-2')
    const m = css.match(new RegExp(`${name}:\\s*([^;]+);`))
    if (!m) fail('tokens', `${name} missing from globals.css`)
    else if (m[1].toLowerCase().replace(/\s/g, '') !== v)
      fail('tokens', `${name} is ${m[1]} in CSS but ${v} in lib/tokens.ts`)
  }
}

async function checkPage(path, linkTargets) {
  const res = await get(path)
  if (res.status !== 200) return fail(path, `status ${res.status}`)
  const html = await res.text()

  for (const h of REQUIRED_HEADERS) if (!res.headers.get(h)) fail(path, `missing header ${h}`)
  const csp = res.headers.get('content-security-policy') || ''
  if (!/'nonce-[A-Za-z0-9+/=]+'/.test(csp)) fail(path, 'CSP has no nonce')
  if (/script-src[^;]*'unsafe-inline'/.test(csp))
    fail(path, "CSP script-src allows 'unsafe-inline'")

  // 1. balanced markup
  for (const tag of PAIRED) {
    const open = (html.match(new RegExp(`<${tag}[\\s>]`, 'g')) || []).length
    const close = (html.match(new RegExp(`</${tag}>`, 'g')) || []).length
    if (open !== close) fail(path, `<${tag}> unbalanced: ${open} open, ${close} close`)
  }

  // 2. exactly one h1, no skipped heading levels
  const h1 = (html.match(/<h1[\s>]/g) || []).length
  if (h1 !== 1) fail(path, `expected exactly one <h1>, found ${h1}`)
  let prev = 0
  for (const m of html.matchAll(/<h([1-6])[\s>]/g)) {
    const lvl = Number(m[1])
    if (prev && lvl > prev + 1) fail(path, `heading jumps from h${prev} to h${lvl}`)
    prev = lvl
  }

  // 3. JSON-LD parses and declares a context
  const blocks = [
    ...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g),
  ]
  if (!blocks.length) fail(path, 'no JSON-LD')
  for (const b of blocks) {
    try {
      const d = JSON.parse(b[1])
      if (!d['@context']) fail(path, 'JSON-LD without @context')
    } catch (e) {
      fail(path, `invalid JSON-LD: ${e.message}`)
    }
  }

  // 4. required meta
  for (const [name, re] of REQUIRED_META) if (!re.test(html)) fail(path, `missing or weak ${name}`)

  // 5. alt text on every image
  for (const m of html.matchAll(/<img\b[^>]*>/g))
    if (!/\salt="[^"]*"/.test(m[0])) fail(path, `image without alt: ${m[0].slice(0, 80)}`)

  // 6. no dashes and no unfilled placeholders in what people read
  const text = visibleText(html)
  const meta = [...html.matchAll(/<(?:title|meta)[^>]*>/g)].map((m) => m[0]).join(' ')
  if (/[\u2013\u2014]/.test(text + meta)) fail(path, 'contains an en or em dash')
  const ph = (text + meta).match(/\[(?:[a-z][a-z ,/]+)\]|lorem ipsum|\bTODO\b|\bTBD\b/i)
  if (ph) fail(path, `unfilled placeholder "${ph[0]}"`)

  // 7. collect internal links and ids for the link check
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]))
  linkTargets.ids.set(path, ids)
  for (const m of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    const href = m[1].replace(/&amp;/g, '&')
    if (href.startsWith('/') && !href.startsWith('//')) linkTargets.links.add(`${path} -> ${href}`)
    if (href.startsWith('#') && href.length > 1 && !ids.has(href.slice(1)))
      fail(path, `anchor ${href} has no target`)
  }
}

async function checkLinks({ links, ids }) {
  const seen = new Map()
  for (const entry of links) {
    const [from, href] = entry.split(' -> ')
    const [p, hash] = href.split('#')
    const target = p || from
    if (!seen.has(target)) seen.set(target, (await get(target)).status)
    const status = seen.get(target)
    if (status !== 200) fail(from, `broken link ${href} (status ${status})`)
    if (hash) {
      if (!ids.has(target)) {
        const html = await (await get(target)).text()
        ids.set(target, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])))
      }
      if (!ids.get(target).has(hash)) fail(from, `link ${href} points to a missing anchor`)
    }
  }
}

async function checkSiteFiles() {
  const robots = await (await get('/robots.txt')).text()
  for (const b of BOTS)
    if (!new RegExp(`User-Agent: ${b}\\s+Allow: /`, 'i').test(robots))
      fail('/robots.txt', `does not allow ${b}`)
  if (!/Sitemap: https:\/\/aventrio\.co\/sitemap\.xml/.test(robots))
    fail('/robots.txt', 'no sitemap line')

  const sm = await (await get('/sitemap.xml')).text()
  const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  if (!locs.length) fail('/sitemap.xml', 'no URLs')
  for (const loc of locs) {
    const s = (await get(new URL(loc).pathname)).status
    if (s !== 200) fail('/sitemap.xml', `${loc} returns ${s}`)
  }

  const llms = await get('/llms.txt')
  if (llms.status !== 200) fail('/llms.txt', `status ${llms.status}`)

  for (const [from, to] of [
    ['/about.html', '/about'],
    ['/index.html', '/'],
    ['/privacy.html', '/privacy'],
    ['/terms.html', '/terms'],
  ]) {
    const r = await get(from)
    const loc = r.headers.get('location') || ''
    if (![301, 308].includes(r.status) || !loc.endsWith(to))
      fail(from, `expected permanent redirect to ${to}, got ${r.status} ${loc}`)
  }

  const api = await get('/api/lead', {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: BASE },
    body: '{"email":"nope"}',
  })
  if (api.status !== 400) fail('/api/lead', `invalid payload should return 400, got ${api.status}`)
  const cross = await get('/api/lead', {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: 'https://evil.example' },
    body: '{}',
  })
  if (cross.status !== 403)
    fail('/api/lead', `cross-origin post should return 403, got ${cross.status}`)

  for (const p of PAGES) {
    const og = await get(`${p === '/' ? '' : p}/opengraph-image`)
    if (og.status !== 200 || !(og.headers.get('content-type') || '').includes('image/png'))
      fail(p, `opengraph-image returns ${og.status}`)
  }
}

let server
async function main() {
  if (!process.env.BASE_URL) {
    server = spawn('node_modules/.bin/next', ['start', '-p', PORT], {
      cwd: ROOT,
      stdio: 'ignore',
      env: { ...process.env, NODE_ENV: 'production' },
    })
    await waitForServer()
  }
  checkTokens()
  // Blog posts are checked from the sitemap, so new posts are covered without editing this list
  const sm = await (await get('/sitemap.xml')).text()
  for (const m of sm.matchAll(/<loc>https:\/\/aventrio\.co(\/blog[^<]*)<\/loc>/g))
    if (!PAGES.includes(m[1])) PAGES.push(m[1])
  if (!PAGES.includes('/blog')) fail('/sitemap.xml', 'blog index missing')
  const rss = await get('/blog/feed.xml')
  if (rss.status !== 200 || !(rss.headers.get('content-type') || '').includes('rss'))
    fail('/blog/feed.xml', `feed returns ${rss.status}`)
  const linkTargets = { links: new Set(), ids: new Map() }
  for (const p of PAGES) await checkPage(p, linkTargets)
  await checkLinks(linkTargets)
  await checkSiteFiles()
}

main()
  .catch((e) => fail('validator', e.message))
  .finally(() => {
    server?.kill()
    if (errors.length) {
      console.error(`\n✗ Quality gate failed with ${errors.length} problem(s):\n`)
      errors.forEach((e) => console.error('  ' + e))
      process.exit(1)
    }
    console.log(
      `✓ Quality gate passed: ${PAGES.length} pages, links, schema, meta, headers, redirects, robots, sitemap`,
    )
  })
