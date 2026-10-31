import Image from 'next/image'
import Link from 'next/link'
import { postPath, posts } from '@/content/blog'
import { caseStudies } from '@/content/caseStudies'
import { site } from '@/content/site'
import { founder } from '@/content/team'
import { BackToTop } from '@/components/footer/BackToTop'
import { BuyerClock } from '@/components/footer/BuyerClock'
import { FooterDays } from '@/components/footer/FooterDays'
import { FooterMark } from '@/components/footer/FooterMark'
import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { analyticsEnabled } from '@/lib/analytics'
import { CookiePreferencesLink } from './CookieBanner'

type FooterLink = { label: string; href: string; note?: string }

const services: FooterLink[] = [
  { label: 'Outsourced SDR teams', href: '/services/outsourced-sdr' },
  { label: 'Account executives', href: '/services/account-executives' },
  { label: 'Pipeline audit', href: '/services/pipeline-audit' },
  { label: 'Account-based marketing', href: '/#services' },
  { label: 'Sales recruitment', href: '/#services' },
]

const company: FooterLink[] = [
  { label: 'About', href: '/about' },
  { label: 'How it runs', href: '/#process' },
  { label: "What's included", href: '/#included' },
  { label: 'FAQ', href: '/#faq' },
]

function learn(): FooterLink[] {
  const latest = posts[0]
  return [
    { label: 'In-house vs outsourced SDR', href: '/compare/in-house-vs-outsourced-sdr' },
    ...(caseStudies.length ? [{ label: 'Case studies', href: '/case-studies' }] : []),
    { label: 'Blog', href: '/blog' },
    ...(latest ? [{ label: latest.h1, href: postPath(latest), note: 'Latest post' }] : []),
  ]
}

/**
 * Site footer: brand and contact, a booking panel with the next five weekdays,
 * numbered link columns, a live clock for the two markets the reps cover, and
 * an oversized wordmark that closes the page.
 */
export function Footer() {
  const year = new Date().getFullYear()
  const columns = [
    { title: 'Services', links: services },
    { title: 'Compare and learn', links: learn() },
    { title: 'Company', links: company },
  ]

  return (
    <footer className="on-ink relative overflow-hidden bg-ink text-on-ink">
      <Container className="border-t border-line-ink pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Image
              src="/aventrio-wordmark.png"
              alt="Aventrio"
              width={126}
              height={24}
              className="h-6 w-auto"
            />
            <p className="mt-6 max-w-sm text-[1.02rem] leading-relaxed text-on-ink-soft">
              {site.footerBlurb}
            </p>
            <ul className="mt-8 space-y-3 text-[0.95rem]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-2 text-on-ink transition-colors hover:text-mint"
                >
                  {site.email}
                  <Icon
                    name="arrowUpRight"
                    className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
              {site.clutch.profileUrl ? (
                <li>
                  <a
                    href={site.clutch.profileUrl}
                    rel="noopener"
                    target="_blank"
                    className="group inline-flex items-center gap-2 text-on-ink-soft transition-colors hover:text-mint"
                  >
                    Reviews on Clutch
                    <Icon
                      name="arrowUpRight"
                      className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ) : null}
            </ul>
            {site.linkedin ? (
              <a
                href={site.linkedin}
                rel="me noopener"
                target="_blank"
                aria-label="Aventrio on LinkedIn (opens in a new tab)"
                className="mt-8 grid size-11 place-items-center rounded-full border border-line-ink text-on-ink-soft transition-[color,border-color,transform] duration-200 ease-out hover:border-mint hover:text-mint active:scale-95"
              >
                <Icon name="linkedin" className="size-5" />
              </a>
            ) : null}
          </div>

          <section
            aria-labelledby="footer-book"
            className="self-start rounded-[22px] border border-line-ink bg-ink-2/50 p-6 sm:p-7 lg:col-span-6 lg:col-start-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 id="footer-book" className="text-[1.25rem] tracking-[-0.02em]">
                Thirty minutes with {founder.name.split(' ')[0]}
              </h2>
              <Link
                href="/book"
                className="text-[0.88rem] text-on-ink-soft underline-offset-4 transition-colors hover:text-mint hover:underline"
              >
                See the full calendar
              </Link>
            </div>
            <p className="mt-2 text-[0.92rem] text-on-ink-faint">
              Pick a day. No deck, and a straight answer on whether outbound fits.
            </p>
            <div className="mt-5">
              <FooterDays />
            </div>
            <div className="mt-6 border-t border-line-ink pt-5">
              <BuyerClock />
            </div>
          </section>
        </div>

        <nav
          aria-label="Footer"
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line-ink pt-12 sm:grid-cols-3"
        >
          {columns.map((col, i) => (
            <div key={col.title}>
              <h2 className="flex items-baseline gap-3 font-mono text-[0.7rem] tracking-[0.12em] text-on-ink-faint uppercase">
                <span className="text-mint tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                {col.title}
              </h2>
              <ul className="mt-5 space-y-3 text-[0.95rem]">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="group relative inline-block text-on-ink-soft transition-colors hover:text-on-ink"
                    >
                      {/* Hover marker sits outside the text, so nothing shifts */}
                      <span
                        aria-hidden="true"
                        className="absolute top-[0.7em] -left-5 h-px w-3 origin-left scale-x-0 bg-mint transition-transform duration-200 ease-out group-hover:scale-x-100"
                      />
                      <span className="block min-w-0">
                        {l.note ? (
                          <span className="mb-0.5 block font-mono text-[0.66rem] tracking-[0.1em] text-mint uppercase">
                            {l.note}
                          </span>
                        ) : null}
                        {l.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-16 flex flex-col gap-5 border-t border-line-ink py-6 sm:flex-row sm:items-center">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.85rem] text-on-ink-faint">
            <li>
              © {year} {site.name}
            </li>
            <li>
              <Link href="/privacy" className="transition-colors hover:text-on-ink">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-on-ink">
                Terms
              </Link>
            </li>
            {analyticsEnabled ? (
              <li>
                <CookiePreferencesLink className="transition-colors hover:text-on-ink" />
              </li>
            ) : null}
            <li>
              <BackToTop />
            </li>
          </ul>
        </div>
      </Container>

      <Container>
        <FooterMark />
      </Container>
    </footer>
  )
}
