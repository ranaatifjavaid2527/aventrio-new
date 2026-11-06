import { clearTerms } from '@/content/clearTerms'
import { ogContentType, ogImage, ogSize } from '@/lib/og'

export const alt = 'Aventrio clear terms'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogImage({ eyebrow: 'Clear terms', title: clearTerms.h1 })
}
