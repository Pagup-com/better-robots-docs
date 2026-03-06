# Search Engine Visibility

**Location:** Settings ➔ Search Engine Visibility

This module allows you to granularly control which major search engines are allowed or disallowed from crawling your website.

## Major Search Engines

By default, the plugin optimizes your `robots.txt` file for standard visibility, but you can explicitly block or allow major search engine crawlers.

| Bot             | Purpose        | Default  | Our Recommendation                                        |
| --------------- | -------------- | -------- | --------------------------------------------------------- |
| **Googlebot**   | Google Search  | ✅ Allow | **Allow**. Essential for Google Search presence.          |
| **Bingbot**     | Microsoft Bing | ✅ Allow | **Allow**. Essential for Bing traffic.                    |
| **Yahoo Slurp** | Yahoo Search   | ✅ Allow | **Allow**. Standard search visibility.                    |
| **DuckDuckBot** | DuckDuckGo     | ✅ Allow | **Allow**. Good for privacy-focused traffic.              |
| **Yandex**      | Russian Search | ✅ Allow | **Depends**. Block if you don't target Russian audiences. |
| **Baidu**       | Chinese Search | ✅ Allow | **Depends**. Block if you don't target Chinese audiences. |

## Why Block Search Engines?

You might want to explicitly turn off (block) certain search engines to:

- **Save Crawl Budget:** If you only care about Google and Bing, blocking Baidu and Yandex saves your server resources.
- **Regional Targeting:** If your business is strictly local to North America, foreign search engines offer no SEO value.

## Generated Output Example

If you **Allow** Google, Bing, and DuckDuckGo, but **Disallow** Yandex and Baidu, your output will look like this:

```txt
# Search Engine Visibility
User-agent: Yandex
Disallow: /

User-agent: Baiduspider
Disallow: /
```

_(Note: Allowed bots typically don't require an explicit `Allow: /` unless `User-agent: _`is set to`Disallow: /`, but Better Robots.txt intelligently manages this syntax for you.)\*

---

**Next Module:** [AI & LLM Governance](/settings/ai-governance)
