import { faq, faqIntro } from '@/content/faq'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

/** Native <details>: keyboard and screen reader support for free, and answers are in the HTML for crawlers. */
export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title" tone="ink">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          id="faq-title"
          tone="ink"
          eyebrow={faqIntro.eyebrow}
          title={faqIntro.title}
        />
        <Reveal>
          <div className="divide-y divide-line-ink border-y border-line-ink">
            {faq.map((item) => (
              <details key={item.q} className="group py-1">
                <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-[1.08rem] font-semibold tracking-[-0.015em] transition-colors hover:text-mint">
                  <h3 className="font-semibold">{item.q}</h3>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border border-line-ink text-on-ink-soft transition-transform duration-200 ease-out group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="space-y-4 pr-10 pb-6 text-[0.98rem] text-on-ink-soft">
                  {item.a.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
