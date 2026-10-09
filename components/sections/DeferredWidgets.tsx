'use client'

import dynamic from 'next/dynamic'

// None of these render anything on first paint, so they load after hydration
// and stay off the critical path.
const LeadPopup = dynamic(() => import('./LeadPopup').then((m) => m.LeadPopup), { ssr: false })
const CookieBanner = dynamic(() => import('./CookieBanner').then((m) => m.CookieBanner), {
  ssr: false,
})
const Analytics = dynamic(() => import('./Analytics').then((m) => m.Analytics), { ssr: false })

export function DeferredWidgets() {
  return (
    <>
      <CookieBanner />
      <LeadPopup />
      <Analytics />
    </>
  )
}
