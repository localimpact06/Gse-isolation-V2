import { absoluteUrl, company } from '@/lib/company'

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[]
type JsonObject = { [key: string]: JsonValue | undefined }

function compactObject<T extends JsonObject>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (entry === undefined || entry === null || entry === '') return false
      if (Array.isArray(entry) && entry.length === 0) return false
      return true
    })
  ) as T
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function buildPostalAddress() {
  return compactObject({
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    postalCode: company.address.postalCode,
    addressLocality: company.address.city,
    addressCountry: company.address.country,
  })
}

function buildOrganizationIdentifiers() {
  const identifiers: JsonObject[] = []

  if (company.siren) {
    identifiers.push({
      '@type': 'PropertyValue',
      propertyID: 'SIREN',
      value: company.siren,
    })
  }

  if (company.siret) {
    identifiers.push({
      '@type': 'PropertyValue',
      propertyID: 'SIRET',
      value: company.siret,
    })
  }

  if (company.rcsNumber && company.rcsCity) {
    identifiers.push({
      '@type': 'PropertyValue',
      propertyID: 'RCS',
      value: `${company.rcsNumber} R.C.S. ${company.rcsCity}`,
    })
  }

  return identifiers
}

export function buildOrganization() {
  return compactObject({
    '@type': ['Organization', 'LocalBusiness'],
    '@id': absoluteUrl('/#organization'),
    name: company.tradeName,
    legalName: company.legalName,
    url: absoluteUrl('/'),
    logo: {
      '@type': 'ImageObject',
      '@id': absoluteUrl('/#logo'),
      url: absoluteUrl('/logo.png'),
    },
    image: absoluteUrl('/logo.png'),
    telephone: company.phone,
    email: company.email,
    address: buildPostalAddress(),
    taxID: company.siren,
    vatID: company.vatNumber,
    identifier: buildOrganizationIdentifiers(),
    award: [...company.certifications],
    areaServed: [...company.serviceAreas],
    sameAs: [...company.socialLinks],
  })
}

export function buildWebsite() {
  return {
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    url: absoluteUrl('/'),
    name: company.tradeName,
    publisher: { '@id': absoluteUrl('/#organization') },
    inLanguage: 'fr-FR',
  }
}

export function buildGlobalJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [buildOrganization(), buildWebsite()],
  }
}

export function buildBreadcrumb(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  }
}

export function buildWebPageJsonLd({
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
  const page = compactObject({
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { '@id': absoluteUrl('/#website') },
    about: { '@id': absoluteUrl('/#organization') },
    publisher: { '@id': absoluteUrl('/#organization') },
    inLanguage: 'fr-FR',
  })

  return {
    '@context': 'https://schema.org',
    '@graph': breadcrumbs ? [page, buildBreadcrumb(breadcrumbs)] : [page],
  }
}

export function buildServiceJsonLd({
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
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    provider: { '@id': absoluteUrl('/#organization') },
    areaServed: areaServed || [...company.serviceAreas],
  }
}

export function buildArticleJsonLd({
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
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${absoluteUrl(path)}#article`,
    headline: title,
    datePublished,
    description,
    mainEntityOfPage: { '@id': `${absoluteUrl(path)}#webpage` },
    author: { '@id': absoluteUrl('/#organization') },
    publisher: { '@id': absoluteUrl('/#organization') },
    inLanguage: 'fr-FR',
  }
}
