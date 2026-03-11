import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'

const required = [
  'docs/index.md',
  'docs/fr/index.md',
  'docs/pricing.md',
  'docs/fr/pricing.md',
  'docs/contact.md',
  'docs/fr/contact.md',
  'docs/presets.md',
  'docs/fr/presets.md',
  'docs/robots-txt-examples.md',
  'docs/fr/robots-txt-examples.md',
  'docs/public/robots.txt',
  'docs/public/.well-known/ai-governance.json',
  'docs/public/llms.txt',
  'docs/public/humans.txt',
  'docs/public/product.jsonld',
  'docs/public/organization.jsonld'
]

let failed = false
for (const file of required) {
  if (!existsSync(file)) {
    console.error(`Missing required file: ${file}`)
    failed = true
  }
}

const config = 'docs/.vitepress/config.mts'
if (existsSync(config)) {
  const text = readFileSync(config, 'utf8')
  for (const snippet of ['support@better-robots.com', 'better-robots.com', 'robots-txt-examples', 'presets']) {
    if (!text.includes(snippet)) {
      console.error(`Config is missing expected snippet: ${snippet}`)
      failed = true
    }
  }
}

if (failed) process.exit(1)
console.log('Content validation passed.')
