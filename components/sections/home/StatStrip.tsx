import { strip } from '@/content/home'
import { Container } from '@/components/ui/Container'
import { CountUp } from '@/components/ui/CountUp'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'

export function StatStrip() {
  return (
    <section
      aria-label="How the work is set up"
      className="relative bg-paper pb-[var(--section-y)]"
    >
      <Container>
        <p className="mb-8 text-center font-mono text-[0.8rem] tracking-[0.02em] text-ink-soft">
          {strip.line}
        </p>
        <RevealGroup
          as="ul"
          className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-4"
        >
          {strip.stats.map((s) => (
            <li key={s.label} className="bg-paper">
              <RevealItem className="p-6 sm:p-8">
                <CountUp
                  value={s.value}
                  className="text-[clamp(2.6rem,4.6vw,3.7rem)] leading-none font-medium tracking-[-0.04em]"
                />
                <p className="mt-3 text-[0.92rem] text-ink-soft">{s.label}</p>
              </RevealItem>
            </li>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
