import { book } from '@/content/book'
import { site } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { JsonLd } from '@/components/ui/JsonLd'
import { BookingInline } from '@/components/sections/BookingInline'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbLd, graph, webPageLd } from '@/lib/jsonld'

const title = 'Book a Strategy Call'
const description =
  'Book a 30 minute call with Aventrio. No deck: a sample target list for your ICP, your first fourteen days, and a straight answer on whether outbound fits.'

export const metadata = pageMetadata({ title, description, path: '/book' })

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageLd('ContactPage', '/book', title, description),
          breadcrumbLd([{ name: 'Book a call', path: '/book' }]),
        )}
      />
      <section
        aria-labelledby="book-title"
        className="relative overflow-hidden bg-paper pt-12 pb-[var(--section-y)] sm:pt-16"
      >
        <div aria-hidden="true" className="grid-texture" />
        <Container className="relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{book.eyebrow}</Eyebrow>
            <h1 id="book-title" className="t-h2">
              {book.title}
            </h1>
            <p className="mt-6 text-lg text-ink-soft">{book.lede}</p>
            <h2 className="mt-10 text-[1.1rem] tracking-[-0.02em]">{book.expectTitle}</h2>
            <ol className="mt-4 space-y-3">
              {book.expect.map((e, i) => (
                <li
                  key={e}
                  className="grid grid-cols-[1.75rem_1fr] gap-3 text-[0.98rem] text-ink-soft"
                >
                  <span className="font-mono text-[0.74rem] text-green-deep">0{i + 1}</span>
                  {e}
                </li>
              ))}
            </ol>
            <p className="mt-8 border-t border-line pt-5 text-[0.9rem] text-subtle">
              {book.questionsNote}
            </p>
            <p className="mt-4 text-[0.9rem] text-ink-soft">
              Prefer email?{' '}
              <a
                href={`mailto:${site.email}`}
                className="font-medium underline underline-offset-2 hover:text-green-deep"
              >
                {site.email}
              </a>
            </p>
          </div>
          <BookingInline />
        </Container>
      </section>
    </>
  )
}
