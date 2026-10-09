/**
 * localStorage that never throws. Private windows, blocked site data and some
 * embedded browsers make the accessor throw; every caller must still work.
 */
export const storage = {
  get(key: string): string | null {
    try {
      return window.localStorage.getItem(key)
    } catch {
      return null
    }
  },
  set(key: string, value: string) {
    try {
      window.localStorage.setItem(key, value)
    } catch {
      /* storage unavailable: the feature degrades, the page still works */
    }
  },
}

export const keys = {
  consent: 'av_consent_v1',
  leadSuppressedUntil: 'av_lead_suppressed_until',
  knownEmail: 'av_known_email',
} as const
