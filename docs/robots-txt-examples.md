---
title: robots.txt Examples
description: See Better Robots.txt examples for publishers, WooCommerce stores, and protection-first setups.
schemaType: TechArticle
---

# robots.txt Examples

These examples are illustrative. They show the kind of policy Better Robots.txt can help you publish. They are not one-size-fits-all legal or infrastructure advice.

## Example 1 — small business website

**Recommended preset:** Essential

```txt
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml
```

Why it works:
- simple public site
- no need for heavy restrictions
- clear crawl access for search engines

## Example 2 — content publisher with AI-aware policy

**Recommended preset:** AI-First

```txt
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml

# Content-Signal: search=yes, ai-input=yes, ai-train=no
```

Why it works:
- keeps classic search open
- expresses a more restrictive stance on model training
- fits editorial publishing better than a blank default file

## Example 3 — WooCommerce store

**Recommended preset:** Essential or Pro depending on scale

```txt
User-agent: *
Allow: /
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Sitemap: https://example.com/sitemap.xml
```

Why it works:
- blocks low-value or private paths
- helps reduce crawl waste
- keeps product discovery clearer

## Example 4 — protection-first site

**Recommended preset:** Fortress

```txt
User-agent: *
Allow: /
Disallow: /private/
Disallow: /archive/
Sitemap: https://example.com/sitemap.xml
```

Why it works:
- stricter policy
- protection-first mindset
- better fit when archive and scraping exposure matter

## How to read these examples

Look at them as policy patterns, not as magical rules. The right robots.txt always depends on the site, its business model, and the trade-offs you accept.
