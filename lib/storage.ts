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

/** sessionStorage counterpart, same never-throw contract. */
export const session = {
  get(key: string): string | null {
    try {
      return window.sessionStorage.getItem(key)
    } catch {
      return null
    }
  },
  set(key: string, value: string) {
    try {
      window.sessionStorage.setItem(key, value)
    } catch {
      /* unavailable: worst case the bar can show again this session */
    }
  },
}

export const keys = {
  consent: 'av_consent_v1',
  knownEmail: 'av_known_email',
  barSeenThisSession: 'av_bar_seen',
  barQuietUntil: 'av_bar_quiet_until',
} as const
