# Archive & Wayback Control

**Location:** Settings ➔ Archive & Wayback Control

Govern how internet archiving services, like the Wayback Machine, store and index your website over time.

## Why Control Archiving?

Internet archives create permanent historical records of your site. While this is useful for posterity, there are instances where you may want to block them:

- **Temporary Content:** You run time-sensitive promotions or host temporary information.
- **Intellectual Property:** You prefer your content to be available only when it's live on your server.
- **Accidental Publishing:** You want to ensure errors aren't permanently documented.
- **Paywalled Content:** You don't want archives to accidentally capture and expose premium information.

## Internet Archive Bot Options

By default, we **Allow** archiving services to preserve the internet's history. But you have full control.

### Supported Archivers:

- **Wayback Machine (Archive.org)**
- **Common Crawl (CCBot)**
- **Turnitin (TurnitinBot)** - A plagiarism detection service

## Generated Output Example

```txt
# Archive & Wayback Control
User-agent: archive.org_bot
Disallow: /

User-agent: turnitinbot
Disallow: /
```

---

**Next Module:** [Spam & Feed Protection](/settings/spam-protection)
