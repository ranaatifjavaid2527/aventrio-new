import { blog } from '@/content/blog'
import { ogContentType, ogImage, ogSize } from '@/lib/og'

export const alt = 'Aventrio blog'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogImage({ eyebrow: 'Aventrio blog', title: blog.h1 })
}
