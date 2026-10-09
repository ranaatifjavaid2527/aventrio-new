# Connecting Google Search Console for the Friday report

The weekly report reads real data from Google Search Console. Until these steps
are done, the Friday workflow opens an issue that says Search Console is not
connected and reports no numbers. It never estimates.

Expect about 20 minutes, plus a few days after verification before Search
Console has data to report.

## 1. Verify the domain in Search Console

1. Go to search.google.com/search-console and sign in with the Google account
   that should own the property.
2. **Add property** and choose **Domain** (not URL prefix). Enter `aventrio.co`.
3. Google shows a TXT record like `google-site-verification=...`.
4. Add it where the domain's DNS is managed. If DNS is still at Namecheap:
   Domain List, Manage, Advanced DNS, Add New Record, type TXT, host `@`,
   paste the value, save. If you moved DNS to Vercel, add it under the domain's
   DNS records in Vercel instead.
5. Back in Search Console, click **Verify**. DNS can take up to an hour.

A Domain property covers http, https, www and every subdomain, which is what
the report expects (`sc-domain:aventrio.co`).

## 2. Submit the sitemap

In the new property: **Sitemaps**, enter `sitemap.xml`, **Submit**.

## 3. Create a service account

1. Go to console.cloud.google.com and create a project, for example
   `aventrio-reports`.
2. **APIs and Services, Library**, search **Google Search Console API**,
   **Enable**.
3. **IAM and Admin, Service Accounts, Create service account**. Name it
   `search-console-reader`. Skip the optional role steps.
4. Open the new account, **Keys, Add key, Create new key, JSON**. A JSON file
   downloads. Treat it like a password: never commit it.
5. Copy the service account's email address (it ends in
   `iam.gserviceaccount.com`).

## 4. Give the service account read access

In Search Console: **Settings, Users and permissions, Add user**. Paste the
service account email and choose **Restricted**. Restricted is read-only, which
is all the report needs.

## 5. Add the secrets to GitHub

In the repository: **Settings, Secrets and variables, Actions, New repository
secret**. Add two:

| Name | Value |
|---|---|
| `GSC_SITE_URL` | `sc-domain:aventrio.co` |
| `GSC_SERVICE_ACCOUNT_JSON` | the entire contents of the JSON key file |

Then delete the downloaded key file from your computer.

## 6. Test it

**Actions, Weekly Friday report, Run workflow**. A new issue appears with the
report. If Search Console has fewer than a few days of data, the issue says so
instead of showing numbers.

To run it locally:

```bash
GSC_SITE_URL=sc-domain:aventrio.co GSC_SERVICE_ACCOUNT_JSON="$(cat key.json)" pnpm report:weekly
```

## What the report can and cannot tell you

- **Can:** clicks, impressions, CTR and average position for the queries and
  pages where aventrio.co already appears, week over week, and the position of
  each keyword in `reports/tracked-keywords.json` when it had impressions.
- **Cannot:** total search volume (keyword demand) or competitors' rankings.
  Both need a paid data source such as Ahrefs or Semrush. The competitor watch
  in the same issue tracks competitors' title tags, meta descriptions and H1s
  instead, which needs no paid API.
