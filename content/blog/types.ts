import type { FaqItem } from '../faq'

/**
 * One block of an article body. Text in `p`, `ul` and `note` may contain inline
 * links written as [label](href); internal hrefs start with a slash.
 */
/**
 * A diagram built from real text, never an image: the steps or columns are the
 * explanation, so screen readers and AI search read exactly what sighted readers see.
 * Only use facts already stated in the post, no invented figures.
 */
export type BlogFigure =
  | {
      kind: 'flow'
      title: string
      caption: string
      steps: { label: string; detail?: string }[]
      /** What happens when every step passes, and when one fails */
      outcome: { pass: string; fail: string }
    }
  | {
      kind: 'compare'
      title: string
      caption: string
      left: { heading: string; points: string[] }
      right: { heading: string; points: string[] }
    }

export type BlogBlock =
  | { h2: string }
  | { h3: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { note: string }
  | { figure: BlogFigure }

export type BlogSource = {
  label: string
  url: string
  /** Who published it, and whether it is a vendor claim. Shown next to the link. */
  publisher: string
}

export type BlogPost = {
  slug: string
  /** Primary keyword, one per post, never shared with another page */
  keyword: string
  /** Title tag, under 60 characters where possible */
  title: string
  description: string
  h1: string
  /** ISO dates, YYYY-MM-DD */
  published: string
  updated?: string
  tags: string[]
  /** Three to five one-line answers, shown first. Written to be quotable by AI search. */
  takeaways: string[]
  body: BlogBlock[]
  faq: FaqItem[]
  sources: BlogSource[]
  /** Site pages this post supports; at least one services or compare page */
  related: { label: string; href: string }[]
}
