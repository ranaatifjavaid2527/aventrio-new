'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState, type FormEvent, type MouseEvent } from 'react'
import { lead } from '@/content/lead'
import { Icon } from '@/components/ui/Icon'
// Booking config and date helpers come from modules imported up here, never from
// constants declared later in this file (that ordering bug broke the static version).
import { openBookingModal, upcomingWeekdays, type BookingDay } from '@/lib/booking'
import { keys, session, storage } from '@/lib/storage'

const MIN_DELAY_MS = 10_000
const MAX_DELAY_MS = 20_000
const QUIET_MS = 4 * 24 * 60 * 60 * 1000
const CLOSE_AFTER_SUCCESS_MS = 3000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type Phase = 'hidden' | 'open' | 'done'

/**
 * Re-measures the cookie banner at the moment the bar appears, so the CSS that
 * lifts the bar above it always works from the banner's current height.
 */
function syncCookieOffset() {
  const banner = document.querySelector<HTMLElement>('[data-cookie-banner]')
  if (banner) {
    document.documentElement.style.setProperty(
      '--cookie-h',
      `${banner.getBoundingClientRect().height}px`,
    )
  }
}

function quiet() {
  const until = Number(storage.get(keys.barQuietUntil) ?? 0)
  return Number.isFinite(until) && until > Date.now()
}

/**
 * Spotlight-style bar: capture an email, or pick one of the next five weekdays.
 *
 * Shows once per session at a random moment between 10 and 20 seconds. After a
 * dismiss, a submit or a date click it stays away for 4 days. It never waits for
 * the cookie banner: both can be visible, and CSS lifts the bar above the
 * banner while the banner is open.
 */
export function LeadBar() {
  const pathname = usePathname()
  const [phase, setPhase] = useState<Phase>('hidden')
  const [days, setDays] = useState<BookingDay[]>([])
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const subId = useId()

  // Schedule once per page load. Gated only on session, quiet period and route.
  useEffect(() => {
    if (pathname === '/book') return
    if (session.get(keys.barSeenThisSession) || quiet()) return
    const delay = MIN_DELAY_MS + Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS)
    const t = window.setTimeout(() => {
      if (session.get(keys.barSeenThisSession) || quiet()) return
      session.set(keys.barSeenThisSession, '1')
      console.info(
        `[lead-bar] shown after ${(performance.now() / 1000).toFixed(1)}s (scheduled ${(delay / 1000).toFixed(1)}s)`,
      )
      syncCookieOffset()
      setDays(upcomingWeekdays(5))
      setPhase('open')
    }, delay)
    return () => window.clearTimeout(t)
    // Deliberately scheduled once per mount, not on every route change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function close() {
    storage.set(keys.barQuietUntil, String(Date.now() + QUIET_MS))
    setPhase('hidden')
  }

  // Escape and click outside both dismiss
  useEffect(() => {
    if (phase === 'hidden') return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    const onPointer = (e: PointerEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) close()
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [phase])

  useEffect(() => {
    if (phase !== 'done') return
    const t = window.setTimeout(() => setPhase('hidden'), CLOSE_AFTER_SUCCESS_MS)
    return () => window.clearTimeout(t)
  }, [phase])

  if (phase === 'hidden') return null

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = String(form.get('email') ?? '').trim()
    if (!EMAIL_RE.test(email)) {
      setError(lead.bar.invalid)
      return
    }
    setError('')
    setSending(true)
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email,
          company_website: String(form.get('company_website') ?? ''),
          // Time on page; the server rejects anything implausibly fast
          elapsedMs: Math.round(performance.now()),
          page: pathname,
        }),
      })
      if (res.ok) {
        storage.set(keys.knownEmail, email)
        storage.set(keys.barQuietUntil, String(Date.now() + QUIET_MS))
        setPhase('done')
        return
      }
      setError(
        res.status === 400
          ? lead.bar.invalid
          : res.status === 429
            ? lead.errors.rateLimited
            : lead.errors.generic,
      )
    } catch {
      setError(lead.errors.generic)
    } finally {
      setSending(false)
    }
  }

  function onPick(e: MouseEvent<HTMLAnchorElement>, day: BookingDay) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      close()
      return
    }
    e.preventDefault()
    close()
    // If the embed cannot load, fall back to the real Cal.com URL for that day
    openBookingModal({ date: day.date, month: day.month }).catch(() =>
      window.location.assign(day.href),
    )
  }

  return (
    <div
      ref={barRef}
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      aria-describedby={subId}
      className="lead-bar on-ink"
    >
      {phase === 'done' ? (
        <p role="status" className="px-4 py-5 text-center text-[0.85rem] font-semibold text-on-ink">
          {lead.bar.done}
        </p>
      ) : (
        <>
          <form onSubmit={onSubmit} noValidate className="flex items-center gap-2.5 px-3.5 py-3">
            <span aria-hidden="true" className="live-dot shrink-0" />
            <label htmlFor="lead-bar-email" className="sr-only">
              {lead.label}
            </label>
            <input
              id="lead-bar-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={lead.bar.placeholder}
              aria-invalid={error ? true : undefined}
              aria-describedby={subId}
              onInput={() => error && setError('')}
              className="h-[30px] min-w-0 flex-1 bg-transparent text-[0.9rem] text-on-ink placeholder:text-on-ink-faint focus:outline-none"
            />
            {/* Honeypot: invisible to people and assistive tech */}
            <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
              <label htmlFor="lead-bar-website">Company website</label>
              <input
                id="lead-bar-website"
                name="company_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              aria-label={lead.bar.send}
              className="grid size-[30px] shrink-0 place-items-center rounded-[9px] bg-green text-on-ink transition-[background-color,transform] duration-200 hover:bg-green-deep active:scale-95 disabled:opacity-60"
            >
              <Icon name="arrowUp" className="size-4" />
            </button>
          </form>

          <div className="border-t border-line-ink px-3.5 pt-2.5 pb-3">
            <p className="mb-2 flex items-center gap-2.5 text-[0.66rem] tracking-[0.06em] text-on-ink-faint uppercase">
              <span aria-hidden="true" className="h-px flex-1 bg-line-ink" />
              {lead.bar.divider}
              <span aria-hidden="true" className="h-px flex-1 bg-line-ink" />
            </p>
            <ul className="grid grid-cols-5 gap-1.5">
              {days.map((d) => (
                <li key={d.date}>
                  <a
                    href={d.href}
                    onClick={(e) => onPick(e, d)}
                    aria-label={lead.bar.pillLabel(d.label)}
                    data-date={d.date}
                    className="lead-pill"
                  >
                    <span className="block text-[0.62rem] text-on-ink-soft">{d.weekday}</span>
                    <span className="block text-[0.95rem] font-semibold tabular-nums">{d.day}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 border-t border-line-ink px-3.5 py-2.5">
            <div className="min-w-0 flex-1">
              <p
                id={titleId}
                className="text-[0.78rem] leading-snug font-semibold tracking-[-0.01em]"
              >
                {lead.title}
              </p>
              <p
                id={subId}
                role={error ? 'alert' : undefined}
                className={`mt-0.5 text-[0.68rem] ${error ? 'text-on-ink' : 'text-on-ink-faint'}`}
              >
                {error || lead.bar.sub}
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              className="shrink-0 rounded-[9px] border border-line-ink px-2.5 py-1.5 text-[0.7rem] text-on-ink-soft transition-colors hover:border-on-ink-faint hover:text-on-ink"
            >
              {lead.bar.dismiss}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
