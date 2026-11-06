/**
 * Clear terms page. Plain-English version of the commercial terms. Preview terms:
 * the figures and periods here must match content/home.ts (pricing), content/faq.ts and
 * public/llms.txt. Not legal advice and not a contract: the signed agreement governs.
 */
export const clearTerms = {
  path: '/clear-terms',
  title: 'Clear Terms: Pricing, Contract and Data Ownership | Aventrio',
  description:
    'How an Aventrio outsourced SDR engagement is priced, how long it lasts, what counts as a meeting and who owns the data, in plain English before you book a call.',
  eyebrow: 'Clear terms',
  h1: 'The terms, the contract and who owns what, in plain English.',
  lede: 'Most outbound providers keep these behind a sales call. Here is how it works, so you can judge the deal before you talk to anyone. The signed agreement is what governs; this page is the summary of it.',
}

export const termSections = [
  {
    slug: 'price',
    title: 'How pricing works',
    body: [
      'It is a flat monthly fee per rep. There are no commissions, no benefits line, no separate tooling or data charges, and no per-meeting surcharge.',
      'The exact figure depends on seniority, since an SDR seat and an account executive seat are priced differently, and on how many seats you run. We quote it on the first call and confirm the figure in writing before anything is signed.',
    ],
    list: [
      'A named rep on three accounts at most',
      'Verified contact data',
      'Separate warmed sending domains, registered in your name',
      'Email, LinkedIn and phone sequences written per segment and rewritten monthly',
      'A weekly report of sent, opened, replied, booked, held and converted',
      'A manager who has carried a US quota',
    ],
  },
  {
    slug: 'contract',
    title: 'Contract and notice',
    body: [
      'The first 60 days are a pilot. After that the engagement is month to month, and either side can end it with 30 days’ notice.',
      'There is no annual commitment. Sixty days is long enough to see first replies and held meetings, and short enough that you are not locked in.',
    ],
  },
  {
    slug: 'start',
    title: 'Live by day 14',
    body: [
      'First outreach goes out within 14 days of kickoff. If it is not live by then, your next invoice waits until it is.',
      'The 14 days start on the day we have your ICP sign-off and the access we need. This is a promise about our delivery. It is not a promise about results.',
    ],
  },
  {
    slug: 'meeting',
    title: 'What counts as a meeting',
    body: [
      'Before launch, we write down what a qualified meeting is for your business: who attends, what they have said yes to, and how it is counted. You approve it.',
      'Booked, held and converted are reported as separate figures. A no-show is reported as a no-show and is not counted as a held meeting.',
    ],
  },
  {
    slug: 'ownership',
    title: 'Who owns what',
    body: [
      'You do. Contact lists, sequences, sending domains, call notes and reports are yours and can be exported at any time, including after you leave.',
      'Sending domains are registered in your name, so the reputation built on them stays with you.',
    ],
  },
  {
    slug: 'no-promise',
    title: 'What we do not promise',
    body: [
      'We do not promise a number of meetings, replies or revenue. Too much of the outcome sits with your offer, your market and timing.',
      'If we cannot find a repeatable reason your buyers say yes, we will tell you on the first call instead of taking three months to find out. If a rep is not performing, we replace and re-ramp them at our cost.',
    ],
  },
] as const
