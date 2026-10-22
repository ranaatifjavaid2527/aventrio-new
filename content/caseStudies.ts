/**
 * Case studies. Only real engagements go here, and every one is anonymous: the
 * client is described by sector and size, never named, and no logo is shown.
 * Every number must come from a record that can be produced on request (the
 * sending platform export, the CRM, the calendar), and `proof` says which.
 *
 * While the list is empty the routes return 404 and are left out of the sitemap
 * and navigation. For a local design preview only, CASE_STUDY_PREVIEW=1 swaps in
 * the clearly labelled samples from ./caseStudies.sample.ts. Never set it on Vercel.
 */
import { sampleCaseStudies } from './caseStudies.sample'

export const caseServices = [
  'Outsourced SDR',
  'Pipeline audit',
  'Account executives',
  'Account-based marketing',
] as const
export type CaseService = (typeof caseServices)[number]

export type CaseStudy = {
  slug: string
  service: CaseService
  /** Who the client is, without naming them: "B2B SaaS, Series A, about 60 people" */
  sector: string
  /** "March to August 2026" */
  period: string
  /** The one line result, used as the h1 and the card title */
  headline: string
  /** Two or three sentences: who they were and what changed */
  summary: string
  /** Exactly three headline figures, each traceable to `proof` */
  metrics: { value: string; label: string }[]
  /** Where the numbers come from, shown under the figures */
  proof: string
  before: string[]
  whatWeDid: string[]
  results: string[]
  /** What did not work. Required: every case study says it. */
  honest: string[]
  /** Optional quote, attributed by role only */
  quote?: { text: string; role: string }
  /** Confirm the client agreed to an anonymised write up before publishing. */
  approvedByClient: true
  /** Set only on the samples, so they can never be mistaken for real work */
  sample?: true
}

const real: CaseStudy[] = []

export const caseStudies: CaseStudy[] =
  real.length === 0 && process.env.CASE_STUDY_PREVIEW === '1' ? sampleCaseStudies : real

export const caseStudyBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug)
export const caseStudyPath = (c: CaseStudy) => `/case-studies/${c.slug}`
