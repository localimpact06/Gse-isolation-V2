import { MetadataRoute } from 'next'
import { villes } from '@/lib/villes'
import { articles } from '@/lib/articles'
import { servicesIso } from '@/lib/services-iso'
import { absoluteUrl } from '@/lib/company'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '', 'renovation-energetique', 'isolation-thermique', 'audit-energetique',
    'aides-renovation-energetique', 'villes', 'blog', 'contact', 'quiz',
    'mentions-legales', 'confidentialite', 'realisations', 'solutions', 'a-propos',
  ].map(p => ({ url: absoluteUrl(`/${p}${p ? '/' : ''}`), lastModified: new Date() }))

  const villePages = villes.map(v => ({
    url: absoluteUrl(`/renovation-energetique/${v.slug}/`),
    lastModified: new Date(),
  }))

  const articlePages = articles.map(a => ({
    url: absoluteUrl(`/blog/${a.slug}/`),
    lastModified: new Date(a.date),
  }))

  const isoPages = servicesIso.map(s => ({
    url: absoluteUrl(`/isolation-thermique/${s.slug}/`),
    lastModified: new Date(),
  }))

  return [...staticPages, ...villePages, ...articlePages, ...isoPages]
}
