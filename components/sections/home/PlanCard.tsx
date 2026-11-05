import { planCard } from '@/content/home'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

/** An illustrated example of what week one produces, clearly labelled as an example. */
export function PlanCard() {
  return (
    <Section labelledBy="plan-title">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <SectionHeading
          id="plan-title"
          eyebrow={planCard.eyebrow}
          title={planCard.title}
          intro={planCard.intro}
        />
        <Reveal>
          <figure className="rounded-card border border-line-strong bg-surface p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[0.72rem] tracking-[0.08em] text-subtle uppercase">
                Segment plan
              </p>
              <span className="rounded-full border border-line-strong px-3 py-1 font-mono text-[0.68rem] tracking-[0.08em] text-green-deep uppercase">
                {planCard.tag}
              </span>
            </div>
            <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {planCard.fields.map((f) => (
                <div key={f.label} className="rounded-xl border border-line bg-paper p-4">
                  <dt className="font-mono text-[0.68rem] tracking-[0.08em] text-subtle uppercase">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-[0.98rem] font-medium text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-xl border border-line bg-paper p-5">
              <p className="font-mono text-[0.68rem] tracking-[0.08em] text-subtle uppercase">
                {planCard.emailLabel}
              </p>
              <div className="mt-3 space-y-2.5 border-l-2 border-green pl-4 text-[0.95rem] text-ink-soft">
                {planCard.email.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
            <figcaption className="mt-5 text-[0.82rem] text-subtle">{planCard.note}</figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  )
}
