/**
 * Homepage copy. Edit text here, not in components.
 * Approved copy changes from docs/keyword-research.md section 6 are applied.
 */

export const hero = {
  eyebrow: 'Done-for-you outbound, built and run end to end',
  // K3: category term in the H1, "pipeline" stays the accent word
  titleLead: 'Outbound SDR teams that build your',
  titleAccent: 'pipeline.',
  lede: 'Trained SDRs, managed by US sales leaders, prospecting and booking qualified meetings for your team. We build the whole outbound function for B2B companies selling into the US: research, data, copy, sending infrastructure, and the people working the replies.',
  primaryCta: 'Book a strategy call',
  secondaryCta: { label: "See what's included", href: '#included' },
  note: 'First outreach goes out in 14 days. Month-to-month after the first quarter.',
}

/** Hero tabs. Every panel is labelled as an example view: no real accounts or results. */
export const heroTabs = {
  exampleLabel: 'Example view',
  board: {
    tab: 'Pipeline board',
    title: 'Pipeline · this week',
    columns: ['Account', 'Channel', 'Stage'],
    rows: [
      {
        account: 'Series B devtools',
        place: 'New York',
        contact: 'VP Engineering',
        channel: 'Email',
        stage: 'Held',
        tone: 'held',
      },
      {
        account: 'Mid-market IT services',
        place: 'Chicago',
        contact: 'CTO',
        channel: 'LinkedIn',
        stage: 'Booked',
        tone: 'booked',
      },
      {
        account: 'Healthtech platform',
        place: 'Boston',
        contact: 'Director of Engineering',
        channel: 'Phone',
        stage: 'Booked',
        tone: 'booked',
      },
      {
        account: 'Seed-stage AI tooling',
        place: 'San Francisco',
        contact: 'Founder',
        channel: 'Email',
        stage: 'Replied',
        tone: 'replied',
      },
      {
        account: 'Fintech infrastructure',
        place: 'Austin',
        contact: 'Head of Engineering',
        channel: 'LinkedIn',
        stage: 'Sequenced',
        tone: 'sequenced',
      },
    ],
  },
  brief: {
    tab: 'Meeting brief',
    title: 'Booked meeting brief',
    when: 'Thursday, 11:30 Eastern',
    fields: [
      { label: 'Account', value: 'Series B devtools company, New York, 120 people' },
      { label: 'Contact', value: 'VP Engineering, joined 8 months ago' },
      { label: 'How it started', value: 'Reply to email 2 of 4, then a 12 minute call' },
      { label: 'Pain they described', value: 'Two senior hires fell through. Q1 roadmap at risk.' },
      {
        label: 'What was promised',
        value: 'A rate card and two engineer profiles before the call',
      },
      { label: 'Next step', value: 'Your AE runs the call. Rep follows up on no-shows.' },
    ],
    footer: 'Sent to your calendar invite and Slack',
  },
  channels: {
    tab: 'Channel coverage',
    title: 'Coverage · this account',
    items: [
      {
        name: 'Email',
        detail: 'Sequences per segment, sent from separate warmed domains',
        status: 'SPF · DKIM · DMARC passing',
      },
      {
        name: 'LinkedIn',
        detail: 'Connection and message cadence from the rep’s own profile',
        status: 'Daily limits respected',
      },
      {
        name: 'Phone',
        detail: 'Follow-up calls to engaged prospects, booked into your calendar',
        status: 'US business hours',
      },
    ],
    footer: 'Your primary domain never carries cold volume',
  },
  clutch: {
    tab: 'Clutch reviews',
    title: 'Verified reviews on Clutch',
    body: 'Reviews are collected and verified by Clutch through interviews with clients, not written by us.',
    cta: 'Read our reviews on Clutch',
  },
}

export const strip = {
  line: 'Email, LinkedIn and phone, run inside your stack. Not a portal.',
  stats: [
    { value: 14, label: 'Days from kickoff to first outreach' },
    { value: 3, label: 'Channels on every sequence: email, LinkedIn, phone' },
    { value: 3, label: 'Accounts per rep, maximum, so they learn your product' },
    { value: 0, label: 'Cold emails sent from your primary domain' },
  ],
}

export const process = {
  eyebrow: 'How it runs',
  // C4: no implied outcome
  title: 'Four steps. Fourteen days to first send.',
  intro:
    'The order matters here. Each step feeds the next. Skip the research and the outreach lands in spam; skip the ICP work and the research finds the wrong people.',
  steps: [
    {
      title: 'Define the buyer',
      body: 'We map your ICP, territories, and the three reasons your best customers actually signed. Everything downstream is built from this.',
      meta: 'Week 1 · discovery + positioning',
    },
    {
      title: 'Build the list',
      body: 'Enriched, verified contact data, with no scraped junk. Every record is checked before a single email leaves the sender.',
      meta: 'Sales Navigator · Apollo · Clay',
    },
    {
      title: 'Run the outreach',
      body: 'Email and LinkedIn sequences written per segment, sent from warmed domains, tuned weekly against reply data.',
      meta: 'Week 2 · first send',
    },
    {
      title: 'Hand over the call',
      body: 'Your reps handle objections, follow-ups, and rescheduling. You get a calendar invite and a briefing note.',
      meta: 'Ongoing · weekly reporting',
    },
  ],
}

export const services = {
  eyebrow: 'What you can hand over',
  title: 'Take one piece, or the whole revenue engine.',
  intro:
    'Most clients start with outbound SDRs and add from there. Every engagement includes a named account manager and weekly reporting.',
  items: [
    {
      tag: 'Most requested',
      // K4
      title: 'Outsourced SDR teams',
      body: 'Remote SDRs trained on your product and managed by our sales leads. They prospect, write, send, follow up and book. You review the calendar.',
      chips: ['Cold email', 'LinkedIn', 'Phone', 'Weekly reporting'],
      size: 'wide',
      featured: true,
    },
    {
      tag: 'Close the loop',
      title: 'Account executives',
      body: 'Experienced AEs with verified track records who run demos, handle procurement, and sign contracts. Placed with your process, your CRM, your pricing.',
      chips: ['Demos', 'Negotiation', 'Contract close'],
      size: 'wide',
    },
    {
      tag: 'Enterprise deals',
      title: 'Account-based marketing',
      body: 'Stakeholder mapping and account-level personalisation for named target lists where a generic sequence would never land.',
      size: 'third',
    },
    {
      tag: 'Two weeks, fixed fee',
      title: 'Pipeline audit',
      body: "We pull apart your targeting, messaging, deliverability, and tech stack, then hand you a prioritised list of what's leaking and what to fix first.",
      size: 'third',
    },
    {
      tag: 'Founder-led',
      title: 'LinkedIn authority',
      body: 'Content and engagement for your founders and sales leads, so inbound starts arriving while outbound runs.',
      size: 'third',
    },
    {
      tag: 'Prefer to own the team?',
      title: 'Sales recruitment',
      body: "We source, vet, and place international SDRs and AEs directly onto your payroll. If a placement doesn't work out in the first 90 days, we replace them at no cost.",
      size: 'wide',
    },
    {
      tag: 'Behind everything',
      title: 'Revenue operations',
      body: 'CRM hygiene, sequence tracking, attribution, and a single dashboard so you can see cost per meeting instead of guessing at it.',
      size: 'wide',
    },
  ],
} as const

export const included = {
  eyebrow: "What's included",
  title: 'Everything that lands in your account.',
  intro:
    'Not "outreach services." These are the actual artifacts you own at the end of month one, most of them yours to keep whether or not you renew.',
  items: [
    {
      title: 'A verified target list',
      body: 'Every contact enriched and email-verified before send. Yours to export, in full, at any time.',
      when: 'Delivered day 7',
    },
    {
      title: 'Sending infrastructure',
      body: 'Separate domains, warmed inboxes, SPF/DKIM/DMARC configured. Your primary domain is never used for cold volume.',
      when: 'Live day 10',
    },
    {
      title: 'Sequences written per segment',
      body: 'Email and LinkedIn copy built for your ICP, not a template swap. Rewritten monthly against reply data.',
      when: 'Live day 14',
    },
    {
      title: 'Named reps, not a pool',
      body: "You meet them. They work a maximum of three accounts, and they're on your Slack.",
      when: 'From kickoff',
    },
    {
      title: 'Meetings, with a briefing note',
      body: 'Calendar invite, company context, the pain they described, and what was promised on the call.',
      when: 'Ongoing',
    },
    {
      title: 'Weekly numbers',
      body: 'Sent, opened, replied, booked, held and turned into opportunity, each reported separately in your CRM.',
      when: 'Every Monday',
    },
  ],
}

export const whySwitch = {
  eyebrow: 'Why teams switch',
  title: "Hiring reps is slow. This isn't.",
  // C2: unsourced statistic removed
  intro:
    "A US SDR takes months to source, hire and ramp, and if the hire doesn't work out you carry that cost either way.",
  points: [
    {
      kicker: '14 days',
      title: 'Live in two weeks',
      body: 'Kickoff to first send. No req to open, no notice period to wait out.',
    },
    // C3: unverifiable "Top 1%" removed
    {
      kicker: 'Selected',
      title: 'Selected and US-trained',
      body: "Reps hired for their written English and call skills, managed day to day by sales leads who've carried a US quota.",
    },
    {
      kicker: 'Fixed',
      title: 'One monthly fee',
      body: 'No commission stacking, no benefits, no tooling line items. You know the number before you start.',
    },
    {
      kicker: 'Covered',
      title: 'Replacement guarantee',
      body: "If a rep isn't performing, we replace them and re-ramp at our cost, not yours.",
    },
  ],
  // C1: the unlabelled campaign snapshot is replaced with what the weekly report contains
  report: {
    title: 'Your Monday report',
    subtitle: 'Six figures, reported separately, every week',
    rows: [
      { label: 'Sent', body: 'Every email and LinkedIn touch that left a sender' },
      { label: 'Opened', body: 'Reported, never used as a headline' },
      { label: 'Replied', body: 'Positive, negative and out-of-office, split' },
      { label: 'Booked', body: 'A meeting accepted in your calendar' },
      { label: 'Held', body: 'The meeting happened. A no-show is a no-show.' },
      { label: 'Converted', body: 'Turned into an opportunity in your CRM' },
    ],
    footer: 'Written back into your CRM, not a portal you have to log into',
  },
}

export const comparison = {
  eyebrow: 'Honest comparison',
  title: 'Three ways to get meetings. Only one includes people.',
  // K5: names the three options buyers search for
  intro:
    'Hiring in-house, a cold email agency, or an outsourced SDR team: cold email agencies are cheap and fast, and for a simple offer they work. The moment a prospect asks a technical question, replies with an objection, or needs a second call, the difference shows up.',
  columns: ['Hiring in-house', 'Cold email agency', 'Aventrio'],
  rows: [
    {
      label: 'Time to first outreach',
      values: ['3 to 4 months to hire and ramp', '2 to 3 weeks', '14 days'],
    },
    {
      label: 'Who handles the reply',
      values: ['Your rep', 'Usually forwarded to you', 'A named rep who knows your product'],
    },
    {
      label: 'Channels',
      values: ['Whatever you train for', 'Email, sometimes LinkedIn', 'Email, LinkedIn, and phone'],
    },
    {
      label: 'Category knowledge',
      values: [
        'Learned on your payroll',
        'Generalist across all clients',
        'Learned per account, three accounts max',
      ],
    },
    {
      label: 'Who owns the data',
      values: ['You', "Often the agency's tooling", 'You, exportable any time'],
    },
    {
      label: 'Can they close?',
      values: ['Eventually', 'No, meetings only', 'AEs available on the same engagement'],
    },
    {
      label: "If it isn't working",
      values: [
        'Performance management, then rehire',
        'Cancel and start over elsewhere',
        'We replace and re-ramp the rep at our cost',
      ],
    },
  ],
  scrollHint: 'Scroll the table sideways to compare all three',
}

export const industries = {
  eyebrow: "Where we've sold",
  title: 'Any market with a buyer we can name.',
  intro:
    'Outbound works wherever the buyer is identifiable and the offer is already proven. The category matters far less than whether we can describe who says yes and why. Our deepest experience is software and IT services, and the method transfers.',
  items: [
    'B2B SaaS',
    'Software development',
    'IT staff augmentation',
    'Cybersecurity',
    'Professional services',
    'Management consulting',
    'Financial services',
    'Marketing & creative agencies',
    'Logistics & supply chain',
    'Manufacturing & industrial',
    'Healthtech & medtech',
    'Recruitment & staffing',
    'Construction & proptech',
    'Training & e-learning',
  ],
}

export const situations = {
  eyebrow: "Who we're built for",
  title: "Three situations we're usually called into.",
  intro:
    "Different industries, same three problems. If one of these is yours, outbound is probably the right lever, and we'll say so on the call if it isn't.",
  items: [
    {
      title: 'Referrals dried up and nothing replaced them',
      body: "Growth came from word of mouth and a network that has gone quiet. There's no outbound motion to fall back on, and the quarter is still expected to land.",
      change: 'What changes: a second channel you own, built and documented while it runs.',
    },
    {
      title: 'Outbound was tried once and it failed',
      body: 'A founder or a junior hire ran a tool for three months. Open rates collapsed, the domain took damage, and now the whole channel is written off internally.',
      change:
        'What changes: separate infrastructure, verified data, and copy that gets rewritten against real reply data.',
    },
    {
      title: 'Hiring an SDR is a four-month bet',
      body: "You know you need someone owning pipeline, but a bad hire costs two quarters and you can't unwind it quickly. Nobody internally has run outbound before.",
      change:
        'What changes: a working motion in weeks, handed to an in-house team later if you want it.',
    },
  ],
}

/** Kept intact from the live site, by design. */
export const commitments = {
  eyebrow: 'What we commit to',
  title: "We won't promise you a number.",
  intro:
    "Nobody in outbound can guarantee meetings and mean it. Too much of the outcome sits with your offer, your market and timing none of us control. An agency that commits to a figure is either padding the price to cover it or planning to count no-shows. Here is what we do control, and what we'll be held to.",
  items: [
    {
      lead: 'Data we verified ourselves.',
      body: 'Every record sourced, enriched and email-verified before it enters a sequence. No scraped exports, no catch-all guessing, and no list resold to another client in your category.',
    },
    {
      lead: 'Copy written for your segment, rewritten monthly.',
      body: 'Not a template with your company name dropped in. Sequences are built per segment and rewritten against reply data every month, whether or not the numbers are good.',
    },
    {
      lead: 'Infrastructure we own and watch.',
      body: "Separate warmed domains, SPF, DKIM and DMARC configured, inbox placement checked daily. Your primary domain never carries cold volume, and we'll slow a campaign down to protect it.",
    },
    {
      lead: 'Named reps, three accounts maximum.',
      body: 'You meet them before they start. They learn your product deeply enough to handle an objection in-thread rather than forwarding it to you.',
    },
    {
      lead: "Reporting that doesn't flatter us.",
      body: 'Sent, opened, replied, booked, held and converted: six separate figures every week. A no-show is reported as a no-show, and a bad month is reported as a bad month.',
    },
    {
      lead: 'Replacement at our cost.',
      body: "If a rep isn't performing, sourcing, training and re-ramping their replacement comes out of our margin, not your retainer.",
    },
    {
      lead: 'An honest read before you spend anything.',
      body: "If we can't find a repeatable reason your buyers say yes, we'll tell you on the first call instead of taking three months to find out.",
    },
  ],
}

export const finalCta = {
  title: 'Find out whether outbound is worth it for you.',
  body: "Thirty minutes, no deck. You'll leave with a sample target list matched to your ICP, a view of what your first fourteen days would look like, and a straight answer on whether outbound suits your offer, including if that answer is no.",
  primary: 'Book your strategy call',
  secondary: { label: 'See how it runs', href: '/#process' },
}
