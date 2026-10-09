import { hero } from '@/content/home'
import { BookCallButton } from '@/components/ui/BookCallButton'
import { LinkButton } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ClutchWidget } from '@/components/ui/ClutchWidget'
import { HeroTabs } from '../HeroTabs'

/** The H1 and lede render without entrance animation so they paint immediately (LCP). */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-paper pt-10 pb-24 sm:pt-16 lg:pb-32"
    >
      <div aria-hidden="true" className="grid-texture" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-[620px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--green)_14%,transparent),transparent_65%)]"
      />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <div className="max-w-[38rem]">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 id="hero-title" className="t-display">
            {hero.titleLead} <span className="accent-word">{hero.titleAccent}</span>
          </h1>
          <p className="mt-7 max-w-[34rem] text-lg text-ink-soft">{hero.lede}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <BookCallButton>{hero.primaryCta}</BookCallButton>
            <LinkButton href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </LinkButton>
          </div>
          <p className="mt-6 font-mono text-[0.76rem] tracking-[0.02em] text-subtle">{hero.note}</p>
          <ClutchWidget className="mt-5 w-[220px]" />
        </div>
        <HeroTabs />
      </Container>
    </section>
  )
}
