---
title: "Examples"
description: "Examples and use cases for Better Robots.txt."
pageType: "docs"
ogImage: "/og/home.jpg"
---

# Examples & Use Cases

These examples follow the settings flow shown in the plugin.

## Simple Site

Suggested path:

- `Mode 1: Essential`
- `Search Engine Visibility`: `Recommended Visibility`
- `AI & LLM Governance`: keep training protection on
- `Global Settings`: add your sitemap
- `Resources & Assets`: keep CSS/JS and images enabled
- `Ads & Revenue`: keep `ads.txt` enabled if needed

## Content Site Concerned About AI Training

Suggested path:

- `Mode 0: Custom` or `Mode 2: AI-First`
- `AI & LLM Governance`: keep training protection on
- Decide whether AI search should be blocked or allowed
- If you are on Pro/Premium, add a manual `/llms.txt` file in `Step 12`

## WooCommerce Store

Suggested path:

- `E-commerce Optimization`: `Basic Cleanup` for most stores
- `Advanced Cleanup` on Pro/Premium if filter and parameter sprawl is a real issue
- Keep CSS/JS and images enabled in `Resources & Assets`
- Keep ad-verification files enabled if you use them

## Site Using a Physical robots.txt File

Suggested path:

- In `Global Settings`, choose `Physical File` only if you actually need a written file
- Resolve any existing physical-file conflict before relying on virtual output
- Always review the preview before saving
