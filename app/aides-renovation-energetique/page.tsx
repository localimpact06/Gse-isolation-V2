import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import ContentSection from '@/components/ContentSection'

export const metadata: Metadata = {
  title: "Aides Rénovation Énergétique 2026 — Jusqu'à 80 000€",
  description: "MaPrimeRénov', CEE, Éco-PTZ, TVA réduite : toutes les aides 2026 pour financer votre rénovation énergétique. GSE gère vos démarches.",
  alternates: { canonical: '/aides-renovation-energetique/' },
}

export default function AidesPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Aides & financement' }]} />
      <PageHero eyebrow="Financement" title="Aides rénovation énergétique 2026" subtitle="Jusqu'à 80 000€ d'aides cumulées pour financer votre projet" />

      <ContentSection>
        <h2 id="maprimerenov">MaPrimeRénov'</h2>
        <p>Aide financière de l'État accessible à tous les propriétaires, sans condition de ressources, avec un montant pouvant atteindre 90% du coût des travaux pour les ménages aux revenus modestes.</p>

        <h2>Les Certificats d'Économie d'Énergie (CEE)</h2>
        <p>Dispositif imposé aux fournisseurs d'énergie, qui financent une partie de vos travaux en échange d'économies d'énergie réalisées. Cumulable avec MaPrimeRénov'.</p>

        <h2>TVA réduite à 5,5%</h2>
        <p>Au lieu du taux normal de 20%, les travaux de rénovation énergétique bénéficient automatiquement d'une TVA à 5,5% lorsqu'ils sont réalisés par une entreprise certifiée RGE.</p>

        <h2 id="eco-pret-taux-zero">L'Éco-prêt à taux zéro (Éco-PTZ)</h2>
        <p>Prêt sans intérêt pouvant atteindre 50 000€, remboursable sur 15 à 20 ans, pour financer le reste à charge de votre projet sans apport personnel.</p>

        <h2>Comment cumuler ces aides ?</h2>
        <p>GSE Isolation s'occupe de l'ensemble des démarches : simulation, constitution des dossiers, suivi jusqu'au versement. Notre objectif est de maximiser le montant total des aides obtenues pour votre projet.</p>
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
