/**
 * Tells Bing, and the engines that share IndexNow, which URLs are new or changed.
 * ChatGPT search draws on Bing's index, so this shortens the wait for a new post.
 *
 *   pnpm indexnow            home, blog index and the newest blog post
 *   pnpm indexnow --all      every URL in the live sitemap
 *   pnpm indexnow <url>...   specific URLs
 *
 * Run it after the deploy is live (about 3 minutes after a push), because the
 * engines fetch the pages straight away.
 */
import { readdirSync } from 'node:fs'

const SITE = 'https://aventrio.co'
const KEY = readdirSync('public')
  .map((f) => /^([a-f0-9]{32})\.txt$/.exec(f)?.[1])
  .find(Boolean)

if (!KEY) {
  console.error('No IndexNow key file found in public/ (expected <32 hex characters>.txt).')
  process.exit(1)
}

const text = async (path) => {
  const res = await fetch(`${SITE}${path}`)
  if (!res.ok) throw new Error(`${path} returned ${res.status}`)
  return res.text()
}

const args = process.argv.slice(2)
let urls
if (args.includes('--all')) {
  const xml = await text('/sitemap.xml')
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
} else if (args.length) {
  urls = args
} else {
  const feed = await text('/blog/feed.xml')
  const latest = /<item>[\s\S]*?<link>([^<]+)<\/link>/.exec(feed)?.[1]
  urls = [`${SITE}/`, `${SITE}/blog`, ...(latest ? [latest] : [])]
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  }),
})

// 200 and 202 both mean accepted; 202 means the key file is still being validated.
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urls.length} URL(s)`)
urls.forEach((u) => console.log(`  ${u}`))
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text())
  process.exit(1)
}
