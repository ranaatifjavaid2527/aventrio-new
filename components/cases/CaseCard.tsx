import Link from 'next/link'
import type { CaseStudy } from '@/content/caseStudies'
import { Icon } from '@/components/ui/Icon'

type Props = {
  c: CaseStudy
  /** Wide dark card for the lead case on the index */
  featured?: boolean
  headingLevel?: 'h2' | 'h3'
}

export function ServiceBadge({
  service,
  tone = 'paper',
}: {
  service: string
  tone?: 'paper' | 'ink'
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.66rem] tracking-[0.1em] uppercase ${
        tone === 'ink' ? 'border-line-ink text-mint' : 'border-line-strong text-green-deep'
      }`}
    >
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${tone === 'ink' ? 'bg-mint' : 'bg-green'}`}
      />
      {service}
    </span>
  )
}

function Metrics({ c, featured }: { c: CaseStudy; featured: boolean }) {
  return (
    <dl
      className={`grid grid-cols-3 border-y ${featured ? 'divide-x divide-line-ink border-line-ink' : 'divide-x divide-line border-line'}`}
    >
      {c.metrics.map((m) => (
        <div key={m.label} className="flex flex-col-reverse gap-1 px-3 py-4 first:pl-0 last:pr-0">
          <dt
            className={`text-[0.74rem] leading-snug ${featured ? 'text-on-ink-faint' : 'text-subtle'}`}
          >
            {m.label}
          </dt>
          <dd
            className={`font-semibold tracking-[-0.03em] tabular-nums ${
              featured ? 'text-[clamp(1.6rem,3vw,2.4rem)] text-on-ink' : 'text-[1.55rem] text-ink'
            }`}
          >
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

/**
 * One case study as a card. The whole card is clickable through a stretched
 * link on the headline, so there is one link per card for screen readers.
 */
export function CaseCard({ c, featured = false, headingLevel = 'h2' }: Props) {
  const H = headingLevel
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[22px] border p-6 transition-[transform,border-color,box-shadow] duration-500 ease-out focus-within:-translate-y-0.5 hover:-translate-y-0.5 sm:p-7 ${
        featured
          ? 'on-ink border-line-ink bg-ink text-on-ink shadow-[0_50px_100px_-50px_var(--ink)] md:p-9'
          : 'border-line bg-paper hover:border-line-strong hover:shadow-[0_30px_60px_-40px_var(--ink)]'
      }`}
    >
      {featured ? <div aria-hidden="true" className="grid-texture" data-tone="ink" /> : null}
      <div
        className={`relative flex h-full flex-col ${featured ? 'gap-8 lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-12' : ''}`}
      >
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <ServiceBadge service={c.service} tone={featured ? 'ink' : 'paper'} />
            <span
              className={`font-mono text-[0.66rem] tracking-[0.08em] uppercase ${featured ? 'text-on-ink-faint' : 'text-subtle'}`}
            >
              Name withheld
            </span>
          </div>
          <p
            className={`mt-6 font-mono text-[0.7rem] tracking-[0.1em] uppercase ${featured ? 'text-on-ink-faint' : 'text-subtle'}`}
          >
            {c.sector}
          </p>
          <H
            className={`mt-3 font-semibold tracking-[-0.025em] text-balance ${
              featured
                ? 'text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.08]'
                : 'text-[1.3rem] leading-[1.2]'
            }`}
          >
            <Link
              href={`/case-studies/${c.slug}`}
              className="after:absolute after:inset-0 after:rounded-[22px] focus-visible:outline-none"
            >
              {c.headline}
            </Link>
          </H>
          <p
            className={`mt-4 text-[0.98rem] leading-relaxed ${featured ? 'text-on-ink-soft' : 'text-ink-soft'}`}
          >
            {c.summary}
          </p>
        </div>

        <div className={featured ? '' : 'mt-auto pt-7'}>
          <Metrics c={c} featured={featured} />
          <p
            aria-hidden="true"
            className={`mt-5 inline-flex items-center gap-2 text-[0.9rem] font-medium ${featured ? 'text-mint' : 'text-green-deep'}`}
          >
            Read the case
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
              <Icon name="arrowRight" className="size-3.5" />
            </span>
          </p>
        </div>
      </div>
      {/* Visible focus ring for the stretched link */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[22px] ring-green ring-offset-2 ring-offset-paper group-has-[:focus-visible]:ring-2"
      />
    </article>
  )
}
