# aventrio.co

Static site. Four pages, no build step, no framework. Every page is
self-contained: the CSS, the JavaScript and the logo are embedded, so a page
works even if it is opened on its own.

```
index.html      homepage
about.html      about
privacy.html    privacy policy
terms.html      terms of service
assets/         logo, favicon, social image, team photos
robots.txt      crawler rules, including AI crawlers
sitemap.xml     the four pages
llms.txt        structured summary for AI answer engines
.htaccess       clean URLs, HTTPS, caching, security headers
tools/          the pre-deploy quality gate
```

---

## How deployment works now

```
   edit a file  ->  git push  ->  GitHub Actions  ->  quality gate  ->  cPanel
                                                          |
                                                      fails? nothing ships
```

No more manual uploads. Push to `main` and the site updates in about a minute.
If the quality gate finds a problem the deploy is blocked and you get an email
from GitHub, so a broken page cannot reach production.

---

## One-time setup

### 1. Create the repository

```bash
cd /path/to/this/folder
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/aventrio-site.git
git push -u origin main
```

### 2. Find your FTP details in cPanel

In cPanel open **FTP Accounts**. You want:

| What | Where it comes from | Example |
|---|---|---|
| Server | your host's FTP hostname | `ftp.aventrio.co` |
| Username | the FTP account | `deploy@aventrio.co` |
| Password | the one you set | |
| Directory | where the site lives | `public_html/` |

Create a **dedicated FTP account** for deployments rather than using your main
cPanel login. If the credentials ever leak, you revoke one account instead of
handing over the whole hosting panel.

### 3. Add them to GitHub as secrets

Repository > **Settings** > **Secrets and variables** > **Actions** > **New
repository secret**. Add four:

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_SERVER_DIR`  (usually `public_html/`)

Secrets are encrypted and never appear in logs.

### 4. Push

That's it. Every push to `main` now validates and deploys. Watch it run in the
**Actions** tab.

---

## Daily use

```bash
git add .
git commit -m "Update the FAQ"
git push
```

Before pushing, you can run the same checks locally:

```bash
python3 tools/validate.py
```

It checks: tag balance, CSS braces, JavaScript syntax, structured data, broken
anchors, missing pages, missing alt text, missing meta tags, duplicate `<h1>`,
unfilled placeholders, and the house rule that we never use em dashes.

---

## Two settings that still need your values

Both live near the top of the `<script>` block in each HTML page.

**Booking link** (currently empty, so buttons scroll to the booking section):

```js
var BOOKING_URL = '';   // e.g. 'https://cal.com/aventrio/30min'
```

**Lead form endpoint** (currently empty, so the form opens a pre-filled email):

```js
var LEAD_FORM_ENDPOINT = '';   // e.g. 'https://formspree.io/f/xxxxxxx'
```

Change them in all four pages, or ask and they can be centralised.

---

## Analytics

Analytics must only load after cookie consent. There is an empty
`loadAnalytics()` function in each page for exactly this. Put your snippet
inside it and nothing fires until a visitor accepts. Do not paste a tracker
into `<head>`, that is what makes a cookie banner meaningless.

---

## Alternative: cPanel's own Git deployment

`.cpanel.yml` is included if you would rather have cPanel pull from GitHub
instead of GitHub pushing over FTP. In cPanel go to **Git Version Control**,
clone the repo, then use **Update from Remote** and **Deploy HEAD Commit**.
Replace `CPANEL_USERNAME` in that file with your real cPanel user first.

Use one route or the other, not both: they will overwrite each other.
