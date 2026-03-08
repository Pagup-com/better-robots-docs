# Frequently Asked Questions

## What is the real setup flow?

There is a `Mode Selection` screen followed by `14` numbered steps. The `robots.txt` preview is inside `Step 14 - Review & Save`.

## Is the preview its own step?

No. The preview is part of the final step.

## What is the difference between virtual and physical robots.txt?

- **Virtual**
  WordPress serves `robots.txt` dynamically
- **Physical**
  The plugin writes an actual file to the site root

Physical mode is available on Pro and Premium plans.

## Does `llms.txt` auto-generate its own content?

No. You must be on Pro or Premium, enable the file, and enter the content yourself.

## Which settings matter most for AI control?

The main AI settings are:

- AI training protection
- AI search policy
- optional `llms.txt`

## Why is my virtual robots.txt not appearing?

Check these first:

- a physical `/robots.txt` file in the site root can block the virtual file
- the settings screen shows a warning when that happens
- if you expect the plugin's virtual output, make sure the site is public in **Settings → Reading**
