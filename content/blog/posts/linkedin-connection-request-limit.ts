import type { BlogPost } from '../types'

export const linkedinConnectionRequestLimit: BlogPost = {
  slug: 'linkedin-connection-request-limit',
  keyword: 'linkedin connection request limit',
  title: "LinkedIn Connection Request Limit: What's Real | Aventrio",
  description:
    'LinkedIn does not publish its connection request limit. What its help pages say, where vendor numbers disagree, and how to prospect without risking your account.',
  h1: 'The LinkedIn connection request limit: what LinkedIn says and what vendors guess.',
  published: '2026-11-02',
  updated: '2026-11-04',
  tags: ['LinkedIn', 'Outbound strategy'],
  takeaways: [
    'LinkedIn confirms that it limits invitations for every member, Basic and Premium, but it does not publish the number.',
    'The figure of about 100 invitations a week comes from outbound agencies and automation vendors. It is an observation, not a LinkedIn policy, and vendors disagree on whether Sales Navigator raises it.',
    'LinkedIn names three triggers for a restriction: many invitations in a short time, many invitations ignored, left pending or marked as spam, and suspected use of an automation tool.',
    'Most of the pages that rank for this keyword are written by companies that sell LinkedIn automation, which LinkedIn says its User Agreement prohibits.',
    'Sending fewer invitations to better fitted people is the only approach that protects both the limit and the reply rate.',
  ],
  body: [
    { h2: 'What is the LinkedIn connection request limit?' },
    {
      p: 'LinkedIn limits the number of connection requests you can send, but it has never published the exact number. Outbound vendors commonly report about 100 invitations a week, which is an observed figure, not an official one.',
    },
    {
      p: 'That gap matters for anyone running LinkedIn prospecting for a tech company. Search for the limit and nearly every result gives a confident number, a daily "safe" pace and a list of tricks. This post separates what LinkedIn itself says from what vendors report, and then turns that into a routine a sales team can use.',
    },
    { h2: 'What LinkedIn actually says' },
    {
      p: "LinkedIn's help page, [Types of restrictions for sending invitations](https://www.linkedin.com/help/linkedin/answer/a551012), is short and worth reading in full. The parts that matter for outbound:",
    },
    {
      ul: [
        'All members, Basic and Premium, are subject to invitation limits and restrictions. You cannot buy or acquire more invitations.',
        'An account may be temporarily restricted if you have sent many invitations within a short amount of time, or if many of your invitations have been ignored, left pending or marked as spam.',
        'If you send an excessive number of invitations and LinkedIn suspects an automation tool, it may suspend or restrict the account. Repeated suspensions may lead to a permanent restriction.',
        'After you withdraw an invitation, you cannot resend one to the same person for up to three weeks.',
        'LinkedIn recommends sending invitations only to people you know and trust, and adding a personalized message that explains why you want to connect.',
        'Most restrictions are removed automatically within about a week, and LinkedIn support cannot lift them on request or explain the reason.',
      ],
    },
    {
      p: 'Notice what is missing: any number. The page describes behaviour LinkedIn penalises, not a quota you can plan around. The second trigger, invitations ignored or marked as spam, is the one most outbound teams underrate. Volume is only half of the rule. The other half is how people respond.',
    },
    { h2: 'What vendors report, and where they disagree' },
    {
      p: 'Several automation and data vendors publish detailed limit guides. They broadly agree on a rolling seven day window and a weekly figure around 100 for most accounts. Beyond that they diverge.',
    },
    {
      ul: [
        'Salesforge, an email and LinkedIn outreach vendor, [says](https://www.salesforge.ai/blog/linkedin-connection-request-limit) paid tiers do not meaningfully raise the cap, so Free, Premium and Sales Navigator all sit near 100 a week. It also says LinkedIn never publishes an official number.',
        'GetSales, a LinkedIn automation vendor, [reports](https://getsales.io/resources/linkedin-connection-limits-2026/) roughly 100 for free and Premium accounts and 150 to 200 for Sales Navigator, and states that LinkedIn publishes none of these numbers.',
        'Evaboot, a Sales Navigator data extraction tool, [writes](https://evaboot.com/blog/how-many-connection-requests-send-on-linkedin) that the default is around 100 and that accounts with a high Social Selling Index and strong engagement may reach up to 200.',
      ],
    },
    {
      p: 'Two vendors say the number differs by plan and one says it does not. All three are describing what they see across accounts, and all three sell products that work around a limit. None of that makes them wrong, but it does mean you should treat each figure as one vendor view and not as a rule.',
    },
    { h2: 'Why automation is the real risk' },
    {
      p: 'Most of the "how to send more" advice assumes you will use automation. LinkedIn\'s [Prohibited software and extensions](https://www.linkedin.com/help/linkedin/answer/a1341387) page says it does not permit third party software, including bots, browser plug-ins or extensions, that scrape or automate activity on the site, and ties this to Section 8.2 of its [User Agreement](https://www.linkedin.com/legal/user-agreement). That section also prohibits using software to bypass or circumvent use limits.',
    },
    {
      p: 'In plain terms: a tool that sends invitations for you, or that is designed to stay under a limit, sits on the wrong side of those rules. A restricted account is a real cost for a founder or rep whose LinkedIn profile is also their sales asset. This is a risk to weigh, not legal advice, and the decision belongs to you.',
    },
    { h2: 'A safer LinkedIn prospecting routine' },
    {
      p: 'Because the penalties track behaviour more than a count, the routine that protects the account is also the one that gets better replies. It fits with the shift we described in [signal based outbound](/blog/outbound-signals-over-volume).',
    },
    {
      ol: [
        'Start from a short list of accounts with a reason to talk now, not a filtered export.',
        'Send invitations by hand, and spread them across the week instead of in one batch.',
        'Add a short personal note that says why you are connecting, as LinkedIn itself suggests.',
        'Track how many invitations are accepted, ignored and still pending. A growing pending pile is a warning sign.',
        'Withdraw stale invitations on your own schedule, remembering the wait of up to three weeks before you can invite the same person again.',
        'Use InMail and shared groups for people you do not know, as LinkedIn recommends, and move warm contacts to email or phone.',
        'If you do get restricted, stop, wait it out and review who you were inviting.',
      ],
    },
    {
      figure: {
        kind: 'flow',
        title: 'The invitation routine, step by step',
        caption: 'The routine above as a loop. Restriction triggers are from LinkedIn Help.',
        steps: [
          { label: 'Pick a short list of accounts with a reason to talk now' },
          { label: 'Send invitations by hand, spread across the week, with a short personal note' },
          {
            label: 'Track accepted, ignored and pending',
            detail: 'Ignored, pending or spam-marked invitations are a restriction trigger.',
          },
          { label: 'Withdraw stale invitations on your own schedule' },
        ],
        outcome: {
          pass: 'Acceptance holds up and you keep the account, and warm contacts move to email or phone.',
          fail: 'Many invitations ignored or left pending, or suspected automation: LinkedIn may restrict the account, usually lifted within about a week.',
        },
      },
    },
    { h2: 'What this means for a sales team' },
    {
      p: 'If the number is unknown and the penalty depends on response, then LinkedIn capacity is not something you can buy. It is earned by sending relevant invitations to people who accept them. That favours small teams with named owners and clear targeting over tool driven volume, and it is the same lesson as email: [inbox providers now punish unwanted mail](/blog/cold-email-deliverability-2026) in a similar way.',
    },
    {
      note: 'Our [outsourced SDR teams](/services/outsourced-sdr) run LinkedIn, email and phone as one sequence owned by a named rep. If your LinkedIn outreach is getting ignored or your account has been restricted, a [pipeline audit](/services/pipeline-audit) looks at the targeting and messaging behind it.',
    },
  ],
  faq: [
    {
      q: 'How many LinkedIn connection requests can I send per week?',
      a: [
        'LinkedIn does not publish a number. Vendors commonly report about 100 a week for most accounts, and some report more for Sales Navigator, but these are observations, not LinkedIn policy.',
      ],
    },
    {
      q: 'Does LinkedIn Premium or Sales Navigator raise the invitation limit?',
      a: [
        "LinkedIn says all members, Basic and Premium, are subject to invitation limits and that you cannot buy more invitations. Vendors disagree on whether Sales Navigator changes the figure, so don't plan around a higher number.",
      ],
    },
    {
      q: 'What happens if I hit the LinkedIn invitation limit?',
      a: [
        'You are temporarily restricted from sending invitations. LinkedIn says most restrictions are removed automatically within about a week, and that repeated suspensions for automated activity can lead to a permanent restriction.',
      ],
    },
    {
      q: 'Can I use automation tools for LinkedIn outreach?',
      a: [
        "LinkedIn's help pages say it does not permit third party software that automates activity on its site. Using it risks restriction of your account. This is not legal advice.",
      ],
    },
  ],
  sources: [
    {
      label: 'Types of restrictions for sending invitations',
      url: 'https://www.linkedin.com/help/linkedin/answer/a551012',
      publisher: 'LinkedIn Help',
    },
    {
      label: 'Prohibited software and extensions',
      url: 'https://www.linkedin.com/help/linkedin/answer/a1341387',
      publisher: 'LinkedIn Help',
    },
    {
      label: 'User Agreement',
      url: 'https://www.linkedin.com/legal/user-agreement',
      publisher: 'LinkedIn',
    },
    {
      label: 'LinkedIn connection request limit in 2026',
      url: 'https://www.salesforge.ai/blog/linkedin-connection-request-limit',
      publisher: 'Salesforge, an outreach software vendor (vendor claim)',
    },
    {
      label: 'LinkedIn connection request limits in 2026',
      url: 'https://getsales.io/resources/linkedin-connection-limits-2026/',
      publisher: 'GetSales, a LinkedIn automation vendor (vendor claim)',
    },
    {
      label: 'LinkedIn limits for connection requests and messages',
      url: 'https://evaboot.com/blog/how-many-connection-requests-send-on-linkedin',
      publisher: 'Evaboot, a Sales Navigator data tool (vendor claim)',
    },
  ],
  related: [
    { label: 'Outsourced SDR services', href: '/services/outsourced-sdr' },
    { label: 'Pipeline audit', href: '/services/pipeline-audit' },
    { label: 'Account executives', href: '/services/account-executives' },
  ],
}
