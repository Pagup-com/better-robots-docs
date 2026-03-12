---
title: Troubleshooting
description: Resolve common Better Robots.txt questions around output, editions, previews, cache effects, and public site policy files.
schemaType: TechArticle
---


# Troubleshooting

## My generated file does not look like I expected
Start by checking three things:
1. which preset you selected
2. which edition you are using
3. what the final Review & Save preview shows

## I see features that are locked
Some interface elements belong to Pro or Premium. The website documents the full product, not only the free edition.

## I am not sure which preset fits my site
Start with [Presets](/presets) and then read [Use Cases](/use-cases). For most sites, Essential is the safest first choice.

## My public site loaded strangely after a deployment
If a page shell loads but the content looks wrong until refresh, you may be seeing an old browser session or cached assets. Hard refresh and test in private browsing before assuming the route is broken.

## SEMrush or another crawler reported a transient 404
If the page works normally in a clean session and the HTML source contains content, the issue may have been observed during a temporary transition or cache mismatch. Re-run the crawl once the deployment is stable.

## I expected hard enforcement from these files
robots.txt, llms.txt, and similar files publish intent. They do not replace WAF, CDN, or server-level enforcement.

## I still need help
Use [Contact](/contact).
