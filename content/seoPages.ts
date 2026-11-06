/**
 * Keyword landing pages from docs/keyword-research.md (section 5, ranks 1 to 4).
 * One primary keyword per page, no two pages share one. Every claim here repeats
 * something already stated elsewhere on the site: no new numbers, clients or promises.
 */
import type { FaqItem } from './faq'

export type SeoSection = {
  heading: string
  body?: string[]
  bullets?: string[]
  /** Render the in-house / agency / Aventrio comparison table from content/home.ts */
  comparisonTable?: boolean
}

export type SeoPage = {
  /** URL path, also the canonical */
  path: string
  group: 'services' | 'compare'
  slug: string
  /** Primary keyword, for the record (docs/keyword-research.md section 4) */
  keyword: string
  title: string
  description: string
  eyebrow: string
  h1: string
  lede: string
  serviceName?: string
  sections: SeoSection[]
  faq: FaqItem[]
  related: { label: string; href: string }[]
}

export const seoPages: SeoPage[] = [
  {
    path: '/services/outsourced-sdr',
    group: 'services',
    slug: 'outsourced-sdr',
    keyword: 'outsourced sdr services',
    title: 'Outsourced SDR Services for Tech Companies | Aventrio',
    description:
      'Outsourced SDR services for software, SaaS and IT services companies. Named reps on three accounts at most, first outreach in 14 days, month to month after a 60 day start.',
    eyebrow: 'Outsourced SDR services',
    h1: 'Outsourced SDR services, run by named reps who learn your product.',
    lede: 'Aventrio places trained SDRs on your account, managed by sales leads who have carried a US quota. They research, write, send, follow up, handle the first objection and book meetings into your calendar. You get a working outbound team without building the department.',
    serviceName: 'Outsourced SDR teams',
    sections: [
      {
        heading: 'What your outsourced SDR team does',
        bullets: [
          'Defines the buyer with you: your ICP, territories and the reasons your best customers actually signed.',
          'Builds a verified target list. Every contact is enriched and email-verified before it enters a sequence.',
          'Writes email and LinkedIn sequences per segment, and rewrites them monthly against reply data.',
          'Runs outreach across email, LinkedIn and phone, from separate warmed domains.',
          'Handles replies, objections, follow-ups and rescheduling, then books the meeting with a briefing note.',
          'Reports sent, opened, replied, booked, held and converted as six separate figures every Monday.',
        ],
      },
      {
        heading: 'Why SDR outsourcing usually fails, and what we do differently',
        body: [
          'Most outsourced SDR programs fail for reasons that have nothing to do with the product: a scraped list, cold email sent from the primary domain, sequences written once and never touched, and replies that sit unanswered because nobody owns them.',
          'Our reps work a maximum of three accounts, so they can answer a technical question without escalating it. Sending runs on separate domains with SPF, DKIM and DMARC monitored daily, so your primary domain never carries cold volume. If a rep is not performing, we replace and re-ramp them at our cost.',
        ],
      },
      {
        heading: 'From kickoff to first send in 14 days',
        bullets: [
          'Week 1: ICP definition, positioning and target list build.',
          'Week 2: sending infrastructure, sequence writing and rep training on your product.',
          'Day 14: first outreach goes out.',
          'Ongoing: weekly reporting, and copy rewritten against what buyers actually reply to.',
        ],
      },
      {
        heading: 'SDR as a service, on terms you can leave',
        body: [
          'A flat monthly fee per rep, with no commission stacking, no benefits, no separate tooling or data line items and no per-meeting surcharge. The first 60 days are a pilot, then it is month to month on 30 days’ notice.',
          'You own the lists, sequences, sending domains and call notes, and can export them at any time, including if you cancel.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is an outsourced SDR?',
        a: [
          'An outsourced SDR is a sales development rep employed and managed by an outside firm who prospects, writes outreach, follows up and books meetings on behalf of your company. At Aventrio each rep is named, works a maximum of three accounts, and is managed day to day by a sales lead who has carried a US quota.',
        ],
      },
      {
        q: 'How much does an outsourced SDR cost?',
        a: [
          'Aventrio charges a flat monthly fee per rep. The rate depends on seniority and on how many seats you run, so it is quoted on a call. There are no commissions, benefits, tooling line items or per-meeting surcharges, and the first 60 days are a pilot, then it is month to month on 30 days’ notice.',
        ],
      },
      {
        q: 'Do you guarantee a number of meetings?',
        a: [
          'No. Meeting volume depends on your offer, your market and timing nobody controls. What Aventrio commits to is the work: verified data, copy rewritten monthly, monitored sending infrastructure, named reps capped at three accounts, and weekly reporting that separates booked from held from converted.',
        ],
      },
      {
        q: 'How quickly can an outsourced SDR team start?',
        a: [
          'First outreach goes out 14 days after kickoff. Week one covers ICP, positioning and list build; week two covers sending infrastructure, sequence writing and rep training.',
        ],
      },
    ],
    related: [
      { label: 'In-house vs outsourced SDR', href: '/compare/in-house-vs-outsourced-sdr' },
      { label: 'Account executives', href: '/services/account-executives' },
      { label: 'Pipeline audit', href: '/services/pipeline-audit' },
    ],
  },

  {
    path: '/compare/in-house-vs-outsourced-sdr',
    group: 'compare',
    slug: 'in-house-vs-outsourced-sdr',
    keyword: 'in-house vs outsourced sdr',
    title: 'Outsourced SDR vs In-House SDR: Cost and Speed | Aventrio',
    description:
      'Outsourced SDR vs in-house SDR, compared honestly: what a hire really costs, time to first outreach, control and data ownership, and when each one wins.',
    eyebrow: 'Honest comparison',
    h1: 'Outsourced SDR vs in-house SDR: an honest comparison.',
    lede: 'Three ways to get meetings: hire an SDR, use a cold email agency, or bring in an outsourced SDR team. Each one is the right answer for someone. Here is how they compare on the things that decide it.',
    sections: [
      { heading: 'Side by side', comparisonTable: true },
      {
        heading: 'What a fully loaded in-house SDR really costs',
        body: [
          'The salary is the smallest surprise. Add employer tax and benefits, the tools a rep needs to prospect and send, data, recruiting, the management time of whoever coaches them, and the months of ramp you pay for before a rep produces anything.',
          'A US SDR takes months to source, hire and ramp, and if the hire does not work out you carry that cost either way.',
        ],
      },
      {
        heading: 'When in-house is the better choice',
        bullets: [
          'Your product needs months of internal training before anyone can hold a credible conversation about it.',
          'You want outbound knowledge to stay with permanent staff from day one.',
          'You already have a sales leader with time to hire, coach and manage SDRs.',
        ],
      },
      {
        heading: 'When an outsourced SDR team wins',
        bullets: [
          'You need pipeline this quarter, not after a four-month hire.',
          'Nobody internally has run outbound before.',
          'Outbound was tried once, failed, and damaged the sending domain.',
          'You want a fixed monthly cost and a rep replaced at the provider’s cost if they underperform.',
        ],
      },
      {
        heading: 'The hybrid that often works best',
        body: [
          'Many companies start outsourced, learn which segments and messages work, then hire. Because you own the lists, sequences, sending domains and call notes, a working motion can be handed to an in-house team later without starting again.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is an outsourced SDR team better than hiring in-house?',
        a: [
          'It depends on how fast you need pipeline and how complex your product is. An in-house SDR takes months to source, hire and ramp. An outsourced team starts in 14 days and the rep is replaced at the provider’s cost if they underperform. In-house wins when your product needs months of internal training or you want outbound knowledge to stay with permanent staff.',
        ],
      },
      {
        q: 'Should I hire an SDR or outsource?',
        a: [
          'Hire in-house if your product needs months of internal training or you already have a sales leader with time to coach SDRs. Outsource if you need outreach running this quarter, nobody internally has run outbound before, or an earlier attempt failed. Many companies start outsourced, learn what works, then hire.',
        ],
      },
      {
        q: 'How much does an outsourced SDR cost compared with an in-house SDR?',
        a: [
          'An outsourced SDR from Aventrio is a flat monthly fee per rep, with no commission stacking, benefits, separate tooling or data line items. The rate depends on seniority and the number of seats, so we quote it on the call. Compare that against a fully loaded in-house hire: salary, employer tax, benefits, tooling, recruiting and the ramp months before a rep produces anything. The first 60 days are a pilot, then it is month to month on 30 days’ notice.',
        ],
      },
      {
        q: 'How long does it take to ramp an SDR?',
        a: [
          'Hiring and ramping an in-house SDR typically takes three to four months before outreach is running at full speed. An outsourced team from Aventrio sends its first outreach 14 days after kickoff.',
        ],
      },
      {
        q: 'What is the difference between an outsourced SDR and a cold email agency?',
        a: [
          'A cold email agency sends sequences and forwards you the replies. An outsourced SDR team staffs people: named reps handle the objection, book the call and chase the reschedule, across email, LinkedIn and phone. For a simple offer that converts off one email, an agency is cheaper.',
        ],
      },
      {
        q: 'Can we move outbound in-house later?',
        a: [
          'Yes. With Aventrio you own the lists, sequences, sending domains and call notes, and can export them at any time, so a working motion can be handed to an in-house team.',
        ],
      },
    ],
    related: [
      { label: 'Outsourced SDR services', href: '/services/outsourced-sdr' },
      {
        label: 'Outsourced SDR vs cold email agency',
        href: '/compare/outsourced-sdr-vs-cold-email-agency',
      },
      { label: 'Pipeline audit', href: '/services/pipeline-audit' },
    ],
  },

  {
    path: '/compare/outsourced-sdr-vs-cold-email-agency',
    group: 'compare',
    slug: 'outsourced-sdr-vs-cold-email-agency',
    keyword: 'outsourced sdr vs cold email agency',
    title: 'Outsourced SDR vs Cold Email Agency: Which Fits? | Aventrio',
    description:
      'Outsourced SDR vs cold email agency, compared plainly: who handles replies, who owns the data, how results are reported, and when each one is the right choice.',
    eyebrow: 'Honest comparison',
    h1: 'Outsourced SDR vs cold email agency: which one fits your offer?',
    lede: 'A cold email agency sends sequences and forwards you the replies. An outsourced SDR team staffs named people who handle the replies, the objections and the booking. Which one you need depends on how much of the conversation your offer needs a human for.',
    sections: [
      {
        heading: 'What each one does',
        bullets: [
          'Cold email agency: builds a list, writes a sequence, runs the sending infrastructure and forwards replies to you. The conversation starts when the reply lands in your inbox.',
          'Outsourced SDR team: does the same research and sending, then a named rep handles the reply, answers the first objection, books the call and chases the reschedule, across email, LinkedIn and phone.',
          'Both can run sequences at scale. The difference is who owns the conversation between the first reply and the booked meeting.',
        ],
      },
      {
        heading: 'Questions to ask any provider',
        bullets: [
          'Who handles replies and objections, and are they the same named person each time?',
          'Which domains do you send from, and is any cold volume ever sent from my primary domain?',
          'Who owns the lists, sequences, sending domains and call notes if I leave, and can I export them?',
          'How is progress reported: are booked and held meetings counted separately?',
          'If a number of meetings is promised, what exactly is counted, and what happens if it is missed?',
          'How many accounts does each person work at once?',
        ],
      },
      {
        heading: 'When a cold email agency is the better choice',
        bullets: [
          'Your offer is simple and a buyer can say yes from one email.',
          'You have people in-house who will reply to and book every response quickly.',
          'You want the lowest cost way to test whether email works for your market.',
        ],
      },
      {
        heading: 'When an outsourced SDR team is the better choice',
        bullets: [
          'Buyers have questions or objections that need a real conversation before they will book.',
          'Nobody on your team has time to work replies the same day.',
          'You want email, LinkedIn and phone worked by the same person.',
          'You want account executives available on the same engagement to run the demo and close.',
        ],
      },
      {
        heading: 'How Aventrio is set up',
        body: [
          'Aventrio staffs named reps, capped at three accounts each, who work from separate warmed sending domains so cold volume never touches your primary domain. Pricing is a flat monthly fee per rep with no per-meeting surcharge, a 60 day pilot, then month to month on 30 days’ notice.',
          'We report sent, opened, replied, booked, held and converted as six separate figures every week, and you own your lists, sequences, sending domains and call notes. We do not promise a number of meetings: volume depends on your offer, market and timing.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is the difference between an outsourced SDR and a cold email agency?',
        a: [
          'A cold email agency sends sequences and forwards you the replies. An outsourced SDR team staffs people: named reps handle the objection, book the call and chase the reschedule, across email, LinkedIn and phone.',
        ],
      },
      {
        q: 'Is a cold email agency cheaper than an outsourced SDR team?',
        a: [
          'Usually, because less human work is included. For a simple offer that converts off one email, an agency can be the better value. If replies need a real conversation, the cost moves to whoever in your team has to handle them.',
        ],
      },
      {
        q: 'Can I start with a cold email agency and move to an SDR team later?',
        a: [
          'Yes, if you own your lists, sequences and sending domains. Check the contract for who owns them before you start, because moving a working motion is only easy when the data is yours.',
        ],
      },
      {
        q: 'Does Aventrio guarantee a number of meetings?',
        a: [
          'No. Meeting volume depends on your offer, market and timing. Aventrio commits to the work: verified data, copy rewritten monthly, monitored sending infrastructure, named reps capped at three accounts and weekly reporting.',
        ],
      },
    ],
    related: [
      { label: 'Outsourced SDR services', href: '/services/outsourced-sdr' },
      { label: 'In-house vs outsourced SDR', href: '/compare/in-house-vs-outsourced-sdr' },
      { label: 'Pipeline audit', href: '/services/pipeline-audit' },
    ],
  },

  {
    path: '/compare/outsourced-sdr-vs-lead-generation-agency',
    group: 'compare',
    slug: 'outsourced-sdr-vs-lead-generation-agency',
    keyword: 'sdr vs lead generation agency',
    title: 'SDR Team vs Lead Generation Agency: How to Choose | Aventrio',
    description:
      'An outsourced SDR team or a lead generation agency? What a lead really means, how pricing differs, what to ask a provider, and when each model fits.',
    eyebrow: 'Honest comparison',
    h1: 'SDR team vs lead generation agency: what you are really buying.',
    lede: 'The word lead can mean anything from a name in a spreadsheet to a booked, qualified meeting. Before you compare an outsourced SDR team with a lead generation agency, agree what counts as a lead, because that decides what you pay for and what you get.',
    sections: [
      {
        heading: 'What a lead can mean',
        bullets: [
          'A contact record: a name, title and email that fits your target profile.',
          'A reply: someone answered, with any response.',
          'An interested reply: someone asked to hear more.',
          'A qualified lead: someone confirmed to fit your ICP and to have a reason to talk.',
          'A booked meeting: a time on the calendar.',
          'A held meeting: the person turned up.',
        ],
      },
      {
        heading: 'How the two models differ',
        bullets: [
          'Lead generation agency: usually responsible for delivering leads, however the agreement defines them, and often priced around the number delivered. What happens to a lead afterwards is typically your team’s job.',
          'Outsourced SDR team: responsible for the conversation that turns a prospect into a booked, qualified meeting, with a named rep who researches, writes, replies and books.',
          'Both can use email, LinkedIn and phone. The difference is where the work stops.',
        ],
      },
      {
        heading: 'Questions to ask before you sign',
        bullets: [
          'What exactly counts as a lead, and who decides when one has been delivered?',
          'Is pricing per lead, per meeting or a flat fee, and what incentives does that create?',
          'Who follows up with a lead after delivery?',
          'Do you report booked and held meetings separately?',
          'Who owns the data and can I export it at any time?',
        ],
      },
      {
        heading: 'When a lead generation agency fits',
        bullets: [
          'You already have a sales team with capacity to follow up every lead quickly.',
          'You mainly need names and contact data to feed your own outreach.',
          'You have a clear, agreed definition of a qualified lead and a way to check it.',
        ],
      },
      {
        heading: 'When an outsourced SDR team fits',
        bullets: [
          'You want meetings on the calendar, not a list to work.',
          'Nobody internally has time to chase replies and reschedules.',
          'You prefer a flat monthly cost to a price that rises with volume.',
          'You want to read booked and held as separate numbers each week.',
        ],
      },
      {
        heading: 'How Aventrio is set up',
        body: [
          'Aventrio is an outsourced SDR team. A named rep handles research, sending, replies and booking, with account executives available on the same engagement. The fee is flat per rep, with no per-meeting surcharge, a 60 day pilot, then month to month on 30 days’ notice. We do not guarantee a number of meetings, because volume depends on your offer, market and timing.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is the difference between an SDR team and a lead generation agency?',
        a: [
          'A lead generation agency usually delivers leads, often priced by number delivered, and leaves the follow-up to you. An outsourced SDR team owns the conversation as well: a named rep handles replies and books the qualified meeting.',
        ],
      },
      {
        q: 'Is lead generation the same as appointment setting?',
        a: [
          'Not always. Lead generation is the broader term and can stop at delivering contacts or interested replies. Appointment setting ends with a meeting booked on your calendar.',
        ],
      },
      {
        q: 'Should I pay per lead or per meeting?',
        a: [
          'Neither is automatically better. Per-lead pricing rewards volume, so the definition of a lead matters. Per-meeting pricing rewards bookings, so check whether held meetings are counted. A flat monthly fee removes the per-unit incentive, but then reporting should show the numbers separately so you can judge the work.',
        ],
      },
      {
        q: 'Who owns the data when you work with Aventrio?',
        a: [
          'You do. Lists, sequences, sending domains and call notes are exportable at any time, including if you cancel.',
        ],
      },
    ],
    related: [
      { label: 'Outsourced SDR services', href: '/services/outsourced-sdr' },
      {
        label: 'Outsourced SDR vs cold email agency',
        href: '/compare/outsourced-sdr-vs-cold-email-agency',
      },
      { label: 'In-house vs outsourced SDR', href: '/compare/in-house-vs-outsourced-sdr' },
    ],
  },

  {
    path: '/services/pipeline-audit',
    group: 'services',
    slug: 'pipeline-audit',
    keyword: 'sales pipeline audit',
    title: 'Sales Pipeline Audit for B2B Outbound | Aventrio',
    description:
      'A two-week, fixed-fee audit of your outbound: targeting, messaging, deliverability and tech stack, delivered as a prioritised list of what is leaking and what to fix first.',
    eyebrow: 'Pipeline audit',
    h1: 'A two-week audit of the outbound you already run.',
    lede: 'If outbound is running but meetings are not landing, something specific is leaking. We pull apart your targeting, messaging, deliverability and tech stack, then hand you a prioritised list of what is broken and what to fix first.',
    serviceName: 'Pipeline audit',
    sections: [
      {
        heading: 'What we review',
        bullets: [
          'Targeting: whether your ICP and lists describe the buyers who actually say yes, and how clean the data is.',
          'Messaging: your sequences by segment, what buyers reply to, and where conversations stall.',
          'Deliverability: sending domains, SPF, DKIM and DMARC, domain reputation and sending volume.',
          'Tech stack and reporting: whether sent, replied, booked, held and converted are tracked separately in your CRM.',
        ],
      },
      {
        heading: 'What you get',
        body: [
          'A prioritised fix list: what is leaking, why, and what to change first. It is yours to act on with your own team, whether or not you work with us afterwards.',
        ],
      },
      {
        heading: 'Who it is for',
        bullets: [
          'Teams whose outbound was tried, stalled, and is now written off internally.',
          'Companies with an in-house SDR who are not sure whether the problem is the rep, the list, the copy or the inbox.',
          'Founders about to invest in outbound who want an honest read first.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is a sales pipeline audit?',
        a: [
          'A sales pipeline audit is a structured review of how your outbound generates meetings: targeting, messaging, deliverability and the tools and reporting behind it. Aventrio runs it over two weeks for a fixed fee and delivers a prioritised list of what to fix first.',
        ],
      },
      {
        q: 'How long does the audit take?',
        a: ['Two weeks, for a fixed fee.'],
      },
      {
        q: 'Do we have to hire Aventrio afterwards?',
        a: [
          'No. The fix list is yours to act on with your own team. If you want us to run outbound afterwards, that is a separate conversation.',
        ],
      },
    ],
    related: [
      { label: 'Outsourced SDR services', href: '/services/outsourced-sdr' },
      { label: 'In-house vs outsourced SDR', href: '/compare/in-house-vs-outsourced-sdr' },
    ],
  },

  {
    path: '/services/account-executives',
    group: 'services',
    slug: 'account-executives',
    keyword: 'outsourced account executive',
    title: 'Outsourced Account Executives for B2B Tech | Aventrio',
    description:
      'Experienced account executives who run demos, handle procurement and close contracts, placed on the same engagement as your outsourced SDRs and working inside your process and CRM.',
    eyebrow: 'Account executives',
    h1: 'Account executives on the same engagement as your SDRs.',
    lede: 'A calendar full of meetings is only useful if someone can run them. Aventrio places experienced account executives on the same contract as your SDRs, so demos, procurement and contract close are covered.',
    serviceName: 'Account executives',
    sections: [
      {
        heading: 'What an outsourced account executive handles',
        bullets: [
          'Runs discovery calls and demos with the meetings your SDRs book.',
          'Handles procurement, security questionnaires and negotiation.',
          'Works inside your process, your CRM and your pricing.',
          'Takes deals through to a signed contract.',
        ],
      },
      {
        heading: 'Why on the same engagement',
        body: [
          'When SDRs and AEs work for different firms, context gets lost in the handoff. On one engagement, every meeting arrives with a briefing note: company context, the pain the buyer described, and what was promised on the call.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is an outsourced account executive?',
        a: [
          'An outsourced account executive is an experienced closer provided by an outside firm who runs demos, handles procurement and signs contracts for your company. At Aventrio, AEs are placed on the same engagement as your SDRs and work inside your process, CRM and pricing.',
        ],
      },
      {
        q: 'How do meetings pass from SDR to AE?',
        a: [
          'Every booked meeting comes with a briefing note covering company context, the pain the buyer described, and what was promised on the call, so the AE starts the conversation where the SDR left it.',
        ],
      },
    ],
    related: [
      { label: 'Outsourced SDR services', href: '/services/outsourced-sdr' },
      { label: 'Pipeline audit', href: '/services/pipeline-audit' },
    ],
  },
]

export const seoPageByPath = (path: string) => seoPages.find((p) => p.path === path)
export const servicePageFor = (serviceTitle: string) =>
  seoPages.find((p) => p.serviceName === serviceTitle)
