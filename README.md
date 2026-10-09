# aventrio.co

Next.js (App Router) site for Aventrio, an outbound sales development firm.
The previous static HTML site is kept in `legacy/` for reference only.

## Quick start

```bash
nvm use            # Node 24 LTS, see .nvmrc
corepack enable    # pnpm, pinned in package.json
pnpm install
cp .env.example .env.local
pnpm dev           # http://localhost:3000
```

Without `RESEND_API_KEY`, the lead form logs submissions to the console in
development and returns an error in production. It never fails silently.

## Where things live

```
app/                  routes, metadata, OG images, sitemap, robots, /api/lead
components/ui/        primitives: buttons, sections, reveals, count-up, icons
components/sections/  page sections, header, footer, popup, cookie banner
content/              all copy. Edit text here, not in components
lib/                  tokens, JSON-LD, metadata, consent, booking, rate limit
proxy.ts              per-request CSP nonce
next.config.ts        security headers, .html redirects
scripts/              quality gate, Lighthouse, weekly report, competitor watch
docs/                 keyword research, Cal.com and Search Console setup
reports/              weekly reports and competitor snapshots (written by CI)
```

### Switching things on

All in `content/site.ts`. Anything left `null` is hidden, never shown as a placeholder.

| Setting                                                             | What it turns on                                                            |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `clutch.profileUrl` + `clutch.companyId`                            | Clutch tab in the hero, official widget, footer link, `sameAs`              |
| `linkedin`                                                          | Footer link and `sameAs` in Organization schema                             |
| `legal.entityName`, `legal.registeredAddress`, `legal.governingLaw` | Fills the privacy policy and terms. **The gate fails until these are set.** |
| `cal.link`                                                          | The Cal.com event used by the inline embed and the modal                    |

Analytics is off unless `NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible` is set. When
it is off there is no cookie banner, because there is nothing to consent to.
When it is on, nothing loads until the visitor accepts.

## House rules (enforced in CI)

- No en or em dashes anywhere: copy, code, comments, metadata.
- No raw hex colours in components. Use the tokens in `app/globals.css` (mirrored in `lib/tokens.ts` for OG images; CI fails if they drift).
- No invented proof: no testimonials, client names, logos, counts or statistics unless supplied and approved.
- No promised outcomes. The "We won't promise you a number" section stays.
- No list of countries on any page. Geography lives in US market copy and in structured data only.
- Exactly one `<h1>` per page.

## Quality gate

```bash
pnpm gate                       # dashes, types, lint, prettier, build, site validator
scripts/lighthouse.sh applied   # Lighthouse budget, enforced
```

`pnpm validate` starts the production server and checks every page: status,
balanced markup, single H1, heading order, JSON-LD parses, required meta, alt
text, internal links and anchors, no dashes, no unfilled placeholders, security
headers and CSP nonce, `.html` redirects, robots rules for AI crawlers, sitemap
URLs, the lead API's rejection paths, OG images, and token drift.

GitHub Actions (`.github/workflows/ci.yml`) runs all of it on every pull
request and push. Deployment only happens after the gate passes.

## Performance

Budget from the brief: Performance 95 or more, Accessibility 100, Best Practices
95 or more, SEO 100, LCP under 2.0s, CLS under 0.05, mobile throttled.

Lighthouse has two throttling methods and they disagree on this site:

| Method                                             | What it does                                                               | Home page result (local)         |
| -------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------- |
| Applied (`devtools`)                               | Actually loads the page on slow 4G with a 4x slower CPU                    | Performance 100, LCP 0.9s, CLS 0 |
| Simulated (`simulate`, used by PageSpeed Insights) | Estimates from a dependency graph, counting every async script against LCP | Performance 93, LCP 3.2s, CLS 0  |

CI enforces the budget on the applied method and reports the simulated one
without failing. The simulated LCP floor comes from the Next.js and React
runtime (about 130 KB gzipped) that every App Router page ships; the text that
is the LCP element is painted at first paint. Re-check with PageSpeed Insights
against production after launch, where Brotli and Vercel's CDN apply.

Known exception: on `/book`, when the Cal.com calendar is in view, Cal.com's
Cloudflare cookie (`__cf_bm`) is flagged as a third-party cookie and Best
Practices drops to 79. The calendar loads only when scrolled into view.

## Deployment (Vercel)

1. Create a Vercel project from this repository. In **Settings, Git**, leave it
   connected but note `vercel.json` disables automatic deployments, so only CI
   deploys.
2. **Settings, Environment Variables** (Production and Preview):
   `RESEND_API_KEY`, `LEAD_TO_EMAIL=atif@aventrio.co`,
   `LEAD_FROM_EMAIL="Aventrio website <leads@aventrio.co>"`, and optionally the
   analytics variables.
3. In Resend, add and verify the domain `aventrio.co` (it gives SPF and DKIM
   records to add in DNS). `LEAD_FROM_EMAIL` must use that domain.
4. GitHub repository secrets: `VERCEL_TOKEN` (Vercel, Account Settings,
   Tokens), `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` (from `vercel link`, in
   `.vercel/project.json`).
5. Domain: add `aventrio.co` and `www.aventrio.co` in Vercel, then at the DNS
   host point the apex A record and the `www` CNAME at the values Vercel shows.
   **Do not touch the MX records**: email stays on the cPanel mailbox.
6. HSTS is sent with `preload`. Only submit the domain to hstspreload.org once
   every subdomain you use is on HTTPS, because removal takes months.

The old cPanel FTP deploy workflow has been removed.

## Weekly Friday report

`.github/workflows/weekly-report.yml` runs every Friday: it pulls Search
Console data (`scripts/weekly-report.ts`), diffs competitor title tags, meta
descriptions and H1s (`scripts/competitor-watch.ts`), commits both to
`reports/`, and opens an issue with the result. Setup:
`docs/search-console-setup.md`. Without Search Console it reports that plainly
and never estimates.
