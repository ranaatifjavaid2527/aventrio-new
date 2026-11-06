'use client'

import Link from 'next/link'
import { useState } from 'react'
import { heroTabs } from '@/content/home'
import { threeWays } from '@/content/home'
import { Icon } from '@/components/ui/Icon'

const tone = {
  held: 'bg-ink text-on-ink border-transparent',
  booked: 'border-line-strong text-ink',
  replied: 'border-line-strong text-ink-soft',
  sequenced: 'border-line text-subtle',
} as const

function ExampleTag() {
  return (
    <span className="rounded-full border border-line-strong px-3 py-1 font-mono text-[0.68rem] tracking-[0.08em] text-ink-soft uppercase">
      {threeWays.exampleTag}
    </span>
  )
}

function BoardVisual() {
  const b = heroTabs.board
  return (
    <figure className="rounded-card border border-line-strong bg-surface p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[0.72rem] tracking-[0.08em] text-subtle uppercase">
          {b.title}
        </p>
        <ExampleTag />
      </div>
      <ul className="mt-5 divide-y divide-line">
        {b.rows.slice(0, 4).map((r) => (
          <li key={r.account} className="grid grid-cols-[1fr_auto] items-center gap-3 py-3">
            <div>
              <p className="font-medium text-ink">{r.account}</p>
              <p className="text-[0.82rem] text-subtle">
                {r.contact} · {r.place}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden font-mono text-[0.72rem] text-subtle sm:inline">
                {r.channel}
              </span>
              <span
                className={`rounded-full border px-3 py-1 font-mono text-[0.7rem] ${tone[r.tone as keyof typeof tone]}`}
              >
                {r.stage}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </figure>
  )
}

function BriefVisual() {
  const b = heroTabs.brief
  return (
    <figure className="rounded-card border border-line-strong bg-surface p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[0.72rem] tracking-[0.08em] text-subtle uppercase">
          {b.title}
        </p>
        <ExampleTag />
      </div>
      <p className="mt-3 text-[0.9rem] text-ink-soft">{b.when}</p>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2">
        {b.fields.slice(0, 4).map((f) => (
          <div key={f.label} className="rounded-xl border border-line bg-paper p-4">
            <dt className="font-mono text-[0.66rem] tracking-[0.08em] text-subtle uppercase">
              {f.label}
            </dt>
            <dd className="mt-1 text-[0.9rem] text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  )
}

function AuditVisual() {
  const a = threeWays.auditExample
  return (
    <figure className="rounded-card border border-line-strong bg-surface p-5 sm:p-7">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[0.72rem] tracking-[0.08em] text-subtle uppercase">
          {a.title}
        </p>
        <ExampleTag />
      </div>
      <ul className="mt-5 divide-y divide-line">
        {a.rows.map((r) => (
          <li key={r.area} className="grid grid-cols-[1fr_auto] items-center gap-3 py-3">
            <div>
              <p className="font-medium text-ink">{r.area}</p>
              <p className="text-[0.82rem] text-subtle">{r.note}</p>
            </div>
            <span className="rounded-full border border-line-strong px-3 py-1 font-mono text-[0.7rem] text-ink-soft">
              {r.stage}
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="mt-4 text-[0.82rem] text-subtle">{a.footer}</figcaption>
    </figure>
  )
}

const visuals = { sdr: BoardVisual, ae: BriefVisual, audit: AuditVisual } as const

export function ThreeWaysTabs() {
  const [active, setActive] = useState(0)
  const way = threeWays.ways[active]
  if (!way) return null
  const Visual = visuals[way.id as keyof typeof visuals]
  const last = threeWays.ways.length

  return (
    <div>
      <div
        role="tablist"
        aria-label="Ways to work with us"
        className="flex flex-wrap gap-2 rounded-card border border-line bg-surface p-2 sm:inline-flex sm:rounded-full"
      >
        {threeWays.ways.map((w, i) => {
          const on = i === active
          return (
            <button
              key={w.id}
              type="button"
              role="tab"
              id={`way-tab-${w.id}`}
              aria-selected={on}
              aria-controls="way-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') setActive((active + 1) % last)
                if (e.key === 'ArrowLeft') setActive((active - 1 + last) % last)
              }}
              className={`rounded-full px-5 py-2.5 text-[0.95rem] font-medium transition-colors duration-200 ${
                on ? 'bg-ink text-on-ink' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {w.tab}
            </button>
          )
        })}
      </div>

      <div
        id="way-panel"
        role="tabpanel"
        aria-labelledby={`way-tab-${way.id}`}
        className="mt-8 grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14"
      >
        <div>
          <p className="t-eyebrow text-subtle">{way.tag}</p>
          <h3 className="t-h3 mt-4 text-[1.8rem]">{way.title}</h3>
          <p className="mt-4 max-w-[34rem] text-ink-soft">{way.body}</p>
          <ul className="mt-6 space-y-2.5 text-[0.98rem] text-ink">
            {way.points.map((p) => (
              <li key={p} className="flex gap-3">
                <Icon name="check" className="mt-1 size-4 shrink-0 text-green-deep" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={way.cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[0.95rem] font-medium text-on-ink transition-opacity hover:opacity-85"
            >
              {way.cta.label} <Icon name="arrowRight" className="size-3.5" />
            </Link>
            <Link
              href={way.chip.href}
              className="inline-flex items-center gap-2 text-[0.92rem] font-medium text-green-deep underline underline-offset-4"
            >
              {way.chip.label}
            </Link>
          </div>
        </div>
        <Visual />
      </div>
    </div>
  )
}
