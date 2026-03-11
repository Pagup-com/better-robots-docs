import fs from 'node:fs'
import path from 'node:path'

const siteUrl = 'https://better-robots.com'
const docsDir = path.resolve('docs')
const distDir = path.join(docsDir, '.vitepress', 'dist')

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const abs = path.join(dir, entry.name)
    const rel = path.relative(docsDir, abs).replace(/\\/g, '/')
    if (entry.isDirectory()) {
      if (rel === '.vitepress' || rel === 'public') continue
      files.push(...walk(abs))
      continue
    }
    if (!entry.name.endsWith('.md')) continue
    files.push(rel)
  }
  return files
}

function relToRoute(rel) {
  let clean = rel.replace(/\.md$/, '')
  if (clean === 'index') return '/'
  if (clean.endsWith('/index')) clean = clean.slice(0, -('/index'.length))
  return '/' + clean + '/'
}

const routes = walk(docsDir).map(relToRoute).sort((a, b) => a.localeCompare(b))
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes.map(route => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n') +
  `\n</urlset>\n`

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8')
fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf8')
console.log(`Generated sitemap.xml with ${routes.length} routes`)
