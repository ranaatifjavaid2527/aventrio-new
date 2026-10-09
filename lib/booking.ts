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

export async function openBookingModal() {
  const cal = await loadCal()
  cal('modal', {
    calLink: site.cal.link,
    config: { layout: 'month_view', ...bookingPrefill() },
  })
}
