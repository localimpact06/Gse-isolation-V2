import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ContentSection from '@/components/ContentSection'

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales de GSE Isolation.",
  alternates: { canonical: '/mentions-legales/' },
}

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <PageHero eyebrow="Informations légales" title="Mentions légales" />
      <ContentSection>
        <h2>Éditeur du site</h2>
        <p>
          G.S.E ISOLATION<br />
          Société par actions simplifiée unipersonnelle (SASU)<br />
          RCS : 952 175 495<br />
          15 rue des Bauques, 06570 Saint-Paul-de-Vence<br />
          Téléphone : 06 18 35 82 23<br />
          E-mail : sf.gse.ecologie@gmail.com
        </p>

        <h2>Directeur de publication</h2>
        <p>Stéphane LESUEUR.</p>

        <h2>Certifications</h2>
        <p>GSE Isolation intervient dans le cadre de travaux de rénovation énergétique et d’isolation. Les certifications, garanties et qualifications applicables sont précisées sur les devis et documents contractuels remis au client.</p>

        <h2>Hébergement</h2>
        <p>Ce site est hébergé sur la plateforme Vercel, opérée par Vercel Inc. Les informations techniques d’hébergement peuvent être complétées après validation du compte de production utilisé pour la mise en ligne.</p>

        <h2>Propriété intellectuelle</h2>
        <p>L’ensemble du contenu de ce site (textes, images, logo, structure et éléments graphiques) est protégé. Toute reproduction ou réutilisation sans autorisation préalable est interdite.</p>
      </ContentSection>
      <Footer />
    </>
  )
}
