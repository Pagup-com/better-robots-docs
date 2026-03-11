---
title: "Global Settings"
description: "Global settings, sitemap lines, and core rules in Better Robots.txt."
pageType: "docs"
ogImage: "/og/home.jpg"
---

# Global Settings

**Location:** `Step 6 - Global Settings`

This step combines global output settings, sitemap handling, and the core WordPress protection rules.

## What the Step Includes

- `Robots.txt Type`
  - `Virtual (WordPress-generated)`
  - `Physical File`
- `Sitemap URL`
- `Auto-detect sitemap`
- `Footer Signature`
- `AI Governance (SSA)`
- `Core WordPress Protection`

## What This Step Controls

- The manual sitemap URL
- Auto-detected sitemap URLs
- The core WordPress protection toggles for:
  - `/wp-admin/`
  - `/wp-includes/`
  - `/readme.html` and `/license.txt`
  - `/xmlrpc.php`
  - `/wp-login.php` and `/wp-register.php`
  - `*?attachment_id=`
  - `*/disclaimer/*`
- The footer-signature toggle
- The SSA checkbox

## Physical File Notes

- `Physical File` requires Pro/Premium access
- A pre-existing physical `/robots.txt` file can block virtual output even before you enable the plugin's own physical mode
