#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Pre-deploy quality gate for aventrio.co

Runs the same checks we've been doing by hand all along. If anything fails,
the GitHub Actions build stops and nothing reaches cPanel.

Run locally before pushing:   python3 tools/validate.py
"""
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGES = ["index.html", "about.html", "privacy.html", "terms.html"]

# Pages where bracketed fill-ins are allowed (legal details only you can supply)
PLACEHOLDERS_OK = {"privacy.html", "terms.html"}

PAIRED_TAGS = [
    "section", "div", "span", "p", "a", "h1", "h2", "h3", "h4",
    "article", "details", "summary", "table", "tr", "td", "th",
    "aside", "form", "button", "ul", "li", "b", "em", "strong", "small",
]

REQUIRED_META = [
    "<title>", 'name="description"', 'rel="canonical"',
    'property="og:title"', 'property="og:image"', 'name="robots"',
]

errors = []
warnings = []


def fail(page, msg):
    errors.append(f"{page}: {msg}")


def warn(page, msg):
    warnings.append(f"{page}: {msg}")


def check_page(page):
    path = os.path.join(ROOT, page)
    if not os.path.exists(path):
        fail(page, "file is missing")
        return
    html = open(path, encoding="utf-8").read()

    # --- 1. paired tags balance ---
    for tag in PAIRED_TAGS:
        opened = len(re.findall(r"<%s[\s>]" % tag, html))
        closed = len(re.findall(r"</%s>" % tag, html))
        if opened != closed:
            fail(page, f"<{tag}> unbalanced: {opened} open, {closed} close")

    # --- 2. CSS braces ---
    if "<style>" in html:
        css = html[html.index("<style>"):html.index("</style>")]
        if css.count("{") != css.count("}"):
            fail(page, f"CSS braces unbalanced ({css.count('{')} vs {css.count('}')})")

    # --- 3. structured data parses ---
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
        try:
            json.loads(block)
        except json.JSONDecodeError as e:
            fail(page, f"invalid JSON-LD: {e}")

    # --- 4. inline JavaScript syntax ---
    m = re.search(r"<script>\n(.*?)\n</script>", html, re.S)
    if m:
        tmp = os.path.join(ROOT, ".ci-check.js")
        open(tmp, "w", encoding="utf-8").write(m.group(1))
        res = subprocess.run(["node", "--check", tmp], capture_output=True, text=True)
        os.remove(tmp)
        if res.returncode:
            fail(page, "JavaScript syntax error: " + res.stderr.strip().split("\n")[0])

    # --- 5. internal anchors resolve ---
    ids = set(re.findall(r'id="([^"]+)"', html))
    for href in re.findall(r'href="(#[^"]+)"', html):
        if href != "#" and href[1:] not in ids:
            fail(page, f"anchor {href} has no matching element")

    # --- 6. internal page links exist on disk ---
    for link in set(re.findall(r'href="([a-z0-9_-]+\.html)"', html)):
        if not os.path.exists(os.path.join(ROOT, link)):
            fail(page, f"links to {link}, which does not exist")

    # --- 7. referenced local assets exist ---
    for src in set(re.findall(r'(?:src|href)="(assets/[^"]+)"', html)):
        if not os.path.exists(os.path.join(ROOT, src)):
            warn(page, f"references {src}, which is not in the repo (optional asset?)")

    # --- 8. SEO essentials ---
    for needle in REQUIRED_META:
        if needle not in html:
            fail(page, f"missing {needle}")
    if 'lang="en"' not in html:
        fail(page, 'missing lang="en" on <html>')

    # --- 9. one h1, images have alt text ---
    h1s = len(re.findall(r"<h1[\s>]", html))
    if h1s != 1:
        fail(page, f"should have exactly one <h1>, found {h1s}")
    for img in re.findall(r"<img[^>]*>", html):
        if "alt=" not in img:
            fail(page, "an <img> is missing alt text: " + img[:60])

    # --- 10. house style: no em or en dashes in copy ---
    dashes = len(re.findall(r"[\u2013\u2014]", html)) + html.count("&mdash;") + html.count("&ndash;")
    if dashes:
        fail(page, f"{dashes} em/en dash(es) found; house style uses commas, colons or full stops")

    # --- 11. unfilled placeholders ---
    if page not in PLACEHOLDERS_OK:
        body = html[html.index("</style>"):] if "</style>" in html else html
        body = re.sub(r"<script.*?</script>", "", body, flags=re.S)
        left = re.findall(r"\[[^\]\n]{4,60}\]", re.sub(r"<[^>]+>", " ", body))
        if left:
            fail(page, f"unfilled placeholder(s): {left[:3]}")


def check_site_files():
    for f in ["robots.txt", "sitemap.xml", "llms.txt"]:
        if not os.path.exists(os.path.join(ROOT, f)):
            fail(f, "missing from the repo")
    sm = os.path.join(ROOT, "sitemap.xml")
    if os.path.exists(sm):
        xml = open(sm, encoding="utf-8").read()
        for page in PAGES:
            slug = "/" if page == "index.html" else "/" + page[:-5]
            if slug not in xml:
                warn("sitemap.xml", f"does not list {slug}")


def check_config():
    """Warn loudly if the booking link was never set."""
    html = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
    m = re.search(r"var BOOKING_URL = '([^']*)'", html)
    if m and not m.group(1):
        warn("index.html", "BOOKING_URL is still empty, so 'Book a call' only scrolls to the section")


def main():
    for page in PAGES:
        check_page(page)
    check_site_files()
    check_config()

    for w in warnings:
        print(f"  warning  {w}")
    for e in errors:
        print(f"  ERROR    {e}")

    print()
    if errors:
        print(f"FAILED: {len(errors)} error(s), {len(warnings)} warning(s). Deploy blocked.")
        sys.exit(1)
    print(f"PASSED: {len(PAGES)} pages clean, {len(warnings)} warning(s). Safe to deploy.")


if __name__ == "__main__":
    main()
