import { commitments } from '@/content/home'
import { Icon } from '@/components/ui/Icon'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Commitments() {
  return (
    <Section id="commitments" labelledBy="commitments-title" tone="ink" grid="center">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="commitments-title"
            tone="ink"
            eyebrow={commitments.eyebrow}
            title={commitments.title}
            intro={commitments.intro}
          />
        </div>
        <RevealGroup as="ul" className="divide-y divide-line-ink border-y border-line-ink">
          {commitments.items.map((c) => (
            <RevealItem as="li" key={c.lead} className="grid grid-cols-[1.75rem_1fr] gap-4 py-6">
              <span
                aria-hidden="true"
                className="mt-1 grid size-6 place-items-center rounded-full bg-mint text-[0.7rem] font-bold text-ink"
              >
                <Icon name="check" className="size-3.5" />
              </span>
              <p className="text-[1rem] text-on-ink-soft">
                <strong className="font-semibold text-on-ink">{c.lead}</strong> {c.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  )
}
