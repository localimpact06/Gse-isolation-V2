import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: "Nos Réalisations — Rénovation Énergétique",
  description: "Découvrez les chantiers de rénovation énergétique GSE Isolation en Alpes-Maritimes : isolation, accompagnement et performance.",
  alternates: { canonical: '/realisations/' },
}

const projects = [
  {
    type: 'Isolation extérieure / ITE',
    title: 'Façade isolée sur maison individuelle',
    text: "Pose d'une isolation thermique par l'extérieur pour améliorer l'enveloppe du logement et réduire les ponts thermiques.",
    image: '/solutions/isolation-exterieure-card.jpg',
    position: '42% 50%',
    stats: ['ITE', '06 / 83', 'RGE'],
  },
  {
    type: 'Isolation intérieure',
    title: 'Traitement thermique des murs',
    text: "Travaux d'isolation intérieure avec matériaux performants, adaptés aux contraintes du bâti existant.",
    image: '/solutions/isolation-murs-card.jpg',
    position: '42% 50%',
    stats: ['Confort', 'Déperditions', 'Sur devis'],
  },
  {
    type: 'Rénovation énergétique',
    title: 'Projet global avec accompagnement',
    text: 'Coordination des postes de travaux, priorisation technique et accompagnement sur les dispositifs financiers.',
    image: '/hero-chantier.webp',
    position: '58% 50%',
    stats: ['Audit', 'Aides', 'Suivi'],
  },
]

export default function RealisationsPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Réalisations' }]} />
      <PageHero
        eyebrow="Nos réalisations"
        title="Des chantiers suivis avec méthode."
        subtitle="Un aperçu de nos interventions en isolation et rénovation énergétique, avec une approche claire et mesurable."
      />

      <section className="bg-[#F7F7F5] px-6 py-28 md:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 max-w-3xl">
              <span className="text-green text-[12px] font-bold uppercase tracking-[0.22em]">Preuves terrain</span>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.04] tracking-tightest text-[#1E1E1E] md:text-5xl">
                Des réalisations sobres, propres et lisibles.
              </h2>
              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#6A6A6A]">
                Nous préférons montrer des visuels exploitables et cohérents plutôt que d’afficher des images approximatives. Chaque projet présenté suit la même logique : diagnostic, faisabilité, devis, travaux.
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <article className="grid overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_22px_80px_rgba(30,30,30,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_100px_rgba(30,30,30,0.1)] lg:grid-cols-[1.08fr_0.92fr]">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <ProjectImage image={project.image} position={project.position} label={project.type} />
                  </div>
                  <div className={`flex flex-col justify-center p-7 md:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="text-green text-[12px] font-bold uppercase tracking-[0.2em]">{project.type}</span>
                    <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#1E1E1E] md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-[15px] leading-8 text-[#6A6A6A]">
                      {project.text}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.stats.map((stat) => (
                        <span key={stat} className="rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#1E1E1E]/70">
                          {stat}
                        </span>
                      ))}
                    </div>
                    <a href="/contact/" className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#1E1E1E] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_50px_rgba(30,30,30,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green">
                      Un projet similaire ? <span>→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF8] px-6 py-24 text-center md:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-[#1E1E1E] md:text-5xl">
            Votre projet de rénovation commence par un échange clair.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-8 text-[#6A6A6A]">
            GSE Isolation vous aide à comprendre les travaux prioritaires, les aides possibles et le budget réel.
          </p>
          <a href="/contact/" className="mt-9 inline-flex items-center gap-3 rounded-full bg-green px-7 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_55px_rgba(63,166,107,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-dark">
            Demander un devis <span>→</span>
          </a>
        </Reveal>
      </section>
      <Footer />
    </>
  )
}

function ProjectImage({ image, position, label }: { image: string; position: string; label: string }) {
  return (
    <div className="group relative min-h-[360px] overflow-hidden bg-[#1E1E1E] lg:min-h-[520px]">
      <div
        className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${image}')`, backgroundPosition: position }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.08)_0%,rgba(30,30,30,0.18)_42%,rgba(30,30,30,0.64)_100%)]" />
      <span className="absolute bottom-6 left-6 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1E1E1E] backdrop-blur-md">
        {label}
      </span>
    </div>
  )
}
