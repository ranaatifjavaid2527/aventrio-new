/**
 * Industry pages. Empty on purpose until the copy is written and approved
 * (planned first: software-saas, it-services; see docs/keyword-research.md).
 * While empty, the routes return 404 and are left out of the sitemap.
 */
export type IndustryPage = {
  slug: string
  name: string
  title: string
  description: string
  intro: string
  sections: { heading: string; body: string[] }[]
}

export const industryPages: IndustryPage[] = []
