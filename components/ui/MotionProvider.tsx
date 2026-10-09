'use client'

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * LazyMotion keeps the animation bundle small (components use `m.*`, not `motion.*`).
 * reducedMotion="user" is the global guard: when the visitor asks for reduced
 * motion, transform animations are skipped site-wide.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
