import { BookCallButton } from '@/components/ui/BookCallButton'
import { LinkButton } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'

type Props = {
  title: string
  body: string
  primary: string
  secondary: { label: string; href: string }
}

export function FinalCta({ title, body, primary, secondary }: Props) {
  return (
    <Section
      id="book-call"
      labelledBy="cta-title"
      tone="ink"
      grid="center"
      className="pb-[calc(var(--section-y)*0.9)]"
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 id="cta-title" className="t-h2">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-on-ink-soft">{body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <BookCallButton tone="ink">{primary}</BookCallButton>
          <LinkButton href={secondary.href} variant="ghost" tone="ink">
            {secondary.label}
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  )
}
