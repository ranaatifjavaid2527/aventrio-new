import type { BlogPost } from '../types'

export const coldEmailDeliverability2026: BlogPost = {
  slug: 'cold-email-deliverability-2026',
  keyword: 'cold email deliverability 2026',
  title: 'Cold Email Deliverability in 2026: What Changed | Aventrio',
  description:
    'Gmail and Outlook now reject non-compliant bulk mail instead of filtering it. What the rules actually say, what changed, and a checklist for outbound teams.',
  h1: 'Cold email deliverability in 2026: rejected, not filtered.',
  published: '2026-10-22',
  tags: ['Deliverability', 'Cold email'],
  takeaways: [
    'The rules have not changed since Gmail published them for February 2024. What changed is enforcement: mail that fails them is increasingly refused at the server instead of landing in spam.',
    'Senders of more than 5,000 messages a day to Gmail need SPF, DKIM and DMARC, alignment, and one-click unsubscribe on marketing mail.',
    'Google sets the spam complaint ceiling at 0.3% in Postmaster Tools. Most deliverability practitioners manage to 0.1%, because by 0.3% the damage is done.',
    'Outlook.com applies the same 5,000 a day threshold and has said non-compliant mail will be rejected with a 550 5.7.515 error.',
    'A rejection is louder than a spam folder: it shows up as bounces, so it is easier to see and easier to fix, if someone is watching.',
  ],
  body: [
    { h2: 'What actually changed' },
    {
      p: 'Nothing new was published this month. The requirements outbound teams talk about are the ones Google set out in its [email sender guidelines](https://support.google.com/a/answer/81126), which took effect on February 1, 2024. Microsoft followed with matching rules for Outlook.com, announced in its [Defender for Office 365 blog](https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-ecosystem-outlook%E2%80%99s-new-requirements-for-high%E2%80%90volume-senders/4399730) and enforced from May 5, 2025.',
    },
    {
      p: 'What has moved is how hard those rules bite. For most of 2024, mail that fell short was more likely to be filtered to spam. Google\'s own [sender guidelines FAQ](https://support.google.com/a/answer/14229414) now says that from November 2025 Gmail is ramping up enforcement, and that non-compliant messages will see temporary and permanent rejections. Microsoft has said the same: messages that fail its authentication requirements will be rejected with "550; 5.7.515 Access denied".',
    },
    {
      p: 'That matters more than it sounds. A message in spam still counts as sent in most sequencing tools, so a team can run for weeks believing a campaign is live when nobody is reading it. A rejection comes back as a bounce. It is visible, which makes it fixable, but only if someone checks bounce codes rather than just bounce counts.',
    },
    { h2: 'The requirements, in plain terms' },
    {
      p: 'Google splits its rules in two. Every sender to Gmail needs SPF or DKIM, valid forward and reverse DNS, TLS, properly formatted messages and a reported spam rate under 0.3%. Senders of more than 5,000 messages a day to Gmail accounts need all of the following:',
    },
    {
      ul: [
        'SPF and DKIM, both set up for the sending domain.',
        'A DMARC record. The policy can be p=none, but it must exist.',
        'Alignment: the domain in the From header must match the SPF or DKIM domain.',
        'One-click unsubscribe (the List-Unsubscribe-Post header) on marketing and subscribed mail, plus a visible unsubscribe link in the body.',
        'A spam rate in Postmaster Tools kept below 0.3%.',
      ],
    },
    {
      p: "The 5,000 figure counts messages to Gmail addresses from your domain in a day, across every mailbox on that domain. A team of reps on one domain can cross it without any single rep sending much. Google's FAQ also says that once a domain is classed as a bulk sender it stays one permanently, so dropping back under the line does not reset anything.",
    },
    { h2: 'Why 0.1% is the number to watch' },
    {
      p: 'Google publishes 0.3% as the line not to cross, measured in Postmaster Tools. Most deliverability practitioners manage to 0.1% instead, and that is the number we watch. Complaint rates are measured on what recipients mark as spam, and cold outreach to a poorly fitted list can move from fine to over the line inside a week.',
    },
    {
      p: 'For outbound, the levers that move complaints are the obvious ones, and they are list quality and relevance before they are anything technical. A contact who recognises why you wrote rarely presses the spam button, even if they do not reply.',
    },
    { h2: 'A checklist for outbound teams' },
    {
      ol: [
        'Never send cold volume from your primary domain. Use separate sending domains, so a problem on outreach never reaches your invoices, support or customer mail.',
        'Check SPF, DKIM and DMARC on every sending domain, and check alignment, not just presence. A DKIM signature for your sending tool domain does not align with yours.',
        'Add one-click unsubscribe headers and a visible opt out. Cold email is not exempt in practice, and a clear opt out lowers complaints.',
        'Register every sending domain in Google Postmaster Tools and read it weekly. It is the only first-party view of your spam rate at Gmail.',
        'Track bounces by code. A rise in 550 5.7.x responses is an authentication or reputation problem, not a bad list.',
        'Verify every address before it enters a sequence. Hard bounces are a reputation signal of their own.',
        'Warm new domains gradually and keep daily volume per mailbox modest. There is no published safe number, so ramp and watch.',
      ],
    },
    {
      note: 'This is the setup our [outsourced SDR teams](/services/outsourced-sdr) run on by default: separate warmed domains, SPF, DKIM and DMARC monitored daily, and verified data before anything is sent. If you want yours checked, the [pipeline audit](/services/pipeline-audit) covers deliverability as one of its four areas.',
    },
    { h2: 'What this does not change' },
    {
      p: 'Authentication gets mail accepted. It does not get mail read. A compliant domain sending a generic message to the wrong buyer will still be ignored, and complaints from that list will eventually undo the technical work. The sequence, the list and the reason for writing still decide whether outbound works.',
    },
  ],
  faq: [
    {
      q: 'Do the Gmail bulk sender rules apply to cold email?',
      a: [
        'Yes. The rules apply to anyone sending to Gmail addresses, and the stricter set applies once a domain sends more than 5,000 messages a day to Gmail. Google does not exempt one to one style outreach.',
      ],
    },
    {
      q: 'What is a safe spam complaint rate for cold email?',
      a: [
        'Google sets 0.3% as the ceiling. Most practitioners manage to 0.1% to leave room for a bad week. Read the rate in Google Postmaster Tools rather than estimating it.',
      ],
    },
    {
      q: 'What does a 550 5.7.515 bounce mean?',
      a: [
        'It is the code Outlook.com uses when a high volume sending domain does not meet its SPF, DKIM or DMARC requirements. Fix authentication and alignment on that domain before sending more.',
      ],
    },
    {
      q: 'Should cold email go out from our main company domain?',
      a: [
        'No. Use separate sending domains so a reputation problem on outreach cannot affect the mail your business depends on.',
      ],
    },
  ],
  sources: [
    {
      label: 'Email sender guidelines',
      url: 'https://support.google.com/a/answer/81126',
      publisher: 'Google Workspace Admin Help',
    },
    {
      label: 'Email sender guidelines FAQ',
      url: 'https://support.google.com/a/answer/14229414',
      publisher: 'Google Workspace Admin Help',
    },
    {
      label: "Outlook's new requirements for high volume senders",
      url: 'https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-ecosystem-outlook%E2%80%99s-new-requirements-for-high%E2%80%90volume-senders/4399730',
      publisher: 'Microsoft Defender for Office 365 blog',
    },
  ],
  related: [
    { label: 'Outsourced SDR services', href: '/services/outsourced-sdr' },
    { label: 'Pipeline audit', href: '/services/pipeline-audit' },
  ],
}
