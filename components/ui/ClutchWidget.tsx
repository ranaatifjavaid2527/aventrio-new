'use client'

import { useEffect } from 'react'
import { site } from '@/content/site'

const SCRIPT_SRC = 'https://widget.clutch.co/static/js/widget.js'

declare global {
  interface Window {
    CLUTCHCO?: { Init?: () => void; Destroy?: () => void }
  }
}

let loader: Promise<void> | null = null
let initTimer: number | undefined

/** Loads Clutch's script once for the whole page. */
function loadClutch() {
  if (!loader) {
    loader = new Promise<void>((resolve, reject) => {
      const s = document.createElement('script')
      s.src = SCRIPT_SRC
      s.async = true
      s.onload = () => resolve()
      s.onerror = () => {
        loader = null
        reject(new Error('Clutch widget failed to load'))
      }
      document.body.appendChild(s)
    })
  }
  return loader
}

/**
 * Clutch only scans the page when its script first runs, so widgets mounted
 * later (or on client navigation) need a fresh pass. Debounced so several
 * widgets on one page are drawn once, without duplicate frames.
 */
function renderWidgets() {
  window.clearTimeout(initTimer)
  initTimer = window.setTimeout(() => {
    window.CLUTCHCO?.Destroy?.()
    window.CLUTCHCO?.Init?.()
  }, 50)
}

/** The official Clutch review widget. Renders nothing until the client supplies the Clutch details. */
export function ClutchWidget({ className = '' }: { className?: string }) {
  const { companyId, profileUrl, widgetType, height } = site.clutch

  useEffect(() => {
    if (!companyId) return
    loadClutch()
      .then(renderWidgets)
      .catch(() => undefined)
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
