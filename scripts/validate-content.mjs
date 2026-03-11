import fs from 'node:fs'
import path from 'node:path'

const required = [
  'docs/index.md',
  'docs/fr/index.md',
  'docs/pricing.md',
  'docs/fr/pricing.md',
  'docs/download.md',
  'docs/fr/download.md',
  'docs/contact.md',
  'docs/fr/contact.md',
  'docs/governance/index.md',
  'docs/fr/governance/index.md',
  'docs/public/robots.txt',
  'docs/public/llms.txt',
  'docs/public/.well-known/ai-governance.json',
  'docs/public/product.jsonld'
]

let failed = false
for (const file of required) {
  if (!fs.existsSync(path.resolve(file))) {
    console.error(`Missing required file: ${file}`)
    failed = true
  }
}

if (failed) process.exit(1)
console.log('Content validation passed')
