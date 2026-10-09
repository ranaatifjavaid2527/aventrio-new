'use client'

import { useEffect } from 'react'
import { analyticsEnabled, analyticsProvider, plausibleDomain } from '@/lib/analytics'
import { useConsent } from '@/lib/consent'

/**
 * Loads analytics only after explicit consent. Before consent nothing is
 * requested from any analytics host. Under the site's strict-dynamic CSP,
 * a script inserted by our own nonce-trusted bundle is allowed to load.
 */
export function Analytics() {
  const consent = useConsent()

  useEffect(() => {
    if (!analyticsEnabled || consent !== 'accepted') return
    if (analyticsProvider === 'plausible' && !document.querySelector('script[data-av-analytics]')) {
      const s = document.createElement('script')
      s.defer = true
      s.src = 'https://plausible.io/js/script.js'
      s.dataset.domain = plausibleDomain
      s.dataset.avAnalytics = 'plausible'
      document.head.appendChild(s)
    }
  }, [consent])

  return null
}
