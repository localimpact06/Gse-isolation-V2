import JsonLd from '@/components/seo/JsonLd'
import { buildArticleJsonLd, buildServiceJsonLd, buildWebPageJsonLd } from '@/lib/seo/jsonld'

export function WebPageJsonLd({
  path,
  title,
  description,
  breadcrumbs,
}: {
  path: string
  title: string
  description: string
  breadcrumbs?: { name: string; url: string }[]
}) {
  return <JsonLd data={buildWebPageJsonLd({ path, title, description, breadcrumbs })} />
}

export function ServiceJsonLd({
  path,
  name,
  description,
  serviceType,
  areaServed,
}: {
  path: string
  name: string
  description: string
  serviceType: string
  areaServed?: string | string[]
}) {
  return <JsonLd data={buildServiceJsonLd({ path, name, description, serviceType, areaServed })} />
}

export function ArticleJsonLd({
  path,
  title,
  datePublished,
  description,
}: {
  path: string
  title: string
  datePublished: string
  description: string
}) {
  return <JsonLd data={buildArticleJsonLd({ path, title, datePublished, description })} />
}
