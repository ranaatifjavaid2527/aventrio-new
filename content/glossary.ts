/**
 * Outbound sales glossary. Plain definitions only: no statistics, no client claims,
 * no promised outcomes. Terms that describe how Aventrio works repeat facts already
 * stated on the services pages and in llms.txt.
 */
export type GlossaryTerm = {
  slug: string
  term: string
  /** One or two sentences, written to be quoted on its own. */
  definition: string
  /** Optional extra sentence of context. */
  more?: string
  link?: { label: string; href: string }
}

export const glossary = {
  path: '/glossary',
  title: 'Outbound Sales Glossary: SDR, ICP, Deliverability Terms | Aventrio',
  description:
    'Plain definitions of the outbound sales terms tech companies run into: SDR, ICP, SPF, DKIM, DMARC, signal-based outbound, appointment setting and more.',
  eyebrow: 'Glossary',
  h1: 'Outbound sales glossary: the terms, in plain English.',
  lede: 'Short definitions of the terms founders and sales leaders meet when they start outbound, written to stand on their own. Where a term links to a longer page, that page goes deeper.',
}

export const terms: GlossaryTerm[] = [
  {
    slug: 'sdr',
    term: 'SDR (sales development representative)',
    definition:
      'An SDR is a salesperson who finds and contacts potential buyers and books meetings for someone else to close. The role stops at the booked, qualified meeting.',
    more: 'The account executive who takes the meeting is a different role.',
    link: { label: 'Outsourced SDR services', href: '/services/outsourced-sdr' },
  },
  {
    slug: 'bdr',
    term: 'BDR (business development representative)',
    definition:
      'A BDR does the same first-contact work as an SDR. Some companies use BDR for outbound prospecting and SDR for following up inbound leads, but the two titles are used interchangeably and there is no single standard.',
  },
  {
    slug: 'outsourced-sdr',
    term: 'Outsourced SDR',
    definition:
      'An outsourced SDR is a development rep employed and managed by a provider rather than by your company. You get the outbound function without recruiting, training or managing the person.',
    more: 'The trade-off against an in-house hire is speed and management load against how deeply the rep can learn a complex product.',
    link: {
      label: 'In-house vs outsourced SDR',
      href: '/compare/in-house-vs-outsourced-sdr',
    },
  },
  {
    slug: 'icp',
    term: 'ICP (ideal customer profile)',
    definition:
      'An ICP describes the type of company that gets the most value from your product and is most likely to buy it, usually by industry, size, technology and problem. It decides who goes on the target list.',
    more: 'A buyer persona is different: it describes the person inside that company, such as a VP Sales or a Head of IT.',
  },
  {
    slug: 'appointment-setting',
    term: 'Appointment setting',
    definition:
      'Appointment setting is the work of getting a qualified prospect to agree to a scheduled call or meeting with your sales team. It covers outreach, handling replies and objections, and the booking itself.',
  },
  {
    slug: 'lead-qualification',
    term: 'Lead qualification',
    definition:
      'Lead qualification is checking that a contact fits your ICP, has the authority or influence to buy, and has a real reason to talk before a meeting is booked. It keeps your calendar for conversations worth having.',
  },
  {
    slug: 'sql',
    term: 'SQL (sales qualified lead)',
    definition:
      'A sales qualified lead is a contact that sales has reviewed and accepted as a real opportunity worth pursuing. The exact criteria are set by each company, so agree on them before outbound starts.',
  },
  {
    slug: 'cold-email',
    term: 'Cold email',
    definition:
      'A cold email is a first message to someone who has not asked to hear from you, sent to start a business conversation. Done well it is short, specific to the recipient and easy to decline.',
    more: 'US rules such as CAN-SPAM apply. This is not legal advice.',
  },
  {
    slug: 'email-deliverability',
    term: 'Email deliverability',
    definition:
      'Email deliverability is whether your messages reach the inbox instead of the spam folder or getting rejected. It depends on your sending domain reputation, authentication, list quality and how recipients react.',
    link: {
      label: 'Cold email deliverability in 2026',
      href: '/blog/cold-email-deliverability-2026',
    },
  },
  {
    slug: 'spf',
    term: 'SPF (Sender Policy Framework)',
    definition:
      'SPF is a DNS record that lists the servers allowed to send email for your domain, so receiving servers can check a message came from an approved source.',
  },
  {
    slug: 'dkim',
    term: 'DKIM (DomainKeys Identified Mail)',
    definition:
      'DKIM adds a cryptographic signature to each outgoing email, letting receiving servers confirm the message was authorised by the domain and was not altered in transit.',
  },
  {
    slug: 'dmarc',
    term: 'DMARC',
    definition:
      'DMARC is a DNS policy that tells receiving servers what to do with email that fails SPF and DKIM checks, and sends the domain owner reports about who is sending mail in its name.',
  },
  {
    slug: 'domain-warm-up',
    term: 'Domain warm-up',
    definition:
      'Warm-up is gradually increasing the volume sent from a new sending domain or mailbox so mailbox providers see normal, steady behaviour instead of a sudden spike.',
    more: 'Aventrio runs cold outreach from separate warmed domains, never from a client’s primary domain.',
  },
  {
    slug: 'sending-domain',
    term: 'Sending domain',
    definition:
      'A sending domain is the domain that outbound emails come from. Teams usually register separate domains for cold outreach so a reputation problem there cannot affect the company’s main business email.',
  },
  {
    slug: 'signal-based-outbound',
    term: 'Signal-based outbound',
    definition:
      'Signal-based outbound means contacting a company because of an event that suggests a need, such as a new hire, a funding announcement or a technology change, instead of working through a static list.',
    link: { label: 'Signal-based outbound', href: '/blog/outbound-signals-over-volume' },
  },
  {
    slug: 'abm',
    term: 'ABM (account-based marketing)',
    definition:
      'ABM focuses effort on a defined list of named accounts and tailors outreach to the specific people and priorities inside each one, rather than casting a wide net.',
  },
  {
    slug: 'sequence',
    term: 'Sequence (cadence)',
    definition:
      'A sequence is a planned series of outreach steps to one prospect across email, LinkedIn and phone, spaced over days or weeks and stopped as soon as the prospect replies.',
  },
  {
    slug: 'show-rate',
    term: 'Show rate',
    definition:
      'Show rate is the share of booked meetings that actually take place. It is the reason to track booked and held meetings as separate figures instead of counting bookings alone.',
    more: 'Aventrio reports sent, opened, replied, booked, held and converted as six separate figures every week.',
  },
  {
    slug: 'pipeline-audit',
    term: 'Pipeline audit',
    definition:
      'A pipeline audit is a structured review of how your outbound currently works, covering targeting, messaging, deliverability and tools, ending in a prioritised list of fixes.',
    link: { label: 'Pipeline audit', href: '/services/pipeline-audit' },
  },
]
