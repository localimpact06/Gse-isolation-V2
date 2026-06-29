import type { Metadata } from 'next'
import { villes } from '@/lib/villes'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: "Nos Zones d'Intervention — 20 Villes",
  description: "GSE Isolation intervient dans 20 villes des Alpes-Maritimes et du Var pour vos travaux de rénovation énergétique.",
  alternates: { canonical: '/villes/' },
}

export default function VillesIndex() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Nos villes' }]} />
      <PageHero eyebrow="Zones d'intervention" title="Nos 20 villes" subtitle="Alpes-Maritimes et Var — équipe locale basée à Saint-Paul-de-Vence" />

      <section className="py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {villes.map(v => (
                <a key={v.slug} href={`/renovation-energetique/${v.slug}/`} className="text-sm border border-ink/15 hover:border-green hover:text-green transition-colors px-5 py-2.5 rounded-full">
                  {v.nom}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </>
  )
}
