# Bot & Scraper Protection

**Location:** Settings ➔ Bot & Scraper Protection

The internet is filled with automated scripts, malicious bots, and aggressive scrapers that consume your server bandwidth and steal your content. This module is your fast-track defense.

## Protecting Your Server

Aggressive bots slow down your website for real users by consuming server CPU, RAM, and bandwidth. Blocking these bots is the single best way to optimize crawl budget.

## Better Robots.txt Protection Modes

### 1. Free Version: AI-Recommended Bad Bots

The free version provides an essential layer of protection. It blocks a curated list of known bad bots, scrapers, and malicious scripts, optimized via ChatGPT recommendations.

**Includes:**

- Basic scrapers
- Known outdated web crawlers
- Redundant search engine bots

### 2. Pro Version: Advanced Threat Protection

The Pro version unlocks our extended bad bot database, blocking over 40+ additional malicious bots.

**Includes:**

- Aggressive content scrapers
- Spam-related bots
- Email harvesters
- Vulnerability scanners

## Crawl Delay Setting

**Location:** Settings ➔ Bot & Scraper Protection ➔ Global Crawl Delay

The **Crawl-delay** directive instructs bots on how much time to wait (in seconds) between requests to your server.

_Note: Googlebot does not officially respect the `Crawl-delay` directive, but many other bots (like Bing, Yahoo, and Yandex) do._

**Recommended Settings:**

- **Shared hosting:** 1 to 2 seconds
- **VPS/Dedicated:** 0.5 to 1 second
- **High-traffic or heavy e-commerce:** 2 to 5 seconds

## Generated Output Example

```txt
# Bot & Scraper Protection

# Block Bad Bots. AI recommended setting
User-agent: ia_archiver
Disallow: /

User-agent: archive.org_bot
Disallow: /

User-agent: SiteExplorer
Disallow: /

User-agent: spbot
Disallow: /

# Global Crawl Delay
User-agent: *
Crawl-delay: 2
```

---

**Next Module:** [Archive & Wayback Control](/settings/archive-control)
