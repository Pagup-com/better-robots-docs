# Installation

## Requirements

- WordPress with administrator access
- PHP `7.4+`

## Install from WordPress.org

1. Go to **Plugins → Add New**
2. Search for `Better Robots.txt`
3. Install and activate the plugin

## First Launch

After activation:

1. Open **Better Robots.txt**
2. Choose a mode on the `Mode Selection` screen
3. Click **Configure**
4. Walk through the numbered steps
5. Review the preview in `Step 14 - Review & Save`
6. Save from the sticky footer

## Important Physical File Check

If your site already has a physical `/robots.txt` file in the web root, virtual mode can be blocked. The settings screen shows a warning when that happens.

## Verify the Installation

- Visit `https://yoursite.com/robots.txt`
- If you enabled `llms.txt`, visit `https://yoursite.com/llms.txt`

## If Something Looks Wrong

- Re-save permalinks in **Settings → Permalinks**
- Make sure **Settings → Reading → Search Engine Visibility** is not discouraging indexing
- Check for a physical `/robots.txt` file
- Check the preview in the final step before saving
