import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import ContentSection from '@/components/ContentSection'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: "À Propos — GSE Isolation",
  description: "GSE Isolation, entreprise certifiée Qualibat RGE spécialisée en rénovation énergétique à Saint-Paul-de-Vence, Alpes-Maritimes.",
  alternates: { canonical: '/a-propos/' },
}

export default function AProposPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'À propos' }]} />
      <PageHero
        eyebrow="L'entreprise"
        title="L'exigence d'un artisan, la rigueur d'un ingénieur."
        subtitle="GSE Isolation accompagne les propriétaires des Alpes-Maritimes et du Var dans leurs projets de rénovation énergétique."
      />

      <ContentSection>
        <h2>Notre métier</h2>
        <p>
          GSE Isolation est une entreprise spécialisée dans les travaux d'isolation thermique et la réalisation d'audits énergétiques, basée à Saint-Paul-de-Vence dans les Alpes-Maritimes. Nous intervenons sur l'ensemble de la côte, de Nice à Fréjus, pour accompagner les propriétaires dans l'amélioration de la performance énergétique de leur habitat.
        </p>

        <h2>Nos certifications</h2>
        <p>
          Notre équipe est certifiée <strong>Qualibat RGE</strong> (Reconnu Garant de l'Environnement), une qualification indispensable pour que nos clients puissent bénéficier des aides de l'État. Nous sommes également couverts par une <strong>garantie décennale SMA BTP</strong> de 10 ans sur l'ensemble de nos chantiers.
        </p>

        <h2>Notre approche</h2>
        <p>
          Nous croyons qu'une rénovation énergétique réussie commence toujours par un diagnostic précis. C'est pourquoi chaque projet débute par une étude énergétique personnalisée, suivie d'une visite technique, avant toute proposition de devis. Cette rigueur nous permet de cibler les travaux les plus rentables pour chaque logement, plutôt que d'appliquer une solution standard.
        </p>

        <h2>Notre engagement</h2>
        <p>
          Au-delà des travaux eux-mêmes, GSE Isolation gère l'intégralité des démarches administratives liées aux aides de l'État (MaPrimeRénov', CEE, Éco-PTZ), afin que nos clients n'aient aucune formalité à gérer seuls. Notre équipe reste disponible 6 jours sur 7 pour répondre à toute question avant, pendant et après le chantier.
        </p>
      </ContentSection>

      <section className="bg-ink py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Reveal><div><div className="text-3xl font-extrabold text-white">100+</div><div className="text-white/40 text-xs uppercase tracking-wide mt-2">chantiers réalisés</div></div></Reveal>
          <Reveal delay={0.08}><div><div className="text-3xl font-extrabold text-white">Qualibat</div><div className="text-white/40 text-xs uppercase tracking-wide mt-2">certification RGE</div></div></Reveal>
          <Reveal delay={0.16}><div><div className="text-3xl font-extrabold text-white">10 ans</div><div className="text-white/40 text-xs uppercase tracking-wide mt-2">garantie décennale</div></div></Reveal>
          <Reveal delay={0.24}><div><div className="text-3xl font-extrabold text-white">20</div><div className="text-white/40 text-xs uppercase tracking-wide mt-2">villes desservies</div></div></Reveal>
        </div>
      </section>

      <section className="bg-green py-16 px-6 md:px-10 text-center">
        <h2 className="text-white text-2xl font-bold mb-6">Parlons de votre projet</h2>
        <a href="/contact/" className="bg-ink hover:bg-ink/85 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-block">
          Demander un devis gratuit
        </a>
      </section>
      <Footer />
    </>
  )
}
