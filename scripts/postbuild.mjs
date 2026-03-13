import { promises as fs } from 'node:fs'
import path from 'node:path'

const distDir = path.resolve('docs/.vitepress/dist')
const siteUrl = 'https://better-robots.com'

async function walk(dir) {
  const out = []
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...await walk(full))
    else out.push(full)
  }
  return out
}

function toUrl(file) {
  const rel = file.replace(distDir, '').replace(/\\/g, '/')
  if (rel === '/index.html') return `${siteUrl}/`
  if (rel.endsWith('/index.html')) return `${siteUrl}${rel.replace(/index\.html$/, '')}`
  if (rel.endsWith('.html')) return `${siteUrl}${rel.replace(/\.html$/, '')}`
  return null
}

function alternatesFor(url, allUrls) {
  const normalized = url.replace(siteUrl, '')
  const isFr = normalized === '/fr/' || normalized.startsWith('/fr/')
  const enPath = isFr ? normalized.replace(/^\/fr/, '') || '/' : normalized
  const frPath = isFr ? normalized : (normalized === '/' ? '/fr/' : `/fr${normalized}`)
  const out = []
  const enUrl = `${siteUrl}${enPath}`
  const frUrl = `${siteUrl}${frPath}`
  if (allUrls.has(enUrl)) out.push({ hreflang: 'en', href: enUrl })
  if (allUrls.has(frUrl)) out.push({ hreflang: 'fr', href: frUrl })
  return out
}

async function main() {
  await fs.mkdir(distDir, { recursive: true })
  await fs.writeFile(path.join(distDir, '.nojekyll'), '', 'utf8')

  const files = await walk(distDir)
  const pages = files
    .filter(file => file.endsWith('.html'))
    .filter(file => !file.endsWith('/404.html'))
    .filter(file => !file.includes('/public/'))
    .filter(file => !file.endsWith('/README.html'))
    .filter(file => !file.endsWith('/pro.html'))
    .map(toUrl)
    .filter(Boolean)
    .sort()

  const pageSet = new Set(pages)
  const lastmod = new Date().toISOString()
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
  ]

  for (const url of pages) {
    xml.push('  <url>')
    xml.push(`    <loc>${url}</loc>`)
    for (const alt of alternatesFor(url, pageSet)) {
      xml.push(`    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`)
    }
    xml.push(`    <lastmod>${lastmod}</lastmod>`)
    xml.push('    <changefreq>weekly</changefreq>')
    xml.push(`    <priority>${url === siteUrl + '/' ? '1.0' : '0.7'}</priority>`)
    xml.push('  </url>')
  }

  xml.push('</urlset>')
  await fs.writeFile(path.join(distDir, 'sitemap.xml'), xml.join('\n'), 'utf8')
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
