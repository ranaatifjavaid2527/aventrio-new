import Link from 'next/link'
import type { ReactNode } from 'react'

export type ButtonVariant = 'solid' | 'ghost'
export type ButtonTone = 'paper' | 'ink'

/** Near-black on paper, cream on ink. */
export function buttonClasses(
  variant: ButtonVariant = 'solid',
  tone: ButtonTone = 'paper',
  size: 'md' | 'sm' = 'md',
) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out active:scale-[0.98] whitespace-nowrap'
  const sizes = size === 'sm' ? 'h-10 px-5 text-[0.9rem]' : 'h-12 px-6 text-[0.98rem]'
  const solid =
    tone === 'ink'
      ? 'bg-on-ink text-ink hover:bg-mint'
      : 'bg-ink text-on-ink hover:bg-green-deep shadow-[0_14px_30px_-18px_var(--ink)]'
  const ghost =
    tone === 'ink'
      ? 'border border-line-ink text-on-ink hover:border-mint hover:text-mint'
      : 'border border-line-strong text-ink hover:border-green hover:text-green-deep bg-paper/60'
  return `${base} ${sizes} ${variant === 'solid' ? solid : ghost}`
}

export function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
    >
      →
    </span>
  )
}

type LinkButtonProps = {
  href: string
  children: ReactNode
  variant?: ButtonVariant
  tone?: ButtonTone
  size?: 'md' | 'sm'
  arrow?: boolean
  className?: string
}

export function LinkButton({
  href,
  children,
  variant,
  tone,
  size,
  arrow,
  className = '',
}: LinkButtonProps) {
  return (
    <Link href={href} className={`${buttonClasses(variant, tone, size)} ${className}`}>
      {children}
      {arrow ? <Arrow /> : null}
    </Link>
  )
}
