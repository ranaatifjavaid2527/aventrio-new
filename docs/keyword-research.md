# Aventrio keyword and competitor research

Prepared 9 October 2026 for the Next.js rebuild of aventrio.co.

## Read this first: what this research is and is not

**I do not have access to Ahrefs, Semrush, Google Keyword Planner, Search Console
or any other source of real search volume or ranking data.** Nothing in this
document is a measured volume, keyword difficulty score or ranking.

What it is based on:

- **Competitor page inspection.** I fetched the live HTML of competitor homepages
  and the service pages that overlap with Aventrio, and extracted title tags, meta
  descriptions, H1s, H2s and internal link structure. Martal (martal.ca) blocked
  automated requests, so its positioning comes from search results and
  directories, not its own pages. LeadBird renders navigation client side, so its
  page inventory comes from its sitemap.
- **Search results inspection.** I ran US searches for the main term clusters and
  looked at who ranks and what kind of page ranks (vendor service page, vendor
  blog, listicle, marketplace, directory).
- **Aventrio's current pages**, `llms.txt` and FAQ.

How to read the tables:

- **Demand** is a relative band (High, Medium, Low, Very low), estimated from how
  many competitors build dedicated pages for a term and how crowded the results
  are. It is **an estimate, not a number**. I have deliberately not written
  monthly search figures, because any figure I gave you would be invented.
- **Difficulty** is my judgement of how hard it is for a new, low authority site
  to reach page one, based on who currently ranks. Also **an estimate**.
- When Search Console is connected (section 8 of the brief), real impressions
  will replace these guesses within a few weeks. Treat this document as a
  starting hypothesis to be corrected by that data.

---

## 1. Competitor snapshot

| Site | Title tag | H1 | Positioning | Page architecture worth noting |
|---|---|---|---|---|
| belkins.io | Belkins - #1 B2B Lead Generation Agency | B2B LEAD GENERATION AGENCY | Volume and outcome claims. Meta description says their approach "guarantees 100-400 yearly appointments". | One page per service (`/outsourced-sdr-services`, `/appointment-setting`, `/cold-email-services`, `/cold-calling-services`, `/linkedin-lead-generation-services`, `/deliverability-consulting`), `/industries/*`, `/pricing`, `/roi-calculator`, "approach" pages per discipline (`/sdr-approach`, `/deliverability-approach`). |
| cience.com | CIENCE \| Managed B2B Lead Generation and GTM Execution | We build the revenue system, then we run it. | Managed GTM system plus SDRs plus data platform. Recently rewritten with plain, honest, question-led pages. | `/outbound-sdr`, `/cold-email-agency`, `/sales-outsourcing`, `/appointment-setting`, `/pricing`, `/calculator`, `/alternatives`, `/buying-guide`, a glossary ("ciencepedia"). |
| cleverly.co | Cleverly - World-class B2B Lead Generation Agency | $5M B2B Lead Generation Agency Scales Qualified Leads... | Review count and meeting-count promises ("10 to 30 qualified meetings every month"). | `/outsourced-sdr`, `/cold-email-outreach-agency`, `/appointment-setting`, `/linkedin-lead-generation`, `/comparison/cleverly-vs-*` against tools, `/faq`, `/playbooks`. |
| salesar.io | B2B Lead Generation Agency \| SalesAR | B2B Lead Generation Agency | Scale claims (700+ projects, 40+ countries). | `/our-industries/*` (software development, IT consulting, telecoms and others), services and cases sitemaps. |
| leadbird.io | LeadBird, B2B Lead Generation, 100% Done For You | (rendered client side) | Done-for-you, channel-led. | Small site: `/services/cold-email`, `/services/cold-calling`, `/services/linkedin-outreach`, `/demo-booking`, `/client-results`, and a set of named `/playbooks/*`. Shows a small site can be well structured. |
| saleshive.com | B2B Sales Agency That Books Qualified Meetings \| SalesHive | B2B sales. Built for scale. | US-based SDRs, own AI platform, month to month, flat monthly fee. **Closest to Aventrio's commercial model.** | One page per head term: `/sdr-outsourcing`, `/sales-development-agency`, `/b2b-sales-agency`, `/sales-outsourcing`, `/appointment-setting`, `/pricing`, plus `/industries/*` (SaaS, IT services and MSPs, cybersecurity, fintech and others), `/glossary`, `/cold-calling-scripts`. |
| martal.ca | (blocked) | (blocked) | Per directories and press: embedded "sales as a service" reps for North American tech companies. | Not inspected directly. |
| salesloft.com | The Leading Predictive Revenue System | Create. Convert. Grow. | Software platform, not an agency. | Not a search competitor for Aventrio's commercial terms. Useful only as a motion and design reference. |

### What the competitor set tells us

1. **Every serious competitor has one page per service and one page per head
   term.** Aventrio has two content pages. All seven services live as H3s on the
   homepage, so there is no page Google can rank for "outsourced SDR services",
   "pipeline audit" or "sales recruitment". This is the single largest gap.
2. **Most competitors sell numbers.** Belkins promises a yearly appointment range
   in its meta description; Cleverly puts "10 to 30 qualified meetings every
   month" in its H1s. Aventrio's "We won't promise you a number" stance is a
   genuine differentiator, and the closest competitors in tone (CIENCE's newer
   pages, SalesHive) are moving towards plain, honest copy. Aventrio should own
   the honest-answer queries (cost, contracts, guarantees, what goes wrong)
   rather than compete on volume claims it has chosen not to make.
3. **Pricing and cost pages are standard.** Belkins, CIENCE, SalesHive and
   Cleverly all have pricing pages or pricing sections. Searches for outsourced
   SDR cost are dominated by vendor blogs (Revnew, LeadHaste, Cleverly's blog),
   not authoritative sources, which makes this topic winnable.
4. **Industry pages are standard; country pages are not needed.** Competitors
   build `/industries/*`, not country lists. That fits the brief's constraint.
5. **Head-term results are crowded with listicles.** "Outbound sales agency"
   results are dominated by Salesforge "best agencies in [city]" listicles and
   vendor pages. A small site will not win these head terms soon; it can win
   being listed *in* those listicles (outreach, not SEO).

---

## 2. Keyword map

Intent: **I** informational, **C** commercial investigation, **T** transactional.
Demand and difficulty are estimates (see the top of this document).

### Head terms

| # | Keyword | Intent | Demand (est.) | Difficulty (est.) | Who ranks now |
|---|---|---|---|---|---|
| 1 | b2b lead generation agency | C | High | Very hard | Belkins, Cleverly, SalesAR, listicles |
| 2 | outsourced sdr | C | Medium to high | Hard | Vendor service pages, vendor blogs |
| 3 | outsourced sdr services | C | Medium | Hard | Belkins, CIENCE, Cleverly, smaller vendors |
| 4 | sdr outsourcing | C | Medium | Hard | SalesHive, Salesroads, vendor pages |
| 5 | appointment setting services | C/T | High | Very hard | Belkins, Cleverly, SalesHive, call centres |
| 6 | sales outsourcing | C/I | High | Very hard | CIENCE, SalesHive, large BPOs |
| 7 | outbound sales agency | C | Medium | Hard | Salesforge listicles, vendor pages |
| 8 | sales development agency | C | Low to medium | Medium to hard | SalesHive, Belkins |
| 9 | cold email agency | C | Medium | Hard | CIENCE, Cleverly, many small agencies |

### Mid-tail

| # | Keyword | Intent | Demand (est.) | Difficulty (est.) | Note |
|---|---|---|---|---|---|
| 10 | outsourced sdr team | C | Low to medium | Medium | Matches Aventrio's model exactly |
| 11 | dedicated sdr team | C | Low | Medium | Matches "named reps, not a pool" |
| 12 | managed sdr team | C | Low | Medium | |
| 13 | sdr as a service | C | Low to medium | Medium | |
| 14 | outsourced sales development services | C | Low to medium | Medium | |
| 15 | b2b outbound sales agency | C | Low | Medium | |
| 16 | outbound lead generation agency | C | Medium | Hard | Volume and lead-buying intent, weaker fit |
| 17 | hire remote sdr | T | Low to medium | Medium | Results are talent marketplaces (Somewhere, Remotely Talents). Fits Sales recruitment, not the managed team. |
| 18 | outsourced account executive | C | Low | Medium | Few dedicated pages, real gap |
| 19 | sdr recruiting agency | C | Low | Medium | Specialist recruiters rank |
| 20 | sales pipeline audit | C | Low | Low to medium | Results are consultants and freelancers, no strong owner |
| 21 | cold email deliverability audit | C/I | Low to medium | Medium | Tool vendors (Instantly, Smartlead, QuickMail) rank with guides |
| 22 | outbound agency for saas | C | Low to medium | Medium | Listicles and small agencies |
| 23 | lead generation for it services companies | C | Low to medium | Medium | Abstrakt, Callbox, LeadHaste blog |
| 24 | msp lead generation | C | Low to medium | Medium | Same set as above |
| 25 | revops services for b2b startups | C | Low | Medium | Fragmented consultant market |
| 26 | account based marketing agency b2b | C | Medium | Hard | ABM agencies with paid media focus, weak fit |

### Long-tail (where a small site can realistically win)

| # | Keyword | Intent | Demand (est.) | Difficulty (est.) | Note |
|---|---|---|---|---|---|
| 27 | how much does an outsourced sdr cost | I/C | Medium | Medium | Vendor blogs only. Strong AEO target. |
| 28 | outsourced sdr pricing | C | Low to medium | Medium | |
| 29 | in-house sdr vs outsourced sdr | I/C | Low to medium | Medium | Vendor blogs (Revnew, LeadHaste, Intelemark). Aventrio already has the comparison content. |
| 30 | fully loaded cost of an sdr | I | Low | Medium | |
| 31 | how long does it take to ramp an sdr | I | Low | Low to medium | Aventrio's 14-day launch is a direct answer |
| 32 | outsourced sdr month to month | C | Very low | Low | Results show most human SDR firms use 6 to 12 month terms. Aventrio's quarter then month-to-month is a real differentiator. |
| 33 | pay per meeting vs retainer lead generation | I | Low | Low to medium | Ties to the "no number" stance |
| 34 | do lead generation agencies guarantee meetings | I | Very low | Low | The contrarian FAQ answer, a natural AI-assistant citation |
| 35 | questions to ask an outsourced sdr company | I | Very low | Low | Buyer's guide format, CIENCE has a version |
| 36 | who owns the data when you outsource sdr | I | Very low | Low | Aventrio's ownership answer is already written |
| 37 | why cold email stopped working | I | Low to medium | Medium | Tool vendors rank |
| 38 | burned sending domain recovery | I | Low | Medium | Tool vendors rank. Matches the "outbound was tried once and it failed" situation. |
| 39 | separate domain for cold email | I | Low | Medium | |
| 40 | outsourced sdr for saas companies | C | Low | Low to medium | |
| 41 | outsourced sdr for it services companies | C | Very low | Low | |
| 42 | outbound for professional services firms | C | Very low | Low | |
| 43 | sdr replacement guarantee | C | Very low | Low | |
| 44 | outsourced sdr us hours | C | Very low | Low | Matches US-hours coverage without naming countries |

---

## 3. Gap analysis

Competitor pages and topics that aventrio.co has no page for, and whether each is
realistically winnable for a new, low authority site in the next 6 to 12 months.

| Gap | Competitors with it | Winnable? | Reasoning |
|---|---|---|---|
| Dedicated outsourced SDR service page | Belkins, CIENCE, Cleverly, SalesHive | **Mid-tail yes, head term no** | "outsourced sdr services" is hard. "outsourced sdr team", "dedicated sdr team" and "sdr as a service" are reachable once a page exists. Without the page, nothing is winnable. |
| Pricing or cost page | Belkins, CIENCE, SalesHive, Cleverly | **Yes** | Cost queries are answered by vendor blogs with inconsistent ranges. A clear page explaining what the fee covers, the minimum term and the comparison to an in-house hire can compete. **Declined by the client; cost queries go to the comparison page.** |
| In-house vs outsourced comparison | CIENCE (`/alternatives`, `/buying-guide`), Cleverly (`/comparison/*`) | **Yes** | Aventrio's homepage table ("Three ways to get meetings") is already the content. It needs its own URL. |
| Pipeline audit page | Belkins (`/deliverability-consulting`) partially | **Yes** | No strong owner in the results. Also a lower-commitment entry offer. |
| Account executive page | Few | **Yes** | Thin competition for "outsourced account executive". |
| Sales recruitment page | Specialist recruiters | **Partly** | Recruiters dominate; worth a page for completeness and internal linking, low SEO expectation. |
| Industry pages | Belkins, SalesAR, SalesHive | **Yes for narrow pairs** | "outsourced sdr for saas" and "it services lead generation" are reachable. Must be written from real method and experience, no invented clients. |
| ROI calculator as a page | Belkins (`/roi-calculator`), CIENCE (`/calculator`) | **Yes** | Calculators earn links and get cited by AI assistants. **Declined by the client.** |
| Deliverability and burned domain guides | Belkins (approach pages), tool vendors | **Partly** | Tool vendors own this; Aventrio can win the angle "what to do after outbound went wrong", which no tool vendor writes honestly. |
| Glossary | SalesHive, CIENCE | **Low priority** | Big effort, low commercial return for a small site. |
| Case studies, client results, reviews pages | All | **Blocked** | Requires real clients who agree to be named. Scaffold the route only, as the brief says. |
| Channel pages (cold email, cold calling, LinkedIn) | Belkins, Cleverly, LeadBird | **No, for now** | Hard terms, and Aventrio positions against "cold email agency". Cover channels inside the SDR page instead. |
| City landing pages ("outbound sales agency San Francisco") | Salesforge listicles | **Not recommended** | Thin location pages read as doorway pages, and they drift towards the list-of-places pattern the brief rules out. Keep city language in copy and schema only. |

---

## 4. Page-to-keyword mapping

One primary keyword per page. No two pages share a primary or a secondary.

| Route | Primary | Secondary | Status |
|---|---|---|---|
| `/` | outbound sales agency | b2b outbound sales agency, outsourced sdr team | Existing |
| `/about` | Aventrio (brand) | sales development firm, sdr team us hours | Existing |
| `/services/outsourced-sdr` | outsourced sdr services | sdr outsourcing, sdr as a service, outsourced sdr month to month | **New** |
| `/services/account-executives` | outsourced account executive | fractional account executive | **New** |
| `/services/pipeline-audit` | sales pipeline audit | cold email deliverability audit, outbound audit | **New** |
| `/services/sales-recruitment` | sdr recruiting agency | hire remote sdr | **New** |
| `/services/account-based-marketing` | account based outbound | abm outreach for b2b | **New, low priority** |
| `/services/revenue-operations` | revops services for b2b startups | crm hygiene for sales teams | **New, low priority** |
| `/compare/in-house-vs-outsourced-sdr` | in-house vs outsourced sdr | outsourced sdr cost, fully loaded cost of an sdr, how long to ramp an sdr | **New** |
| `/industries/software-saas` | outsourced sdr for saas | outbound agency for saas | **Scaffold, content later** |
| `/industries/it-services` | lead generation for it services companies | msp lead generation | **Scaffold, content later** |
| `/book` | none (conversion page) | | New, `noindex` is reasonable but optional |
| `/privacy`, `/terms` | none | | Existing |

Decisions recorded 9 October 2026:

- **No pricing page.** Cost queries are answered on the comparison page and in
  the homepage FAQ, using the existing "flat monthly fee per rep" answer. No
  figures are published.
- **No calculator anywhere on the site.** The ROI calculator is removed from the
  popup and is not moved to the homepage or a standalone page.

The homepage should link to every service page from the services section, and
each service page should link back to `/compare/...` and `/book`.

---

## 5. Recommended new pages, ranked

Ranked by opportunity against effort. "Effort" assumes the existing copy is reused
where it exists.

| Rank | Page | Opportunity | Effort | Why |
|---|---|---|---|---|
| 1 | `/services/outsourced-sdr` | High | Low | Core offer, copy already exists across the homepage and `llms.txt`. Unlocks every SDR mid-tail term. |
| 2 | `/compare/in-house-vs-outsourced-sdr` | High | Low to medium | Comparison table already exists. Also carries the cost queries. Strong for AI-assistant citations. |
| 3 | `/services/pipeline-audit` | Medium | Low | Weak competition, and a cheaper way in for cautious buyers. |
| 4 | `/services/account-executives` | Medium | Low | Thin competition. |
| 5 | `/industries/software-saas`, `/industries/it-services` | Medium | Medium | Needs genuine method detail per industry, no invented proof. |
| 6 | `/services/sales-recruitment` | Low to medium | Low | Completeness and internal links. |
| 7 | Guide: "Outbound failed once. What to fix before trying again." | Medium | Medium | Owns the burned domain and failed outbound queries from the buyer's side. |
| 8 | ABM and RevOps service pages | Low | Low | Completeness only. |
| Declined | `/pricing`, ROI calculator | | | Declined by the client on 9 October 2026. |
| Blocked | Case studies, reviews | High | Needs real clients | Route scaffolded, no content until you supply named, approved work. |

**Bad idea flag:** building all of these at once would spread a new site thin.
I recommend launching with ranks 1 to 4, then adding one page every week or two
once Search Console shows which terms Google is testing the site for.

---

## 6. Copy changes for approval

**Status: approved by the client on 9 October 2026.** C1 is applied as the
process-metrics replacement. C5 no longer references a calculator.

### 6a. Keyword-driven changes

| # | Location | Before | After | Rationale |
|---|---|---|---|---|
| K1 | Home `<title>` | Outbound Sales Teams & Trained SDRs for B2B Companies \| Aventrio | Outbound Sales Agency: Trained SDR Teams for B2B \| Aventrio | Puts the homepage primary term ("outbound sales agency") first. Leaves "outsourced SDR services" for the new service page, so the two pages do not compete. |
| K2 | Home meta description | Aventrio builds and runs outbound sales teams for B2B companies. Trained SDRs managed by US sales leaders, verified data, copy written per segment, and sending infrastructure we own and monitor. (199 characters) | Aventrio is an outbound sales agency for B2B companies. Named SDRs managed by US sales leaders, verified data, and sending domains we monitor daily. (about 150 characters) | The current text is truncated in results at around 155 to 160 characters. The new text fits, includes the primary term and keeps the factual commitments. |
| K3 | Home H1 | Build a high-performing pipeline. | Outbound SDR teams that build your **pipeline**. | Every competitor's H1 states the category; Aventrio's states a benefit only. "pipeline" stays as the accent word, so the hero design is unchanged. |
| K4 | Home services H3 | Outbound SDR teams | Outsourced SDR teams | Uses the searched phrase and becomes the link text to `/services/outsourced-sdr`. |
| K5 | Home comparison section intro, first sentence | Cold-email agencies are cheap and fast, and for a simple offer they work. | Hiring in-house, a cold email agency, or an outsourced SDR team: cold email agencies are cheap and fast, and for a simple offer they work. | Names the three options people search for, and gives a natural anchor for a link to the comparison page. |
| K6 | Home FAQ, new question | (none) | **Is an outsourced SDR team better than hiring in-house?** It depends on how fast you need pipeline and how complex your product is. An in-house SDR takes months to source, hire and ramp, and you carry the cost if the hire does not work out. An outsourced team starts in 14 days and the rep is replaced at our cost if they underperform. In-house wins when your product needs months of internal training or you want outbound knowledge to stay with permanent staff. Many companies start outsourced, learn what works, then hire. | Targets "in-house vs outsourced sdr". Written as a standalone, quotable answer (AEO). Makes no outcome promise. |
| K7 | Home FAQ, "What does it cost?" | (current answer) | Keep the current answer. Add one sentence: "The minimum term is one quarter, then month-to-month." | Targets "outsourced sdr month to month". The fact is already elsewhere on the page; repeating it here makes the answer stand alone. |

### 6b. Compliance problems found in the current copy

These are not keyword changes. While reading the homepage, I found copy that
appears to break the brief's own non-negotiables. **I need you to tell me whether
each item is real.**

| # | Location | Current text | Problem | Proposed |
|---|---|---|---|---|
| C1 | Home, "Campaign snapshot" panel | "B2B SaaS · 3-rep team · Q2". Counters animate to 64 meetings booked, 87% show rate, 41% meeting to opportunity, $112 cost per booked meeting. | Presented as a real campaign with specific results and no "illustrative" label. **If these are not from a real, consenting client, this is invented proof** and contradicts "We won't promise you a number". | If real: keep, and confirm you can stand behind it. If not: replace with process metrics (14 days to first send, 3 accounts per rep, 6 figures reported weekly, 0 cold emails from your primary domain), or label it clearly as an example dashboard with no numbers presented as results. |
| C2 | Home, "Hiring reps is slow" | "...and about a third don't make it past the first year." | A statistic with no source. | Remove the statistic: "A US SDR takes months to source, hire and ramp, and if the hire doesn't work out you carry that cost either way." Or give me the source. |
| C3 | Home, same block | "Top 1%" / "Global talent, US-trained" | An unverifiable selection claim. | "Selected and US-trained" / "Reps hired for their written English and call skills, managed day to day by sales leads who've carried a US quota." Or tell me what the actual acceptance rate is. |
| C4 | Home process H2 | Four steps. Fourteen days. Then meetings. | Reads as an implied outcome promise. On day 14 outreach starts; meetings are not assured. | Four steps. Fourteen days to first send. |
| C5 | Home FAQ, "What does it cost?" | "...a managed team typically lands well under half the annual cost." | A comparative cost claim with no stated basis. | "...compare that against a fully loaded in-house hire: salary, employer tax, benefits, tooling, recruiting and the ramp months before a rep produces anything." No ratio is claimed. |
| C6 | Site-wide | hello@aventrio.co (9 places, plus `llms.txt`) | You chose atif@aventrio.co as the contact address. | Replace everywhere. |

---

## 7. Measurement plan

- Connect Google Search Console at launch (section 8 of the brief). After 4 to 6
  weeks, replace every "Demand (est.)" band in this document with real
  impressions for the terms the site appears for.
- Expect the first impressions to come from the long-tail and comparison terms,
  not the head terms. That is a normal pattern for a new site, not a failure.
- I cannot verify any ranking claim in this document. If a future report says
  Aventrio ranks for a term, it will come from Search Console data, not from me.

---

## Sources consulted

Competitor pages fetched directly (title, meta, headings, links):
belkins.io (home, `/outsourced-sdr-services`, `/appointment-setting`,
`/sales-development-services`, `/pricing`), cience.com (home, `/outbound-sdr`,
`/sales-outsourcing`, `/cold-email-agency`, `/pricing`), cleverly.co (home,
`/outsourced-sdr`, `/cold-email-outreach-agency`, `/appointment-setting`),
saleshive.com (home, `/sdr-outsourcing`, `/sales-development-agency`,
`/b2b-sales-agency`, `/sales-outsourcing`, `/appointment-setting`, `/pricing`),
salesar.io (home, sitemap), leadbird.io (home, sitemap), salesloft.com (home).

Search results inspected (US): outsourced SDR services; outsourced SDR cost per
month; in-house SDR vs outsourced SDR; outbound sales agency; outbound sales
agency for B2B SaaS; hire remote SDR; SDR as a service with flat fee and no
contract; outbound lead generation for IT services and MSPs; outbound pipeline
and deliverability audits; burned domain recovery; Martal Group.
