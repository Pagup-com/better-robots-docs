---
title: AI Usage Policy
description: Understand search, ai-input, ai-train, and why Better Robots.txt treats AI usage as a governance question.
schemaType: TechArticle
---

# AI Usage Policy

This page explains the logic behind AI-related settings in Better Robots.txt.

## How LLMs may use a site

AI systems may interact with websites in several different ways:

### 1. Search indexing
A system may crawl a page so it can appear in classic search results.

### 2. Answer generation
A system may use the page in real time to answer user questions or enrich an answer pipeline.

### 3. Model training
A system may ingest the content to improve or train a model over time.

### 4. Scraping or dataset collection
A system may collect content without clear user-facing search or answer value.

These uses are not identical, which is why a modern crawl policy should not treat them as if they were the same.

## Why content signals matter

Signals such as `search`, `ai-input`, and `ai-train` help site owners express different preferences:

- **search**: classic search indexing and discovery
- **ai-input**: real-time answer generation or grounding usage
- **ai-train**: training or model improvement usage

These signals are especially useful when you want to keep search visibility while being more restrictive about model training.

## Why protecting a site may matter

Site owners may want to limit some forms of use because of:

- original editorial work
- competitive intelligence
- archive exposure
- server load
- AI training concerns
- compliance or internal publishing policy

## Important limit

Better Robots.txt helps publish intent. It does not claim that every system will obey these signals.

## Related references

- [Governance overview](/governance)
- [robots.txt examples](/robots-txt-examples)
- [llms.txt](/llms.txt)
- [ai-governance.json](/.well-known/ai-governance.json)
