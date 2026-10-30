import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

/** Search engines and AI answer engines are explicitly welcome. */
const answerEngines = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/crm/'] },
      ...answerEngines.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/', '/crm/'],
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
