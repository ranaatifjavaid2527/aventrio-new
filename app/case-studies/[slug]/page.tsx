import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseStudies } from '@/content/caseStudies'
import { SimpleArticle } from '@/components/sections/SimpleArticle'
import { pageMetadata } from '@/lib/metadata'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const c = caseStudies.find((x) => x.slug === slug)
  if (!c) return {}
  return pageMetadata({ title: c.title, description: c.summary, path: `/case-studies/${c.slug}` })
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const c = caseStudies.find((x) => x.slug === slug)
  if (!c) notFound()
  return (
    <SimpleArticle
      eyebrow={`Case study · ${c.client}`}
      title={c.title}
      intro={c.summary}
      sections={c.sections}
    />
  )
}
