'use client'

import { site } from '@/content/site'
import { tokens } from './tokens'
import { keys, storage } from './storage'

type CalFn = (action: string, payload?: unknown) => void

let calPromise: Promise<CalFn> | null = null

/** Brand the Cal.com UI with the site's green. Shared by the modal and the inline embed. */
export const calUi = {
  cssVarsPerTheme: {
    light: { 'cal-brand': tokens.green },
    dark: { 'cal-brand': tokens.mint },
  },
  hideEventTypeDetails: false,
  layout: 'month_view',
  theme: 'light',
}

/** Prefill what we already know. Only an email the visitor typed into the lead form on this browser. */
export function bookingPrefill(): Record<string, string> {
  const email = typeof window === 'undefined' ? null : storage.get(keys.knownEmail)
  return email ? { email } : {}
}

/** Loads the Cal.com embed on first use only, so pages that never open it pay nothing. */
export function loadCal(): Promise<CalFn> {
  if (!calPromise) {
    calPromise = import('@calcom/embed-react')
      .then(({ getCalApi }) => getCalApi({ namespace: site.cal.namespace }))
      .then((cal) => {
        const fn = cal as unknown as CalFn
        fn('ui', calUi)
        return fn
      })
      .catch((err: unknown) => {
        calPromise = null
        throw err
      })
  }
  return calPromise
}

/** Opens the Cal.com overlay. `extra` can preselect a day: { date: 'YYYY-MM-DD', month: 'YYYY-MM' }. */
export async function openBookingModal(extra: Record<string, string> = {}) {
  const cal = await loadCal()
  cal('modal', {
    calLink: site.cal.link,
    config: { layout: 'month_view', ...bookingPrefill(), ...extra },
  })
}

export type BookingDay = {
  /** YYYY-MM-DD in the visitor's own calendar */
  date: string
  /** YYYY-MM */
  month: string
  weekday: string
  day: number
  label: string
  /** Direct Cal.com link, used when the embed cannot load */
  href: string
}

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * The next `count` weekdays starting today, skipping Saturday and Sunday.
 * Computed from the visitor's clock at render time, so it rolls forward daily.
 */
export function upcomingWeekdays(count = 5, from = new Date()): BookingDay[] {
  const days: BookingDay[] = []
  const d = new Date(from.getFullYear(), from.getMonth(), from.getDate())
  while (days.length < count) {
    const dow = d.getDay()
    if (dow !== 0 && dow !== 6) {
      const date = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
      const month = date.slice(0, 7)
      days.push({
        date,
        month,
        weekday: d.toLocaleDateString('en-US', { weekday: 'short' }),
        day: d.getDate(),
        label: d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
        href: `https://cal.com/${site.cal.link}?date=${date}&month=${month}`,
      })
    }
    d.setDate(d.getDate() + 1)
  }
  return days
}
