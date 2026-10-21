import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { seoPages } from '@/content/seoPages'
import { JsonLd } from '@/components/ui/JsonLd'
import { SeoPageView } from '@/components/sections/SeoPageView'
import { pageMetadata } from '@/lib/metadata'
import {
  breadcrumbLd,
  graph,
  organizationLd,
  pageFaqLd,
  servicePageLd,
  webPageLd,
  websiteLd,
} from '@/lib/jsonld'

type Props = { params: Promise<{ slug: string }> }

const pages = seoPages.filter((p) => p.group === 'services')
const find = (slug: string) => pages.find((p) => p.slug === slug)

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = find((await params).slug)
  if (!page) return {}
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    absoluteTitle: true,
  })
}

export default async function Page({ params }: Props) {
  const page = find((await params).slug)
  if (!page) notFound()
  return (
    <>
      <JsonLd
        data={graph(
          organizationLd(),
          websiteLd(),
          webPageLd('WebPage', page.path, page.title, page.description),
          breadcrumbLd([{ name: page.eyebrow, path: page.path }]),
          pageFaqLd(page.path, page.faq),
          page.serviceName ? [servicePageLd(page.serviceName, page.description, page.path)] : [],
        )}
      />
      <SeoPageView page={page} />
    </>
  )
}
