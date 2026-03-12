---
title: Best Practices
description: Use Better Robots.txt with clearer intent, better crawl hygiene, and safer decision-making instead of overblocking by default.
schemaType: TechArticle
---


# Best Practices

## Start from intent, not fear
Do not make your robots.txt stricter just because a feature exists. Start from what your site actually needs.

## Use presets as starting points
Presets are designed to reduce mistakes. They are safer than starting from a blank file and trying to decide everything manually.

## Do not over-block search or social by accident
Blocking too aggressively can reduce visibility, previews, or public discoverability. If your site is public, stay proportionate.

## Separate search, answer generation, and training in your reasoning
A modern website can be used for more than classic indexing. Treat search, AI answer generation, and model training as different questions.

## Review before publish
Always inspect the generated output in the final Review & Save step. That step exists to reduce mistakes and build confidence.

## Tighten only what you can justify
If you cannot explain why a rule exists, it may not belong in your policy yet.

## Use machine-first files carefully
Files like `llms.txt` and governance artefacts are useful because they clarify intent. They are not magical enforcement tools.

## Related pages
- [Quick Start](/quick-start)
- [Presets](/presets)
- [Governance](/governance/)
- [AI Usage Policy](/governance/ai-usage-policy)
