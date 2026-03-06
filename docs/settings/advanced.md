# Advanced Custom Rules

**Location:** Settings ➔ Advanced Custom Rules

If you need a specific directive that isn't covered by the other modules, the Advanced Custom Rules module gives you complete control over your `robots.txt` output.

## Adding Custom Rules

Write your custom `User-agent`, `Allow`, and `Disallow` rules directly into the text editor.

**Format Example:**

```txt
User-agent: Googlebot
Allow: /important-page/

User-agent: *
Disallow: /temp/
```

### Tips for Custom Rules:

- **Case Sensitivity:** Although `User-agent` is case-insensitive, paths (like `/Admin/`) are case-sensitive.
- **Wildcards:** Use `*` to match any sequence of characters. (e.g., `Disallow: /*?sort=`)
- **End of String:** Use `$` to match the end of a URL. (e.g., `Allow: /*.pdf$`)

## Physical File Generation <span class="pro-badge">Pro Feature</span>

By default, WordPress handles `robots.txt` dynamically through PHP. While efficient, high-traffic sites may experience performance bottlenecks handling thousands of bot requests dynamically.

**Physical File Generation** creates a real `robots.txt` file at the root of your WordPress installation.

### Benefits of a Physical File:

- ✅ **Faster Load Times** for bots (Zero PHP execution).
- ✅ **CDN Compatibility:** Cloudflare and other CDNs can cache the physical file permanently.
- ✅ **PageSpeed Insights:** Better scores on technical performance audits.

**Warning:** Your WordPress installation must have write-permissions to the root directory for this feature to work.

## Appending the Default robots.txt

WordPress adds its own internal rules to the default `robots.txt` (typically allowing `admin-ajax.php` and disallowing `/wp-admin/`).

You can toggle **Append Default robots.txt** to include or completely overwrite these standard WordPress rules.

---

**Next:** View [Examples](/examples) or return to [Settings Overview](/settings).
