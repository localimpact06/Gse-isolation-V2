import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'
import { servicesIso } from '@/lib/services-iso'

export const metadata: Metadata = {
  title: "Nos Solutions — Rénovation Énergétique",
  description: "Isolation thermique, audit énergétique et rénovation globale. Découvrez toutes nos solutions de rénovation énergétique en Alpes-Maritimes.",
  alternates: { canonical: '/solutions/' },
}

const SOLUTION_BG = ['#3a3530', '#8a8580', '#404a55', '#55514c']

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Solutions' }]} />
      <PageHero
        eyebrow="Nos solutions"
        title="Une approche globale pour une performance durable."
        subtitle="Nous intervenons sur tous les postes clés de votre habitat pour une efficacité maximale."
      />

      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tightest mb-8">Isolation thermique</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {servicesIso.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <a href={`/isolation-thermique/${s.slug}/`} className="group block">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4" style={{ background: SOLUTION_BG[i % SOLUTION_BG.length] }} />
                  <h3 className="font-bold text-[15px] mb-1 group-hover:text-green transition-colors">{s.titre}</h3>
                  <p className="text-[13px] text-ink/50">à partir de <strong className="text-ink">{s.prix}</strong></p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tightest mb-8">Autres solutions</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            <Reveal delay={0.05}>
              <a href="/audit-energetique/" className="group block border border-ink/10 hover:border-green rounded-2xl p-8 transition-colors h-full">
                <span className="text-green text-xs uppercase tracking-wide">Première étape</span>
                <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-green transition-colors">Audit énergétique</h3>
                <p className="text-sm text-ink/50">Diagnostic complet de votre logement, gratuit avec demande de devis.</p>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <a href="/renovation-energetique/" className="group block border border-ink/10 hover:border-green rounded-2xl p-8 transition-colors h-full">
                <span className="text-green text-xs uppercase tracking-wide">Projet complet</span>
                <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-green transition-colors">Rénovation globale</h3>
                <p className="text-sm text-ink/50">Isolation, chauffage et accompagnement de A à Z, aides jusqu'à 80 000€.</p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-green py-16 px-6 md:px-10 text-center">
        <h2 className="text-white text-2xl font-bold mb-6">Quelle solution pour votre logement ?</h2>
        <a href="/contact/" className="bg-ink hover:bg-ink/85 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-block">
          Demander un devis gratuit
        </a>
      </section>
      <Footer />
    </>
  )
}
