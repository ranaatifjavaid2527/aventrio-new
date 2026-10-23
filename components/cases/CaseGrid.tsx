'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { CaseStudy } from '@/content/caseStudies'
import { Icon } from '@/components/ui/Icon'
import { CaseCard } from './CaseCard'

const ALL = 'All'

/**
 * Filterable grid. Filters are toggle buttons (aria-pressed) with counts, and a
 * polite live region announces how many cases are showing. The first case is
 * featured wide when nothing is filtered and there are enough cases to fill a row.
 */
export function CaseGrid({ cases }: { cases: CaseStudy[] }) {
  const [active, setActive] = useState<string>(ALL)
  const services = [...new Set(cases.map((c) => c.service))]
  const shown = active === ALL ? cases : cases.filter((c) => c.service === active)
  const featureFirst = active === ALL && shown.length >= 3
  const options = [
    { label: ALL, count: cases.length },
    ...services.map((s) => ({ label: s, count: cases.filter((c) => c.service === s).length })),
  ]

  return (
    <>
      {services.length > 1 ? (
        <div
          role="group"
          aria-label="Filter case studies by service"
          className="-mx-4 flex [scrollbar-width:none] gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {options.map((o) => {
            const on = o.label === active
            return (
              <button
                key={o.label}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(o.label)}
                className={`inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-[0.88rem] font-medium whitespace-nowrap transition-[color,background-color,border-color,transform] duration-150 active:scale-[0.97] ${
                  on
                    ? 'border-ink bg-ink text-on-ink'
                    : 'border-line-strong bg-paper text-ink-soft hover:border-ink hover:text-ink'
                }`}
              >
                {o.label}
                <span
                  className={`rounded-full px-1.5 font-mono text-[0.66rem] tabular-nums ${on ? 'bg-on-ink/15 text-on-ink' : 'bg-surface-2 text-subtle'}`}
                >
                  {o.count}
                </span>
              </button>
            )
          })}
        </div>
      ) : null}
      <p aria-live="polite" className="sr-only">
        Showing {shown.length} {shown.length === 1 ? 'case study' : 'case studies'}
      </p>

      <ul key={active} className="case-grid mt-8 grid gap-5 md:grid-cols-2">
        {shown.map((c, i) => (
          <li key={c.slug} className={featureFirst && i === 0 ? 'md:col-span-2' : ''}>
            <CaseCard c={c} featured={featureFirst && i === 0} />
          </li>
        ))}
        <li>
          <div className="relative flex h-full min-h-[280px] flex-col justify-between rounded-[22px] border border-dashed border-line-strong bg-surface/60 p-6 sm:p-7">
            <div>
              <p className="font-mono text-[0.7rem] tracking-[0.1em] text-subtle uppercase">
                Your company here
              </p>
              <h2 className="mt-3 text-[1.3rem] leading-[1.2] font-semibold tracking-[-0.025em]">
                Not sure which case is closest to yours?
              </h2>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft">
                Thirty minutes, no deck. Tell us what you sell and who buys it, and we will tell you
                which engagement looks most like yours, and whether outbound fits at all.
              </p>
            </div>
            <Link
              href="/book"
              className="group mt-7 inline-flex items-center gap-2 self-start rounded-full bg-ink px-5 py-2.5 text-[0.92rem] font-medium text-on-ink transition-colors hover:bg-green-deep"
            >
              Book a strategy call
              <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                <Icon name="arrowRight" className="size-3.5" />
              </span>
            </Link>
          </div>
        </li>
      </ul>
    </>
  )
}
