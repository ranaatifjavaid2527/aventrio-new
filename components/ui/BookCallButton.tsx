'use client'

import { useRouter } from 'next/navigation'
import type { MouseEvent, ReactNode } from 'react'
import { loadCal, openBookingModal } from '@/lib/booking'
import { Arrow, buttonClasses, type ButtonTone, type ButtonVariant } from './Button'

type Props = {
  children: ReactNode
  variant?: ButtonVariant
  tone?: ButtonTone
  size?: 'md' | 'sm'
  arrow?: boolean
  className?: string
}

/**
 * Opens the Cal.com booking modal in place. It is a real link to /book, so it
 * still works without JavaScript, with a modifier key, or if the embed fails.
 */
export function BookCallButton({
  children,
  variant,
  tone,
  size,
  arrow = true,
  className = '',
}: Props) {
  const router = useRouter()
  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    openBookingModal().catch(() => router.push('/book'))
  }
  // Warm the embed on intent so the modal opens without a visible wait
  const warm = () => void loadCal().catch(() => undefined)

  return (
    <a
      href="/book"
      onClick={onClick}
      onPointerEnter={warm}
      onFocus={warm}
      className={`${buttonClasses(variant, tone, size)} ${className}`}
    >
      {children}
      {arrow ? <Arrow /> : null}
    </a>
  )
}
