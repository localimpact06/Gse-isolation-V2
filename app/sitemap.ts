import { MetadataRoute } from 'next'
import { villes } from '@/lib/villes'
import { articles } from '@/lib/articles'
import { servicesIso } from '@/lib/services-iso'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gse-isolation.fr'
  const staticPages = [
    '', 'renovation-energetique', 'isolation-thermique', 'audit-energetique',
    'aides-renovation-energetique', 'villes', 'blog', 'contact', 'quiz',
    'mentions-legales', 'confidentialite', 'realisations', 'solutions', 'a-propos',
  ].map(p => ({ url: `${base}/${p}${p ? '/' : ''}`, lastModified: new Date() }))

  const villePages = villes.map(v => ({
    url: `${base}/renovation-energetique/${v.slug}/`,
    lastModified: new Date(),
  }))

  const articlePages = articles.map(a => ({
    url: `${base}/blog/${a.slug}/`,
    lastModified: new Date(a.date),
  }))

  const isoPages = servicesIso.map(s => ({
    url: `${base}/isolation-thermique/${s.slug}/`,
    lastModified: new Date(),
  }))

  return [...staticPages, ...villePages, ...articlePages, ...isoPages]
}
