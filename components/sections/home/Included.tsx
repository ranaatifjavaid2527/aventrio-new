import { included } from '@/content/home'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Included() {
  return (
    <Section id="included" labelledBy="included-title" grid="center">
      <SectionHeading
        id="included-title"
        eyebrow={included.eyebrow}
        title={included.title}
        intro={included.intro}
      />
      <RevealGroup
        as="ol"
        className="grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2 lg:grid-cols-3"
      >
        {included.items.map((it, i) => (
          <li key={it.title} className="flex bg-paper">
            <RevealItem className="flex flex-1 flex-col p-7 sm:p-8">
              <span className="font-mono text-[0.74rem] text-subtle">0{i + 1}</span>
              <h3 className="t-h3 mt-6">{it.title}</h3>
              <p className="mt-3 flex-1 text-[0.98rem] text-ink-soft">{it.body}</p>
              <p className="mt-6 inline-flex items-center gap-2 font-mono text-[0.72rem] text-green-deep">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-green" />
                {it.when}
              </p>
            </RevealItem>
          </li>
        ))}
      </RevealGroup>
    </Section>
  )
}
