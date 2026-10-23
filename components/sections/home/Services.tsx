import Link from 'next/link'
import { services } from '@/content/home'
import { servicePageFor } from '@/content/seoPages'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Spotlight } from '@/components/ui/Spotlight'

const span = { wide: 'lg:col-span-3', third: 'lg:col-span-2' } as const

export function Services() {
  return (
    <Section id="services" labelledBy="services-title">
      <SectionHeading
        id="services-title"
        eyebrow={services.eyebrow}
        title={services.title}
        intro={services.intro}
      />
      <RevealGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {services.items.map((s) => {
          const featured = 'featured' in s && s.featured
          const page = servicePageFor(s.title)
          return (
            <RevealItem key={s.title} className={`${span[s.size]} ${featured ? 'on-ink' : ''}`}>
              <Spotlight
                className={`h-full rounded-card border p-7 transition-colors duration-200 sm:p-8 ${
                  featured
                    ? 'border-line-ink bg-ink text-on-ink'
                    : 'border-line bg-paper hover:border-line-strong'
                }`}
              >
                <p className={`t-eyebrow ${featured ? 'text-mint' : 'text-subtle'}`}>{s.tag}</p>
                <h3 className="t-h3 mt-5 text-[1.5rem]">
                  {page ? (
                    <Link
                      href={page.path}
                      className={`underline decoration-1 underline-offset-4 ${featured ? 'decoration-mint/50 hover:text-mint' : 'decoration-line-strong hover:text-green-deep'}`}
                    >
                      {s.title}
                    </Link>
                  ) : (
                    s.title
                  )}
                </h3>
                <p
                  className={`mt-3 text-[0.98rem] ${featured ? 'text-on-ink-soft' : 'text-ink-soft'}`}
                >
                  {s.body}
                </p>
                {'chips' in s ? (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.chips.map((c) => (
                      <li
                        key={c}
                        className={`rounded-full border px-3 py-1 font-mono text-[0.7rem] ${
                          featured
                            ? 'border-line-ink text-on-ink-soft'
                            : 'border-line text-ink-soft'
                        }`}
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Spotlight>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
