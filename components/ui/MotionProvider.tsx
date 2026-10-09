'use client'

import { LazyMotion, MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * LazyMotion keeps the animation bundle small (components use `m.*`, not `motion.*`),
 * and the animation features load as a separate chunk after first paint.
 * reducedMotion="user" is the global guard: when the visitor asks for reduced
 * motion, transform animations are skipped site-wide.
 */
const loadFeatures = () => import('./motionFeatures').then((m) => m.default)

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
