import { ogContentType, ogImage, ogSize } from '@/lib/og'

export const alt = 'About Aventrio'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogImage({ eyebrow: 'About Aventrio', title: 'Outbound is a craft. We staff it like one.' })
}
