---
title: "Best Practices"
description: "Practical recommendations for configuring Better Robots.txt safely."
pageType: "docs"
ogImage: "/og/home.jpg"
---

# Best Practices

Use these recommendations when configuring Better Robots.txt through the current setup wizard.

## Start With the Wizard Flow

- Choose a mode first, then review each numbered step instead of jumping straight to custom rules
- Use `Mode 1` or `Mode 2` if you want a safer starting point before making manual changes
- Use `Mode 0: Custom` only when you already know which modules you want to adjust

## Keep the Basics Intact

- Keep the core WordPress protection rules enabled unless you have a specific reason to change them
- Keep CSS/JS and image allow rules enabled in `Resources & Assets` unless you have tested a different need
- Make sure at least one valid sitemap source is configured in `Global Settings`

## Prefer Virtual Output Unless You Need a File

- Use `Virtual` robots.txt for most sites
- Choose `Physical File` only when you specifically need a written file in the site root
- If a physical `/robots.txt` already exists, resolve that conflict before relying on the virtual output

## Use AI Controls Intentionally

- Leave AI training protection enabled unless you deliberately want to allow training crawlers
- Decide separately whether AI search engines should be blocked or allowed
- Use `/llms.txt` only when you want to publish a separate manual policy file and are prepared to write its contents yourself

## Keep Store Rules Focused

- For WooCommerce sites, start with `Basic Cleanup`
- Move to `Advanced Cleanup` only when filter and parameter sprawl is a real issue
- Re-check the preview after changing store-related rules because they can add a lot of output quickly

## Use Custom Rules Carefully

- Add custom rules only for directives that are not already covered by the wizard
- Keep custom directives short and intentional
- Review the final preview after every custom rule change

## Always Review Before Saving

- Use `Step 14 - Review & Save` to confirm the generated output
- Check that the expected sitemap lines are present
- Check that the expected bot rules are present
- If `Consolidate User-agents` is enabled, confirm the final output still reads the way you expect

## Remember What robots.txt Is For

- `robots.txt` helps guide crawler behavior
- it is not a security system
- do not rely on it to protect private content or admin access

## Next

Use [Examples](/examples) for common configuration paths or [Troubleshooting](/troubleshooting) if the output is not behaving as expected.
