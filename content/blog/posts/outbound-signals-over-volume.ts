import type { BlogPost } from '../types'

export const outboundSignalsOverVolume: BlogPost = {
  slug: 'outbound-signals-over-volume',
  keyword: 'signal based outbound',
  title: 'Signal Based Outbound: Why Volume Stopped Working | Aventrio',
  description:
    'Inbox enforcement, LinkedIn invitation limits and tired buyers have made high volume outbound expensive. How signal based targeting and shorter sequences replace it.',
  h1: 'Signal based outbound: why sending more stopped working.',
  published: '2026-10-30',
  tags: ['Outbound strategy', 'LinkedIn'],
  takeaways: [
    'Three things now tax volume: inbox providers reject non-compliant bulk mail, LinkedIn limits and penalises ignored invitations, and buyers ignore generic outreach.',
    'Signal based outbound means writing to accounts because something happened, such as a hire, a funding round or a tool change, not because they match a filter.',
    'Shorter sequences with a clear reason for each touch are replacing long automated cadences.',
    'Email, LinkedIn and phone work best as one sequence owned by one person, not three separate campaigns.',
    'Fewer, better fitted contacts protect the sending domain and the LinkedIn account at the same time.',
  ],
  body: [
    { h2: 'The volume tax' },
    {
      p: 'For years the default answer to a weak outbound month was to send more. That answer now has a cost on every channel.',
    },
    {
      ul: [
        'Email: Gmail and Outlook enforce authentication and complaint limits for bulk senders and increasingly refuse mail that fails them. We covered the detail in [cold email deliverability in 2026](/blog/cold-email-deliverability-2026).',
        "LinkedIn: invitations are capped weekly. The outbound agency OneAway, in its [LinkedIn outbound guide](https://www.oneaway.io/blog/linkedin-outbound), puts the cap at about 100 connection requests a week for most accounts and says accounts that send many requests without engaging with content get flagged. LinkedIn does not publish an exact number, and OneAway is an agency, so treat its figures as one practitioner's view.",
        'Buyers: senior buyers at tech companies receive more automated outreach than ever, and generic messages are easy to recognise and ignore.',
      ],
    },
    {
      p: 'Each of these punishes the same behaviour: sending to people who had no reason to hear from you.',
    },
    { h2: 'What signal based outbound means' },
    {
      p: 'A signal is a public event that makes your message relevant now. The list starts from the event, not the filter. Common ones for software, SaaS and IT services sellers:',
    },
    {
      ul: [
        'A new leader in the function you sell to, in their first months in the role.',
        'A job post that describes the problem your product solves.',
        'A funding round, which usually comes with a hiring plan and new budget.',
        'A change in tech stack, such as adopting or dropping a tool you integrate with or replace.',
        'Expansion into a new market or segment.',
        'Engagement with your own content or your founder on LinkedIn.',
      ],
    },
    {
      p: 'The message then says why you are writing, in one line, and connects that event to a specific outcome. It is a shorter list and a better one.',
    },
    { h2: 'Shorter sequences' },
    {
      p: 'Long automated cadences of ten or more touches were built for volume. With smaller, better fitted lists, each touch needs its own reason, and there are only so many honest reasons to follow up. There is no reliable published benchmark for the right length, so the rule we use is simpler: stop when you have run out of useful things to say.',
    },
    { h2: 'One sequence, three channels' },
    {
      p: 'Email, LinkedIn and phone used to be run as separate campaigns, often by separate tools. They work better as one sequence owned by one person, so a LinkedIn reply stops the email follow up and a call references the message the buyer already saw. That only works if a person owns the account, which is the argument for named reps over tool driven volume.',
    },
    { h2: 'How to start' },
    {
      ol: [
        'Pick the two or three signals that best preceded your last ten closed deals.',
        'Build a list only from accounts showing those signals this month.',
        'Write one opening line per signal that says why you are writing now.',
        'Keep the sequence short, mix channels, and give every touch a new reason.',
        'Report replies and meetings by signal, so you know which ones to keep.',
      ],
    },
    {
      note: 'This is the targeting our [outsourced SDR teams](/services/outsourced-sdr) run, with lists rebuilt and copy rewritten monthly against what buyers reply to. If your current outbound is sending a lot and booking little, a [pipeline audit](/services/pipeline-audit) is a two week, fixed fee way to find out why.',
    },
  ],
  faq: [
    {
      q: 'What is signal based outbound?',
      a: [
        'Outreach triggered by a public event that makes the message relevant now, such as a new hire, a funding round, a matching job post or a tech stack change, rather than by a static filter on company size and title.',
      ],
    },
    {
      q: 'How many touches should a cold outbound sequence have?',
      a: [
        'As many as you have honest reasons for. There is no reliable independent benchmark; the better test is whether each touch adds something new.',
      ],
    },
    {
      q: 'What is the LinkedIn weekly invitation limit?',
      a: [
        "LinkedIn caps invitations per week and does not publish an exact figure. The agency OneAway reports about 100 a week for most accounts, and says many ignored requests with little engagement get an account flagged. Treat that as one practitioner's view, and let targeting matter more than volume.",
      ],
    },
  ],
  sources: [
    {
      label: 'LinkedIn outbound guide',
      url: 'https://www.oneaway.io/blog/linkedin-outbound',
      publisher: 'OneAway, an outbound agency',
    },
    {
      label: 'Email sender guidelines',
      url: 'https://support.google.com/a/answer/81126',
      publisher: 'Google Workspace Admin Help',
    },
  ],
  related: [
    { label: 'Outsourced SDR services', href: '/services/outsourced-sdr' },
    { label: 'Pipeline audit', href: '/services/pipeline-audit' },
    { label: 'Account executives', href: '/services/account-executives' },
  ],
}
