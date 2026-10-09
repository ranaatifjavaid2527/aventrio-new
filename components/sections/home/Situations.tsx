import { situations } from '@/content/home'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Spotlight } from '@/components/ui/Spotlight'

export function Situations() {
  return (
    <Section id="situations" labelledBy="situations-title" tone="ink">
      <SectionHeading
        id="situations-title"
        tone="ink"
        eyebrow={situations.eyebrow}
        title={situations.title}
        intro={situations.intro}
      />
      <RevealGroup as="ol" className="grid gap-4 lg:grid-cols-3">
        {situations.items.map((s, i) => (
          <RevealItem as="li" key={s.title}>
            <Spotlight className="flex h-full flex-col rounded-card border border-line-ink bg-ink-2/50 p-7 sm:p-8">
              <span className="font-mono text-[0.74rem] text-mint">0{i + 1}</span>
              <h3 className="t-h3 mt-5">{s.title}</h3>
              <p className="mt-3 flex-1 text-[0.98rem] text-on-ink-soft">{s.body}</p>
              <p className="mt-6 border-t border-line-ink pt-4 text-[0.92rem] text-on-ink">
                {s.change}
              </p>
            </Spotlight>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
