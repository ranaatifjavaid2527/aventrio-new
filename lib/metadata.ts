import type { Metadata } from 'next'
import { site } from '@/content/site'

type PageMeta = {
  title: string
  description: string
  path: string
  /** Use the title exactly as written, without the brand suffix template. */
  absoluteTitle?: boolean
  noindex?: boolean
  /** Blog posts: Open Graph article type with dates, author and tags. */
  article?: { publishedTime: string; modifiedTime?: string; author: string; tags: string[] }
  /** Advertise the blog RSS feed */
  rss?: boolean
}

/** Unique title, description, canonical, Open Graph and Twitter card for a route. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle,
  noindex,
  article,
  rss,
}: PageMeta): Metadata {
  const url = new URL(path, site.url).toString()
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      ...(rss ? { types: { 'application/rss+xml': `${site.url}/blog/feed.xml` } } : {}),
    },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      ...(article
        ? {
            type: 'article',
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime ?? article.publishedTime,
            authors: [article.author],
            tags: article.tags,
          }
        : { type: 'website' }),
      url,
      siteName: site.name,
      title,
      description,
      locale: 'en_US',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}
