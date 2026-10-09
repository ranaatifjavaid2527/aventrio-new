'use client'

import dynamic from 'next/dynamic'

// None of these render anything on first paint, so they load after hydration
// and stay off the critical path.
const LeadPopup = dynamic(() => import('./LeadPopup').then((m) => m.LeadPopup), { ssr: false })
const CookieBanner = dynamic(() => import('./CookieBanner').then((m) => m.CookieBanner), {
  ssr: false,
})
const Analytics = dynamic(() => import('./Analytics').then((m) => m.Analytics), { ssr: false })

/** leadEnabled is decided on the server: the popup only appears when email delivery is configured. */
export function DeferredWidgets({ leadEnabled }: { leadEnabled: boolean }) {
  return (
    <>
      <CookieBanner />
      {leadEnabled ? <LeadPopup /> : null}
      <Analytics />
    </>
  )
}
