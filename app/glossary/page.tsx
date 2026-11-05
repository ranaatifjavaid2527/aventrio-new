import Link from 'next/link'
import { glossary, terms } from '@/content/glossary'
import { site } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Icon } from '@/components/ui/Icon'
import { JsonLd } from '@/components/ui/JsonLd'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbLd, graph, organizationLd, webPageLd } from '@/lib/jsonld'

export const metadata = pageMetadata({
  title: glossary.title,
  description: glossary.description,
  path: glossary.path,
  absoluteTitle: true,
})

export default function GlossaryPage() {
  const setUrl = new URL(glossary.path, site.url).toString()
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          webPageLd('CollectionPage', glossary.path, glossary.title, glossary.description),
          breadcrumbLd([{ name: 'Glossary', path: glossary.path }]),
          {
            '@type': 'DefinedTermSet',
            '@id': `${setUrl}#terms`,
            name: 'Outbound sales glossary',
            url: setUrl,
            hasDefinedTerm: terms.map((t) => ({
              '@type': 'DefinedTerm',
              name: t.term,
              description: t.more ? `${t.definition} ${t.more}` : t.definition,
              url: `${setUrl}#${t.slug}`,
              inDefinedTermSet: { '@id': `${setUrl}#terms` },
            })),
          },
        )}
      />
      <article
        aria-labelledby="page-title"
        className="relative bg-paper pt-14 pb-[var(--section-y)] sm:pt-20"
      >
        <div aria-hidden="true" className="grid-texture" />
        <Container className="relative max-w-3xl">
          <Eyebrow>{glossary.eyebrow}</Eyebrow>
          <h1 id="page-title" className="t-h2">
            {glossary.h1}
          </h1>
          <p className="mt-6 text-lg text-ink-soft">{glossary.lede}</p>

          <nav aria-label="Terms" className="mt-10 rounded-card border border-line bg-surface p-5">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[0.92rem]">
              {terms.map((t) => (
                <li key={t.slug}>
                  <a href={`#${t.slug}`} className="text-green-deep hover:underline">
                    {t.term.split(' (')[0]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <dl className="mt-12 divide-y divide-line border-y border-line">
            {terms.map((t) => (
              <div key={t.slug} id={t.slug} className="scroll-mt-24 py-7">
                <dt>
                  <h2 className="text-[1.3rem]">{t.term}</h2>
                </dt>
                <dd className="mt-3 space-y-3 text-ink-soft">
                  <p>{t.definition}</p>
                  {t.more ? <p>{t.more}</p> : null}
                  {t.link ? (
                    <p>
                      <Link
                        href={t.link.href}
                        className="inline-flex items-center gap-2 font-medium text-green-deep"
                      >
                        {t.link.label} <Icon name="arrowRight" className="size-3.5" />
                      </Link>
                    </p>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 rounded-card border border-line bg-surface p-5 text-ink">
            Want outbound run for you by named reps? See{' '}
            <Link
              href="/services/outsourced-sdr"
              className="text-green-deep underline underline-offset-4"
            >
              outsourced SDR services
            </Link>{' '}
            or{' '}
            <Link href="/book" className="text-green-deep underline underline-offset-4">
              book a strategy call
            </Link>
            .
          </p>
        </Container>
      </article>
    </>
  )
}
