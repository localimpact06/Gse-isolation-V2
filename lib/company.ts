export const company = {
  legalName: 'G.S.E',
  tradeName: 'GSE Isolation',
  legalForm: 'SAS',
  shareCapital: '1 000,00 €',
  siren: '952 175 495',
  siret: '952 175 495 00029',
  rcsCity: 'Nice',
  rcsNumber: '952 175 495',
  vatNumber: 'FR75 952 175 495',
  address: {
    street: '8 place Detras',
    postalCode: '06320',
    city: 'La Turbie',
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
  certifications: [
    'RGE - Reconnu Garant de l’environnement',
    'QUALIBAT-RGE',
  ],
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
