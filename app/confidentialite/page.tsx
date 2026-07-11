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
        <h2>Responsable du traitement</h2>
        <p>Le responsable du traitement est G.S.E ISOLATION, SASU immatriculée au RCS sous le numéro 952 175 495, située au 15 rue des Bauques, 06570 Saint-Paul-de-Vence.</p>

        <h2>Données collectées</h2>
        <p>À ce stade, le formulaire du site valide les champs côté navigateur mais n’est pas relié à un service d’envoi serveur. Les données saisies peuvent uniquement être transmises si vous utilisez le lien e-mail ou si vous contactez directement GSE Isolation.</p>

        <h2>Utilisation des données</h2>
        <p>Les informations transmises par e-mail ou téléphone sont utilisées exclusivement pour traiter votre demande, préparer un échange commercial et organiser un éventuel rendez-vous technique. Elles ne sont pas cédées à des tiers à des fins commerciales.</p>

        <h2 id="cookies">Cookies</h2>
        <p>Le site mémorise votre choix concernant le bandeau cookies dans votre navigateur. Aucun cookie publicitaire ni outil de mesure d’audience externe n’est chargé sans consentement.</p>

        <h2>Vos droits</h2>
        <p>Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’opposition et de suppression de vos données personnelles. Pour exercer ce droit, contactez-nous à sf.gse.ecologie@gmail.com.</p>

        <h2>Durée de conservation</h2>
        <p>Les données effectivement transmises à l’entreprise sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées ou supprimées conformément aux obligations légales applicables.</p>
      </ContentSection>
      <Footer />
    </>
  )
}
