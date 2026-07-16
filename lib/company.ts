export const company = {
  legalName: 'G.S.E ISOLATION',
  tradeName: 'GSE Isolation',
  legalForm: 'SASU',
  shareCapital: null,
  siren: '952 175 495',
  siret: null,
  rcsCity: null,
  rcsNumber: null,
  vatNumber: null,
  address: {
    street: '15 rue des Bauques',
    postalCode: '06570',
    city: 'Saint-Paul-de-Vence',
    country: 'FR',
  },
  phone: '+33422138611',
  phoneDisplay: '04 22 13 86 11',
  mobile: null,
  email: 'sf.gse.ecologie@gmail.com',
  website: 'https://gse-isolation.fr',
  openingHours: [],
  directorName: 'Stéphane LESUEUR',
  host: {
    name: 'Vercel Inc.',
    address: null,
    website: 'https://vercel.com',
  },
  certifications: [],
  insurance: {
    provider: null,
    policyNumber: null,
    coverageArea: null,
  },
  socialLinks: [],
  googleBusinessProfile: null,
  serviceAreas: ['Alpes-Maritimes', 'Var'],
} as const

export function absoluteUrl(path = '/') {
  const base = company.website.replace(/\/$/, '')
  if (!path || path === '/') return `${base}/`
  if (path.startsWith('http')) return path
  return `${base}/${path.replace(/^\/+/, '')}`
}

export function phoneHref(phone = company.phone) {
  return `tel:${phone.replace(/\s/g, '')}`
}

export function formatPhone() {
  return company.phoneDisplay
}

export function formatAddress() {
  const { street, postalCode, city } = company.address
  return `${street}, ${postalCode} ${city}`
}

export function formatLegalIdentity() {
  return [company.legalName, company.legalForm].filter(Boolean).join(' - ')
}
