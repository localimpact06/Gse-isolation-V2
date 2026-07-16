import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import ContentSection from '@/components/ContentSection'
import { ServiceJsonLd, WebPageJsonLd } from '@/components/seo/PageJsonLd'

const pageTitle = "Aides rénovation énergétique 2026"
const pageDescription = "MaPrimeRénov', CEE, Éco-PTZ, TVA réduite : les aides 2026 à étudier selon votre projet de rénovation énergétique."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/aides-renovation-energetique/' },
}

export default function AidesPage() {
  return (
    <>
      <Header />
      <WebPageJsonLd
        path="/aides-renovation-energetique/"
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={[{ name: 'Accueil', url: '/' }, { name: 'Aides rénovation énergétique', url: '/aides-renovation-energetique/' }]}
      />
      <ServiceJsonLd
        path="/aides-renovation-energetique/"
        name="Accompagnement aux aides financières"
        description={pageDescription}
        serviceType="Accompagnement administratif rénovation énergétique"
      />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Aides & financement' }]} />
      <PageHero eyebrow="Financement" title="Aides rénovation énergétique 2026" subtitle="MaPrimeRénov’, CEE, TVA réduite et Éco-PTZ à étudier selon votre situation" />

      <ContentSection>
        <h2 id="maprimerenov">MaPrimeRénov'</h2>
        <p>Aide financière de l'État accessible selon la situation du foyer, le logement et la nature des travaux. Le montant exact doit être vérifié avant signature.</p>

        <h2>Les Certificats d'Économie d'Énergie (CEE)</h2>
        <p>Dispositif imposé aux fournisseurs d'énergie, qui financent une partie de vos travaux en échange d'économies d'énergie réalisées. Cumulable avec MaPrimeRénov'.</p>

        <h2>TVA réduite à 5,5%</h2>
        <p>Certains travaux de rénovation énergétique peuvent bénéficier d'une TVA à 5,5% sous réserve de respecter les conditions applicables.</p>

        <h2 id="eco-pret-taux-zero">L'Éco-prêt à taux zéro (Éco-PTZ)</h2>
        <p>Prêt sans intérêt pouvant atteindre 50 000€, remboursable sur 15 à 20 ans, pour financer le reste à charge de votre projet sans apport personnel.</p>

        <h2>Comment cumuler ces aides ?</h2>
        <p>GSE Isolation vous accompagne dans les démarches : simulation, constitution des dossiers et suivi administratif. Le montant final dépend toujours de l’éligibilité validée par les organismes concernés.</p>
      </ContentSection>

      <section className="bg-green py-16 px-6 md:px-10 text-center">
        <h2 className="text-white text-2xl font-bold mb-6">Estimez vos aides en 2 minutes</h2>
        <a href="/contact/" className="bg-ink hover:bg-ink/85 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-block">
          Simuler mes aides
        </a>
      </section>
      <Footer />
    </>
  )
}
