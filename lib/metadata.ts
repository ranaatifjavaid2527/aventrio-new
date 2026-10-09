import type { Metadata } from 'next'
import { site } from '@/content/site'

type PageMeta = {
  title: string
  description: string
  path: string
  /** Use the title exactly as written, without the brand suffix template. */
  absoluteTitle?: boolean
  noindex?: boolean
}

/** Unique title, description, canonical, Open Graph and Twitter card for a route. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  noindex,
}: PageMeta): Metadata {
  const url = new URL(path, site.url).toString()
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: 'website',
      url,
      siteName: site.name,
      title,
      description,
      locale: 'en_US',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}
