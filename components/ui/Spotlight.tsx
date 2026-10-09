'use client'

import type { PointerEvent, ReactNode } from 'react'

/**
 * Card with a soft spotlight that follows the pointer. Only CSS variables
 * change on move, so there is no React re-render and no layout work.
 */
export function Spotlight({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  function onMove(e: PointerEvent<HTMLDivElement>) {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <div onPointerMove={onMove} className={`spotlight ${className}`}>
      {children}
    </div>
  )
}
