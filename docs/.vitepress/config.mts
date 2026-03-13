import { defineConfig } from 'vitepress'

const SITE_URL = 'https://better-robots.com'
const SUPPORT_EMAIL = 'support@better-robots.com'
const DEFAULT_OG = '/og/home.jpg'
const GITHUB_REPO = 'https://github.com/Pagup-com/better-robots-docs'
const PLUGIN_REPO = 'https://github.com/GautierDorval/better-robots-txt'
const PLUGIN_URL = 'https://wordpress.org/plugins/better-robots-txt/'

function pageToPath(page: string) {
  let clean = page.replace(/\\/g, '/').replace(/\.md$/, '')
  if (clean === 'index') return '/'
  if (clean === 'fr/index') return '/fr/'
  if (clean.endsWith('/index')) clean = clean.slice(0, -('/index'.length))
  return `/${clean}`
}

function englishPath(path: string) {
  if (path === '/fr/') return '/'
  if (path.startsWith('/fr/')) return path.replace('/fr', '')
  return path
}

function frenchPath(path: string) {
  if (path === '/') return '/fr/'
  if (path.startsWith('/fr/')) return path
  return `/fr${path}`
}

function localeOf(path: string) {
  return path === '/fr/' || path.startsWith('/fr/') ? 'fr_FR' : 'en_US'
}

function titleTemplate(pageTitle: string) {
  if (!pageTitle || pageTitle === 'Better Robots.txt') return 'Better Robots.txt'
  return `${pageTitle} | Better Robots.txt`
}

function globalSchemas() {
  return JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Pagup',
      url: SITE_URL,
      email: SUPPORT_EMAIL,
      sameAs: [GITHUB_REPO, PLUGIN_REPO, PLUGIN_URL]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Better Robots.txt',
      url: SITE_URL,
      publisher: {
        '@type': 'Organization',
        name: 'Pagup'
      },
      inLanguage: ['en', 'fr']
    }
  ])
}

function breadcrumbSchema(path: string, title: string) {
  const parts = path.split('/').filter(Boolean)
  const items: Array<Record<string, string | number>> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL + '/'
    }
  ]

  let current = ''
  let position = 2
  for (const part of parts) {
    current += '/' + part
    items.push({
      '@type': 'ListItem',
      position,
      name: part === 'fr' ? 'FR' : part.replace(/-/g, ' '),
      item: SITE_URL + current + '/'
    })
    position += 1
  }

  if (title && title !== 'Better Robots.txt' && parts.length > 0) {
    items[items.length - 1].name = title
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  }
}

function faqEntitiesFor(path: string) {
  const map: Record<string, Array<{ question: string; answer: string }>> = {
    '/faq/': [
      { question: 'Is the free edition useful on its own?', answer: 'Yes. The free edition already gives you guided setup, a useful preset, core controls, and a final preview step.' },
      { question: 'Do screenshots only show the free edition?', answer: 'No. Screenshots on this site may show Free, Pro, or Premium capabilities.' },
      { question: 'Can I block AI crawlers?', answer: 'You can configure AI-related behavior and publish AI usage preferences, but these remain declarative signals, not hard enforcement.' },
      { question: 'Why not treat all crawlers the same?', answer: 'Because search engines, AI systems, archive services, SEO tools, and abusive crawlers do not create the same value or risk profile.' },
      { question: 'Is Better Robots.txt a security product?', answer: 'No. It helps you publish crawl policy. It does not replace WAF rules, authentication, or infrastructure controls.' },
      { question: 'Do I need to understand robots.txt to use the plugin?', answer: 'No. For many websites, a preset plus a final review is enough.' },
      { question: 'Where do I get support?', answer: 'Use support@better-robots.com or see the Contact page.' }
    ],
    '/fr/faq/': [
      { question: 'La version gratuite est-elle utile à elle seule ?', answer: 'Oui. La version gratuite donne déjà un setup guidé, un preset utile, des contrôles essentiels et une étape finale de prévisualisation.' },
      { question: 'Les captures montrent-elles uniquement la version gratuite ?', answer: 'Non. Les captures affichées sur ce site peuvent montrer des fonctions Free, Pro ou Premium.' },
      { question: 'Puis-je bloquer les crawlers IA ?', answer: 'Tu peux configurer le comportement lié à l’IA et publier des préférences d’usage, mais ces signaux restent déclaratifs, pas coercitifs.' },
      { question: 'Pourquoi ne pas traiter tous les crawlers de la même manière ?', answer: 'Parce que moteurs de recherche, systèmes IA, services d’archive, outils SEO et crawlers abusifs n’apportent pas la même valeur ni le même niveau de risque.' },
      { question: 'Better Robots.txt est-il un produit de sécurité ?', answer: 'Non. Il aide à publier une politique de crawl. Il ne remplace pas des règles WAF, une authentification ou des contrôles d’infrastructure.' },
      { question: 'Dois-je comprendre robots.txt pour utiliser le plugin ?', answer: 'Non. Pour beaucoup de sites, un preset plus une revue finale suffisent.' },
      { question: 'Où obtenir du support ?', answer: 'Utilise support@better-robots.com ou consulte la page Contact.' }
    ]
  }
  return map[path] || []
}

function pageSchema(path: string, title: string, description: string, pageType: string) {
  const url = `${SITE_URL}${path}`
  const kind = pageType || 'WebPage'
  const breadcrumb = breadcrumbSchema(path, title)

  if (kind === 'home') {
    return JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Better Robots.txt',
        url,
        downloadUrl: PLUGIN_URL,
        operatingSystem: 'WordPress',
        applicationCategory: 'BusinessApplication',
        description,
        publisher: {
          '@type': 'Organization',
          name: 'Pagup'
        }
      },
      breadcrumb
    ])
  }

  if (kind === 'contact' || kind === 'ContactPage') {
    return JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: title,
        url,
        description
      },
      breadcrumb
    ])
  }

  if (kind === 'about' || kind === 'AboutPage') {
    return JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: title,
        url,
        description
      },
      breadcrumb
    ])
  }

  if (kind === 'video' || kind === 'VideoObject') {
    return JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Better Robots.txt demo',
        embedUrl: 'https://player.vimeo.com/video/1169756981',
        thumbnailUrl: `${SITE_URL}/og/demo.jpg`,
        description,
        publisher: {
          '@type': 'Organization',
          name: 'Pagup'
        }
      },
      breadcrumb
    ])
  }

  if (kind === 'FAQPage') {
    const entities = faqEntitiesFor(path).map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))

    return JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        name: title,
        url,
        description,
        mainEntity: entities
      },
      breadcrumb
    ])
  }

  if (kind === 'TechArticle' || kind === 'docs') {
    return JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: title,
        url,
        description,
        author: {
          '@type': 'Organization',
          name: 'Pagup'
        }
      },
      breadcrumb
    ])
  }

  if (kind === 'CollectionPage' || kind === 'WebPage') {
    return JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': kind === 'CollectionPage' ? 'CollectionPage' : 'WebPage',
        name: title,
        url,
        description
      },
      breadcrumb
    ])
  }

  return JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      url,
      description
    },
    breadcrumb
  ])
}

const enNav = [
  { text: 'Home', link: '/' },
  { text: 'Features', link: '/features' },
  { text: 'Presets', link: '/presets' },
  { text: 'Examples', link: '/robots-txt-examples' },
  { text: 'Pricing', link: '/pricing' },
  { text: 'Download', link: '/download' },
  { text: 'Governance', link: '/governance/' },
  { text: 'Contact', link: '/contact' }
]

const frNav = [
  { text: 'Accueil', link: '/fr/' },
  { text: 'Fonctionnalités', link: '/fr/features' },
  { text: 'Presets', link: '/fr/presets' },
  { text: 'Exemples', link: '/fr/robots-txt-examples' },
  { text: 'Tarifs', link: '/fr/pricing' },
  { text: 'Télécharger', link: '/fr/download' },
  { text: 'Gouvernance', link: '/fr/governance/' },
  { text: 'Contact', link: '/fr/contact' }
]

const enSidebar = [
  {
    text: 'Product',
    items: [
      { text: 'About', link: '/about' },
      { text: 'Features', link: '/features' },
      { text: 'Presets', link: '/presets' },
      { text: 'Robots.txt Examples', link: '/robots-txt-examples' },
      { text: 'Pricing', link: '/pricing' },
      { text: 'Download', link: '/download' },
      { text: 'Demo', link: '/demo' },
      { text: 'Use Cases', link: '/use-cases' }
    ]
  },
  {
    text: 'Get started',
    items: [
      { text: 'Installation', link: '/installation' },
      { text: 'Quick Start', link: '/quick-start' },
      { text: 'Basic Configuration', link: '/basic-configuration' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Contact', link: '/contact' }
    ]
  },
  {
    text: 'Wizard & settings',
    items: [
      { text: 'Wizard Overview', link: '/wizard/' },
      { text: 'Settings Overview', link: '/settings' },
      { text: 'Mode Selection', link: '/settings/mode-selection' },
      { text: 'Search Engine Visibility', link: '/settings/search-visibility' },
      { text: 'AI & LLM Governance', link: '/settings/ai-governance' },
      { text: 'SEO Tool Protection', link: '/settings/seo-protection' },
      { text: 'Bad Bots Protection', link: '/settings/bot-protection' },
      { text: 'Archive & Wayback Control', link: '/settings/archive-control' },
      { text: 'Global Settings', link: '/settings/sitemaps' },
      { text: 'Spam, Feeds & Crawl Traps', link: '/settings/spam-protection' },
      { text: 'E-commerce Optimization', link: '/settings/ecommerce-optimization' },
      { text: 'Resources & Assets', link: '/settings/resources-assets' },
      { text: 'Social Media Crawlers', link: '/settings/social-media' },
      { text: 'Ads & Revenue', link: '/settings/ads-revenue' },
      { text: 'LLMS.txt File', link: '/settings/llms-txt' },
      { text: 'Advanced Settings', link: '/settings/advanced' },
      { text: 'Review & Save', link: '/settings/review-save' }
    ]
  },
  {
    text: 'Governance',
    items: [
      { text: 'Overview', link: '/governance/' },
      { text: 'AI Usage Policy', link: '/governance/ai-usage-policy' },
      { text: 'Machine-First', link: '/governance/machine-first' }
    ]
  },
  {
    text: 'Guides',
    items: [
      { text: 'Examples Hub', link: '/examples' },
      { text: 'Migration Guide', link: '/examples/migration' },
      { text: 'Best Practices', link: '/best-practices' },
      { text: 'Troubleshooting', link: '/troubleshooting' },
      { text: 'Changelog', link: '/changelog' }
    ]
  }
]

const frSidebar = [
  {
    text: 'Produit',
    items: [
      { text: 'À propos', link: '/fr/about' },
      { text: 'Fonctionnalités', link: '/fr/features' },
      { text: 'Presets', link: '/fr/presets' },
      { text: 'Exemples de robots.txt', link: '/fr/robots-txt-examples' },
      { text: 'Tarifs', link: '/fr/pricing' },
      { text: 'Télécharger', link: '/fr/download' },
      { text: 'Démo', link: '/fr/demo' },
      { text: 'Cas d’usage', link: '/fr/use-cases' }
    ]
  },
  {
    text: 'Prise en main',
    items: [
      { text: 'Installation', link: '/fr/installation' },
      { text: 'Démarrage rapide', link: '/fr/quick-start' },
      { text: 'Configuration de base', link: '/fr/basic-configuration' },
      { text: 'FAQ', link: '/fr/faq' },
      { text: 'Contact', link: '/fr/contact' }
    ]
  },
  {
    text: 'Assistant et paramètres',
    items: [
      { text: 'Vue d’ensemble du wizard', link: '/fr/wizard/' },
      { text: 'Vue d’ensemble des paramètres', link: '/fr/settings' },
      { text: 'Sélection du mode', link: '/fr/settings/mode-selection' },
      { text: 'Visibilité des moteurs de recherche', link: '/fr/settings/search-visibility' },
      { text: 'Gouvernance IA & LLM', link: '/fr/settings/ai-governance' },
      { text: 'Protection contre les outils SEO', link: '/fr/settings/seo-protection' },
      { text: 'Protection contre les mauvais robots', link: '/fr/settings/bot-protection' },
      { text: 'Contrôle de l’archivage et de Wayback', link: '/fr/settings/archive-control' },
      { text: 'Paramètres globaux', link: '/fr/settings/sitemaps' },
      { text: 'Spam, flux et pièges d’exploration', link: '/fr/settings/spam-protection' },
      { text: 'Optimisation e-commerce', link: '/fr/settings/ecommerce-optimization' },
      { text: 'Ressources et fichiers', link: '/fr/settings/resources-assets' },
      { text: 'Robots des réseaux sociaux', link: '/fr/settings/social-media' },
      { text: 'Publicités et revenus', link: '/fr/settings/ads-revenue' },
      { text: 'Fichier LLMS.txt', link: '/fr/settings/llms-txt' },
      { text: 'Paramètres avancés', link: '/fr/settings/advanced' },
      { text: 'Vérification et enregistrement', link: '/fr/settings/review-save' }
    ]
  },
  {
    text: 'Gouvernance',
    items: [
      { text: 'Vue d’ensemble', link: '/fr/governance/' },
      { text: 'Politique d’usage IA', link: '/fr/governance/ai-usage-policy' },
      { text: 'Machine-first', link: '/fr/governance/machine-first' }
    ]
  },
  {
    text: 'Guides',
    items: [
      { text: 'Hub des exemples', link: '/fr/examples' },
      { text: 'Guide de migration', link: '/fr/examples/migration' },
      { text: 'Bonnes pratiques', link: '/fr/best-practices' },
      { text: 'Dépannage', link: '/fr/troubleshooting' },
      { text: 'Journal des modifications', link: '/fr/changelog' }
    ]
  }
]

export default defineConfig({
  lang: 'en',
  title: 'Better Robots.txt',
  description: 'AI-ready crawl control and bot governance for WordPress.',
  base: '/',
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#0b1220' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { property: 'og:site_name', content: 'Better Robots.txt' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['script', { type: 'application/ld+json' }, globalSchemas()]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Better Robots.txt',
      description: 'AI-ready crawl control and bot governance for WordPress.'
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      title: 'Better Robots.txt',
      description: 'Contrôle du crawl et gouvernance bot / IA pour WordPress.'
    }
  },

  transformHead({ pageData }) {
    const path = pageToPath(pageData.relativePath)
    const isFr = path === '/fr/' || path.startsWith('/fr/')
    const canonical = `${SITE_URL}${path}`
    const altEn = `${SITE_URL}${englishPath(path)}`
    const altFr = `${SITE_URL}${frenchPath(path)}`
    const locale = localeOf(path)
    const pageType = pageData.frontmatter?.pageType || pageData.frontmatter?.schemaType || 'docs'
    const title = titleTemplate((pageData.frontmatter?.title as string) || pageData.title || 'Better Robots.txt')
    const description =
      (pageData.frontmatter?.description as string) ||
      pageData.description ||
      (isFr
        ? 'Documentation officielle de Better Robots.txt pour WordPress.'
        : 'Official Better Robots.txt documentation for WordPress.')
    const ogImage = (pageData.frontmatter?.ogImage as string) || DEFAULT_OG

    return [
      ['link', { rel: 'canonical', href: canonical }],
      ['link', { rel: 'alternate', hreflang: 'en', href: altEn }],
      ['link', { rel: 'alternate', hreflang: 'fr', href: altFr }],
      ['link', { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/` }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:image', content: `${SITE_URL}${ogImage}` }],
      ['meta', { property: 'og:locale', content: locale }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: `${SITE_URL}${ogImage}` }],
      ['script', { type: 'application/ld+json' }, pageSchema(path, title, description, pageType)]
    ]
  },

  themeConfig: {
    logo: '/icon-128x128.png',
    nav: enNav,
    sidebar: enSidebar,
    socialLinks: [
      { icon: 'github', link: GITHUB_REPO },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm0-15a7 7 0 1 1 0 14a7 7 0 0 1 0-14z"/><path d="M5.5 10a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0zm4.5-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6z"/></svg>'
        },
        link: SITE_URL
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 15h-2v-2h2zm2.071-7.071l-.9.92A2.98 2.98 0 0 0 13 13h-2v-.5a4 4 0 0 1 1.172-2.828l1.24-1.26A1.5 1.5 0 1 0 10 7H8a3.5 3.5 0 1 1 7.071 2.929z"/></svg>'
        },
        link: `mailto:${SUPPORT_EMAIL}`
      }
    ],
    search: { provider: 'local' },
    footer: {
      message: 'Better Robots.txt — human-friendly, machine-first documentation for WordPress crawl governance.',
      copyright: '© 2026 Pagup'
    },
    outline: { level: [2, 3] }
  }
})
