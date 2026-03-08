# Settings Overview

The setup wizard has:

- `Mode Selection`
- `14` numbered steps
- a `Preview` panel inside `Step 14 - Review & Save`

## Actual Flow Order

1. **[Mode Selection](/settings/mode-selection)**
   Choose one of the four modes: `Mode 1: Essential`, `Mode 2: AI-First`, `Mode 3: Fortress`, or `Mode 0: Custom`.
2. **[Search Engine Visibility](/settings/search-visibility)**
   Select the visibility preset that controls which search engines receive explicit allow rules.
3. **[AI & LLM Governance](/settings/ai-governance)**
   Configure AI training protection and the AI search policy.
4. **[SEO Tool Protection](/settings/seo-protection)**
   Block SEO crawler groups such as Semrush, DotBot, Ahrefs, and similar tools.
5. **[Bad Bots Protection](/settings/bot-protection)**
   Enable the curated bad-bot list, with an expanded list on higher plans.
6. **[Archive & Wayback Control](/settings/archive-control)**
   Allow archiving or block archive services on Premium.
7. **[Global Settings](/settings/sitemaps)**
   Manage `virtual` vs `physical` robots.txt, sitemaps, footer signature, SSA links, and core WordPress protection rules.
8. **[Spam, Feeds & Crawl Traps](/settings/spam-protection)**
   Control feed blocking, author archives, comment spam parameters, search URLs, and trap parameters.
9. **[E-commerce Optimization](/settings/ecommerce-optimization)**
   Choose `No Cleanup`, `Basic Cleanup`, or `Advanced Cleanup` for WooCommerce-heavy sites.
10. **[Resources & Assets](/settings/resources-assets)**
    Allow CSS/JS and image crawling rules.
11. **[Social Media Crawlers](/settings/social-media)**
    Control whether social preview crawlers are blocked.
12. **[Ads & Revenue](/settings/ads-revenue)**
    Allow `ads.txt` and `app-ads.txt`.
13. **[LLMS.txt File](/settings/llms-txt)**
    Enable and populate a virtual `/llms.txt` file on Pro or Premium.
14. **[Advanced Settings](/settings/advanced)**
    Add custom rules, enable user-agent consolidation, and set crawl delay.
15. **[Review & Save](/settings/review-save)**
    Refresh the generated preview, copy it if needed, then save from the sticky `Save Changes` bar.

## Important Notes

- The final `robots.txt` preview is part of `Step 14 - Review & Save`
- A physical `/robots.txt` file in the site root can block the virtual output
