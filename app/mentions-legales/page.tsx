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
        <p>GSE Isolation<br />15 Rue des Bauques, 06570 Saint-Paul-de-Vence<br />SIRET : 952 175 495<br />Téléphone : 04 22 13 86 11<br />E-mail : contact@gse-isolation.fr</p>

        <h2>Certifications</h2>
        <p>GSE Isolation est certifié Qualibat RGE (Reconnu Garant de l'Environnement) et bénéficie d'une garantie décennale SMA BTP de 10 ans sur l'ensemble de ses chantiers.</p>

        <h2>Hébergement</h2>
        <p>Ce site est hébergé par un prestataire d'hébergement web professionnel. Les informations d'hébergement détaillées sont disponibles sur demande.</p>

        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble du contenu de ce site (textes, images, logo) est la propriété de GSE Isolation, sauf mention contraire, et ne peut être reproduit sans autorisation préalable.</p>
      </ContentSection>
      <Footer />
    </>
  )
}
