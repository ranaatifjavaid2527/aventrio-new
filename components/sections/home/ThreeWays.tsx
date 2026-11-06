import { threeWays } from '@/content/home'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ThreeWaysTabs } from '@/components/sections/home/ThreeWaysTabs'

/** Three ways in, as tabs. Sits above the services grid on the live page. */
export function ThreeWays() {
  return (
    <Section id="ways" labelledBy="ways-title">
      <SectionHeading
        id="ways-title"
        eyebrow={threeWays.eyebrow}
        title={threeWays.title}
        intro={threeWays.intro}
      />
      <Reveal>
        <ThreeWaysTabs />
      </Reveal>
      <p className="mt-12 border-t border-line pt-6 text-[0.92rem] text-subtle">
        <span className="font-mono text-[0.7rem] tracking-[0.08em] uppercase">
          {threeWays.also.label}
        </span>
        <span className="ml-3 text-ink-soft">{threeWays.also.items.join(' · ')}</span>
      </p>
    </Section>
  )
}
