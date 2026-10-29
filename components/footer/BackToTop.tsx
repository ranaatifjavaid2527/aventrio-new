'use client'

import { Icon } from '@/components/ui/Icon'

export function BackToTop() {
  function onClick() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    document.getElementById('main')?.focus({ preventScroll: true })
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex items-center gap-2 transition-colors hover:text-on-ink"
    >
      Back to top
      <span className="grid size-7 place-items-center rounded-full border border-line-ink transition-[transform,border-color] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:border-mint group-active:scale-95">
        <Icon name="arrowUp" className="size-3" />
      </span>
    </button>
  )
}
