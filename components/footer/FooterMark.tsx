'use client'

import { useRef, type PointerEvent } from 'react'

/**
 * The oversized wordmark that closes the page. A faint outline sits underneath;
 * a mint copy above it is revealed only inside a soft circle that follows a
 * mouse pointer. Only one element's mask position changes per move.
 * Decorative: hidden from assistive tech, static for touch and reduced motion.
 */
export function FooterMark() {
  const glow = useRef<HTMLDivElement>(null)

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== 'mouse' || !glow.current) return
    const r = e.currentTarget.getBoundingClientRect()
    glow.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
    glow.current.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const word = (id?: string) => (
    <svg viewBox="0 0 1000 215" className="block h-auto w-full" focusable="false">
      {id ? (
        // Solid at the top, fading to nothing where the page ends
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--on-ink)" stopOpacity="0.12" />
            <stop offset="1" stopColor="var(--on-ink)" stopOpacity="0.02" />
          </linearGradient>
        </defs>
      ) : null}
      <text x="0" y="200" textLength="1000" lengthAdjust="spacing">
        aventrio
      </text>
    </svg>
  )

  return (
    <div aria-hidden="true" onPointerMove={onMove} className="footer-mark">
      <div className="footer-mark-base">{word('footer-mark-fade')}</div>
      <div ref={glow} className="footer-mark-glow">
        {word()}
      </div>
    </div>
  )
}
