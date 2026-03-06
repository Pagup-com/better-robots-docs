# Resources & Assets

**Location:** Settings ➔ Resources & Assets

Ensure search engines correctly index your site by giving them access to essential files.

## WP Resource Crawling

WordPress uses specific directories for styling and javascript. Most bots need these to correctly render your pages.

If search engines cannot render your page, it negatively impacts your technical SEO score (Core Web Vitals).

**We strongly recommend allowing access to:**

- `/wp-includes/*.css`
- `/wp-includes/*.js`
- `/wp-admin/*.css`
- `/wp-admin/*.js`
- `/*.css`
- `/*.js`

## Image Indexing Control

In some instances, you might want to prevent search engines from indexing the images on your site.

**Reasons to Block Image Indexing:**

- **Stock Photography:** You don't own the images.
- **Bandwidth Usage:** Google Image searches eat up your server resources.
- **Privacy:** User-uploaded profile pictures and galleries.

**Options:**

- **Allow:** Recommended for photography portfolios and e-commerce.
- **Disallow:** Blocks Googlebot-Image from indexing `*.jpg, *.png, *.gif, *.webp`.

## Generated Output Example

```txt
# Resources & Assets
User-agent: *
Allow: /*.css$
Allow: /*.js$

User-agent: Googlebot-Image
Disallow: /*.jpg$
Disallow: /*.jpeg$
```

---

**Next Module:** [Social Media Control](/settings/social-media)
