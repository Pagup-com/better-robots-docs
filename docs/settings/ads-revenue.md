# Ads & Revenue

**Location:** `Step 11 - Ads & Revenue`

This step controls the allow rules for the ad-verification files.

## Available Toggles

- **Allow verification file (ads.txt)**
- **Allow app verification file (app-ads.txt)**

## How It Works

- If `ads.txt` is enabled, the plugin allows access to `/ads.txt`
- If `app-ads.txt` is enabled, the plugin allows access to `/app-ads.txt`

These are simple allow rules under `User-agent: *`.
