import type { Metadata } from 'next'
import './globals.css'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://gse-isolation.fr'),
  title: {
    default: "GSE Isolation — Rénovation énergétique en Alpes-Maritimes",
    template: "%s | GSE Isolation",
  },
  description: "GSE Isolation : rénovation énergétique complète (isolation, audit, rénovation globale). Aides jusqu'à 80 000€. +100 chantiers réalisés. Devis gratuit.",
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'GSE Isolation',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "GSE Isolation",
              "description": "Rénovation énergétique clé en main avec gestion complète des aides de l'État",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "15 Rue des Bauques",
                "addressLocality": "Saint-Paul-de-Vence",
                "postalCode": "06570",
                "addressCountry": "FR"
              },
              "telephone": "+33422138611",
              "url": "https://gse-isolation.fr",
              "priceRange": "€€",
              "areaServed": ["Nice","Cannes","Antibes","Grasse","Menton","Cagnes-sur-Mer","Fréjus","Saint-Raphaël"],
              "knowsAbout": ["Isolation thermique","Rénovation énergétique","Audit énergétique","Pompe à chaleur"]
            })
          }}
        />
        {/* Google Analytics 4 - chargé après consentement cookies */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent','default',{analytics_storage:'denied'});
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
