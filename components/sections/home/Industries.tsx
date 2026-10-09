import { industries } from '@/content/home'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Industries() {
  return (
    <Section id="industries" labelledBy="industries-title" tone="ink" grid="edges">
      <SectionHeading
        id="industries-title"
        tone="ink"
        eyebrow={industries.eyebrow}
        title={industries.title}
        intro={industries.intro}
      />
      <RevealGroup as="ul" className="flex flex-wrap gap-2.5">
        {industries.items.map((name) => (
          <RevealItem
            as="li"
            key={name}
            className="rounded-full border border-line-ink px-4 py-2 text-[0.95rem] text-on-ink-soft transition-colors hover:border-mint hover:text-on-ink"
          >
            {name}
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
