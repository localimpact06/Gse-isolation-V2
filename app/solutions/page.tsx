import type { Metadata } from 'next'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'
import { servicesIso } from '@/lib/services-iso'
import { WebPageJsonLd } from '@/components/seo/PageJsonLd'

const pageTitle = "Nos Solutions — Rénovation Énergétique"
const pageDescription = "Isolation thermique, audit énergétique et rénovation globale. Découvrez toutes nos solutions de rénovation énergétique en Alpes-Maritimes."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/solutions/' },
}

const imageStyle = {
  objectFit: 'cover',
  objectPosition: 'center',
  display: 'block',
  width: '100%',
  height: '100%',
} as const

export default function SolutionsPage() {
  const isolationCards = servicesIso
    .map((service) => ({ service, visual: SOLUTION_VISUALS[service.slug] }))
    .filter(({ visual }) => Boolean(visual && hasPublicImage(visual.image)))
  const supportCards = SUPPORT_SOLUTIONS.filter((solution) => hasPublicImage(solution.image))

  return (
    <>
      <Header />
      <WebPageJsonLd
        path="/solutions/"
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={[{ name: 'Accueil', url: '/' }, { name: 'Solutions', url: '/solutions/' }]}
      />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Solutions' }]} />
      <PageHero
        eyebrow="Nos solutions"
        title="Une approche globale pour une performance durable."
        subtitle="Nous intervenons sur les postes clés de votre habitat avec une méthode lisible, locale et mesurable."
      />

      <section className="bg-[#F7F7F5] px-6 py-28 md:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="text-green text-[12px] font-bold uppercase tracking-[0.22em]">Isolation thermique</span>
            <h2 className="mb-12 mt-5 max-w-2xl text-4xl font-extrabold leading-[1.04] tracking-tightest text-[#1E1E1E] md:text-5xl">
              Des solutions adaptées à chaque maison.
            </h2>
          </Reveal>
          <div className="mb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {isolationCards.map(({ service, visual }, i) => (
              <Reveal key={service.slug} delay={i * 0.08}>
                <a
                  href={`/isolation-thermique/${service.slug}/`}
                  className="group block h-full overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-1.5 hover:border-green/25 hover:shadow-[0_30px_90px_rgba(30,30,30,0.11)]"
                >
                  <SolutionImage src={visual.image} alt={visual.alt} />
                  <div className="p-6">
                    <span className="mb-5 inline-flex rounded-full bg-green px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                      {service.prix}
                    </span>
                    <h3 className="text-[17px] font-extrabold leading-snug text-[#1E1E1E] transition-colors duration-300 group-hover:text-green">{service.titre}</h3>
                    <p className="mt-3 text-[13px] leading-6 text-[#6A6A6A]">{service.economie}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {supportCards.length > 0 ? (
            <>
              <Reveal>
                <span className="text-green text-[12px] font-bold uppercase tracking-[0.22em]">Accompagnement</span>
                <h2 className="mb-10 mt-5 max-w-xl text-4xl font-extrabold leading-[1.04] tracking-tightest text-[#1E1E1E] md:text-5xl">
                  Piloter le bon chantier, au bon moment.
                </h2>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2">
                {supportCards.map((solution, index) => (
                  <Reveal key={solution.title} delay={index * 0.08}>
                    <a href={solution.href} className="group block h-full overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-1.5 hover:border-green/25 hover:shadow-[0_30px_90px_rgba(30,30,30,0.11)]">
                      <SolutionImage src={solution.image} alt={solution.alt} />
                      <div className="p-8">
                        <span className="text-green text-xs font-bold uppercase tracking-[0.18em]">{solution.badge}</span>
                        <h3 className="mt-3 text-xl font-extrabold text-[#1E1E1E] transition-colors group-hover:text-green">{solution.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[#6A6A6A]">{solution.text}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>

      <section className="bg-green px-6 py-16 text-center md:px-10">
        <h2 className="mb-6 text-2xl font-bold text-white">Quelle solution pour votre logement ?</h2>
        <a href="/contact/" className="inline-block rounded-full bg-ink px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-ink/85">
          Demander un devis gratuit
        </a>
      </section>
      <Footer />
    </>
  )
}

const SOLUTION_VISUALS: Record<string, { image: string; alt: string }> = {
  'isolation-des-combles': {
    image: '/gse/combles-soufflage.jpg',
    alt: 'Soufflage d’isolant dans des combles par un technicien GSE',
  },
  'isolation-des-murs-par-linterieur': {
    image: '/gse/isolation-murs.jpg',
    alt: 'Pose de laine isolante sur une ossature de mur intérieur',
  },
  'isolation-des-planchers-bas': {
    image: '/gse/plancher-bas.jpg',
    alt: 'Technicien GSE posant une isolation en vide sanitaire',
  },
  'isolation-des-murs-par-lexterieur': {
    image: '/gse/chantier-ite.jpg',
    alt: 'Chantier d’isolation thermique extérieure sur maison',
  },
}

const SUPPORT_SOLUTIONS = [
  {
    href: '/audit-energetique/',
    title: 'Audit énergétique',
    badge: 'Première étape',
    text: 'Diagnostic complet de votre logement avec demande de devis.',
    image: '/gse/camera-thermique.jpg',
    alt: 'Caméra thermique mesurant les déperditions dans une pièce',
  },
  {
    href: '/renovation-energetique/',
    title: 'Rénovation globale',
    badge: 'Projet complet',
    text: 'Isolation, priorisation technique et accompagnement de A à Z.',
    image: '/gse/tablette-dpe.jpg',
    alt: 'Technicien GSE consultant un diagnostic de performance énergétique sur tablette',
  },
]

function SolutionImage({ src, alt }: { src: string; alt: string }) {
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
