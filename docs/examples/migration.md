---
title: "Migration Guide"
description: "How to migrate an existing robots.txt setup to Better Robots.txt."
pageType: "docs"
ogImage: "/og/home.jpg"
---

# Migration Guide

Use this guide when replacing another robots.txt setup with Better Robots.txt.

## 1. Record Your Current Rules

Before changing anything:

- save a copy of the current `robots.txt`
- note any custom directives you need to preserve
- note whether the current site uses a physical `/robots.txt` file

## 2. Remove Conflicts

If another plugin or a hand-written physical file currently controls `robots.txt`, disable or remove that source first.

The most common blocker is a physical `/robots.txt` file in the site root.

## 3. Install Better Robots.txt

Install and activate the plugin, then open the settings wizard.

## 4. Recreate the Needed Rules

Use the current wizard flow to rebuild what you actually need:

- `Global Settings` for sitemap lines and core WordPress rules
- `Search Engine Visibility` for search presets
- `AI & LLM Governance` for AI-related robots rules
- `E-commerce Optimization` for WooCommerce cleanup
- `Advanced Settings` for any custom directives you want to preserve

## 5. Compare the Preview

Open `Step 14 - Review & Save` and compare the generated preview to the previous file.

## 6. Save and Re-Test

After saving:

- visit `https://yoursite.com/robots.txt`
- verify the sitemap lines
- verify the rules you intended to keep
- verify there is no remaining conflict with a physical file

## Important Note

The safest migration path is to review your old rules and recreate the ones you still want in the new wizard.
