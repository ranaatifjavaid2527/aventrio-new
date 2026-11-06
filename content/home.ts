/**
 * Homepage copy. Edit text here, not in components.
 * Approved copy changes from docs/keyword-research.md section 6 are applied.
 */

export const hero = {
  eyebrow: 'Outbound for tech companies, built and run end to end',
  // Category term stays in the H1 for search; the hook is the concrete 14 day start
  titleLead: 'An outsourced SDR team, sending in',
  titleAccent: '14 days.',
  lede: 'No four-month hire, no ramp-up to manage. Trained SDRs, managed by US sales leaders, research, write and send the outreach for software, SaaS and IT services companies selling into the US, then book qualified meetings for your account executives.',
  primaryCta: 'Book a 30 minute call',
  secondaryCta: { label: "See what's included", href: '#included' },
  note: '60 day pilot, then month to month. You leave the call with a sample target list for your ICP.',
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
  eyebrow: 'Who we work with',
  title: 'Built for technology companies selling into the US.',
  intro:
    'Startups finding their first repeatable buyer, and established firms opening a new segment. The method is the same: a named buyer, a clear trigger, and a rep who knows your product.',
  items: [
    'B2B SaaS',
    'Software development',
    'IT services and staff augmentation',
    'Cybersecurity',
    'Devtools and infrastructure',
    'Fintech and healthtech platforms',
    'AI and data companies',
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
  primary: 'Book a 30 minute call',
  secondary: { label: 'See the ways to work', href: '/#ways' },
}

/** Illustration only. Every line is an example, labelled as one on the page. */
export const planCard = {
  eyebrow: 'What week one sets up',
  title: 'The buyer, the trigger and the first message, defined before anything is sent.',
  intro:
    'Week one is where the outreach gets its shape. Here is an example of the kind of plan a segment is built around.',
  tag: 'Example',
  fields: [
    { label: 'ICP', value: 'Mid-market SaaS companies' },
    { label: 'Persona', value: 'VP Sales' },
    { label: 'Trigger', value: 'New sales hire announced' },
    { label: 'Channels', value: 'Email, LinkedIn, phone' },
  ],
  emailLabel: 'First email, example',
  email: [
    'Hi Sam,',
    'Saw you recently brought on a new AE. Is pipeline coverage a priority for the next quarter?',
    'We run outbound for software companies. Worth a short chat?',
  ],
  note: 'For illustration only. Real segments, triggers and copy are written for each client’s offer.',
}

/** Terms section. No price is published by design. */
export const pricing = {
  eyebrow: 'Clear terms',
  title: 'The terms, before you book a call.',
  intro:
    'Most outbound providers keep their terms behind a sales call. Here they are, in writing, so you can decide before you talk to anyone.',
  priceCard: {
    label: 'How pricing works',
    headline: 'One flat fee per rep, per month.',
    note: 'No commissions, no per-meeting surcharge, no separate tooling or data charges. We quote it on the first call and put the figure in writing before anything is signed.',
  },
  includes: [
    'A named rep on three accounts at most',
    'Verified data, exportable at any time',
    'Separate warmed sending domains, in your name',
    'Sequences written per segment and rewritten monthly',
    'A weekly report with six separate figures',
    'A manager who has carried a US quota',
  ],
  terms: [
    {
      title: '60 day pilot, then month to month',
      body: 'Thirty days’ notice after the pilot. No annual contract, no deposit you cannot get back.',
    },
    {
      title: 'Live by day 14, or the next invoice waits',
      body: 'Counted from the day we have your sign-off and access. This is about our delivery, not about results.',
    },
    {
      title: 'A meeting is defined in writing first',
      body: 'Before launch we agree what counts as qualified. A no-show is reported as a no-show.',
    },
    {
      title: 'Everything is yours',
      body: 'Lists, sequences, sending domains, call notes and reports stay yours and can be exported at any time, including after you leave.',
    },
  ],
  link: { label: 'Read the full terms', href: '/clear-terms' },
  cta: 'Book a 30 minute call',
  note: 'We do not promise a number of meetings. Results depend on your offer, your market and timing.',
}

/** "Three ways in": a tabbed section. Visuals are labelled examples, never real accounts or results. */
export const threeWays = {
  eyebrow: 'Three ways to work with us',
  title: 'Start where it makes sense. Add the rest later.',
  intro:
    'Most clients start with outbound done for you. Some start with a review. Some add a closer after the meeting is booked.',
  exampleTag: 'Example',
  ways: [
    {
      id: 'sdr',
      tab: 'Outbound, done for you',
      tag: 'Most requested',
      title: 'We run your outbound, start to finish.',
      body: 'Research, verified data, copy, sending setup and named reps who work the replies and book meetings on your calendar.',
      points: [
        'Named reps, three accounts at most each',
        'Email, LinkedIn and phone, in one sequence',
        'A weekly report with six separate figures',
      ],
      cta: { label: 'See how it works', href: '/services/outsourced-sdr' },
      chip: { label: 'Read the terms', href: '/clear-terms' },
    },
    {
      id: 'ae',
      tab: 'Account executives',
      tag: 'Close the loop',
      title: 'Someone to run the call after the meeting is booked.',
      body: 'Add an account executive to the same engagement. They run the demo and the follow-up, working in your process and your CRM.',
      points: [
        'Joins the same engagement and the same terms',
        'Works in your process and your CRM',
        'Gets the meeting brief before every call',
      ],
      cta: { label: 'See how it works', href: '/services/account-executives' },
      chip: { label: 'How a meeting is defined', href: '/clear-terms#meeting' },
    },
    {
      id: 'audit',
      tab: 'Pipeline audit',
      tag: 'Start with a review',
      title: 'See what is leaking before you spend more.',
      body: 'We look at your targeting, messaging, sending setup and data, then tell you what to fix first.',
      points: [
        'Targeting and messaging reviewed',
        'Sending setup and data checked',
        'A prioritized list of what to fix first',
      ],
      cta: { label: 'See how it works', href: '/services/pipeline-audit' },
      chip: { label: 'Read the terms', href: '/clear-terms' },
    },
  ],
  auditExample: {
    title: 'Audit findings layout',
    rows: [
      { area: 'Targeting', note: 'Who is on the list, and why', stage: 'Reviewed' },
      { area: 'Messaging', note: 'What the first email says', stage: 'Reviewed' },
      { area: 'Sending setup', note: 'Domains, authentication, limits', stage: 'Reviewed' },
      { area: 'Data', note: 'Verification and list upkeep', stage: 'Reviewed' },
    ],
    footer: 'Ends with a prioritized list: fix first, fix next, leave alone.',
  },
  also: {
    label: 'Also available',
    items: [
      'Account-based marketing',
      'LinkedIn authority',
      'Revenue operations',
      'Optional: sales recruitment',
    ],
  },
}
