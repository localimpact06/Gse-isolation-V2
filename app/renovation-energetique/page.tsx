import type { Metadata } from 'next'
import { villes } from '@/lib/villes'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import ContentSection from '@/components/ContentSection'

export const metadata: Metadata = {
  title: "Rénovation Énergétique — Isolation, PAC, Audit",
  description: "Rénovation énergétique globale en Alpes-Maritimes et Var : isolation, audit et accompagnement aux aides selon votre éligibilité. Devis gratuit.",
  alternates: { canonical: '/renovation-energetique/' },
}

export default function RenovationHub() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Rénovation énergétique' }]} />
      <PageHero eyebrow="Rénovation globale" title="Rénovation énergétique globale" subtitle="Isolation et audit énergétique — un projet cadré avec étude des aides disponibles" />

      <ContentSection>
        <h2>Qu'est-ce qu'une rénovation énergétique globale ?</h2>
        <p>Une rénovation globale combine isolation des murs, combles et planchers, changement du système de chauffage et parfois installation de panneaux solaires, dans un projet cohérent et planifié par notre équipe. L'objectif : transformer durablement un logement énergivore en habitat performant.</p>

        <h2>Notre accompagnement de A à Z</h2>
        <p>GSE Isolation réalise l'audit énergétique préalable, propose un plan de travaux adapté à votre budget, gère l'ensemble des démarches d'aides (MaPrimeRénov', CEE, Éco-PTZ, TVA réduite) et coordonne le chantier jusqu'à sa réception.</p>

        <h2>Nos zones d'intervention</h2>
        <p>Nous intervenons dans toutes les Alpes-Maritimes et la zone Fréjus / Saint-Raphaël :</p>
        <div className="flex flex-wrap gap-3 not-prose mt-5">
          {villes.slice(0, 10).map(v => (
            <a key={v.slug} href={`/renovation-energetique/${v.slug}/`} className="text-sm border border-ink/15 hover:border-green hover:text-green transition-colors px-5 py-2.5 rounded-full">
              {v.nom}
            </a>
          ))}
        </div>
        <p className="mt-5"><a href="/villes/">Voir toutes nos villes →</a></p>
      </ContentSection>

      <section className="bg-green py-16 px-6 md:px-10 text-center">
        <h2 className="text-white text-2xl font-bold mb-6">Demandez votre audit énergétique gratuit</h2>
        <a href="/contact/" className="bg-ink hover:bg-ink/85 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-block">
          Devis gratuit
        </a>
      </section>
      <Footer />
    </>
  )
}
