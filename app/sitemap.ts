import type { MetadataRoute } from 'next'
import { postPath, posts } from '@/content/blog'
import { caseStudies } from '@/content/caseStudies'
import { industryPages } from '@/content/industries'
import { seoPages } from '@/content/seoPages'
import { site } from '@/content/site'

/** Generated from the routes that actually have content. Empty scaffolds are left out. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const url = (p: string) => new URL(p, site.url).toString()
  const core: MetadataRoute.Sitemap = [
    { url: url('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: url('/about'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/book'), lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: url('/privacy'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: url('/terms'), lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]
  const landing = seoPages.map((p) => ({
    url: url(p.path),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))
  const articles: MetadataRoute.Sitemap = [
    {
      url: url('/blog'),
      lastModified: posts[0] ? new Date(posts[0].updated ?? posts[0].published) : now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...posts.map((p) => ({
      url: url(postPath(p)),
      lastModified: new Date(p.updated ?? p.published),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
  const industries = industryPages.map((p) => ({
    url: url(`/industries/${p.slug}`),
    lastModified: now,
    priority: 0.7,
  }))
  const realCases = caseStudies.filter((c) => !c.sample)
  const cases = realCases.length
    ? [
        { url: url('/case-studies'), lastModified: now, priority: 0.6 },
        ...realCases.map((c) => ({
          url: url(`/case-studies/${c.slug}`),
          lastModified: now,
          priority: 0.6,
        })),
      ]
    : []
  return [...core, ...landing, ...articles, ...industries, ...cases]
}
