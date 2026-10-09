import { ogContentType, ogImage, ogSize } from '@/lib/og'

export const alt = 'Aventrio: outbound SDR teams that build your pipeline'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogImage({
    eyebrow: 'Outbound sales agency',
    title: 'Outbound SDR teams that build your pipeline.',
  })
}
