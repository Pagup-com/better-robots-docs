---
title: Use Cases
description: Choose the right Better Robots.txt setup for small business sites, publishers, WooCommerce stores, agencies, and protection-first environments.
schemaType: TechArticle
---


# Use Cases

This page helps you map real website situations to a safer starting point in Better Robots.txt.

## Small business website
**Recommended start:** Essential  
**Why:** most small business sites need clarity, not complexity.

Use Essential when you want to:
- stay discoverable in classic search
- block obvious low-value WordPress paths
- avoid over-configuring robots.txt too early

Move beyond Essential only if AI governance, archive control, or stricter bot policy becomes a real business requirement.

## Content publisher or editorial site
**Recommended start:** AI-First  
**Why:** publishers often want to stay visible in search while being more explicit about AI usage.

AI-First is useful when you want:
- stronger separation between search indexing and AI training
- optional `llms.txt` support
- more deliberate crawler governance for content-heavy sites

## WooCommerce store
**Recommended start:** Essential or AI-First  
**Why:** stores usually need better crawl hygiene more than aggressive blocking.

Use Better Robots.txt here to:
- reduce crawl waste on cart, checkout, account, filter, and parameter-heavy URLs
- keep high-value public pages discoverable
- avoid duplicate or low-value crawl paths

## Agencies and advanced operators
**Recommended start:** Custom  
**Why:** agencies often need to adapt to multiple client models, risk profiles, and publishing goals.

Custom is best when you already know:
- which crawler categories matter most
- what should stay open or restricted
- which policy trade-offs are acceptable for the client

## Protection-first or more sensitive sites
**Recommended start:** Fortress  
**Why:** some sites are more concerned about archive capture, broad bot exposure, or stronger restrictions.

Fortress is relevant when:
- scraping risk matters more than broad openness
- archive behavior is undesirable
- you want the strongest preset available in the product

## AI-aware publishing workflows
**Recommended start:** AI-First  
**Why:** some sites want to distinguish indexing, answer-generation use, and training more explicitly.

This is where Better Robots.txt becomes more than a file editor: it becomes a way to publish a clearer policy surface.

## Related pages
- [Presets](/presets)
- [Robots.txt Examples](/robots-txt-examples)
- [Pricing](/pricing)
- [Governance](/governance/)
