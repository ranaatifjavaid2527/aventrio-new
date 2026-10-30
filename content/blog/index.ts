/**
 * Blog posts. To publish, add a file in ./posts and list it here. Researched posts
 * waiting for their slot live in ./drafts and are not imported until they are due:
 * one post per publishing day, three a week (Monday, Wednesday, Friday). Every
 * post must follow the house rules: no dashes, no invented numbers, every figure
 * linked to its source and labelled when it is a vendor claim, no promised outcomes.
 */
import type { BlogBlock, BlogPost } from './types'
import { aiSdrVsHumanSdr } from './posts/ai-sdr-vs-human-sdr'
import { coldEmailDeliverability2026 } from './posts/cold-email-deliverability-2026'
import { outboundSignalsOverVolume } from './posts/outbound-signals-over-volume'

export type { BlogBlock, BlogPost } from './types'

const all: BlogPost[] = [coldEmailDeliverability2026, aiSdrVsHumanSdr, outboundSignalsOverVolume]

/** Newest first; same-day posts keep the order above. */
export const posts = [...all].sort((a, b) => b.published.localeCompare(a.published))

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug)

export const postPath = (p: BlogPost) => `/blog/${p.slug}`

export const blog = {
  path: '/blog',
  title: 'Outbound Sales Development Blog | Aventrio',
  description:
    'Practical notes on outbound for tech companies: cold email deliverability, SDR team design, AI in sales development and what is changing each week. Sources linked.',
  eyebrow: 'Blog',
  h1: 'What is changing in outbound, and what to do about it.',
  lede: 'Three short, sourced posts a week on sales development for software, SaaS and IT services companies. Every figure links to where it came from, and vendor numbers are labelled as vendor numbers.',
}

const words = (b: BlogBlock) => Object.values(b).flat().join(' ').split(/\s+/).length

export function readingMinutes(p: BlogPost) {
  const total = p.body.reduce((n, b) => n + words(b), 0) + p.takeaways.join(' ').split(/\s+/).length
  return Math.max(1, Math.round(total / 230))
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
