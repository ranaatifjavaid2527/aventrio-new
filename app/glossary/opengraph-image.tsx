import { glossary } from '@/content/glossary'
import { ogContentType, ogImage, ogSize } from '@/lib/og'

export const alt = 'Aventrio outbound sales glossary'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return ogImage({ eyebrow: 'Glossary', title: glossary.h1 })
}
