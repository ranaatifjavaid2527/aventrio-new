/** About page copy. Carried over from the live site unchanged, apart from the contact address. */

export const aboutHero = {
  eyebrow: 'About Aventrio',
  titleLead: 'Outbound is a craft.',
  titleAccent: 'We staff it like one.',
  lede: "Aventrio is a sales development firm for technology companies selling into the United States. We build the team, verify the data, write the outreach, own the sending infrastructure and work the replies, then report the numbers honestly enough that you can tell whether it's working.",
}

export const founderNote = {
  eyebrow: 'Why Aventrio exists',
  title: 'Good companies lose to worse ones with pipeline.',
  label: 'A note from the founder',
  paragraphs: [
    'We started Aventrio after watching the same thing happen over and over, first to software firms and then to everyone else: a business with real depth and a delivery record worth bragging about, and a sales function that amounted to referrals, an inbound trickle, and whoever had time to send LinkedIn messages that week.',
    'When those companies tried outbound, it usually failed for reasons that had nothing to do with what they sold. The list was scraped and half-dead. The email went out from the primary domain and torched deliverability. Sequences were written once and never touched again. And when a prospect finally replied with a real question, the reply sat in an inbox for three days because nobody owned it.',
    "None of that is a sales problem. It's a staffing problem. Outbound done properly is a job: research, writing, sending infrastructure, follow-up discipline, and someone who can handle an objection without a script. Most companies our size can't justify hiring four people to cover it, so they hire one and hope, or they buy a tool and hope harder.",
    "So we built the team instead. Reps who work a maximum of three accounts, managed by people who have carried a US quota, running on infrastructure we own and monitor. You get the function without building the department, and you can stop after a quarter if the numbers don't hold up.",
    "If you're weighing whether outbound is even the right move for you right now, book the call and ask. We turn down accounts we don't think we can sell, and we'd rather tell you that in thirty minutes than three months.",
  ],
}

export const roles = {
  eyebrow: 'How the team is built',
  title: 'Five roles behind every engagement.',
  intro:
    "An outbound function isn't one person with a sequencing tool. These are the roles that touch your account, and what each one owns when something goes wrong.",
  items: [
    {
      code: 'SD',
      title: 'Sales development reps',
      sub: 'Your named reps',
      body: 'They prospect, send, follow up, handle the first objection, and book the call. They work a maximum of three accounts so they can answer a technical question without escalating, and you meet them before they start.',
      owns: 'Owns replies, follow-up, booked and held meetings',
    },
    {
      code: 'SL',
      title: 'Sales lead',
      sub: 'Day-to-day management',
      body: "The person who has carried a US quota and now manages the reps on your account. They run the weekly call review, rewrite what isn't landing, and make the call to slow a campaign down when the data says to.",
      owns: 'Owns messaging, rep performance, your weekly review',
    },
    {
      code: 'RS',
      title: 'Research',
      sub: 'List build and enrichment',
      body: 'Every record is sourced, enriched, and email-verified before it enters a sequence. No scraped exports, no catch-all guessing, and no list reused across two clients in the same category.',
      owns: 'Owns targeting accuracy and data hygiene',
    },
    {
      code: 'DL',
      title: 'Deliverability',
      sub: 'Sending infrastructure',
      body: "Separate domains, warmed inboxes, SPF, DKIM and DMARC configured and monitored daily. Your primary domain never carries cold volume, so a bad campaign can't cost you your invoicing email.",
      owns: 'Owns inbox placement and domain reputation',
    },
    {
      code: 'RO',
      title: 'Revenue operations',
      sub: 'Reporting and CRM',
      body: 'Activity writes back into your CRM, not a portal you have to log into. Sent, opened, replied, booked, held, and converted to opportunity are tracked as separate numbers, because collapsing them is how agencies hide a bad month.',
      owns: 'Owns the numbers you see every Monday',
    },
    {
      code: 'AE',
      title: 'Account executives',
      sub: 'Available on the same engagement',
      body: 'If you need someone to run the demo, handle procurement, and close, we place AEs on the same contract rather than handing you back a calendar full of meetings you have no capacity to take.',
      owns: 'Owns demos, negotiation, contract close',
    },
  ],
}

export const rules = {
  eyebrow: 'How we operate',
  title: "Four rules we don't break.",
  intro:
    "These exist because we've watched the alternative. Each one costs us something: a faster start, an easier yes, a bigger roster. And each one is why clients stay past the first quarter.",
  items: [
    {
      title: "We turn down accounts we can't sell",
      body: "If we can't find a repeatable reason your buyers say yes, outbound won't manufacture one. We'd rather lose the retainer than spend three months proving it at your expense.",
    },
    {
      title: 'No rep works more than three accounts',
      body: 'A rep juggling six products sounds like nobody in particular. Ours learn your category deeply enough to handle an objection without reaching for a script.',
    },
    {
      title: 'The number you see is the number',
      body: "Booked, held, and converted to opportunity are reported as three separate figures every week. A meeting that no-shows is not a win, and we don't count it as one.",
    },
    {
      title: 'Your domain is not a test environment',
      body: "Sending infrastructure is separate, warmed, and monitored. We will slow a campaign down to protect deliverability, and we'll tell you the day we do it.",
    },
  ],
}

export const coverage = {
  eyebrow: 'Where we work',
  title: 'US hours, US buyers.',
  intro:
    "Our reps work your prospects' business day, not ours. Coverage is built around the two markets where most US B2B pipeline sits, and prospects never see a reply time that gives away a time zone.",
  items: [
    {
      zone: 'Pacific',
      title: 'San Francisco & the Bay Area',
      body: 'Venture-backed SaaS, AI infrastructure, and teams buying capacity of every kind. Covered 8am to 5pm Pacific, including the late-afternoon window when busy buyers actually reply.',
    },
    {
      zone: 'Eastern',
      title: 'New York & the Northeast',
      body: 'Financial services, media, healthcare, logistics and enterprise IT. An earlier start, a longer overlap with European offices, and the market where procurement tends to move fastest.',
    },
    {
      zone: 'Everywhere else',
      title: 'Central, Mountain, and remote-first buyers',
      body: "Coverage extends across US time zones on request. Where a team is distributed, we sequence to the buyer's working hours rather than their head office.",
    },
  ],
}

export const aboutCta = {
  title: "Talk to the people who'd run your outbound.",
  body: "Thirty minutes, no deck. You'll leave with a sample target list matched to your ICP, a view of what your first fourteen days would look like, and a straight answer on whether outbound suits your offer, including if that answer is no.",
  primary: 'Book your strategy call',
  secondary: { label: 'See how it runs', href: '/#process' },
}
