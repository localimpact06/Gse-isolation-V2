import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const sourceDirs = ['app', 'components', 'lib']
const imagePattern = /(?:src|image|backgroundImage)\s*[:=]\s*(?:\{)?[`'"]([^`'"]+\.(?:png|jpe?g|webp|svg|ico))(?:[`'"])/g
const cssUrlPattern = /url\((['"]?)(\/[^)'"]+\.(?:png|jpe?g|webp|svg|ico))\1\)/g
const missing = []

function walk(dir) {
  const absolute = join(root, dir)
  for (const entry of readdirSync(absolute)) {
    const file = join(absolute, entry)
    const stat = statSync(file)
    if (stat.isDirectory()) {
      walk(file.replace(`${root}/`, ''))
      continue
    }
    if (!/\.(tsx?|css)$/.test(file)) continue
    inspect(file)
  }
}

function inspect(file) {
  const source = readFileSync(file, 'utf8')
  for (const match of source.matchAll(imagePattern)) checkRef(match[1], file)
  for (const match of source.matchAll(cssUrlPattern)) checkRef(match[2], file)
}

function checkRef(ref, file) {
  if (!ref.startsWith('/')) return
  const clean = ref.split('?')[0]
  const target = join(root, 'public', decodeURIComponent(clean))
  if (!existsSync(target)) missing.push(`${file.replace(`${root}/`, '')}: ${clean}`)
}

for (const dir of sourceDirs) {
  if (existsSync(join(root, dir))) walk(dir)
}

if (missing.length > 0) {
  console.error('Images introuvables:')
  for (const item of missing) console.error(`- ${item}`)
  process.exit(1)
}

console.log('Images OK')
