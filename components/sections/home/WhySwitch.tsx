import { whySwitch } from '@/content/home'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function WhySwitch() {
  const r = whySwitch.report
  return (
    <Section id="why" labelledBy="why-title" tone="ink" grid="center">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading
            id="why-title"
            tone="ink"
            eyebrow={whySwitch.eyebrow}
            title={whySwitch.title}
            intro={whySwitch.intro}
          />
          <RevealGroup
            as="ul"
            className="grid gap-px overflow-hidden rounded-card border border-line-ink bg-line-ink sm:grid-cols-2"
          >
            {whySwitch.points.map((p) => (
              <li key={p.title} className="bg-ink">
                <RevealItem className="p-6">
                  <p className="font-mono text-[0.8rem] text-mint">{p.kicker}</p>
                  <h3 className="mt-3 text-[1.1rem] font-semibold tracking-[-0.02em]">{p.title}</h3>
                  <p className="mt-2 text-[0.94rem] text-on-ink-soft">{p.body}</p>
                </RevealItem>
              </li>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="self-center">
          <figure className="rounded-[22px] border border-line-ink bg-ink-2 p-6 shadow-[0_40px_90px_-50px_black] sm:p-7">
            <figcaption className="mb-5 flex items-baseline justify-between gap-4">
              <span className="text-[1.05rem] font-semibold tracking-[-0.02em]">{r.title}</span>
              <span className="t-eyebrow text-[0.62rem] text-on-ink-faint">{r.subtitle}</span>
            </figcaption>
            <ol className="divide-y divide-line-ink">
              {r.rows.map((row, i) => (
                <li
                  key={row.label}
                  className="grid grid-cols-[2rem_6.5rem_1fr] items-baseline gap-3 py-3.5"
                >
                  <span className="font-mono text-[0.7rem] text-on-ink-faint">0{i + 1}</span>
                  <span className="font-semibold text-mint">{row.label}</span>
                  <span className="text-[0.9rem] text-on-ink-soft">{row.body}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 border-t border-line-ink pt-4 font-mono text-[0.68rem] text-on-ink-faint">
              {r.footer}
            </p>
          </figure>
        </Reveal>
      </div>
    </Section>
  )
}
