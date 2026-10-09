/**
 * FAQ. Each answer is written to stand alone as a quotable paragraph, because
 * answer engines lift individual answers out of context. The same text feeds
 * the visible FAQ and the FAQPage JSON-LD, so they can never disagree.
 */
export type FaqItem = { q: string; a: string[] }

export const faqIntro = {
  eyebrow: 'Questions buyers actually ask',
  title: 'Before you book the call.',
}

export const faq: FaqItem[] = [
  {
    q: 'How is this different from a cold email agency?',
    a: [
      "A cold-email agency sends sequences and forwards you the replies. We staff people. Our reps handle the objection, book the call, chase the reschedule, and sit on your Slack. If you need someone to run the demo afterwards, that's an AE on the same engagement. If your offer is simple and your buyer converts off one email, an email agency is cheaper and you should use one.",
    ],
  },
  {
    // K6: new, approved 9 October 2026
    q: 'Is an outsourced SDR team better than hiring in-house?',
    a: [
      'It depends on how fast you need pipeline and how complex your product is. An in-house SDR takes months to source, hire and ramp, and you carry the cost if the hire does not work out. An outsourced team starts in 14 days and the rep is replaced at our cost if they underperform. In-house wins when your product needs months of internal training or you want outbound knowledge to stay with permanent staff. Many companies start outsourced, learn what works, then hire.',
    ],
  },
  {
    q: 'What kind of companies do you work with?',
    a: [
      'B2B companies with an offer that already works and a buyer we can describe. Our deepest experience is software, IT services and SaaS, but the method is the same whether you sell development capacity, consulting, logistics or equipment: identify who says yes and why, build a verified list of people who look like them, and have a trained rep work the replies.',
      "What we can't help with is an offer that hasn't sold yet. Outbound amplifies a message that works. It won't find you one.",
    ],
  },
  {
    q: 'Do you guarantee a number of meetings?',
    a: [
      "No, and we'd be careful with anyone who does. Meeting volume depends on your offer, your market's buying cycle and timing nobody controls. An agency that commits to a figure has usually either priced the risk into your retainer or intends to count no-shows as wins.",
      "What we commit to is the work: verified data, copy written per segment and rewritten monthly, sending infrastructure we own and monitor, named reps capped at three accounts, and weekly reporting that separates booked from held from converted. If the numbers aren't there, you'll see it in week three rather than month three.",
    ],
  },
  {
    q: 'How fast can you start?',
    a: [
      "First outreach goes out 14 days after kickoff. Week one is ICP, positioning, and list build. Week two is infrastructure, sequence writing, and rep training on your product. There's no job req to open and no notice period to wait out.",
    ],
  },
  {
    q: 'What does it cost?',
    a: [
      // K7: minimum term added so the answer stands alone
      'A flat monthly fee per rep. No commission stacking, no benefits, no separate tooling or data line items, and no per-meeting surcharge that punishes a good month. The rate depends on seniority, since an SDR seat and an AE seat are priced differently, and on how many seats you run, so we quote it on the call once we know the shape of the team. The minimum term is one quarter, then month-to-month.',
      // C5: unsupported ratio removed
      'Compare that against a fully loaded in-house hire: salary, employer tax, benefits, tooling, recruiting and the ramp months before a rep produces anything.',
    ],
  },
  {
    q: 'Who owns the domains, the data, and the lists?',
    a: [
      'You do. We buy and warm separate sending domains so your primary domain is never exposed to cold volume, and those transfer to you on request. Lists, sequences, and call notes export in full at any time, including if you cancel.',
    ],
  },
  {
    q: "What happens if a rep isn't performing?",
    a: [
      "We replace them and re-ramp at our cost. You don't pay twice for the same seat, and you don't manage the performance conversation. That one's ours.",
    ],
  },
  {
    q: 'Do your reps work US hours?',
    a: [
      "Yes. Coverage is built around your prospects' business day, not ours: 8am to 5pm Pacific for Bay Area accounts, and Eastern hours for the Northeast. Prospects never see a reply time that gives away a time zone.",
    ],
  },
  {
    q: 'Do you sell leads or lists?',
    a: [
      "No. We don't resell data and we don't run the same list across multiple clients. Every list is built for one engagement, and your campaign data isn't pooled with anyone else's.",
    ],
  },
  {
    q: "What's the minimum commitment?",
    a: [
      "One quarter, then month-to-month. Anything shorter can't distinguish a bad offer from a slow start. You'd be cancelling right as the data becomes readable.",
    ],
  },
]
