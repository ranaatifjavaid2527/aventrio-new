import Link from 'next/link'
import { clearTerms, termSections } from '@/content/clearTerms'
import { BookCallButton } from '@/components/ui/BookCallButton'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { JsonLd } from '@/components/ui/JsonLd'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbLd, graph, organizationLd, webPageLd } from '@/lib/jsonld'

export const metadata = pageMetadata({
  title: clearTerms.title,
  description: clearTerms.description,
  path: clearTerms.path,
  absoluteTitle: true,
})

export default function ClearTermsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          webPageLd('WebPage', clearTerms.path, clearTerms.title, clearTerms.description),
          breadcrumbLd([{ name: 'Clear terms', path: clearTerms.path }]),
        )}
      />
      <article
        aria-labelledby="page-title"
        className="relative bg-paper pt-14 pb-[var(--section-y)] sm:pt-20"
      >
        <div aria-hidden="true" className="grid-texture" />
        <Container className="relative max-w-3xl">
          <Eyebrow>{clearTerms.eyebrow}</Eyebrow>
          <h1 id="page-title" className="t-h2">
            {clearTerms.h1}
          </h1>
          <p className="mt-6 text-lg text-ink-soft">{clearTerms.lede}</p>

          <nav
            aria-label="On this page"
            className="mt-10 rounded-card border border-line bg-surface p-5"
          >
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[0.92rem]">
              {termSections.map((t) => (
                <li key={t.slug}>
                  <a href={`#${t.slug}`} className="text-green-deep hover:underline">
                    {t.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {termSections.map((t) => (
              <section key={t.slug} id={t.slug} className="scroll-mt-24 py-8">
                <h2 className="text-[1.3rem]">{t.title}</h2>
                <div className="mt-3 space-y-3 text-ink-soft">
                  {t.body.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                  {'list' in t ? (
                    <ul className="mt-4 space-y-2 border-l-2 border-green pl-4 text-ink">
                      {t.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-card border border-line bg-surface p-6">
            <p className="text-ink">
              Questions about any of this are fair game on the call. You can also read{' '}
              <Link
                href="/services/outsourced-sdr"
                className="text-green-deep underline underline-offset-4"
              >
                how the outsourced SDR service works
              </Link>
              .
            </p>
            <div className="mt-5">
              <BookCallButton>Book a 30 minute call</BookCallButton>
            </div>
          </div>
        </Container>
      </article>
    </>
  )
}
