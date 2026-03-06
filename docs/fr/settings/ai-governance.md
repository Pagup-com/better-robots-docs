# AI & LLM Governance

**Location:** Settings ➔ AI & LLM Governance

Artificial Intelligence bots and Large Language Models (LLMs) aggressively scrape the web for training data. This module allows you to take control of your intellectual property.

## Understanding AI Bots

Bots like ChatGPT, Claude, and Perplexity consume massive amounts of website content to generate answers and train their models. While some might drive traffic (like Perplexity), others silently scrape your content without attributing the source.

## AI Bot Protection (Free & Pro Features)

Better Robots.txt categorizes AI bots so you can granularly block or allow them.

### Free Features:

- **ChatGPT Bot Blocker:** Easily block OpenAI's `GPTBot` from scraping your website content.

### Pro Features:

Taking control of AI scrapers is essential for modern websites. The Pro version provides comprehensive blockers for the major players:

| AI Bot                 | Purpose                 | Our Recommendation                 |
| ---------------------- | ----------------------- | ---------------------------------- |
| **ChatGPT (GPTBot)**   | OpenAI training data    | 🚫 **Block**                       |
| **Claude (Anthropic)** | Anthropic training data | 🚫 **Block**                       |
| **Google Extended**    | Google Gemini training  | 🚫 **Block**                       |
| **Perplexity**         | AI Search Engine        | ⚠️ **Depends** (can drive traffic) |
| **Applebot Extended**  | Apple Intelligence      | 🚫 **Block**                       |
| **Meta AI (Facebook)** | Meta LLM training       | 🚫 **Block**                       |
| **Amazon AI**          | Amazon LLM training     | 🚫 **Block**                       |
| **Cohere AI**          | Enterprise LLMs         | 🚫 **Block**                       |

## Generating llms.txt (Pro Feature)

A growing standard for controlling how AI interacts with your site is the `llms.txt` file. When enabled, Better Robots.txt automatically generates this file.

**What `llms.txt` does:**

- It provides explicit instructions to AI agents about how to safely consume and interact with your content.
- Think of it as a `robots.txt` specifically designed for AI agents and LLMs.

**Location:** `https://yourdomain.com/llms.txt`

## Generated Output Example

```txt
# AI & LLM Governance
User-agent: GPTBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Google-Extended
Disallow: /
```

---

**Next Module:** [SEO Tool Protection](/settings/seo-protection)
