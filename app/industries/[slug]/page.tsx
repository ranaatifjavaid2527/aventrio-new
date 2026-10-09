import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { industryPages } from '@/content/industries'
import { JsonLd } from '@/components/ui/JsonLd'
import { SimpleArticle } from '@/components/sections/SimpleArticle'
import { pageMetadata } from '@/lib/metadata'
import { breadcrumbLd, graph } from '@/lib/jsonld'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = industryPages.find((x) => x.slug === slug)
  if (!p) return {}
  return pageMetadata({ title: p.title, description: p.description, path: `/industries/${p.slug}` })
}

export default async function IndustryPageRoute({ params }: Props) {
  const { slug } = await params
  const p = industryPages.find((x) => x.slug === slug)
  if (!p) notFound()
  return (
    <>
      <JsonLd data={graph(breadcrumbLd([{ name: p.name, path: `/industries/${p.slug}` }]))} />
      <SimpleArticle eyebrow={p.name} title={p.title} intro={p.intro} sections={p.sections} />
    </>
  )
}
