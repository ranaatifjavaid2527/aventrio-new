'use client'

import { useEffect } from 'react'
import { site } from '@/content/site'

const SCRIPT_SRC = 'https://widget.clutch.co/static/js/widget.js'

declare global {
  interface Window {
    CLUTCHCO?: { Init?: () => void }
  }
}

/** The official Clutch review widget. Renders nothing until the client supplies the Clutch details. */
export function ClutchWidget({ className = '' }: { className?: string }) {
  const { companyId, profileUrl, widgetType, height } = site.clutch

  useEffect(() => {
    if (!companyId) return
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
    if (existing) {
      window.CLUTCHCO?.Init?.()
      return
    }
    const s = document.createElement('script')
    s.src = SCRIPT_SRC
    s.async = true
    document.body.appendChild(s)
  }, [companyId])

  if (!companyId || !profileUrl) return null

  return (
    <div
      className={`clutch-widget ${className}`}
      data-url="https://widget.clutch.co"
      data-widget-type={widgetType}
      data-height={height}
      data-nofollow="true"
      data-expandifr="true"
      data-clutchcompany-id={companyId}
      style={{ minHeight: `${height}px` }}
    />
  )
}
