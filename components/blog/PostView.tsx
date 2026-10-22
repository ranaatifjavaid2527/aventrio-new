import Image from 'next/image'
import Link from 'next/link'
import { formatDate, readingMinutes, type BlogBlock, type BlogPost } from '@/content/blog'
import { founder } from '@/content/team'
import { BookCallButton } from '@/components/ui/BookCallButton'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Icon } from '@/components/ui/Icon'
import { FinalCta } from '@/components/sections/FinalCta'
import { RichText } from './RichText'

const cta = {
  title: 'Want outbound run this way for you?',
  body: "Thirty minutes, no deck. You'll leave with a sample target list matched to your ICP, a view of what your first fourteen days would look like, and a straight answer on whether outbound suits your offer, including if that answer is no.",
  primary: 'Book your strategy call',
  secondary: { label: 'More from the blog', href: '/blog' },
}

function Block({ b }: { b: BlogBlock }) {
  if ('h2' in b) return <h2 className="pt-6 text-[clamp(1.4rem,2.2vw,1.8rem)]">{b.h2}</h2>
  if ('h3' in b) return <h3 className="pt-2 text-[1.2rem] font-semibold">{b.h3}</h3>
  if ('p' in b)
    return (
      <p>
        <RichText text={b.p} />
      </p>
    )
  if ('note' in b)
    return (
      <p className="rounded-card border border-line bg-surface p-5 text-ink">
        <RichText text={b.note} />
      </p>
    )
  const List = 'ol' in b ? 'ol' : 'ul'
  const items = 'ol' in b ? b.ol : b.ul
  return (
    <List className={`space-y-2.5 pl-6 ${List === 'ol' ? 'list-decimal' : 'list-disc'}`}>
      {items.map((it) => (
        <li key={it.slice(0, 40)} className="pl-1">
          <RichText text={it} />
        </li>
      ))}
    </List>
  )
}

export function Byline({ post }: { post: BlogPost }) {
  return (
    <div className="flex items-center gap-3 text-[0.9rem] text-ink-soft">
      {founder.photo ? (
        <Image
          src={founder.photo}
          alt={founder.name}
          width={40}
          height={40}
          priority
          className="size-10 rounded-full object-cover"
        />
      ) : null}
      <p>
        By{' '}
        <Link href="/about" rel="author" className="font-semibold text-ink hover:text-green-deep">
          {founder.name}
        </Link>
        , {founder.role}
        <span className="block text-[0.82rem] text-subtle">
          <time dateTime={post.published}>{formatDate(post.published)}</time>
          {post.updated ? (
            <>
              {' '}
              · Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
            </>
          ) : null}{' '}
          · {readingMinutes(post)} min read
        </span>
      </p>
    </div>
  )
}

/** Article layout: one H1, takeaways first, body, FAQ, sources, related pages, CTA. */
export function PostView({ post }: { post: BlogPost }) {
  return (
    <>
      <article aria-labelledby="page-title" className="relative bg-paper pt-14 pb-16 sm:pt-20">
        <div aria-hidden="true" className="grid-texture" />
        <Container className="relative max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-[0.85rem] text-subtle">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>{' '}
            <span aria-hidden="true">/</span>{' '}
            <Link href="/blog" className="hover:text-ink">
              Blog
            </Link>
          </nav>
          <Eyebrow>{post.tags.join(' · ')}</Eyebrow>
          <h1 id="page-title" className="t-h2">
            {post.h1}
          </h1>
          <div className="mt-6">
            <Byline post={post} />
          </div>

          <section
            aria-labelledby="takeaways"
            className="mt-10 rounded-card border border-line bg-surface p-6"
          >
            <h2 id="takeaways" className="text-[1.1rem]">
              Key takeaways
            </h2>
            <ul className="mt-4 space-y-3 text-[1rem] text-ink-soft">
              {post.takeaways.map((t) => (
                <li key={t.slice(0, 40)} className="grid grid-cols-[1.5rem_1fr] gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-1 grid size-5 place-items-center rounded-full bg-ink text-mint"
                  >
                    <Icon name="check" className="size-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-10 space-y-5 text-[1.05rem] leading-relaxed text-ink-soft [&_h2]:text-ink [&_h3]:text-ink">
            {post.body.map((b, i) => (
              <Block key={i} b={b} />
            ))}
          </div>

          <section aria-labelledby="post-faq" className="mt-14">
            <h2 id="post-faq" className="text-[clamp(1.4rem,2.2vw,1.8rem)]">
              Questions
            </h2>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {post.faq.map((f) => (
                <div key={f.q} className="py-5">
                  <h3 className="text-[1.05rem] font-semibold tracking-[-0.015em]">{f.q}</h3>
                  {f.a.map((p) => (
                    <p key={p.slice(0, 32)} className="mt-2 text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="post-sources" className="mt-14">
            <h2 id="post-sources" className="text-[1.25rem]">
              Sources
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-[0.95rem] text-ink-soft">
              {post.sources.map((s) => (
                <li key={s.url} className="pl-1">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener"
                    className="text-green-deep underline underline-offset-4"
                  >
                    {s.label}
                  </a>
                  , {s.publisher}
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="post-related" className="mt-14">
            <h2 id="post-related" className="text-[1.25rem]">
              Related
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {post.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-[0.95rem] hover:border-green hover:text-green-deep"
                  >
                    {r.label} <Icon name="arrowRight" className="size-3.5" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <BookCallButton>Book a strategy call</BookCallButton>
            </div>
          </section>
        </Container>
      </article>
      <FinalCta {...cta} />
    </>
  )
}
