import { faq } from '@/content/faq'
import { services } from '@/content/home'
import { sameAs, site } from '@/content/site'
import { founder } from '@/content/team'

const ORG_ID = `${site.url}/#org`
const WEBSITE_ID = `${site.url}/#website`

const serviceDescriptions: Record<string, string> = {
  'Outsourced SDR teams':
    'Trained sales development reps who prospect, write, send, follow up and book qualified meetings, managed by US sales leaders.',
  'Account executives': 'Experienced AEs who run demos, handle procurement and close contracts.',
  'Account-based marketing':
    'Stakeholder mapping and account-level personalisation for named target lists.',
  'Pipeline audit':
    'A two-week, fixed-fee review of targeting, messaging, deliverability and tech stack, delivered as a prioritised fix list.',
  'LinkedIn authority': 'Content and engagement for founders and sales leads.',
  'Sales recruitment':
    'Sourcing, vetting and placing SDRs and AEs directly onto the client payroll.',
  'Revenue operations': 'CRM hygiene, sequence tracking, attribution and weekly reporting.',
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

function areaServed() {
  return [
    {
      '@type': 'City',
      name: 'San Francisco',
      containedInPlace: { '@type': 'State', name: 'California' },
    },
    { '@type': 'City', name: 'New York', containedInPlace: { '@type': 'State', name: 'New York' } },
    ...site.areaServed.map((name) => ({ '@type': 'Country', name })),
  ]
}

export function organizationLd() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: site.name,
    url: `${site.url}/`,
    logo: `${site.url}/favicon.png`,
    image: `${site.url}/og-image.png`,
    email: site.email,
    description:
      'Aventrio builds and runs outbound sales development teams for B2B companies. Trained SDRs managed by US sales leaders handle research, copy, sending infrastructure and replies, and book qualified meetings into client calendars.',
    ...(sameAs.length ? { sameAs } : {}),
    founder: {
      '@type': 'Person',
      name: founder.name,
      jobTitle: founder.role,
      worksFor: { '@id': ORG_ID },
      knowsAbout: [
        'Go-to-market for technology companies',
        'Outbound sales development',
        'B2B SaaS sales',
        'Technology partnerships',
        'Founder and investor relationships',
      ],
      ...(founder.linkedin ? { sameAs: [founder.linkedin] } : {}),
    },
    areaServed: areaServed(),
    knowsAbout: [
      'Outbound sales development',
      'SDR outsourcing',
      'B2B appointment setting',
      'Outbound email deliverability',
      'Account-based marketing',
      'Revenue operations',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: site.email,
      availableLanguage: 'English',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sales development services',
      itemListElement: services.items.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@id': `${site.url}/#service-${slug(s.title)}` },
      })),
    },
  }
}

export function serviceLd() {
  return services.items.map((s) => ({
    '@type': 'Service',
    '@id': `${site.url}/#service-${slug(s.title)}`,
    name: s.title,
    serviceType: s.title,
    description: serviceDescriptions[s.title] ?? s.body,
    provider: { '@id': ORG_ID },
    areaServed: areaServed(),
  }))
}

export function websiteLd() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${site.url}/`,
    name: site.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
  }
}

export function faqLd() {
  return {
    '@type': 'FAQPage',
    '@id': `${site.url}/#faq`,
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.join(' ') },
    })),
  }
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: new URL(t.path, site.url).toString(),
    })),
  }
}

export function webPageLd(
  type: 'WebPage' | 'AboutPage' | 'ContactPage',
  path: string,
  name: string,
  description: string,
) {
  const url = new URL(path, site.url).toString()
  return {
    '@type': type,
    '@id': `${url}#page`,
    url,
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
  }
}

export function graph(...nodes: unknown[]) {
  return { '@context': 'https://schema.org', '@graph': nodes.flat() }
}
