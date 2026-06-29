import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: "Nos Réalisations — Rénovation Énergétique",
  description: "Découvrez nos chantiers de rénovation énergétique en Alpes-Maritimes : isolation, économies réalisées, amélioration du DPE.",
  alternates: { canonical: '/realisations/' },
}

const projets = [
  { type: "Isolation par l'extérieur", desc: "Villa individuelle — façade complète", bg1: '#8a7a5a', bg2: '#e8e4da' },
  { type: "Isolation des combles", desc: "Maison de ville — combles perdus", bg1: '#3a3530', bg2: '#d8d4c8' },
  { type: "Rénovation globale", desc: "Maison ancienne — isolation et chauffage", bg1: '#5a5042', bg2: '#ece6d8' },
]

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Réalisations' }]} />
      <PageHero
        eyebrow="Nos réalisations"
        title="Des résultats qui parlent d'eux-mêmes."
        subtitle="Chaque projet est unique : voici le type de transformation que nous réalisons sur nos chantiers de rénovation énergétique."
      />

      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {projets.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-green text-[12px] uppercase tracking-[0.2em]">{p.type}</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tightest mt-3 mb-4">{p.desc}</h2>
                  <p className="text-ink/55 text-[15px] leading-relaxed mb-6 max-w-md">
                    Comme sur l'ensemble de nos chantiers, cette intervention a été précédée d'un audit énergétique
                    permettant d'identifier les postes de déperdition prioritaires, puis d'un devis détaillé intégrant
                    les aides de l'État disponibles pour le projet.
                  </p>
                  <a href="/contact/" className="bg-green hover:bg-green-dark transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-flex items-center gap-2">
                    Un projet similaire ? <span>→</span>
                  </a>
                </div>
                <div className={`rounded-2xl overflow-hidden border border-ink/10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-[4/5] flex items-end p-4" style={{ background: `linear-gradient(135deg, ${p.bg1}, ${p.bg1}cc)` }}>
                      <span className="bg-ink text-white text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-md">Avant</span>
                    </div>
                    <div className="relative aspect-[4/5] flex items-end justify-end p-4" style={{ background: `linear-gradient(135deg, ${p.bg2}, ${p.bg2}dd)` }}>
                      <span className="bg-green text-white text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-md">Après</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-16 px-6 md:px-10 text-center">
        <p className="text-sm text-ink/40 max-w-md mx-auto">
          Photos illustratives en attente des visuels définitifs de nos chantiers réels.
        </p>
      </section>

      <section className="bg-green py-16 px-6 md:px-10 text-center">
        <h2 className="text-white text-2xl font-bold mb-6">Votre projet de rénovation commence ici</h2>
        <a href="/contact/" className="bg-ink hover:bg-ink/85 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-block">
          Demander un devis gratuit
        </a>
      </section>
      <Footer />
    </>
  )
}
