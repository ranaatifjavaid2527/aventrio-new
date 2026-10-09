'use client'

import Cal from '@calcom/embed-react'
import { useEffect, useState } from 'react'
import { site } from '@/content/site'
import { bookingPrefill, loadCal } from '@/lib/booking'

/** Inline Cal.com calendar for /book. The frame box is sized up front so nothing shifts when it loads. */
export function BookingInline() {
  // Read once on the client. The prefill only feeds the iframe URL, never the server HTML.
  const [prefill] = useState<Record<string, string>>(() =>
    typeof window === 'undefined' ? {} : bookingPrefill(),
  )

  useEffect(() => {
    void loadCal().catch(() => undefined)
  }, [])

  return (
    <div className="min-h-[720px] w-full overflow-hidden rounded-card border border-line bg-paper">
      <Cal
        namespace={site.cal.namespace}
        calLink={site.cal.link}
        style={{ width: '100%', height: '100%', minHeight: 720, overflow: 'auto' }}
        config={{ layout: 'month_view', theme: 'light', ...prefill }}
      />
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
