/**
 * DESIGN SAMPLES ONLY. These are not real engagements and must never be
 * published. They exist so the case study layout can be previewed locally with
 * CASE_STUDY_PREVIEW=1 before real, approved cases are written.
 */
import type { CaseStudy } from './caseStudies'

const base = { approvedByClient: true, sample: true } as const

export const sampleCaseStudies: CaseStudy[] = [
  {
    ...base,
    slug: 'sample-saas-series-a',
    service: 'Outsourced SDR',
    sector: 'Sample · B2B SaaS, Series A, about 60 people',
    period: 'Sample period, six months',
    headline: 'Sample headline: a quiet referral pipeline replaced by a booked calendar.',
    summary:
      'Sample summary. A short description of who the client was, what was broken when we arrived, and what changed by the end of the engagement.',
    metrics: [
      { value: '00,000', label: 'Sample metric one' },
      { value: '0.0%', label: 'Sample metric two' },
      { value: '00', label: 'Sample metric three' },
    ],
    proof: 'Sample proof line: where the numbers come from, such as the sending platform export.',
    before: [
      'Sample paragraph describing the situation before the engagement: the offer, the list, the domain and the team.',
    ],
    whatWeDid: [
      'Sample step one: defined the ICP with the founder.',
      'Sample step two: built separate sending domains and a verified list.',
      'Sample step three: named reps wrote, sent and handled every reply.',
    ],
    results: [
      'Sample paragraph with the full results, in the order sent, replied, booked, held and converted.',
    ],
    honest: ['Sample paragraph describing what did not work, and what was changed because of it.'],
    quote: { text: 'Sample quote from the client, attributed by role only.', role: 'Sample role' },
  },
  {
    ...base,
    slug: 'sample-it-services-audit',
    service: 'Pipeline audit',
    sector: 'Sample · IT services firm, about 120 people',
    period: 'Sample period, two weeks',
    headline: 'Sample headline: the list was the problem, not the copy.',
    summary: 'Sample summary for a second case, to preview the grid with a different service.',
    metrics: [
      { value: '0', label: 'Sample metric one' },
      { value: '00%', label: 'Sample metric two' },
      { value: '0 wks', label: 'Sample metric three' },
    ],
    proof: 'Sample proof line.',
    before: ['Sample before paragraph.'],
    whatWeDid: ['Sample step one.', 'Sample step two.'],
    results: ['Sample results paragraph.'],
    honest: ['Sample honest paragraph.'],
  },
  {
    ...base,
    slug: 'sample-devtools-aes',
    service: 'Account executives',
    sector: 'Sample · Developer tools, seed stage',
    period: 'Sample period, one quarter',
    headline: 'Sample headline: meetings were being booked, and nobody was closing them.',
    summary: 'Sample summary for a third case.',
    metrics: [
      { value: '00', label: 'Sample metric one' },
      { value: '0', label: 'Sample metric two' },
      { value: '00 days', label: 'Sample metric three' },
    ],
    proof: 'Sample proof line.',
    before: ['Sample before paragraph.'],
    whatWeDid: ['Sample step one.', 'Sample step two.', 'Sample step three.'],
    results: ['Sample results paragraph.'],
    honest: ['Sample honest paragraph.'],
  },
  {
    ...base,
    slug: 'sample-fintech-abm',
    service: 'Account-based marketing',
    sector: 'Sample · Fintech infrastructure, Series B',
    period: 'Sample period, five months',
    headline: 'Sample headline: forty named accounts, mapped stakeholder by stakeholder.',
    summary: 'Sample summary for a fourth case.',
    metrics: [
      { value: '00', label: 'Sample metric one' },
      { value: '000', label: 'Sample metric two' },
      { value: '0', label: 'Sample metric three' },
    ],
    proof: 'Sample proof line.',
    before: ['Sample before paragraph.'],
    whatWeDid: ['Sample step one.', 'Sample step two.'],
    results: ['Sample results paragraph.'],
    honest: ['Sample honest paragraph.'],
  },
]
