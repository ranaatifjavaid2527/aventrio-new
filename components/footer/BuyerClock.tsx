'use client'

import { useEffect, useState } from 'react'

const ZONES = [
  { city: 'San Francisco', tz: 'America/Los_Angeles' },
  { city: 'New York', tz: 'America/New_York' },
] as const

type Reading = { city: string; time: string; open: boolean }

function read(now: Date): Reading[] {
  return ZONES.map(({ city, tz }) => {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hour: 'numeric',
      weekday: 'short',
      hour12: false,
    }).formatToParts(now)
    const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0) % 24
    const weekday = parts.find((p) => p.type === 'weekday')?.value ?? ''
    return {
      city,
      time: new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        hour: 'numeric',
        minute: '2-digit',
      }).format(now),
      open: !['Sat', 'Sun'].includes(weekday) && hour >= 8 && hour < 17,
    }
  })
}

/**
 * Local time in the two markets the reps cover, with a dot when it is inside
 * the 8am to 5pm business day there. Rendered on the client only, so the
 * server never prints a time that is wrong by the time the page arrives.
 */
export function BuyerClock() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date())
    const t = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(t)
  }, [])

  const readings = now ? read(now) : ZONES.map((z) => ({ city: z.city, time: '', open: false }))

  return (
    <div className="text-[0.85rem] text-on-ink-faint">
      <p>Reps work your prospects&rsquo; business day. Right now:</p>
      <ul className="mt-2.5 flex flex-wrap gap-x-8 gap-y-2">
        {readings.map((r) => (
          <li key={r.city} className="inline-flex items-center gap-2">
            <span
              aria-hidden="true"
              className={`size-1.5 rounded-full ${r.open ? 'bg-mint' : 'bg-on-ink-faint/50'}`}
            />
            <span className="text-on-ink-soft">{r.city}</span>
            <span className="min-w-[4.5rem] font-mono text-[0.78rem] tabular-nums">
              {r.time || ' '}
              {r.time ? (
                <span className="sr-only">{r.open ? ', business hours' : ', after hours'}</span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
