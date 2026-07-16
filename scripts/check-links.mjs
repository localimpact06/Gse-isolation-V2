import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const sourceDirs = ['app', 'components', 'lib']
const routes = new Set(['/'])
const broken = []

function walkApp(dir = 'app') {
  const absolute = join(root, dir)
  for (const entry of readdirSync(absolute)) {
    const file = join(absolute, entry)
    const stat = statSync(file)
    if (stat.isDirectory()) {
      walkApp(file.replace(`${root}/`, ''))
      continue
    }
    if (!file.endsWith('/page.tsx')) continue
    const route = file
      .replace(join(root, 'app'), '')
      .replace('/page.tsx', '')
      .replace(/\/\[[^\]]+\]/g, '')
    if (!route.includes('[')) routes.add(`${route || '/'}`.replace(/\/?$/, '/'))
  }
}

function addSlugs(file, prefix) {
  const source = readFileSync(join(root, file), 'utf8')
  for (const match of source.matchAll(/slug:\s*["']([^"']+)["']/g)) {
    routes.add(`${prefix}/${match[1]}/`)
  }
}

function walkSources(dir) {
  const absolute = join(root, dir)
  for (const entry of readdirSync(absolute)) {
    const file = join(absolute, entry)
    const stat = statSync(file)
    if (stat.isDirectory()) {
      walkSources(file.replace(`${root}/`, ''))
      continue
    }
    if (!/\.(tsx?|ts)$/.test(file)) continue
    inspectLinks(file)
  }
}

function inspectLinks(file) {
  const source = readFileSync(file, 'utf8')
  for (const match of source.matchAll(/href=["'](\/[^"']*)["']/g)) {
    checkLink(match[1], file)
  }
}

function checkLink(link, file) {
  if (link.startsWith('/#')) return
  if (/\.(png|jpe?g|webp|svg|ico|xml|txt)$/i.test(link)) return
  const path = link.split('#')[0].split('?')[0].replace(/\/?$/, '/')
  if (!routes.has(path)) broken.push(`${file.replace(`${root}/`, '')}: ${link}`)
}

walkApp()
addSlugs('lib/villes.ts', '/renovation-energetique')
addSlugs('lib/articles.ts', '/blog')
addSlugs('lib/services-iso.ts', '/isolation-thermique')

for (const dir of sourceDirs) {
  if (existsSync(join(root, dir))) walkSources(dir)
}

if (broken.length > 0) {
  console.error('Liens internes introuvables:')
  for (const item of broken) console.error(`- ${item}`)
  process.exit(1)
}

console.log('Liens internes OK')
