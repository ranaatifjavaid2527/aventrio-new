import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseStudies, caseStudyBySlug, caseStudyPath } from '@/content/caseStudies'
import { CaseStudyView } from '@/components/cases/CaseStudyView'
import { JsonLd } from '@/components/ui/JsonLd'
import {
  breadcrumbLd,
  caseStudyLd,
  graph,
  organizationLd,
  webPageLd,
  websiteLd,
} from '@/lib/jsonld'
import { pageMetadata } from '@/lib/metadata'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = caseStudyBySlug((await params).slug)
  if (!c) return {}
  return pageMetadata({
    title: `${c.service} case study: ${c.sector} | Aventrio`,
    description: c.summary,
    path: caseStudyPath(c),
    absoluteTitle: true,
    noindex: c.sample,
  })
}

export default async function CaseStudyPage({ params }: Props) {
  const c = caseStudyBySlug((await params).slug)
  if (!c) notFound()
  const path = caseStudyPath(c)
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd('WebPage', path, c.headline, c.summary),
          breadcrumbLd([
            { name: 'Case studies', path: '/case-studies' },
            { name: c.headline, path },
          ]),
          caseStudyLd(path, c.headline, c.summary, c.service),
        )}
      />
      <CaseStudyView c={c} />
    </>
  )
}
