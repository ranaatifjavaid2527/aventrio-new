import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'

type Props = {
  eyebrow: string
  title: string
  intro: string
  sections: { heading: string; body: string[] }[]
}

/** Shared layout for industry pages and case studies once content exists. */
export function SimpleArticle({ eyebrow, title, intro, sections }: Props) {
  return (
    <article className="relative bg-paper pt-14 pb-[var(--section-y)] sm:pt-20">
      <div aria-hidden="true" className="grid-texture" />
      <Container className="relative max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="t-h2">{title}</h1>
        <p className="mt-6 text-lg text-ink-soft">{intro}</p>
        <div className="mt-14 space-y-12">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-[1.6rem]">{s.heading}</h2>
              <div className="mt-4 space-y-4 text-ink-soft">
                {s.body.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  )
}
