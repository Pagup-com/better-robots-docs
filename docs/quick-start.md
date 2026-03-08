# Quick Start Guide

This guide follows the plugin's setup wizard.

## 1. Open the Wizard

In WordPress, go to **Better Robots.txt** and open the settings screen.

If the plugin detects a physical `/robots.txt` file in your site root, resolve that first. Virtual mode cannot take over until that file is removed.

## 2. Choose a Mode

The first screen is **Mode Selection**. The available modes are:

- `Mode 1: Essential`
- `Mode 2: AI-First`
- `Mode 3: Fortress`
- `Mode 0: Custom`

Then click **Configure**.

## 3. Walk Through the 14 Numbered Steps

1. `Search Engine Visibility`
   Pick `Minimal Visibility`, `Recommended Visibility`, `Extended Visibility`, or `Custom Control`.
2. `AI & LLM Governance`
   Decide whether to block AI training bots and whether AI search engines should be blocked or allowed.
3. `SEO Tool Protection`
   Turn the SEO crawler groups on or off if your plan supports them.
4. `Bad Bots Protection`
   Enable the curated bad-bot list.
5. `Archive & Wayback Control`
   Leave archiving allowed, or block archive services on Premium.
6. `Global Settings`
   Choose `Virtual` or `Physical` robots.txt, add a sitemap URL, enable sitemap auto-detection, and review the core WordPress protection toggles.
7. `Spam, Feeds & Crawl Traps`
   Configure feed blocking, archive blocking, and crawl-trap cleanup.
8. `E-commerce Optimization`
   Choose the WooCommerce cleanup level that fits your store.
9. `Resources & Assets`
   Decide whether CSS/JS and images should receive explicit allow rules.
10. `Social Media Crawlers`
    Control whether social preview crawlers are blocked.
11. `Ads & Revenue`
    Keep `ads.txt` and `app-ads.txt` accessible if you use ad-network verification.
12. `LLMS.txt File`
    On Pro or Premium, enable the virtual file and enter the file contents.
13. `Advanced Settings`
    Add custom directives, optionally consolidate user-agents, and set crawl delay if your plan supports it.
14. `Review & Save`
    Refresh the preview and verify the generated output.

## 4. Save Your Changes

Use the sticky **Save Changes** bar at the bottom of the screen. The final step shows the preview, but the save action is global.

## 5. Verify the Result

- Check `https://yoursite.com/robots.txt`
- If you enabled `llms.txt`, check `https://yoursite.com/llms.txt`
- Confirm that your expected sitemap line appears
- Confirm that any blocked sections or bots are present in the output

## Publish-Safe Notes

- The preview lives inside `Step 14 - Review & Save`.
- `llms.txt` is only served when the file is enabled **and** the content field is not empty.
