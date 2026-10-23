import { notFound } from 'next/navigation'
import { caseStudies, caseStudyPath } from '@/content/caseStudies'
import { site } from '@/content/site'
import { CaseGrid } from '@/components/cases/CaseGrid'
import { FinalCta } from '@/components/sections/FinalCta'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { JsonLd } from '@/components/ui/JsonLd'
import { breadcrumbLd, graph, organizationLd, webPageLd, websiteLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/metadata'

const title = 'Case Studies: Outbound for Tech Companies | Aventrio'
const description =
  'Anonymised outbound engagements for software, SaaS and IT services companies: what we walked into, what we did, the numbers on record and what did not work.'
const preview = caseStudies.some((c) => c.sample)

export const metadata = pageMetadata({
  title,
  description,
  path: '/case-studies',
  absoluteTitle: true,
  noindex: preview,
})

const cta = {
  title: 'Find out whether outbound is worth it for you.',
  body: 'Thirty minutes, no deck. You’ll leave with a sample target list matched to your ICP, a view of what your first fourteen days would look like, and a straight answer on whether outbound suits your offer, including if that answer is no.',
  primary: 'Book your strategy call',
  secondary: { label: 'See how it runs', href: '/#process' },
}

export default function CaseStudiesPage() {
  if (caseStudies.length === 0) notFound()
  const n = caseStudies.length
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd('CollectionPage', '/case-studies', title, description),
          breadcrumbLd([{ name: 'Case studies', path: '/case-studies' }]),
          {
            '@type': 'ItemList',
            itemListElement: caseStudies.map((c, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: c.headline,
              url: new URL(caseStudyPath(c), site.url).toString(),
            })),
          },
        )}
      />
      {preview ? (
        <p className="bg-ink px-4 py-2 text-center text-[0.85rem] font-medium text-on-ink">
          Design sample. Not real engagements. Local preview only.
        </p>
      ) : null}
      <section
        aria-labelledby="page-title"
        className="relative overflow-hidden bg-paper pt-14 pb-[var(--section-y)] sm:pt-20"
      >
        <div aria-hidden="true" className="grid-texture" data-mask="edges" />
        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow>Case studies</Eyebrow>
            <h1 id="page-title" className="t-h2 text-balance">
              The work, the numbers, and the part that did not go to plan.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Each case shows what we walked into, what we did, the figures we can produce the
              record for, and what did not work. Clients are not named; every number is.
            </p>
            <p className="mt-6 font-mono text-[0.72rem] tracking-[0.1em] text-subtle uppercase">
              {n} {n === 1 ? 'engagement' : 'engagements'} · anonymised · figures from source
              records
            </p>
          </div>
          <div className="mt-12">
            <CaseGrid cases={caseStudies} />
          </div>
        </Container>
      </section>
      <FinalCta {...cta} />
    </>
  )
}
