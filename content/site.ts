/**
 * Site-wide facts. Anything set to null is not yet supplied by the client;
 * components hide the related UI rather than render a placeholder.
 */
export const site = {
  name: 'Aventrio',
  url: 'https://aventrio.co',
  email: 'atif@aventrio.co',
  tagline: 'Outbound SDR teams for B2B companies selling into the US.',
  footerBlurb:
    'Remote B2B sales teams that book meetings, not résumés. Built for companies that need pipeline this quarter.',

  cal: {
    /** Cal.com event path, used by both the inline embed and the modal. */
    link: 'atif-javaid/30min',
    namespace: 'atif-30min',
    durationLabel: '30 minutes',
  },

  /**
   * Clutch: paste the values from the official widget snippet in the Clutch
   * dashboard. When profileUrl and companyId are set, the hero tab, the widget
   * and the footer link switch on.
   */
  clutch: {
    profileUrl: 'https://clutch.co/profile/aventrio' as string | null,
    companyId: '2066105' as string | null,
    widgetType: '2',
    height: '45',
  },

  /** Company LinkedIn page. */
  linkedin: null as string | null,

  /** Legal details for the privacy policy and terms. Null renders a visible gap that fails the gate. */
  legal: {
    entityName: null as string | null,
    registeredAddress: 'Lahore, Pakistan' as string | null,
    governingLaw: 'Pakistan' as string | null,
  },

  /** Structured data only. Never rendered as a list on any page. */
  areaServed: ['United States', 'Pakistan'],
} as const

export const sameAs = [site.linkedin, site.clutch.profileUrl].filter((u): u is string => Boolean(u))

export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'How it runs', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'About', href: '/about' },
] as const
