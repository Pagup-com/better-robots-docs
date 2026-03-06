# SEO Tool Protection <span class="pro-badge">Pro Feature</span>

**Location:** Settings ➔ SEO Tool Protection

Protect your competitive intelligence and preserve your backlink strategy by blocking SEO analysis tools from scraping your site.

## Why Protect Your SEO Intelligence?

SEO analysis tools continuously crawl the web to build databases of backlinks, keyword rankings, and website structures. Competitors use these tools to:

- Discover your backlink profile (who is linking to you).
- Analyze your site structure and internal linking.
- Reverse-engineer your content strategy.

By blocking these tools, you keep your SEO strategy hidden.

## Supported Blockers

The SEO Tool Protection module allows you to block the industry's most popular crawlers:

| Tool         | Crawler Name      |
| ------------ | ----------------- |
| **Ahrefs**   | AhrefsBot         |
| **Semrush**  | SemrushBot        |
| **Majestic** | MJ12bot           |
| **Moz**      | rogerbot / dotbot |
| **Serpstat** | serpstatbot       |
| **Dotbot**   | dotbot            |

## Recommendations

If you actively use Ahrefs or Semrush to audit your _own_ website, you should **Allow** those specific bots so your site audits don't fail.

Otherwise, we recommend **Blocking** all of them to preserve your competitive advantage.

## Generated Output Example

```txt
# SEO Tool Protection
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: rogerbot
Disallow: /
```

---

**Next Module:** [Bot & Scraper Protection](/settings/bot-protection)
