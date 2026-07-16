import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import ContentSection from '@/components/ContentSection'
import { ServiceJsonLd, WebPageJsonLd } from '@/components/seo/PageJsonLd'

const pageTitle = "Audit Énergétique — Diagnostic de Projet"
const pageDescription = "Audit énergétique avec demande de devis. Diagnostic personnalisé de votre logement pour cadrer les travaux et les aides possibles."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/audit-energetique/' },
}

export default function AuditPage() {
  return (
    <>
      <Header />
      <WebPageJsonLd
        path="/audit-energetique/"
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={[{ name: 'Accueil', url: '/' }, { name: 'Audit énergétique', url: '/audit-energetique/' }]}
      />
      <ServiceJsonLd
        path="/audit-energetique/"
        name="Audit énergétique"
        description={pageDescription}
        serviceType="Audit énergétique"
      />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Audit énergétique' }]} />
      <PageHero eyebrow="Première étape" title="Audit énergétique" subtitle="Diagnostic complet de votre habitation avec demande de devis" />

      <ContentSection>
        <h2>L'étude énergétique, qu'est-ce que c'est ?</h2>
        <p>L'étude énergétique constitue la première étape essentielle de votre projet. Un spécialiste de l'énergie réalise une évaluation personnalisée et complète de votre résidence, de vos équipements et de vos habitudes de consommation d'énergie.</p>

        <h2>Pourquoi réaliser cet audit ?</h2>
        <p>Cette phase cruciale permet de vous proposer des solutions sur mesure correspondant à vos besoins. À l'issue de cette étude, vous recevez un diagnostic complet ainsi qu'un devis détaillé de votre projet, incluant les aides auxquelles vous êtes éligible.</p>

        <h2>Comment se déroule l'audit ?</h2>
        <p>L'étude peut commencer par un échange téléphonique ou en visioconférence, puis être complétée par une visite technique lorsque le projet le nécessite.</p>
      </ContentSection>

      <section className="bg-green py-16 px-6 md:px-10 text-center">
        <h2 className="text-white text-2xl font-bold mb-6">Demandez votre audit énergétique</h2>
        <a href="/contact/" className="bg-ink hover:bg-ink/85 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-block">
          Demander mon audit
        </a>
      </section>
      <Footer />
    </>
  )
}
