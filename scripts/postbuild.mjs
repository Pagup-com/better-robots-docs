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
  if (rel.endsWith('.html')) return `${siteUrl}${rel.replace(/\.html$/, '/')}`
  return null
}

async function main() {
  await fs.mkdir(distDir, { recursive: true })
  await fs.writeFile(path.join(distDir, '.nojekyll'), '', 'utf8')

  const files = await walk(distDir)
  const pages = files
    .filter(file => file.endsWith('.html'))
    .filter(file => !file.endsWith('/404.html'))
    .map(toUrl)
    .filter(Boolean)
    .sort()

  const lastmod = new Date().toISOString()
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(url => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${url === siteUrl + '/' ? '1.0' : '0.7'}</priority>\n  </url>`).join('\n')}\n</urlset>\n`
  await fs.writeFile(path.join(distDir, 'sitemap.xml'), xml, 'utf8')
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
