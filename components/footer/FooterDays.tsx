'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import { openBookingModal, upcomingWeekdays, type BookingDay } from '@/lib/booking'

/**
 * The next five weekdays, each a real booking link. Dates come from the
 * visitor's clock, so the server renders five same-sized placeholders and the
 * real days replace them after hydration without shifting anything.
 */
export function FooterDays() {
  const [days, setDays] = useState<BookingDay[] | null>(null)

  useEffect(() => {
    // Client clock only: computing this on the server would mismatch at midnight
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDays(upcomingWeekdays(5))
  }, [])

  function onPick(e: MouseEvent<HTMLAnchorElement>, d: BookingDay) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    openBookingModal({ date: d.date, month: d.month }).catch(() => window.location.assign(d.href))
  }

  return (
    <ul className="grid grid-cols-5 gap-2" aria-label="Pick a day for a 30 minute call">
      {days
        ? days.map((d) => (
            <li key={d.date}>
              <a
                href={d.href}
                onClick={(e) => onPick(e, d)}
                aria-label={`Book a call on ${d.label}`}
                className="lead-pill py-2.5"
              >
                <span className="block text-[0.66rem] text-on-ink-soft">{d.weekday}</span>
                <span className="block text-[1.15rem] font-semibold tabular-nums">{d.day}</span>
              </a>
            </li>
          ))
        : Array.from({ length: 5 }, (_, i) => (
            <li key={i} aria-hidden="true">
              <span className="lead-pill py-2.5 opacity-40">
                <span className="block text-[0.66rem]">&nbsp;</span>
                <span className="block text-[1.15rem] font-semibold">&nbsp;</span>
              </span>
            </li>
          ))}
    </ul>
  )
}
