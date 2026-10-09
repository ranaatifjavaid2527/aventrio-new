'use client'

import { m, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

type Props = {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'ul' | 'ol'
}

/**
 * Scroll-triggered reveal. Animates opacity and transform only, so it never
 * moves surrounding layout (CLS stays at zero).
 */
export function Reveal({ children, className, as = 'div' }: Props) {
  const Tag = m[as]
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      variants={item}
    >
      {children}
    </Tag>
  )
}

/** Parent that staggers its RevealItem children as they enter the viewport. */
export function RevealGroup({ children, className, as = 'div' }: Props) {
  const Tag = m[as]
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={group}
    >
      {children}
    </Tag>
  )
}

export function RevealItem({ children, className, as = 'div' }: Props) {
  const Tag = m[as]
  return (
    <Tag className={className} variants={item}>
      {children}
    </Tag>
  )
}
