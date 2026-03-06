# Spam & Feed Protection <span class="pro-badge">Pro Feature</span>

**Location:** Settings ➔ Spam & Feed Protection

Reduce server load, stop trackback abuse, and prevent RSS feed scraping by explicitly defining feed accessibility.

## RSS & Atom Feeds

WordPress automatically generates multiple XML and JSON feeds for your site, posts, and comments. While useful for legitimate syndicators and readers, they are also frequently targeted by scrapers who steal your content or consume server bandwidth.

**Options:**

- **Allow** - Allows bots to crawl your RSS and Atom feeds.
- **Disallow** - Prevents indexing of all `/feed/` URLs.

## Search & Trackback Results

Malicious bots often generate thousands of random searches on your site, attempting to index search result pages or exploit trackback URLs for spam.

**Options:**

- **Protect Search Results** - Highly recommended. Disallows all `?s=` URLs.
- **Protect Trackbacks** - Disallows `/trackback/` URLs to reduce comment spam.

## The Spam Firewall

The **Spam Firewall** identifies and blocks known malicious comment spammers, email harvesters, and vulnerability scanners that bypass standard bot filters.

**Options:**

- **Enable Spam Firewall** - Automatically blocks dozens of known spam IP networks and bot signatures by injecting targeted `Disallow:` patterns into your `robots.txt`.

## Generated Output Example

```txt
# Spam & Feed Protection
User-agent: *
Disallow: /feed/
Disallow: /trackback/
Disallow: /?s=
Disallow: /search/
# ... SPAM FIREWALL DISALLOW LIST ...
```

---

**Next Module:** [E-commerce Optimization](/settings/ecommerce-optimization)
