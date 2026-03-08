# Basic Configuration

This page covers a safe starting setup for most sites.

## A Simple First Pass

1. Open **Better Robots.txt**
2. Choose `Mode 1: Essential` if you want the fastest low-risk setup
3. Click **Configure**
4. Review these steps first:
   - `Search Engine Visibility`
   - `AI & LLM Governance`
   - `Global Settings`
   - `E-commerce Optimization` if you use WooCommerce
   - `Ads & Revenue` if you use ad verification files
5. Check the preview in `Step 14 - Review & Save`
6. Save from the sticky footer

## Recommended Baseline Choices

- Keep `Virtual (WordPress-generated)` robots.txt unless you specifically need a physical file
- Add a sitemap URL or enable sitemap auto-detection
- Leave the core WordPress protection toggles enabled unless you have a reason to relax them
- Keep CSS/JS allow rules enabled
- Keep image allow rules enabled unless you intentionally want to stop image crawling
- Keep `ads.txt` enabled if you rely on ad-network verification

## Before You Publish

- Confirm `https://yoursite.com/robots.txt` is reachable
- Confirm there is no conflicting physical `/robots.txt` file unless you intentionally use physical mode
- Confirm the preview contains the rules you expect

For the exact step-by-step order, use [Quick Start](/quick-start) and [Settings Overview](/settings).
