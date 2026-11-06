import Link from 'next/link'
import { pricing } from '@/content/home'
import { BookCallButton } from '@/components/ui/BookCallButton'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

/** How pricing works and the four terms buyers ask about. No price is shown. */
export function Pricing() {
  return (
    <Section labelledBy="pricing-title">
      <SectionHeading
        id="pricing-title"
        eyebrow={pricing.eyebrow}
        title={pricing.title}
        intro={pricing.intro}
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <Reveal>
          <div className="rounded-card border border-line-strong bg-surface p-6 sm:p-8">
            <p className="font-mono text-[0.72rem] tracking-[0.08em] text-subtle uppercase">
              {pricing.priceCard.label}
            </p>
            <p className="mt-2 text-[1.5rem] leading-snug font-semibold tracking-[-0.01em] text-ink">
              {pricing.priceCard.headline}
            </p>
            <p className="mt-4 text-[0.92rem] text-ink-soft">{pricing.priceCard.note}</p>
            <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-[0.95rem] text-ink">
              {pricing.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Icon name="check" className="mt-1 size-4 shrink-0 text-green-deep" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {pricing.terms.map((t) => (
              <li key={t.title} className="rounded-card border border-line bg-surface p-5">
                <h3 className="text-[1.02rem]">{t.title}</h3>
                <p className="mt-2 text-[0.92rem] text-ink-soft">{t.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.88rem] text-subtle">{pricing.note}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <BookCallButton>{pricing.cta}</BookCallButton>
            <Link
              href={pricing.link.href}
              className="inline-flex items-center gap-2 font-medium text-green-deep"
            >
              {pricing.link.label} <Icon name="arrowRight" className="size-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
