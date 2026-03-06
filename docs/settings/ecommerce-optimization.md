# E-commerce Optimization <span class="pro-badge">Pro Feature</span>

**Location:** Settings ➔ E-commerce Optimization

If you run a WooCommerce store, this module optimizes your site's indexing, preventing Google from wasting your crawl budget on shopping carts and user accounts.

## Why Optimize Your Store?

WooCommerce generates hundreds (or thousands) of dynamic URLs per user—such as shopping carts, checkout sessions, and user account endpoints.

If search engines crawl these pages:

- **It wastes Crawl Budget:** Search engines spend time indexing empty carts instead of your product pages.
- **Duplicate Content Issues:** Dynamic session URLs can create severe duplicate content problems for your SEO.
- **Server Load:** Thousands of bots hitting the `/checkout/` page simultaneously can crash your database.

## Protected Areas

Enabling **WooCommerce Protection** automatically applies the following block rules to all User-agents:

### Included Protections:

- `?add-to-cart=*` (Prevents bots from randomly adding items to their cart)
- `/cart/` (Shopping cart pages)
- `/checkout/` (Checkout endpoints)
- `/my-account/` (User dashboards)

## Advanced Protections

We also highly recommend blocking WooCommerce internal functionalities that provide no SEO value.

- **Block WooCommerce API:** (`/wc-api/v1/`) Prevents scraping of your internal APIs.
- **Block Product Tag Filtering:** Prevents parameter spam when bots try every combination of `?filter_color=blue&filter_size=large`.

## Generated Output Example

```txt
# E-commerce Optimization
User-agent: *
Disallow: /*add-to-cart=*
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Disallow: /*?filter_*
```

---

**Next Module:** [Resources & Assets](/settings/resources-assets)
