import { caseStudyBySlug } from '@/content/caseStudies'
import { ogContentType, ogImage, ogSize } from '@/lib/og'

export const alt = 'Aventrio case study'
export const size = ogSize
export const contentType = ogContentType

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const c = caseStudyBySlug((await params).slug)
  return ogImage({
    eyebrow: c ? `Case study · ${c.service}` : 'Case study',
    title: c?.headline ?? 'Outbound for tech companies',
  })
}
