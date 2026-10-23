'use client'

import { useRef, type PointerEvent, type ReactNode } from 'react'

/**
 * Card with a soft spotlight that follows a mouse pointer. The glow is moved
 * with a transform on one element, so there is no React re-render, no style
 * recalculation for the card's children and no gradient repaint per move.
 */
export function Spotlight({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const glow = useRef<HTMLSpanElement>(null)
  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== 'mouse' || !glow.current) return
    const r = e.currentTarget.getBoundingClientRect()
    glow.current.style.transform = `translate(${e.clientX - r.left - 360}px, ${e.clientY - r.top - 360}px)`
  }
  return (
    <div onPointerMove={onMove} className={`spotlight ${className}`}>
      <span aria-hidden="true" className="spotlight-clip">
        <span ref={glow} className="spotlight-glow" />
      </span>
      {children}
    </div>
  )
}
