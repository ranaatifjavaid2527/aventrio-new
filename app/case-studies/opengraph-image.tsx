import { ogContentType, ogImage, ogSize } from '@/lib/og'

export const alt = 'Aventrio case studies'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogImage({
    eyebrow: 'Case studies',
    title: 'The work, the numbers, and the part that did not go to plan.',
  })
}
