import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'
import { Reveal } from './Reveal'

type Props = {
  id: string
  eyebrow: string
  title: ReactNode
  intro?: string
  align?: 'left' | 'center'
  tone?: 'paper' | 'ink'
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'paper',
}: Props) {
  const centered = align === 'center'
  return (
    <Reveal className={`mb-14 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <Eyebrow
        className={`${centered ? 'justify-center' : ''} ${tone === 'ink' ? 'text-mint' : ''}`}
      >
        {eyebrow}
      </Eyebrow>
      <h2 id={id} className="t-h2">
        {title}
      </h2>
      {intro ? (
        <p className={`mt-6 text-lg ${tone === 'ink' ? 'text-on-ink-soft' : 'text-ink-soft'}`}>
          {intro}
        </p>
      ) : null}
    </Reveal>
  )
}
