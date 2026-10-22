import Link from 'next/link'
import { blog, formatDate, postPath, posts, readingMinutes } from '@/content/blog'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { pageMetadata } from '@/lib/metadata'
import { blogLd, breadcrumbLd, graph, organizationLd, webPageLd, websiteLd } from '@/lib/jsonld'

export const metadata = pageMetadata({
  title: blog.title,
  description: blog.description,
  path: blog.path,
  absoluteTitle: true,
  rss: true,
})

export default function BlogIndex() {
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd('CollectionPage', blog.path, blog.title, blog.description),
          breadcrumbLd([{ name: 'Blog', path: blog.path }]),
          blogLd(
            blog.title,
            blog.description,
            posts.map((p) => ({ path: postPath(p), headline: p.h1, published: p.published })),
          ),
        )}
      />
      <section
        aria-labelledby="page-title"
        className="relative overflow-hidden bg-paper pt-14 pb-[var(--section-y)] sm:pt-20"
      >
        <div aria-hidden="true" className="grid-texture" />
        <Container className="relative max-w-4xl">
          <Eyebrow>{blog.eyebrow}</Eyebrow>
          <h1 id="page-title" className="t-h2">
            {blog.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-ink-soft">{blog.lede}</p>

          <ul className="mt-14 divide-y divide-line border-y border-line">
            {posts.map((p) => (
              <li key={p.slug} className="py-7">
                <article>
                  <p className="font-mono text-[0.72rem] tracking-[0.08em] text-subtle uppercase">
                    <time dateTime={p.published}>{formatDate(p.published)}</time> ·{' '}
                    {readingMinutes(p)} min read · {p.tags.join(', ')}
                  </p>
                  <h2 className="mt-2 text-[clamp(1.3rem,2vw,1.6rem)]">
                    <Link href={postPath(p)} className="hover:text-green-deep">
                      {p.h1}
                    </Link>
                  </h2>
                  <p className="mt-3 text-ink-soft">{p.description}</p>
                  <Link
                    href={postPath(p)}
                    className="mt-4 inline-flex items-center gap-2 text-[0.95rem] font-medium text-green-deep"
                    aria-label={`Read: ${p.h1}`}
                  >
                    Read the post <Icon name="arrowRight" className="size-3.5" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[0.9rem] text-subtle">
            Follow by RSS:{' '}
            <a href="/blog/feed.xml" className="text-green-deep underline underline-offset-4">
              aventrio.co/blog/feed.xml
            </a>
          </p>
        </Container>
      </section>
    </>
  )
}
