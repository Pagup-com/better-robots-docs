---
title: robots.txt Examples
description: See Better Robots.txt examples for publishers, WooCommerce stores, and protection-first setups.
schemaType: TechArticle
---

# robots.txt Examples

These examples are illustrative. They show the kind of policy Better Robots.txt can help you publish. They are not legal advice, server hardening, or one-size-fits-all defaults.

## Example 1 — Small business website

**Recommended preset:** Essential

```txt
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml
```

**Why this works**
- The site is public and wants discovery.
- There is no strong reason to become restrictive early.
- The main goal is a cleaner, safer default policy.

## Example 2 — Content publisher with AI-aware policy

**Recommended preset:** AI-First

```txt
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml

# Content-Signal: search=yes, ai-input=yes, ai-train=no
```

**Why this works**
- It keeps classic search open.
- It expresses a more restrictive stance on model training.
- It fits editorial publishing better than a blank default file.

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

**Why this works**
- It blocks low-value or private paths.
- It helps reduce crawl waste.
- It keeps product discovery clearer.

## Example 4 — Protection-first site

**Recommended preset:** Fortress

```txt
User-agent: *
Allow: /
Disallow: /private/
Disallow: /archive/
Sitemap: https://example.com/sitemap.xml
```

**Why this works**
- It reflects a stricter policy.
- It fits a protection-first mindset.
- It makes more sense when archive and scraping exposure matter.

## How to use these examples

- Start from the business context that looks closest to yours.
- Use the example to understand the logic, not to copy blindly.
- Let the plugin generate the final file, then review it before publishing.

## Continue

- [Choose your preset](/presets)
- [Compare plans](/pricing)
- [Read governance](/governance/)
