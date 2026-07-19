import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import ContentSection from '@/components/ContentSection'
import Reveal from '@/components/Reveal'
import RgeCertification from '@/components/trust/RgeCertification'
import { servicesIso } from '@/lib/services-iso'
import { WebPageJsonLd } from '@/components/seo/PageJsonLd'

const pageTitle = "Isolation Thermique — Murs, Combles, Planchers"
const pageDescription = "Isolation thermique des murs, combles et planchers bas. Devis personnalisé et aides étudiées selon votre situation."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/isolation-thermique/' },
}

export default function IsolationPage() {
  return (
    <>
      <Header />
      <WebPageJsonLd
        path="/isolation-thermique/"
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={[{ name: 'Accueil', url: '/' }, { name: 'Isolation thermique', url: '/isolation-thermique/' }]}
      />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Isolation thermique' }]} />
      <PageHero eyebrow="Nos solutions" title="Isolation thermique" subtitle="Murs, combles, planchers bas — aides étudiées selon votre projet" />

      <section className="bg-[#F7F7F5] px-6 py-10 md:px-10">
        <div className="mx-auto max-w-5xl">
          <RgeCertification compact />
        </div>
      </section>

      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-ink/60 max-w-2xl mb-12 text-[15px] leading-relaxed">
              GSE Isolation propose quatre solutions complémentaires pour traiter l'ensemble des déperditions thermiques de votre logement. Chaque service fait l'objet d'une page dédiée avec prix, technique et aides associées.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {servicesIso.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <a href={`/isolation-thermique/${s.slug}/`} className="group block border border-ink/10 hover:border-green rounded-2xl p-8 transition-colors">
                  <span className="text-green text-xs uppercase tracking-wide">{s.economie}</span>
                  <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-green transition-colors">{s.titre}</h3>
                  <p className="text-sm text-ink/50">à partir de <strong className="text-ink">{s.prix}</strong> — {s.prixNote}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContentSection>
        <h2>Quelles aides disponibles ?</h2>
        <p>MaPrimeRénov', CEE, TVA réduite à 5,5% et Éco-prêt à taux zéro peuvent être étudiés selon votre situation. GSE vous accompagne de la simulation au suivi du dossier.</p>
      </ContentSection>

      <section className="bg-green py-16 px-6 md:px-10 text-center">
        <h2 className="text-white text-2xl font-bold mb-6">Demandez votre devis gratuit</h2>
        <a href="/contact/" className="bg-ink hover:bg-ink/85 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-block">
          Devis gratuit
        </a>
      </section>
      <Footer />
    </>
  )
}
