import { postBySlug, posts } from '@/content/blog'
import { ogContentType, ogImage, ogSize } from '@/lib/og'

export const alt = 'Aventrio blog'
export const size = ogSize
export const contentType = ogContentType

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = postBySlug((await params).slug)
  return ogImage({ eyebrow: 'Aventrio blog', title: post?.h1 ?? 'Notes on outbound' })
}
