import Link from 'next/link'
import { comparison } from '@/content/home'
import type { SeoPage } from '@/content/seoPages'
import { BookCallButton } from '@/components/ui/BookCallButton'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { FinalCta } from './FinalCta'

const cta = {
  title: 'Find out whether outbound is worth it for you.',
  body: 'Thirty minutes, no deck. You’ll leave with a sample target list matched to your ICP, a view of what your first fourteen days would look like, and a straight answer on whether outbound suits your offer, including if that answer is no.',
  primary: 'Book your strategy call',
  secondary: { label: 'See how it runs', href: '/#process' },
}

function ComparisonTable() {
  const last = comparison.columns.length - 1
  return (
    <div
      className="overflow-x-auto rounded-card border border-line"
      tabIndex={0}
      role="region"
      aria-label="Comparison table, scrolls sideways"
    >
      <table className="w-full min-w-[640px] border-collapse text-left text-[0.95rem]">
        <thead>
          <tr className="border-b border-line bg-surface">
            <td className="p-4" />
            {comparison.columns.map((c, i) => (
              <th
                key={c}
                scope="col"
                className={`p-4 font-semibold ${i === last ? 'text-green-deep' : ''}`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row) => (
            <tr key={row.label} className="border-b border-line last:border-0">
              <th scope="row" className="p-4 align-top text-[0.88rem] font-medium text-ink">
                {row.label}
              </th>
              {row.values.map((v, i) => (
                <td
                  key={i}
                  className={`p-4 align-top ${i === last ? 'text-ink' : 'text-ink-soft'}`}
                >
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Shared layout for keyword landing pages: one H1, sections as H2, FAQ, related links, CTA. */
export function SeoPageView({ page }: { page: SeoPage }) {
  return (
    <>
      <section
        aria-labelledby="page-title"
        className="relative overflow-hidden bg-paper pt-14 pb-16 sm:pt-20"
      >
        <div aria-hidden="true" className="grid-texture" />
        <Container className="relative max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-[0.85rem] text-subtle">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>{' '}
            <span aria-hidden="true">/</span> <span>{page.eyebrow}</span>
          </nav>
          <Eyebrow>{page.eyebrow}</Eyebrow>
          <h1 id="page-title" className="t-h2">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-ink-soft">{page.lede}</p>
          <div className="mt-8">
            <BookCallButton>Book a strategy call</BookCallButton>
          </div>
        </Container>
      </section>

      <Section className="pt-0">
        <div className="mx-auto max-w-4xl space-y-14">
          {page.sections.map((s) => (
            <Reveal key={s.heading}>
              <h2 className="text-[clamp(1.5rem,2.4vw,2rem)]">{s.heading}</h2>
              <div className="mt-5 space-y-4 text-[1.02rem] text-ink-soft">
                {s.body?.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
                {s.bullets ? (
                  <ul className="space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="grid grid-cols-[1.5rem_1fr] gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-1 grid size-5 place-items-center rounded-full bg-ink text-mint"
                        >
                          <Icon name="check" className="size-3" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {s.comparisonTable ? <ComparisonTable /> : null}
              </div>
            </Reveal>
          ))}

          <Reveal>
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)]">Questions buyers ask</h2>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {page.faq.map((f) => (
                <details key={f.q} className="group py-1">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 py-4 hover:text-green-deep">
                    <h3 className="text-[1.05rem] font-semibold tracking-[-0.015em]">{f.q}</h3>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-line text-ink-soft transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="space-y-3 pr-10 pb-5 text-ink-soft">
                    {f.a.map((p) => (
                      <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-[1.25rem]">Related</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {page.related.map((r) => (
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
          </Reveal>
        </div>
      </Section>

      <FinalCta {...cta} />
    </>
  )
}
