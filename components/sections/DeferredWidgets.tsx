'use client'

import dynamic from 'next/dynamic'

// None of these render anything on first paint, so they load after hydration
// and stay off the critical path.
const LeadBar = dynamic(() => import('./LeadBar').then((m) => m.LeadBar), { ssr: false })
const CookieBanner = dynamic(() => import('./CookieBanner').then((m) => m.CookieBanner), {
  ssr: false,
})
const Analytics = dynamic(() => import('./Analytics').then((m) => m.Analytics), { ssr: false })

/** leadEnabled is decided on the server: the lead bar only appears when email delivery is configured. */
export function DeferredWidgets({ leadEnabled }: { leadEnabled: boolean }) {
  return (
    <>
      <CookieBanner />
      {leadEnabled ? <LeadBar /> : null}
      <Analytics />
    </>
  )
}
