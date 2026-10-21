import { seoPages } from '@/content/seoPages'
import { ogContentType, ogImage, ogSize } from '@/lib/og'

export const alt = 'Aventrio'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return seoPages.filter((p) => p.group === 'services').map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = seoPages.find((p) => p.group === 'services' && p.slug === slug)
  return ogImage({
    eyebrow: page?.eyebrow ?? 'Aventrio',
    title: page?.h1 ?? 'Outbound for tech companies',
  })
}
