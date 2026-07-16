import type { Metadata, Viewport } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'
import JsonLd from '@/components/seo/JsonLd'
import { absoluteUrl, company } from '@/lib/company'
import { buildGlobalJsonLd } from '@/lib/seo/jsonld'

const gaId = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: `${company.tradeName} — Rénovation énergétique en Alpes-Maritimes`,
    template: "%s | GSE Isolation",
  },
  description: `${company.tradeName} : rénovation énergétique complète en Alpes-Maritimes et Var. Isolation, audit, rénovation globale, aides étudiées et devis gratuit.`,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: company.tradeName,
    images: [{ url: absoluteUrl('/logo.png'), width: 138, height: 63, alt: company.tradeName }],
  },
  twitter: {
    card: 'summary',
    images: [absoluteUrl('/logo.png')],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <JsonLd data={buildGlobalJsonLd()} />
        {children}
        <CookieBanner gaId={gaId} />
      </body>
    </html>
  )
}
