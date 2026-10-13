'use client'

import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { heroTabs } from '@/content/home'
import { site } from '@/content/site'
import { ClutchWidget } from '@/components/ui/ClutchWidget'
import { Icon } from '@/components/ui/Icon'

const ADVANCE_MS = 7000

type TabKey = 'board' | 'brief' | 'channels' | 'clutch'

const clutchReady = Boolean(site.clutch.profileUrl && site.clutch.companyId)
const TABS: TabKey[] = clutchReady
  ? ['board', 'brief', 'channels', 'clutch']
  : ['board', 'brief', 'channels']

const stageTone: Record<string, string> = {
  held: 'bg-mint text-ink border-transparent font-semibold',
  booked: 'border-mint/50 text-mint',
  replied: 'border-line-ink text-on-ink',
  sequenced: 'border-line-ink text-on-ink-faint',
}

/**
 * Hero composition: an ARIA tablist over example views of the service.
 * Auto-advances, pauses on hover, on keyboard focus, with the pause button,
 * and never auto-advances for visitors who prefer reduced motion.
 */
export function HeroTabs() {
  const baseId = useId()
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [hoverPaused, setHoverPaused] = useState(false)
  const [focusPaused, setFocusPaused] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const rootRef = useRef<HTMLDivElement>(null)

  const paused = Boolean(reduce) || hoverPaused || focusPaused || userPaused

  useEffect(() => {
    if (paused) return
    const t = window.setTimeout(() => setActive((a) => (a + 1) % TABS.length), ADVANCE_MS)
    return () => window.clearTimeout(t)
  }, [active, paused])

  const select = useCallback((i: number, focus = false) => {
    const next = (i + TABS.length) % TABS.length
    setActive(next)
    if (focus) tabRefs.current[next]?.focus()
  }, [])

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const map: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: TABS.length - 1,
    }
    const target = map[e.key]
    if (target === undefined) return
    e.preventDefault()
    select(target, true)
  }

  // Layered depth: the floating cards drift at different rates as the hero scrolls away
  const { scrollYProgress } = useScroll({ target: rootRef, offset: ['start start', 'end start'] })
  const driftA = useTransform(scrollYProgress, [0, 1], [0, -60])
  const driftB = useTransform(scrollYProgress, [0, 1], [0, -110])

  const id = (k: TabKey, part: 'tab' | 'panel') => `${baseId}-${part}-${k}`

  return (
    <div
      ref={rootRef}
      className="relative"
      onPointerEnter={() => setHoverPaused(true)}
      onPointerLeave={() => setHoverPaused(false)}
      onFocus={() => setFocusPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocusPaused(false)
      }}
    >
      {/* Soft depth glow behind the window */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-[48px] bg-[radial-gradient(60%_60%_at_60%_40%,color-mix(in_oklab,var(--mint)_22%,transparent),transparent_70%)] blur-2xl"
      />

      <div className="mb-3 flex items-center justify-between gap-3">
        <div
          role="tablist"
          aria-label="What the service looks like"
          onKeyDown={onKeyDown}
          className="flex min-w-0 [scrollbar-width:none] gap-1 overflow-x-auto rounded-full border border-line bg-paper p-1"
        >
          {TABS.map((k, i) => {
            const selected = i === active
            return (
              <button
                key={k}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                id={id(k, 'tab')}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={id(k, 'panel')}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                className={`relative h-9 shrink-0 overflow-hidden rounded-full px-3.5 text-[0.82rem] font-medium whitespace-nowrap transition-colors sm:px-4 ${
                  selected ? 'bg-ink text-on-ink' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {heroTabs[k].tab}
                {selected && !paused ? (
                  <span
                    aria-hidden="true"
                    key={`p-${active}`}
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left animate-[tab-progress_7s_linear_forwards] bg-mint"
                  />
                ) : null}
              </button>
            )
          })}
        </div>
        {!reduce ? (
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={userPaused ? 'Resume rotating views' : 'Pause rotating views'}
            className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-paper/80 text-xs text-ink-soft hover:text-ink"
          >
            <Icon name={userPaused ? 'play' : 'pause'} className="size-3.5" />
          </button>
        ) : null}
      </div>

      <div className="on-ink relative overflow-hidden rounded-[22px] border border-line-ink bg-ink text-on-ink shadow-[0_50px_100px_-40px_var(--ink)]">
        <div aria-hidden="true" className="grid-texture" data-tone="ink" />
        <div className="relative grid">
          {TABS.map((k, i) => {
            const selected = i === active
            return (
              <div
                key={k}
                id={id(k, 'panel')}
                role="tabpanel"
                aria-labelledby={id(k, 'tab')}
                tabIndex={selected ? 0 : -1}
                aria-hidden={!selected}
                inert={!selected}
                className={`col-start-1 row-start-1 p-4 transition-[opacity,transform] duration-500 ease-out sm:p-5 ${
                  selected ? 'opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
                }`}
              >
                <Panel k={k} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Floating cards: decorative depth, hidden from assistive tech */}
      <m.div
        aria-hidden="true"
        style={{ y: driftA }}
        className="absolute -bottom-8 -left-6 hidden w-60 rounded-2xl border border-line bg-paper p-3.5 text-ink shadow-[0_24px_50px_-24px_var(--ink)] lg:block"
      >
        <div className="flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-md bg-green font-mono text-[0.6rem] font-semibold text-on-ink">
            in
          </span>
          <span className="text-[0.8rem] font-semibold">Reply · VP Engineering</span>
          <span className="ml-auto font-mono text-[0.62rem] text-subtle">12m</span>
        </div>
        <p className="mt-2 text-[0.78rem] leading-snug text-ink-soft">
          Accepted <b className="text-ink">Tuesday 11:00</b>. Brief sent to your calendar.
        </p>
      </m.div>
      <m.div
        aria-hidden="true"
        style={{ y: driftB }}
        className="absolute top-[42%] -right-6 hidden rounded-2xl border border-line bg-paper px-3.5 py-2.5 text-ink shadow-[0_24px_50px_-24px_var(--ink)] lg:block"
      >
        <p className="font-mono text-[0.62rem] tracking-[0.1em] text-subtle uppercase">
          Your calendar
        </p>
        <p className="text-[0.85rem] font-semibold">2 meetings added</p>
      </m.div>
    </div>
  )
}

function WindowHead({ title }: { title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex gap-1.5" aria-hidden="true">
        <i className="size-2.5 rounded-full bg-on-ink-faint/40" />
        <i className="size-2.5 rounded-full bg-on-ink-faint/40" />
        <i className="size-2.5 rounded-full bg-on-ink-faint/40" />
      </span>
      <span className="t-eyebrow text-[0.66rem] text-on-ink-faint">{title}</span>
      <span className="ml-auto inline-flex items-center gap-2 rounded-full border border-line-ink px-2.5 py-1 font-mono text-[0.62rem] text-on-ink-soft">
        <span className="live-dot" aria-hidden="true" />
        {heroTabs.exampleLabel}
      </span>
    </div>
  )
}

function Panel({ k }: { k: TabKey }) {
  if (k === 'board') {
    const b = heroTabs.board
    return (
      <>
        <WindowHead title={b.title} />
        <div className="grid grid-cols-[1.5fr_0.8fr_0.8fr] gap-3 px-2 pb-2 font-mono text-[0.6rem] tracking-[0.13em] text-on-ink-faint uppercase">
          {b.columns.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <ul className="space-y-1.5">
          {b.rows.map((r) => (
            <li
              key={r.account}
              className="grid grid-cols-[1.5fr_0.8fr_0.8fr] items-center gap-3 rounded-xl border border-line-ink bg-ink-2/60 px-2 py-2.5 sm:px-3"
            >
              <span className="min-w-0">
                <span className="block truncate text-[0.86rem] font-semibold">{r.account}</span>
                <span className="block truncate text-[0.74rem] text-on-ink-faint">
                  {r.contact} · {r.place}
                </span>
              </span>
              <span className="font-mono text-[0.68rem] text-on-ink-soft">{r.channel}</span>
              <span>
                <span
                  className={`inline-block rounded-full border px-2.5 py-1 font-mono text-[0.64rem] ${stageTone[r.tone] ?? ''}`}
                >
                  {r.stage}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </>
    )
  }

  if (k === 'brief') {
    const b = heroTabs.brief
    return (
      <>
        <WindowHead title={b.title} />
        <div className="rounded-xl border border-line-ink bg-ink-2/60 p-4">
          <p className="font-mono text-[0.7rem] text-mint">{b.when}</p>
          <dl className="mt-3 divide-y divide-line-ink">
            {b.fields.map((f) => (
              <div
                key={f.label}
                className="grid grid-cols-[8.5rem_1fr] gap-3 py-2.5 text-[0.84rem]"
              >
                <dt className="text-on-ink-faint">{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="mt-3 font-mono text-[0.66rem] text-on-ink-faint">{b.footer}</p>
      </>
    )
  }

  if (k === 'channels') {
    const c = heroTabs.channels
    return (
      <>
        <WindowHead title={c.title} />
        <ul className="space-y-2">
          {c.items.map((it) => (
            <li key={it.name} className="rounded-xl border border-line-ink bg-ink-2/60 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[0.95rem] font-semibold">{it.name}</span>
                <span className="inline-flex items-center gap-2 font-mono text-[0.64rem] text-mint">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-mint" />
                  {it.status}
                </span>
              </div>
              <p className="mt-1.5 text-[0.84rem] text-on-ink-soft">{it.detail}</p>
            </li>
          ))}
        </ul>
        <p className="mt-3 font-mono text-[0.66rem] text-on-ink-faint">{c.footer}</p>
      </>
    )
  }

  const c = heroTabs.clutch
  return (
    <>
      <WindowHead title={c.title} />
      <div className="rounded-xl bg-paper p-4 text-ink">
        <ClutchWidget />
      </div>
      <p className="mt-4 text-[0.9rem] text-on-ink-soft">{c.body}</p>
      {site.clutch.profileUrl ? (
        <a
          href={site.clutch.profileUrl}
          target="_blank"
          rel="noopener"
          className="mt-3 inline-flex items-center gap-2 text-[0.92rem] font-medium text-mint underline-offset-4 hover:underline"
        >
          {c.cta} <Icon name="arrowUpRight" />
        </a>
      ) : null}
    </>
  )
}
