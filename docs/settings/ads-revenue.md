# Ads & Revenue Verification

**Location:** Settings ➔ Ads & Revenue Verification

Ensure your ad partners can verify your inventory by allowing access to your `ads.txt` and `app-ads.txt` files.

## Why is ads.txt important?

`ads.txt` (Authorized Digital Sellers) is an IAB Tech Lab initiative that helps ensure your digital ad inventory is only sold through authorized channels.

Google AdSense, Mediavine, AdThrive, and nearly every major ad network require Googlebot and associated crawlers to read this file.

**If this file is blocked by your `robots.txt`, your ads might stop showing.**

## Options

- **Allow Access:** (Recommended) Automatically adds rules to ensure `ads.txt` is crawlable.
- **Disable:** Does nothing relative to ads.txt.

## Generated Output Example

```txt
# Ads & Revenue Verification
User-agent: *
Allow: /ads.txt
Allow: /app-ads.txt
```

---

**Next Module:** [Advanced Custom Rules](/settings/advanced)
