/**
 * Case studies. Empty on purpose: only real engagements, named with the
 * client's written approval, go here. While the list is empty the routes
 * return 404 and are left out of the sitemap.
 */
export type CaseStudy = {
  slug: string
  client: string
  title: string
  summary: string
  /** Confirm written approval from the client before publishing. */
  approvedByClient: true
  sections: { heading: string; body: string[] }[]
}

export const caseStudies: CaseStudy[] = []
