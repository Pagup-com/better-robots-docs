---
title: Governance
description: Understand why Better Robots.txt is built around crawl policy, AI usage signals, and clear intent rather than hype.
schemaType: TechArticle
---

# Governance

Better Robots.txt helps website owners publish a clearer crawl policy.

## Why governance matters

A modern website may be visited by:

- search engines
- AI crawlers
- archive bots
- SEO tools
- social preview bots
- scrapers and abusive crawlers

These categories do not all serve the same purpose, and they should not automatically receive the same treatment.

## How automated systems use a website

### Search indexing
A system may crawl a page so it can appear in classic search results.

### AI answer generation
A system may use a page to answer user questions in real time or to retrieve passages for generated answers.

### AI training
A system may use public content to improve or train models over time.

### Archive, analysis, and scraping
A system may collect content for archives, SEO tooling, benchmarking, or large-scale extraction.

These are not the same use cases. A site owner may reasonably want to express different preferences for each one.

## What Better Robots.txt helps you express

Better Robots.txt helps you express:

- what should stay crawlable for classic search
- whether AI systems should use content for answer generation
- whether model training should be allowed or refused
- whether archive services should snapshot the site
- whether low-value crawl paths should be reduced

## Intent, not force

robots.txt, llms.txt, and similar signals are policy signals.

They are useful because they express intent clearly. They are not the same thing as:

- WAF rules
- IP blocking
- authentication
- access control
- legal enforcement

## Why a site owner may want protection

A site owner may want more protection because:

- the site contains original editorial work
- the site contains commercial or sensitive material
- broad crawling wastes server resources
- low-value bots create noise
- training use is not the same as search visibility

## Continue

- [Read the AI Usage Policy](/governance/ai-usage-policy)
- [See robots.txt examples](/robots-txt-examples)
- [Compare editions](/pricing)
