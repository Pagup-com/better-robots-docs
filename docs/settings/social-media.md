# Social Media Control <span class="pro-badge">Pro Feature</span>

**Location:** Settings ➔ Social Media

Control how social networks access and preview your content when a user shares a link.

## Social Network Crawlers

When someone pastes your URL into Facebook, Twitter, or LinkedIn, a crawler visits your site to generate a rich preview card (image, title, description).

If you block these crawlers, your shared links will look broken or plain, reducing click-through rates.

### Supported Platforms:

- **Facebook** (facebookexternalhit)
- **Twitter** (Twitterbot)
- **LinkedIn** (LinkedInBot)
- **Pinterest** (Pinterestbot)

You can choose to Allow or Disallow individual social networks.

**Recommendation:** Allow all of them.

## Generating Output Example

```txt
# Social Media Optimization
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /
```

---

**Next Module:** [Ads & Revenue Verification](/settings/ads-revenue)
