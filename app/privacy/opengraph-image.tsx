import { ogContentType, ogImage, ogSize } from '@/lib/og'

export const alt = 'Aventrio privacy policy'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogImage({ eyebrow: 'Legal', title: 'Privacy Policy' })
}
