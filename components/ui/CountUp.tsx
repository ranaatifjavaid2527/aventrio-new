'use client'

import { animate, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

/**
 * Counts from zero to `value` when scrolled into view. The final value is
 * rendered invisibly underneath so the box is sized for it from the first
 * paint, and the server HTML contains the real number for crawlers.
 */
export function CountUp({ value, className = '' }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const numRef = useRef<HTMLSpanElement>(null)
  // Same margin as the reveal around it, so the count starts as the number appears
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!inView || reduce || value === 0) return
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      // Written straight to the DOM: no React render per frame
      onUpdate: (v) => {
        if (numRef.current) numRef.current.textContent = String(Math.round(v))
      },
    })
    return () => controls.stop()
  }, [inView, reduce, value])

  return (
    <span ref={ref} className={`relative inline-grid tabular-nums ${className}`}>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {value}
      </span>
      <span ref={numRef} className="col-start-1 row-start-1">
        {value}
      </span>
    </span>
  )
}
