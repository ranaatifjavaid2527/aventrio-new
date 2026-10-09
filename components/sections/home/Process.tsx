import { process } from '@/content/home'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Process() {
  return (
    <Section id="process" labelledBy="process-title" grid="edges" className="bg-surface/40">
      <SectionHeading
        id="process-title"
        eyebrow={process.eyebrow}
        title={process.title}
        intro={process.intro}
      />
      <RevealGroup as="ol" className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((s, i) => (
          <RevealItem as="li" key={s.title} className="relative border-t border-line-strong pt-6">
            <span className="font-mono text-[0.74rem] text-green">0{i + 1}</span>
            <h3 className="t-h3 mt-4">{s.title}</h3>
            <p className="mt-3 text-[0.98rem] text-ink-soft">{s.body}</p>
            <p className="mt-4 font-mono text-[0.72rem] tracking-[0.03em] text-muted">{s.meta}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  )
}
