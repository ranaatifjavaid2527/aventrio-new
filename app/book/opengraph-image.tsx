import { ogContentType, ogImage, ogSize } from '@/lib/og'

export const alt = 'Book a call with Aventrio'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogImage({
    eyebrow: 'Book a call',
    title: 'Thirty minutes, no deck. A straight answer on whether outbound fits.',
  })
}
