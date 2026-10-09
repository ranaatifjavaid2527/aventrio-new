# Cal.com booking questions

These questions are set in the Cal.com dashboard, not in the website code. The
site embeds the event `atif-javaid/30min`, so add them to that event.

## Where to click

1. Sign in at app.cal.com.
2. Left sidebar: **Event Types**.
3. Open **30 min meeting** (the event at `cal.com/atif-javaid/30min`).
4. Top tabs: **Advanced**.
5. Scroll to **Booking questions** and click **Add a question**.
6. For each question below, choose the input type, type the label, set
   Required as shown, add the options for selects, then **Save**.
7. When all five are added, click **Save** at the top right of the event.
8. Open the site's /book page and make a test booking to check the form.

Name and Email are already there by default. Leave them as the first two.

## The questions

| # | Label | Input type | Required | Options |
|---|---|---|---|---|
| 1 | Company website | Short text | Yes | |
| 2 | Current annual revenue | Select | Yes | Under $500k / $500k to $2M / $2M to $10M / $10M+ |
| 3 | Team size | Select | Yes | 1 to 10 / 11 to 50 / 51 to 200 / 200+ |
| 4 | What do you sell? | Long text | Yes | |
| 5 | Do you currently run outbound? | Select | Yes | No / Tried it, it failed / Yes, in-house / Yes, with an agency |

The brief marked questions 1 and 4 as required and did not say for 2, 3 and 5.
They are marked required here because the answers shape the call. Make them
optional if you would rather not add friction.

Note on wording: the options above use "to" instead of a dash (for example
"$500k to $2M"), to match the site's no-dash rule. Cal.com shows exactly what you
type, so keep it consistent.

## One thing to check while you are there

The live site currently links to `cal.com/aventrio/30min`, which returns a 404
page (checked 9 October 2026). Either create a team or username `aventrio`
with a `30min` event, or leave it: the new site uses `atif-javaid/30min`, which
works.
