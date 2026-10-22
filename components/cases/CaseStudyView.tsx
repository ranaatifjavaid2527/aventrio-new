import Link from 'next/link'
import { caseStudies, type CaseStudy } from '@/content/caseStudies'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { FinalCta } from '@/components/sections/FinalCta'
import { CaseCard, ServiceBadge } from './CaseCard'

const cta = {
  title: 'Which part of this looks like your business?',
  body: "Thirty minutes, no deck. You'll leave with a sample target list matched to your ICP, a view of what your first fourteen days would look like, and a straight answer on whether outbound suits your offer, including if that answer is no.",
  primary: 'Book your strategy call',
  secondary: { label: 'All case studies', href: '/case-studies' },
}

const chapters = [
  { id: 'before', label: 'Before' },
  { id: 'work', label: 'What we did' },
  { id: 'results', label: 'Results' },
  { id: 'honest', label: 'The honest part' },
] as const

type ChapterProps = { index: number; id: string; children: string; accent?: boolean }

function ChapterHeading({ index, id, children, accent }: ChapterProps) {
  return (
    <>
      <p className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-subtle uppercase">
        {accent ? <span aria-hidden="true" className="size-2 rounded-full bg-coral" /> : null}
        {String(index + 1).padStart(2, '0')}
      </p>
      <h2 id={id} className="mt-2 scroll-mt-28 text-[clamp(1.5rem,2.4vw,2rem)]">
        {children}
      </h2>
    </>
  )
}

const Paragraphs = ({ items }: { items: string[] }) => (
  <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-ink-soft">
    {items.map((p) => (
      <p key={p.slice(0, 40)}>{p}</p>
    ))}
  </div>
)

/** Case study page: dark hero with the three figures, a chaptered body, the honest part, more cases. */
export function CaseStudyView({ c }: { c: CaseStudy }) {
  const more = caseStudies.filter((x) => x.slug !== c.slug).slice(0, 2)
  return (
    <>
      {c.sample ? (
        <p className="bg-ink px-4 py-2 text-center text-[0.85rem] font-medium text-on-ink">
          Design sample. Not a real engagement. Local preview only.
        </p>
      ) : null}

      <section
        aria-labelledby="page-title"
        className="on-ink relative overflow-hidden bg-ink pt-12 pb-14 text-on-ink sm:pt-16"
      >
        <div aria-hidden="true" className="grid-texture" data-tone="ink" />
        <div
          aria-hidden="true"
          className="absolute -top-40 right-[-10%] size-[520px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--mint)_18%,transparent),transparent)]"
        />
        <Container className="relative max-w-5xl">
          <nav aria-label="Breadcrumb" className="text-[0.85rem] text-on-ink-faint">
            <Link href="/" className="hover:text-on-ink">
              Home
            </Link>{' '}
            <span aria-hidden="true">/</span>{' '}
            <Link href="/case-studies" className="hover:text-on-ink">
              Case studies
            </Link>
          </nav>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ServiceBadge service={c.service} tone="ink" />
            <span className="rounded-full border border-line-ink px-3 py-1 font-mono text-[0.66rem] tracking-[0.1em] text-on-ink-soft uppercase">
              Name withheld
            </span>
          </div>
          <p className="mt-6 font-mono text-[0.72rem] tracking-[0.1em] text-on-ink-faint uppercase">
            {c.sector} · {c.period}
          </p>
          <h1 id="page-title" className="t-h2 mt-4 max-w-4xl text-balance">
            {c.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-on-ink-soft">{c.summary}</p>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-[22px] border border-line-ink bg-line-ink sm:grid-cols-3">
            {c.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse gap-2 bg-ink p-6 sm:p-7">
                <dt className="font-mono text-[0.68rem] tracking-[0.1em] text-on-ink-faint uppercase">
                  {m.label}
                </dt>
                <dd className="text-[clamp(2.2rem,4.6vw,3.6rem)] leading-none font-semibold tracking-[-0.04em] tabular-nums">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 flex items-start gap-2 text-[0.85rem] text-on-ink-faint">
            <Icon name="check" className="mt-0.5 size-3.5 shrink-0 text-mint" />
            <span>{c.proof}</span>
          </p>
        </Container>
      </section>

      <section className="bg-paper py-[calc(var(--section-y)*0.75)]">
        <Container className="max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-16">
            <nav aria-label="On this page" className="hidden lg:block">
              <div className="sticky top-28">
                <p className="font-mono text-[0.68rem] tracking-[0.12em] text-subtle uppercase">
                  On this page
                </p>
                <ol className="mt-4 space-y-1 border-l border-line">
                  {chapters.map((ch, i) => (
                    <li key={ch.id}>
                      <a
                        href={`#${ch.id}`}
                        className="-ml-px flex gap-3 border-l border-transparent py-1.5 pl-4 text-[0.9rem] text-ink-soft transition-colors hover:border-green hover:text-ink"
                      >
                        <span className="font-mono text-[0.7rem] text-subtle tabular-nums">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {ch.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <div className="max-w-[680px] space-y-16">
              <Reveal>
                <ChapterHeading index={0} id="before">
                  Before
                </ChapterHeading>
                <Paragraphs items={c.before} />
              </Reveal>

              <Reveal>
                <ChapterHeading index={1} id="work">
                  What we did
                </ChapterHeading>
                <ol className="mt-6 space-y-4">
                  {c.whatWeDid.map((s, i) => (
                    <li
                      key={s.slice(0, 40)}
                      className="grid grid-cols-[2.25rem_1fr] gap-3 text-[1.05rem] leading-relaxed text-ink-soft"
                    >
                      <span
                        aria-hidden="true"
                        className="grid size-8 place-items-center rounded-full bg-ink font-mono text-[0.72rem] text-mint tabular-nums"
                      >
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{s}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal>
                <ChapterHeading index={2} id="results">
                  Results
                </ChapterHeading>
                <Paragraphs items={c.results} />
              </Reveal>

              <Reveal>
                <div className="rounded-[22px] border border-line bg-surface p-6 sm:p-8">
                  <ChapterHeading index={3} id="honest" accent>
                    The honest part
                  </ChapterHeading>
                  <Paragraphs items={c.honest} />
                </div>
              </Reveal>

              {c.quote ? (
                <Reveal>
                  <figure className="border-l-2 border-green pl-6">
                    <blockquote className="text-[clamp(1.25rem,2vw,1.55rem)] leading-snug font-medium tracking-[-0.02em] text-ink">
                      <p>&ldquo;{c.quote.text}&rdquo;</p>
                    </blockquote>
                    <figcaption className="mt-4 font-mono text-[0.72rem] tracking-[0.1em] text-subtle uppercase">
                      {c.quote.role}, name withheld
                    </figcaption>
                  </figure>
                </Reveal>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {more.length ? (
        <section
          aria-labelledby="more-cases"
          className="border-t border-line bg-paper py-[calc(var(--section-y)*0.7)]"
        >
          <Container className="max-w-5xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="more-cases" className="text-[clamp(1.5rem,2.4vw,2rem)]">
                More case studies
              </h2>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-green-deep"
              >
                See all <Icon name="arrowRight" className="size-3.5" />
              </Link>
            </div>
            <ul className="mt-8 grid gap-5 md:grid-cols-2">
              {more.map((x) => (
                <li key={x.slug}>
                  <CaseCard c={x} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <FinalCta {...cta} />
    </>
  )
}
