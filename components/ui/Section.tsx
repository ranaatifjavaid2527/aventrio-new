import type { ReactNode } from 'react'
import { Container } from './Container'

type Props = {
  children: ReactNode
  id?: string
  tone?: 'paper' | 'ink'
  grid?: 'center' | 'edges' | false
  className?: string
  containerClassName?: string
  labelledBy?: string
}

/** A page section with optional masked grid texture. tone="ink" switches to the dark palette. */
export function Section({
  children,
  id,
  tone = 'paper',
  grid = false,
  className = '',
  containerClassName = '',
  labelledBy,
}: Props) {
  const toneClass = tone === 'ink' ? 'on-ink bg-ink text-on-ink' : 'bg-paper text-ink'
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative scroll-mt-24 py-[var(--section-y)] ${toneClass} ${className}`}
    >
      {grid ? (
        <div
          aria-hidden="true"
          className="grid-texture"
          data-tone={tone}
          data-mask={grid === 'edges' ? 'edges' : undefined}
        />
      ) : null}
      <Container className={`relative ${containerClassName}`}>{children}</Container>
    </section>
  )
}
