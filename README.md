# Better Robots.txt website

This repository powers the public website for Better Robots.txt at https://better-robots.com.

## Purpose

- product pages
- documentation
- pricing and download flows
- governance pages
- machine-readable public files published from `docs/public/`

## Related repositories

- Canonical plugin repository: https://github.com/GautierDorval/better-robots-txt
- WordPress plugin page: https://wordpress.org/plugins/better-robots-txt/

## Local development

```bash
pnpm install
pnpm docs:dev
```

## Build

```bash
pnpm docs:build
```

The build generates `sitemap.xml` and ensures `.nojekyll` exists in the output.
