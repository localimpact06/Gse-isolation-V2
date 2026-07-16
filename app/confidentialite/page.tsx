import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ContentSection from '@/components/ContentSection'
import { company, formatAddress } from '@/lib/company'
import { WebPageJsonLd } from '@/components/seo/PageJsonLd'

const pageTitle = "Politique de Confidentialité"
const pageDescription = "Politique de confidentialité et gestion des cookies de GSE Isolation."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/confidentialite/' },
}

export default function Confidentialite() {
  return (
    <>
      <Header />
      <WebPageJsonLd
        path="/confidentialite/"
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={[{ name: 'Accueil', url: '/' }, { name: 'Confidentialité', url: '/confidentialite/' }]}
      />
      <PageHero eyebrow="Informations légales" title="Politique de confidentialité" />
      <ContentSection>
        <h2>Responsable du traitement</h2>
        <p>Le responsable du traitement est {company.legalName}, {company.legalForm}, située {formatAddress()}. Contact : <a href={`mailto:${company.email}`}>{company.email}</a>.</p>

        <h2>Données collectées</h2>
        <p>Le site peut traiter les informations que vous choisissez de transmettre : nom, téléphone, e-mail, code postal, service souhaité et contenu de votre demande. Le quiz énergie ne stocke pas de données personnelles dans le navigateur.</p>

        <h2>Finalités et bases légales</h2>
        <p>Les données sont utilisées pour répondre à votre demande, préparer un échange commercial, organiser un rendez-vous technique et assurer le suivi précontractuel ou contractuel du projet. La base légale est l’exécution de mesures précontractuelles ou l’intérêt légitime de l’entreprise à répondre aux demandes reçues.</p>

        <h2>Durée de conservation</h2>
        <p>Les demandes de contact sont conservées pendant la durée nécessaire au traitement de l’échange commercial, puis archivées ou supprimées selon les obligations légales applicables. Les documents contractuels sont conservés pendant les durées légales de preuve et de comptabilité.</p>

        <h2>Destinataires</h2>
        <p>Les données sont destinées à {company.tradeName} et aux prestataires techniques strictement nécessaires au fonctionnement du site et de l’hébergement. Elles ne sont pas vendues à des tiers.</p>

        <h2>Sous-traitants techniques et transferts hors UE</h2>
        <p>Le site est hébergé par {company.host.name}. La typographie du site peut être chargée depuis Google Fonts. Si Google Analytics est activé par consentement, des données de mesure d’audience peuvent être traitées par Google selon ses propres conditions. Aucun outil de mesure d’audience n’est chargé avant consentement.</p>

        <h2 id="cookies">Cookies</h2>
        <p>Le site mémorise votre choix concernant les cookies dans votre navigateur. Les cookies nécessaires servent à conserver ce choix. Les cookies de mesure d’audience Google Analytics ne sont utilisés que si vous les acceptez. Vous pouvez modifier votre choix à tout moment depuis le lien « Gérer mes cookies » dans le footer.</p>

        <h2>Vos droits</h2>
        <p>Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition, de limitation et de portabilité lorsque ces droits sont applicables. Pour exercer vos droits, contactez <a href={`mailto:${company.email}`}>{company.email}</a>.</p>

        <h2>Réclamation</h2>
        <p>Vous pouvez introduire une réclamation auprès de la CNIL si vous estimez que vos droits ne sont pas respectés : <a href="https://www.cnil.fr">www.cnil.fr</a>.</p>

        <h2>Date de dernière mise à jour</h2>
        <p>16 juillet 2026.</p>
      </ContentSection>
      <Footer />
    </>
  )
}
