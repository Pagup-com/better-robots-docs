---
title: "Troubleshooting"
description: "Troubleshooting common Better Robots.txt issues."
pageType: "docs"
ogImage: "/og/home.jpg"
---

# Troubleshooting

## `robots.txt` does not load as expected

Check these first:

1. Re-save permalinks in **Settings → Permalinks**
2. If you expect the plugin's virtual output, make sure WordPress is public in **Settings → Reading**
3. Check for a physical `/robots.txt` file in the site root

## Virtual output is not updating

- Clear page, CDN, and server caches
- Open the final preview step and confirm the generated output before saving
- Check whether a physical `/robots.txt` file is taking precedence

## The final output does not match what I expected

Review each relevant step again and compare it with the preview in `Step 14 - Review & Save` before saving.

## `llms.txt` does not appear

Make sure all of these are true:

- You are on Pro or Premium
- The `Enable llms.txt Virtual File` toggle is on
- The `LLMS.txt Content` field is not empty

## Physical file conflicts

If the settings screen says a physical `/robots.txt` file is blocking virtual output:

- remove the file manually, or
- use the delete action shown by the plugin when available

## Sitemap lines are missing

- Enter a manual sitemap URL in `Global Settings`, or
- enable auto-detection and make sure your sitemap is reachable

## Crawl delay is missing from the output

`Crawl Delay` is available on Pro and Premium plans.
