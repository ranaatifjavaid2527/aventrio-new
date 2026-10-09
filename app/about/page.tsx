import { aboutCta, aboutHero, coverage, founderNote, roles, rules } from '@/content/about'
import { site } from '@/content/site'
import { advisors, advisorsIntro, founder, network } from '@/content/team'
import { PersonCard } from '@/components/ui/PersonCard'
import { BookCallButton } from '@/components/ui/BookCallButton'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { JsonLd } from '@/components/ui/JsonLd'
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { RindBand } from '@/components/ui/RindBand'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Spotlight } from '@/components/ui/Spotlight'
import { FinalCta } from '@/components/sections/FinalCta'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbLd, graph, organizationLd, webPageLd, websiteLd } from '@/lib/jsonld'

const title = 'About Aventrio | Outbound and Partnerships for Tech Companies'
const description =
  'Aventrio is a sales development firm for technology companies selling into the US. Meet the founder, the team structure, and the operating principles behind every outbound engagement we run.'

export const metadata = pageMetadata({ title, description, path: '/about', absoluteTitle: true })

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd('AboutPage', '/about', title, description),
          breadcrumbLd([{ name: 'About', path: '/about' }]),
        )}
      />

      <section
        aria-labelledby="about-title"
        className="relative overflow-hidden bg-paper pt-14 pb-20 sm:pt-20"
      >
        <div aria-hidden="true" className="grid-texture" />
        <Container className="relative max-w-4xl text-center">
          <Eyebrow className="justify-center">{aboutHero.eyebrow}</Eyebrow>
          <h1 id="about-title" className="t-display">
            {aboutHero.titleLead} <span className="accent-word">{aboutHero.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-ink-soft">{aboutHero.lede}</p>
        </Container>
      </section>

      <Section id="why-aventrio" labelledBy="founder-title">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="founder-title"
              eyebrow={founderNote.eyebrow}
              title={founderNote.title}
            />
            <Reveal>
              <PersonCard person={founder} />
            </Reveal>
          </div>
          <Reveal>
            <p className="t-eyebrow mb-6 text-subtle">{founderNote.label}</p>
            <div className="space-y-5 text-[1.08rem] text-ink-soft">
              {founderNote.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <BookCallButton>Book a strategy call</BookCallButton>
              <a
                href={`mailto:${site.email}`}
                className="text-[0.98rem] font-medium underline-offset-4 hover:text-green-deep hover:underline"
              >
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="network" labelledBy="network-title" grid="edges" className="bg-surface/40">
        <SectionHeading
          id="network-title"
          eyebrow={network.eyebrow}
          title={network.title}
          intro={network.intro}
        />
        <RevealGroup as="ul" className="grid gap-4 lg:grid-cols-3">
          {network.items.map((n) => (
            <RevealItem as="li" key={n.title}>
              <Spotlight className="h-full rounded-card border border-line bg-paper p-7">
                <h3 className="t-h3">{n.title}</h3>
                <p className="mt-3 text-[0.98rem] text-ink-soft">{n.body}</p>
              </Spotlight>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section id="advisors" labelledBy="advisors-title">
        <SectionHeading
          id="advisors-title"
          eyebrow={advisorsIntro.eyebrow}
          title={advisorsIntro.title}
        />
        <RevealGroup as="ul" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((a) => (
            <RevealItem as="li" key={a.name}>
              <PersonCard person={a} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section id="team" labelledBy="roles-title" grid="edges" className="bg-surface/40">
        <SectionHeading
          id="roles-title"
          eyebrow={roles.eyebrow}
          title={roles.title}
          intro={roles.intro}
        />
        <RevealGroup as="ul" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {roles.items.map((r) => (
            <RevealItem as="li" key={r.title}>
              <Spotlight className="flex h-full flex-col rounded-card border border-line bg-paper p-7">
                <span
                  aria-hidden="true"
                  className="grid size-11 place-items-center rounded-xl bg-ink font-mono text-[0.78rem] font-semibold text-mint"
                >
                  {r.code}
                </span>
                <h3 className="t-h3 mt-6">{r.title}</h3>
                <p className="mt-1 font-mono text-[0.72rem] text-subtle">{r.sub}</p>
                <p className="mt-4 flex-1 text-[0.98rem] text-ink-soft">{r.body}</p>
                <p className="mt-6 border-t border-line pt-4 text-[0.88rem] font-medium text-green-deep">
                  {r.owns}
                </p>
              </Spotlight>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <RindBand />

      <Section id="rules" labelledBy="rules-title" tone="ink" grid="center">
        <SectionHeading
          id="rules-title"
          tone="ink"
          eyebrow={rules.eyebrow}
          title={rules.title}
          intro={rules.intro}
        />
        <RevealGroup
          as="ol"
          className="grid gap-px overflow-hidden rounded-card border border-line-ink bg-line-ink md:grid-cols-2"
        >
          {rules.items.map((r, i) => (
            <li key={r.title} className="bg-ink">
              <RevealItem className="p-7 sm:p-9">
                <span className="font-mono text-[0.74rem] text-mint">0{i + 1}</span>
                <h3 className="t-h3 mt-5">{r.title}</h3>
                <p className="mt-3 text-[0.98rem] text-on-ink-soft">{r.body}</p>
              </RevealItem>
            </li>
          ))}
        </RevealGroup>
      </Section>

      <Section id="coverage" labelledBy="coverage-title" tone="ink">
        <SectionHeading
          id="coverage-title"
          tone="ink"
          eyebrow={coverage.eyebrow}
          title={coverage.title}
          intro={coverage.intro}
        />
        <RevealGroup as="ul" className="grid gap-4 lg:grid-cols-3">
          {coverage.items.map((c) => (
            <RevealItem
              as="li"
              key={c.title}
              className="rounded-card border border-line-ink bg-ink-2/50 p-7"
            >
              <p className="t-eyebrow text-mint">{c.zone}</p>
              <h3 className="t-h3 mt-5">{c.title}</h3>
              <p className="mt-3 text-[0.98rem] text-on-ink-soft">{c.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <FinalCta {...aboutCta} />
    </>
  )
}
