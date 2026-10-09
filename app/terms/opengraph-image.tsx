import { ogContentType, ogImage, ogSize } from '@/lib/og'

export const alt = 'Aventrio terms of service'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogImage({ eyebrow: 'Legal', title: 'Terms of Service' })
}
