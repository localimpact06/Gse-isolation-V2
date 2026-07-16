import type { Metadata } from 'next'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'
import { WebPageJsonLd } from '@/components/seo/PageJsonLd'

const pageTitle = "Nos Réalisations — Rénovation Énergétique"
const pageDescription = "Découvrez les chantiers de rénovation énergétique GSE Isolation en Alpes-Maritimes : isolation, accompagnement et performance."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/realisations/' },
}

const imageStyle = {
  objectFit: 'cover',
  objectPosition: 'center',
  display: 'block',
  width: '100%',
  height: '100%',
} as const

export default function RealisationsPage() {
  const projects = PROJECTS.filter((project) => hasPublicImage(project.image))

  return (
    <>
      <Header />
      <WebPageJsonLd
        path="/realisations/"
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={[{ name: 'Accueil', url: '/' }, { name: 'Réalisations', url: '/realisations/' }]}
      />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Réalisations' }]} />
      <PageHero
        eyebrow="Nos réalisations"
        title="Des chantiers suivis avec méthode."
        subtitle="Un aperçu régulier de nos interventions en isolation, diagnostic et rénovation énergétique."
      />

      {projects.length > 0 ? (
        <section className="bg-[#F7F7F5] px-6 py-28 md:px-10 lg:py-40">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-16 max-w-3xl">
                <span className="text-green text-[12px] font-bold uppercase tracking-[0.22em]">Preuves terrain</span>
                <h2 className="mt-5 text-4xl font-extrabold leading-[1.04] tracking-tightest text-[#1E1E1E] md:text-5xl">
                  Des images propres, des cartes alignées, aucun rendu bricolé.
                </h2>
                <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#6A6A6A]">
                  Chaque réalisation présentée garde le même ratio, la même hauteur et le même langage visuel pour préserver une impression premium.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.05}>
                  <article className="group h-full overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-1.5 hover:border-green/25 hover:shadow-[0_30px_90px_rgba(30,30,30,0.11)]">
                    <ProjectImage src={project.image} alt={project.alt} />
                    <div className="p-6">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-green">{project.type}</span>
                      <h3 className="mt-3 text-xl font-extrabold tracking-tight text-[#1E1E1E]">{project.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#6A6A6A]">{project.text}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.stats.map((stat) => (
                          <span key={stat} className="rounded-full border border-[#E8E8E3] bg-[#FAFAF8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1E1E1E]/70">
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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

const PROJECTS = [
  {
    type: 'ITE',
    title: 'Isolation extérieure en cours',
    text: 'Pose structurée avec échafaudage, façade préparée et chantier suivi.',
    image: '/gse/chantier-ite.jpg',
    alt: 'Chantier d’isolation thermique extérieure sur maison',
    stats: ['Façade', 'ITE', 'Suivi'],
  },
  {
    type: 'Résultat',
    title: 'Maison rénovée',
    text: 'Façade homogène, lignes sobres et résultat final valorisant.',
    image: '/gse/maison-renovee.jpg',
    alt: 'Maison rénovée après intervention GSE Isolation',
    stats: ['Après', 'Façade', 'Confort'],
  },
  {
    type: 'Audit',
    title: 'Contrôle thermique',
    text: 'Lecture des déperditions avant de prioriser les travaux.',
    image: '/gse/camera-thermique.jpg',
    alt: 'Caméra thermique mesurant les déperditions dans une pièce',
    stats: ['Mesure', 'Diagnostic', 'Priorités'],
  },
  {
    type: 'Murs',
    title: 'Isolation intérieure',
    text: 'Pose de laine isolante avec attention portée au geste et à la finition.',
    image: '/gse/isolation-murs.jpg',
    alt: 'Pose de laine isolante sur une ossature de mur intérieur',
    stats: ['Parois', 'Pose', 'Finitions'],
  },
  {
    type: 'Camion',
    title: 'Préparation chantier',
    text: 'Matériel rangé, équipe identifiable et intervention organisée.',
    image: '/gse/hero-camion.jpg',
    alt: 'Technicien GSE préparant son matériel dans le camion',
    stats: ['Logistique', 'Équipe', 'Terrain'],
  },
  {
    type: 'Planchers',
    title: 'Vide sanitaire isolé',
    text: 'Pose par sous-face pour réduire les sols froids et les pertes basses.',
    image: '/gse/plancher-bas.jpg',
    alt: 'Technicien GSE posant une isolation en vide sanitaire',
    stats: ['Sous-face', 'Confort', 'Méthode'],
  },
  {
    type: 'Aides',
    title: 'Budget cadré',
    text: 'MaPrimeRénov’, CEE et TVA réduite étudiés avant engagement.',
    image: '/gse/aides-financieres.jpg',
    alt: 'Documents MaPrimeRénov, CEE et TVA réduite sur un bureau GSE',
    stats: ['Aides', 'Budget', 'Dossier'],
  },
  {
    type: 'Diagnostic',
    title: 'Audit en logement occupé',
    text: 'Contrôle thermique dans un intérieur existant pour objectiver les pertes.',
    image: '/gse/audit-salon.jpg',
    alt: 'Technicien GSE réalisant un contrôle thermique intérieur',
    stats: ['Thermique', 'Salon', 'Lecture'],
  },
  {
    type: 'Visite',
    title: 'Conseil sur site',
    text: 'Échange avec le client, explications et cadrage du projet.',
    image: '/gse/visite-client.jpg',
    alt: 'Technicien GSE présentant un dossier à un client devant une maison',
    stats: ['Conseil', 'Devis', 'Suivi'],
  },
]

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const image = getPublicImage(src)

  if (!image) {
    return null
  }

  return (
    <div className="relative aspect-[3/4] overflow-hidden bg-[#F7F7F5]">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]"
        style={imageStyle}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.02)_0%,rgba(30,30,30,0.18)_100%)]" />
    </div>
  )
}

function getPublicImage(src: string) {
  const filePath = join(process.cwd(), 'public', src.replace(/^\//, ''))
  return existsSync(filePath) ? src : null
}

function hasPublicImage(src: string) {
  return Boolean(getPublicImage(src))
}
