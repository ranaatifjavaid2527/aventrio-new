import { site } from './site'

/**
 * Legal copy. Where the client has not yet supplied a legal detail, the
 * bracketed label is rendered on purpose: the quality gate fails on unfilled
 * placeholders, so these pages cannot ship incomplete by accident.
 */
const fill = (value: string | null, label: string) => value ?? `[${label}]`

const entity = fill(site.legal.entityName, 'legal entity name')
const address = fill(site.legal.registeredAddress, 'registered address')
const law = fill(site.legal.governingLaw, 'country or state of registration')

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; head: string[]; rows: string[][] }

export type LegalSection = { title: string; blocks: LegalBlock[] }
export type LegalDoc = {
  title: string
  description: string
  updated: string
  intro: string[]
  sections: LegalSection[]
}

export const privacy: LegalDoc = {
  title: 'Privacy Policy',
  description:
    'How Aventrio collects, uses and protects personal data on aventrio.co, including cookies, your rights, and who we share data with.',
  updated: '9 October 2026',
  intro: [
    'This policy explains what Aventrio collects when you visit this website or contact us, why we collect it, and what you can do about it. It is written to be read, not to be survived.',
    'In short: we collect the details you choose to give us, plus basic analytics if you allow them. We do not sell your data, and we do not add you to a marketing list because you read a page.',
  ],
  sections: [
    {
      title: '1. Who we are',
      blocks: [
        {
          type: 'p',
          text: `Aventrio (${entity}) provides outbound sales development services to business clients. Our registered address is ${address}. For any question about this policy or your data, write to ${site.email}.`,
        },
        { type: 'p', text: 'For the information described here, Aventrio is the data controller.' },
      ],
    },
    {
      title: '2. What we collect',
      blocks: [
        { type: 'h3', text: 'Information you give us' },
        {
          type: 'ul',
          items: [
            'Your work email address, if you submit it through the short form on this site, and anything you send us by email.',
            'Booking details if you schedule a call: name, email, time zone and any answers you give in the booking form, such as your company website, revenue band, team size, what you sell and whether you run outbound today. These are collected by our scheduling provider inside the booking calendar on this site.',
          ],
        },
        { type: 'h3', text: 'Information collected automatically' },
        {
          type: 'ul',
          items: [
            'Server logs kept by our hosting provider: IP address, browser type, pages requested and timestamps. These exist for security, rate limiting and to keep the site running.',
            'Analytics, only if you accept analytics cookies. These tell us which pages are read and how people arrive, in aggregate.',
          ],
        },
        {
          type: 'p',
          text: 'We do not ask for and do not want special category data: health, political views, biometrics or anything similar. Please do not send it to us.',
        },
      ],
    },
    {
      title: '3. Cookies and browser storage',
      blocks: [
        {
          type: 'p',
          text: 'A cookie is a small file a website stores in your browser. Browser storage works in a similar way. We use as little of either as we can.',
        },
        {
          type: 'table',
          head: ['Type', 'Purpose', 'Set without consent?'],
          rows: [
            [
              'Strictly necessary',
              'Remembering your cookie choice so we stop asking, and remembering that you have already seen or closed the email form so it does not appear again for 30 days.',
              'Yes. These hold no personal data.',
            ],
            [
              'Analytics',
              'Counting visits and understanding which pages are useful, in aggregate.',
              'No. Only after you accept.',
            ],
            [
              'Third-party embeds',
              'The booking calendar and the review widget load from their providers when you view them, and those providers may set their own cookies.',
              'Governed by the provider. See section 5.',
            ],
            [
              'Advertising',
              'We do not use advertising or cross-site tracking cookies.',
              'Not used.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Where analytics is offered, you can change your choice at any time using the Cookie preferences link in the footer, or by clearing cookies in your browser. Declining analytics does not limit anything on this site.',
        },
      ],
    },
    {
      title: '4. Why we are allowed to use it',
      blocks: [
        {
          type: 'ul',
          items: [
            'Your consent, for analytics cookies and for replying to an email address you gave us through the form. You can withdraw it at any time.',
            'Legitimate interests, for replying to an enquiry, running and securing the website, and keeping records of our business conversations. We balance this against your rights and keep collection minimal.',
            'Contract, where we are delivering services you have engaged us for.',
            'Legal obligation, where tax or accounting rules require us to keep records.',
          ],
        },
      ],
    },
    {
      title: '5. Who else sees it',
      blocks: [
        {
          type: 'p',
          text: 'We share data only with service providers who need it to do their job for us, under contract, and never for their own marketing:',
        },
        {
          type: 'ul',
          items: [
            'Vercel, which hosts this website and delivers its pages',
            'Resend, which delivers the email form submissions to our inbox',
            'Cal.com, our scheduling tool, when you book a call',
            'Clutch, whose review widget is shown on this site',
            'Our email and calendar providers',
            'Analytics, if you accepted analytics cookies',
            'Our CRM, to track business conversations',
          ],
        },
        {
          type: 'p',
          text: "We do not sell personal information, and we do not share it for cross-context behavioural advertising. We may disclose information if the law requires it, or to protect our rights or someone's safety.",
        },
      ],
    },
    {
      title: '6. Where it goes',
      blocks: [
        {
          type: 'p',
          text: 'Our providers may process data outside your country, including in the United States. Where data leaves the UK or European Economic Area, we rely on appropriate safeguards such as Standard Contractual Clauses or an adequacy decision.',
        },
      ],
    },
    {
      title: '7. How long we keep it',
      blocks: [
        {
          type: 'ul',
          items: [
            'Enquiries that go nowhere: up to 24 months, then deleted.',
            'Client records: for the engagement and up to 6 years afterwards, for tax and legal reasons.',
            'Analytics: up to 14 months, in aggregate.',
            'Server logs: typically 30 to 90 days.',
          ],
        },
      ],
    },
    {
      title: '8. Your rights',
      blocks: [
        { type: 'p', text: 'Depending on where you live, you can ask us to:' },
        {
          type: 'ul',
          items: [
            'Tell you what we hold about you, and give you a copy',
            'Correct anything inaccurate',
            'Delete it, where we have no overriding reason to keep it',
            'Restrict or object to how we use it, including direct marketing, which you can stop at any time',
            'Receive it in a portable format, or have it sent elsewhere',
            'Withdraw consent you previously gave',
          ],
        },
        {
          type: 'p',
          text: `Write to ${site.email} and we will respond within 30 days. We will not charge you or treat you differently for asking. If you are in the UK or EEA and are unhappy with our answer, you may complain to your local data protection authority. If you are in California, you may also designate an authorised agent to act for you.`,
        },
      ],
    },
    {
      title: '9. Security',
      blocks: [
        {
          type: 'p',
          text: 'We use access controls, encryption in transit, and limit who on the team can see what. No system is perfectly secure, and we will not pretend otherwise. If a breach affects you, we will tell you and the relevant regulator as the law requires.',
        },
      ],
    },
    {
      title: '10. Children',
      blocks: [
        {
          type: 'p',
          text: 'This is a business website. It is not intended for anyone under 16, and we do not knowingly collect their information.',
        },
      ],
    },
    {
      title: '11. Changes',
      blocks: [
        {
          type: 'p',
          text: 'If we change this policy we will update the date at the top. Material changes will be flagged on the site.',
        },
      ],
    },
    {
      title: '12. Contact',
      blocks: [
        {
          type: 'p',
          text: `Questions, requests or complaints: ${site.email}, or write to ${address}.`,
        },
      ],
    },
  ],
}

export const terms: LegalDoc = {
  title: 'Terms of Service',
  description:
    'The terms governing use of the Aventrio website, including intellectual property, limitation of liability and our position on guaranteed results.',
  updated: '9 October 2026',
  intro: [
    'These terms govern your use of aventrio.co. They are not the agreement under which we deliver services: that is a separate written contract signed by both parties, and where the two differ, the signed contract wins.',
    'In short: this site is information, not an offer or a promise of results. Anything we actually do for you is set out in a signed agreement.',
  ],
  sections: [
    {
      title: '1. Agreement',
      blocks: [
        {
          type: 'p',
          text: `By using this website you accept these terms. If you do not accept them, please do not use the site. The site is operated by Aventrio (${entity}), ${address}.`,
        },
      ],
    },
    {
      title: '2. What this site is',
      blocks: [
        {
          type: 'p',
          text: 'This website describes outbound sales development services for business clients. Nothing on it is an offer capable of acceptance, a quotation, or a guarantee of any commercial outcome.',
        },
        {
          type: 'p',
          text: 'No results are promised. We state this on the site and we repeat it here: we do not guarantee a number of meetings, leads, opportunities or revenue. Outbound performance depends on your offer, your market, your pricing and timing, much of which is outside our control. Any example views shown on this site are illustrations of how the work is presented, not results or a forecast of your results.',
        },
      ],
    },
    {
      title: '3. Services',
      blocks: [
        {
          type: 'p',
          text: 'Where you engage us, the scope, fees, term, notice periods and service levels are set out in a written agreement. Those terms govern the work. Nothing on this website varies a signed agreement.',
        },
      ],
    },
    {
      title: '4. Using the site',
      blocks: [
        { type: 'p', text: 'You agree not to:' },
        {
          type: 'ul',
          items: [
            "Use the site unlawfully, or in a way that damages it or interferes with anyone else's use",
            'Attempt to gain unauthorised access to any part of the site or its infrastructure',
            'Scrape, harvest or systematically extract content without our written permission',
            'Copy or reuse our copy, structure or design as your own commercial material',
          ],
        },
      ],
    },
    {
      title: '5. Intellectual property',
      blocks: [
        {
          type: 'p',
          text: 'The content, design, copy, graphics and code on this site belong to Aventrio or our licensors and are protected by copyright and other rights. You may read, print and share pages for your own business evaluation. Any other use needs our written permission. Third-party names and marks mentioned on this site belong to their owners and are used only to describe tools and categories we work with; their mention does not imply partnership or endorsement.',
        },
      ],
    },
    {
      title: '6. Third-party tools and links',
      blocks: [
        {
          type: 'p',
          text: 'This site embeds and links to third-party services, including a scheduling tool and a review widget. We do not control them, and we are not responsible for their content, availability or practices. Your use of them is governed by their terms and privacy policies.',
        },
      ],
    },
    {
      title: '7. Accuracy',
      blocks: [
        {
          type: 'p',
          text: 'We keep this site accurate and current as far as we reasonably can, but we make no warranty that it is complete, error-free or up to date. The site is provided as is and as available, without warranties of any kind, express or implied, to the fullest extent the law permits.',
        },
      ],
    },
    {
      title: '8. Limitation of liability',
      blocks: [
        {
          type: 'p',
          text: 'To the fullest extent permitted by law, Aventrio is not liable for any indirect, incidental, special or consequential loss, or for lost profits, lost revenue, lost business or lost data, arising from your use of this website. Our total liability in connection with this website will not exceed one hundred US dollars.',
        },
        {
          type: 'p',
          text: 'Nothing here excludes liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be excluded.',
        },
      ],
    },
    {
      title: '9. Privacy',
      blocks: [
        {
          type: 'p',
          text: 'Our handling of personal data is described in the Privacy Policy, which forms part of these terms.',
        },
      ],
    },
    {
      title: '10. Changes',
      blocks: [
        {
          type: 'p',
          text: 'We may update these terms. The date at the top shows when they last changed, and continuing to use the site after a change means you accept the updated version.',
        },
      ],
    },
    {
      title: '11. Governing law',
      blocks: [
        {
          type: 'p',
          text: `These terms are governed by the laws of ${law}, and the courts of ${law} have exclusive jurisdiction over any dispute, except where mandatory consumer law gives you the right to bring a claim elsewhere.`,
        },
      ],
    },
    {
      title: '12. Contact',
      blocks: [{ type: 'p', text: `Questions about these terms: ${site.email}.` }],
    },
  ],
}
