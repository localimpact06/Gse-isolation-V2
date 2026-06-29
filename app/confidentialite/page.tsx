import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ContentSection from '@/components/ContentSection'

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et gestion des cookies de GSE Isolation.",
  alternates: { canonical: '/confidentialite/' },
}

export default function Confidentialite() {
  return (
    <>
      <Header />
      <PageHero eyebrow="Informations légales" title="Politique de confidentialité" />
      <ContentSection>
        <h2>Données collectées</h2>
        <p>Lorsque vous remplissez notre formulaire de contact, nous collectons votre nom, votre numéro de téléphone, votre e-mail et votre code postal afin de vous recontacter pour votre demande de devis.</p>

        <h2>Utilisation des données</h2>
        <p>Ces informations sont utilisées exclusivement pour traiter votre demande de devis et ne sont jamais cédées à des tiers à des fins commerciales.</p>

        <h2>Cookies</h2>
        <p>Ce site utilise des cookies de mesure d'audience (Google Analytics) afin d'améliorer l'expérience utilisateur. Ces cookies ne sont déposés qu'après votre consentement explicite via le bandeau cookies affiché lors de votre première visite.</p>

        <h2>Vos droits</h2>
        <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, contactez-nous à contact@gse-isolation.fr.</p>

        <h2>Durée de conservation</h2>
        <p>Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées conformément aux obligations légales.</p>
      </ContentSection>
      <Footer />
    </>
  )
}
