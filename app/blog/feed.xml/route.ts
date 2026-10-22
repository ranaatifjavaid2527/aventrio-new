import { blog, postPath, posts } from '@/content/blog'
import { site } from '@/content/site'
import { founder } from '@/content/team'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** RSS 2.0 feed of every post, newest first. */
export function GET() {
  const items = posts
    .map((p) => {
      const url = new URL(postPath(p), site.url).toString()
      return `    <item>
      <title>${esc(p.h1)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${p.published}T12:00:00Z`).toUTCString()}</pubDate>
      <dc:creator>${esc(founder.name)}</dc:creator>
      <description>${esc(p.description)}</description>
${p.tags.map((t) => `      <category>${esc(t)}</category>`).join('\n')}
    </item>`
    })
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${esc(blog.title)}</title>
    <link>${site.url}/blog</link>
    <description>${esc(blog.description)}</description>
    <language>en-us</language>
    <atom:link href="${site.url}/blog/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`
  return new Response(xml, {
    headers: { 'content-type': 'application/rss+xml; charset=utf-8' },
  })
}
