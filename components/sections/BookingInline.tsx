'use client'

import Cal from '@calcom/embed-react'
import { useEffect, useRef, useState } from 'react'
import { site } from '@/content/site'
import { bookingPrefill } from '@/lib/booking'

/**
 * Inline Cal.com calendar for /book. The frame box is sized up front so
 * nothing shifts when it loads, and the third-party embed only loads once
 * the box is near the viewport (on phones it sits below the intro).
 */
export function BookingInline() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  // Read once on the client. The prefill only feeds the iframe URL, never the server HTML.
  const [prefill] = useState<Record<string, string>>(() =>
    typeof window === 'undefined' ? {} : bookingPrefill(),
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative min-h-[720px] w-full overflow-hidden rounded-card border border-line bg-paper"
    >
      {visible ? (
        <Cal
          namespace={site.cal.namespace}
          calLink={site.cal.link}
          style={{ width: '100%', height: '100%', minHeight: 720, overflow: 'auto' }}
          config={{ layout: 'month_view', theme: 'light', ...prefill }}
        />
      ) : (
        <p
          role="status"
          className="absolute inset-0 grid place-items-center font-mono text-[0.8rem] text-subtle"
        >
          Loading the calendar…
        </p>
      )}
      <noscript>
        <p className="p-6">
          The booking calendar needs JavaScript. You can book directly at{' '}
          <a className="underline" href={`https://cal.com/${site.cal.link}`}>
            cal.com/{site.cal.link}
          </a>{' '}
          or email {site.email}.
        </p>
      </noscript>
    </div>
  )
}
