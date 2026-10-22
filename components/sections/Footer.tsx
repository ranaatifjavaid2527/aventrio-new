import Image from 'next/image'
import Link from 'next/link'
import { caseStudies } from '@/content/caseStudies'
import { site } from '@/content/site'
import { Container } from '@/components/ui/Container'
import { analyticsEnabled } from '@/lib/analytics'
import { CookiePreferencesLink } from './CookieBanner'

const services = [
  { label: 'Outsourced SDR teams', href: '/services/outsourced-sdr' },
  { label: 'Account executives', href: '/services/account-executives' },
  { label: 'Pipeline audit', href: '/services/pipeline-audit' },
  { label: 'In-house vs outsourced SDR', href: '/compare/in-house-vs-outsourced-sdr' },
  { label: 'Account-based marketing', href: '/#services' },
  { label: 'Sales recruitment', href: '/#services' },
]

const company = [
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  ...(caseStudies.length ? [{ label: 'Case studies', href: '/case-studies' }] : []),
  { label: "What's included", href: '/#included' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Book a call', href: '/book' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="on-ink relative bg-ink text-on-ink">
      <Container className="grid gap-12 border-t border-line-ink py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/aventrio-wordmark.png"
            alt="Aventrio"
            width={126}
            height={24}
            className="h-6 w-auto"
          />
          <p className="mt-5 max-w-xs text-[0.95rem] text-on-ink-soft">{site.footerBlurb}</p>
        </div>

        <FooterCol title="Services" links={services} />
        <FooterCol title="Company" links={company} />

        <div>
          <h2 className="t-eyebrow mb-4 text-on-ink-faint">Talk to us</h2>
          <ul className="space-y-3 text-[0.95rem]">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-on-ink-soft transition-colors hover:text-mint"
              >
                {site.email}
              </a>
            </li>
            {site.linkedin ? (
              <li>
                <a
                  href={site.linkedin}
                  rel="me noopener"
                  target="_blank"
                  className="text-on-ink-soft transition-colors hover:text-mint"
                >
                  LinkedIn
                </a>
              </li>
            ) : null}
            {site.clutch.profileUrl ? (
              <li>
                <a
                  href={site.clutch.profileUrl}
                  rel="noopener"
                  target="_blank"
                  className="text-on-ink-soft transition-colors hover:text-mint"
                >
                  Reviews on Clutch
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-line-ink py-6 text-sm text-on-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li>
            <Link href="/privacy" className="hover:text-on-ink">
              Privacy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:text-on-ink">
              Terms
            </Link>
          </li>
          {analyticsEnabled ? (
            <li>
              <CookiePreferencesLink className="hover:text-on-ink" />
            </li>
          ) : null}
        </ul>
      </Container>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="t-eyebrow mb-4 text-on-ink-faint">{title}</h2>
      <ul className="space-y-3 text-[0.95rem]">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-on-ink-soft transition-colors hover:text-mint">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
