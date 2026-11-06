import type { BlogPost } from '../types'

export const whenToOutsourceSdr: BlogPost = {
  slug: 'when-to-outsource-sdr',
  keyword: 'when to outsource sdr',
  title: 'When to Outsource SDR Work: A Readiness Test | Aventrio',
  description:
    'When to outsource SDR work: only once you can hand over a tested ICP, an offer that converts and a clear meeting definition. A five-question readiness test.',
  h1: 'Should you outsource your SDRs yet? Five questions to answer before you sign.',
  published: '2026-11-06',
  tags: ['Outsourced SDR', 'Outbound strategy'],
  takeaways: [
    'Outsource SDR work when you have something to hand over: an ICP you have tested, an offer that has converted and a written definition of a qualified meeting.',
    'Outsourcing does not find your go-to-market for you; vendor guides agree that handing over strategy before you have sold the product yourself is the most expensive mistake.',
    'Keep strategy, pricing, the ICP and late-stage closing in-house, and outsource the repeatable top of the funnel: list building, outreach and first qualification.',
    'Someone on your side must own onboarding, quality checks and feedback, because even a good outsourced team cannot learn your product from a deck.',
    'If you cannot answer yes to the five readiness questions, fix that first, or run a pipeline audit to find out where the gap is.',
  ],
  body: [
    { h2: 'When to outsource SDR work' },
    {
      p: 'Outsource SDR work when you already have a motion you could hand to a new hire on day one: a tested ideal customer profile, a message that has produced replies or deals, and a clear definition of a qualified meeting. If you do not, an outsourced team will spend your budget discovering those things, which is slow and expensive.',
    },
    {
      p: 'Most guides on this question are written by agencies and data vendors, so they lean toward yes. This post pulls out where they agree and turns it into a readiness test you can score yourself. It does not repeat the price discussion: for that, see [outsourced SDR cost](/blog/outsourced-sdr-cost), and for the build-or-buy comparison, see [in-house vs outsourced SDR](/compare/in-house-vs-outsourced-sdr).',
    },
    { h2: 'What the published guides agree on' },
    {
      p: 'We read three recent guides: LeadGenius, a contact data vendor, Prospeo, another data vendor, and Martal, an outsourced sales agency. They differ on cost, but on timing they say the same things.',
    },
    {
      ul: [
        'Do not outsource before you have sold the product yourself. Prospeo and Martal both say to close your first 10 to 20 deals through founder-led sales and write down what worked before handing it over.',
        'Outsourcing exposes a weak motion; it does not repair one. LeadGenius says that if your messaging and ICP are shallow, an outsourced team will show you quickly, and that it can take months to know whether the program works.',
        'Outsource execution, not judgment. Martal and Prospeo both recommend keeping strategy, pricing and closing in-house and outsourcing list building, outreach and qualification.',
        'You still need a person on your side. LeadGenius says to skip outsourcing if you cannot train the team, check quality and give feedback on messaging.',
      ],
    },
    {
      p: 'Two figures appear in the vendor guides without a primary source we could open. Prospeo and Martal both cite a survey of founders in which only about 7% said outsourced SDRs "really" worked and 26% said "sort of". We could not read the original survey, so treat it as a claim that is repeated, not a measured result. The pattern the guides draw from it is consistent with the first two points above: programs fail when the client has no playbook to hand over.',
    },
    { h2: 'The five-question readiness test' },
    {
      p: 'Each question has a pass condition you can check in a spreadsheet or a meeting, not a feeling. A fail on any one is a reason to fix that first.',
    },
    {
      figure: {
        kind: 'flow',
        title: 'Are you ready to outsource SDR work?',
        caption:
          'The questions restate points the vendor guides above make. They are a screening tool, not a guarantee of results either way.',
        steps: [
          {
            label: 'Has your ICP been tested?',
            detail:
              'You can name the companies and the buyer titles, and your own sales have shown they buy.',
          },
          {
            label: 'Has your offer converted?',
            detail:
              'Founder-led or in-house outreach has produced replies and meetings you would repeat.',
          },
          {
            label: 'Is a qualified meeting written down?',
            detail: 'Who attends, what problem, what timing, in two sentences.',
          },
          {
            label: 'Do you have an owner for the team?',
            detail: 'One named person who onboards, checks quality and gives feedback every week.',
          },
          {
            label: 'Can your closers take the meetings?',
            detail: 'Someone can run a discovery call within days of a meeting being booked.',
          },
        ],
        outcome: {
          pass: 'You have something to hand over. Outsourcing will scale it.',
          fail: 'Fix the failing step first. Outsourcing now would fund the discovery work instead of scaling it.',
        },
      },
    },
    { h3: '1. Has your ICP been tested?' },
    {
      p: 'A tested ICP is more specific than a market. "Mid-market software companies" is a market. A named segment, a buyer title and a reason they would care now, with at least a few real wins in it, is an ICP. If the only evidence is that the segment looks big, you are still researching.',
    },
    { h3: '2. Has your offer converted?' },
    {
      p: 'You need at least some outreach that earned replies and meetings from the people in the ICP. If nobody on your team has ever booked a meeting with cold outreach, an outsourced team has nothing proven to copy, and you will not be able to tell a bad message from a bad market.',
    },
    { h3: '3. Is a qualified meeting written down?' },
    {
      p: 'This is the cheapest test. If you cannot describe a meeting worth taking in two sentences, no provider can be held to it, and any per-meeting pricing will be argued in the first month. Write it down before you talk to vendors.',
    },
    { h3: '4. Do you have an owner for the team?' },
    {
      p: 'The weekly work is small but it cannot be skipped: review a sample of emails, listen to calls or read replies, answer product questions and tell the team which meetings were good. If nobody has that time, the guides above say not to outsource at all.',
    },
    { h3: '5. Can your closers take the meetings?' },
    {
      p: 'A booked meeting that sits for two weeks is a lost meeting. Check that you have a person who can run discovery, and that your calendar and CRM handoff work, before the first meeting arrives.',
    },
    { h2: 'What to outsource and what to keep' },
    {
      figure: {
        kind: 'compare',
        title: 'Where the line usually sits',
        caption:
          'This is the split Martal and Prospeo describe in their guides, and the split we recommend. It is not a rule for every company.',
        left: {
          heading: 'Keep in-house',
          points: [
            'Strategy, positioning and the ICP.',
            'Pricing and what you will and will not promise.',
            'Late-stage selling and closing.',
            'The definition of a qualified meeting and the weekly review.',
          ],
        },
        right: {
          heading: 'Outsource',
          points: [
            'List building and contact research.',
            'Sending infrastructure and cold email, phone and LinkedIn outreach.',
            'First qualification and booking.',
            'Reporting on booked, held and converted meetings.',
          ],
        },
      },
    },
    {
      p: 'One more thing to keep is the learning. Prospeo warns that when an outsourced team handles every prospect conversation, you lose the objections and the messages that work. Ask for replies, call notes or recordings to be shared, and a short weekly debrief, so what the team learns stays yours.',
    },
    { h2: 'When building in-house is the better choice' },
    {
      p: 'LeadGenius argues that if you can afford two or three SDRs plus a manager, building in-house gives you more process control and a career path into AE roles. That is a view from a vendor that sells to in-house teams, but the underlying trade is real: outsourcing buys speed and flexibility, and in-house buys control and long-term ownership of the skill. Outsourcing fits best when you want to test a segment or a channel fast, when ramping and managing a team would slow you down, or when you have a working motion and only capacity is missing.',
    },
    { h2: 'A checklist before you sign' },
    {
      ol: [
        'Score yourself on the five questions above. Do not proceed on any fail.',
        'Write the ICP, the offer and the qualified meeting definition on one page and share it with every provider you speak to.',
        'Name the owner on your side and block their weekly time.',
        'Decide what stays in-house: strategy, pricing and closing.',
        'Agree how you will judge the first 90 days: booked, held and qualified meetings, and replies you can read.',
        'Check the term, who owns the data and how a weak rep is replaced. [Outsourced SDR cost](/blog/outsourced-sdr-cost) has the questions to ask on price.',
        'Make sure sending is set up safely before volume starts. See [cold email deliverability in 2026](/blog/cold-email-deliverability-2026).',
      ],
    },
    {
      p: 'Even when every answer is yes, do not expect an instant result. Vendor guides describe a ramp of months before you can judge the program, and nobody can promise a number of meetings.',
    },
    {
      note: 'If you cannot tell which of the five questions you would fail, a [pipeline audit](/services/pipeline-audit) looks at your ICP, offer, data and follow-up and tells you where the gap is. If you are ready, our [outsourced SDR](/services/outsourced-sdr) reps work a maximum of three accounts each, for a flat monthly fee per rep, with a 60 day pilot and then month to month.',
    },
  ],
  faq: [
    {
      q: 'When should a SaaS company outsource its SDR team?',
      a: [
        'When it already has a tested ICP, an offer that has produced meetings and a written definition of a qualified meeting, and needs more capacity or speed. Vendor guides say not to outsource before you have sold the product yourself.',
      ],
    },
    {
      q: 'Should a startup outsource SDRs before product-market fit?',
      a: [
        'Usually not. An outsourced team executes a motion; it does not find one. Before you have closed your first 10 to 20 deals yourself, you are paying a provider to guess your ICP and message.',
      ],
    },
    {
      q: 'What should you keep in-house when you outsource SDRs?',
      a: [
        'Keep strategy, pricing, the ICP and late-stage closing, plus a weekly review of quality. Outsource list building, outreach and first qualification.',
      ],
    },
    {
      q: 'How long before you know if an outsourced SDR program works?',
      a: [
        'Vendor guides describe months, not weeks. LeadGenius says it can take about six months to be sure. Agree upfront which numbers you will review at 90 days: booked, held and qualified meetings, and the replies themselves.',
      ],
    },
  ],
  sources: [
    {
      label: 'Should you outsource your SDR function?',
      url: 'https://www.leadgenius.com/resources/should-you-outsource-your-sdr-function-a-brutally-honest-guide-for-lean-gtm-teams',
      publisher: 'LeadGenius, a contact data vendor (vendor claim)',
    },
    {
      label: 'SaaS sales outsourcing: 2026 operator guide',
      url: 'https://prospeo.io/s/saas-sales-outsourcing',
      publisher: 'Prospeo, a contact data vendor (vendor claim)',
    },
    {
      label: 'SaaS sales outsourcing: a 2026 guide',
      url: 'https://martal.ca/saas-sales-outsourcing-guide/',
      publisher: 'Martal, an outsourced sales agency (vendor claim)',
    },
  ],
  related: [
    { label: 'Outsourced SDR services', href: '/services/outsourced-sdr' },
    { label: 'Pipeline audit', href: '/services/pipeline-audit' },
    { label: 'In-house vs outsourced SDR', href: '/compare/in-house-vs-outsourced-sdr' },
  ],
}
