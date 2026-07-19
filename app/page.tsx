import type { Metadata } from 'next'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomeHero from '@/components/HomeHero'
import Reveal from '@/components/Reveal'
import Testimonials from '@/components/Testimonials'
import RgeCertification, { RgeTrustStrip } from '@/components/trust/RgeCertification'
import { formatPhone, phoneHref } from '@/lib/company'
import { WebPageJsonLd } from '@/components/seo/PageJsonLd'

const pageTitle = "Rénovation énergétique à Nice"
const pageDescription = "GSE Isolation : rénovation énergétique premium à Nice et en Alpes-Maritimes. Isolation, audit, aides financières et devis gratuit."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/' },
}

const imageStyle = {
  objectFit: 'cover',
  objectPosition: 'center',
  display: 'block',
  width: '100%',
  height: '100%',
} as const

export default function Home() {
  const solutions = SOLUTION_CARDS.filter((solution) => hasPublicImage(solution.image))
  const beforeAfterReady = hasPublicImage(BEFORE_AFTER.before.image) && hasPublicImage(BEFORE_AFTER.after.image)
  const realisations = REALISATIONS.filter((project) => hasPublicImage(project.image))
  const ctaImage = getPublicImage(CTA_FINAL.image)

  return (
    <>
      <Header />
      <WebPageJsonLd
        path="/"
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={[{ name: 'Accueil', url: '/' }]}
      />
      <HomeHero />

      <main className="bg-[#F7F7F5] text-[#1E1E1E]">
        <RgeTrustStrip />

        <section className="px-6 pb-24 pt-8 md:px-10 lg:pb-32">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <RgeCertification />
            </Reveal>
          </div>
        </section>

        {solutions.length > 0 ? (
          <section id="solutions" className="bg-[#FAFAF8] px-6 py-28 md:px-10 lg:py-40">
            <div className="mx-auto max-w-7xl">
              <Reveal>
                <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
                  <div className="max-w-2xl">
                    <SectionEyebrow>Solutions</SectionEyebrow>
                    <h2 className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-tightest md:text-5xl lg:text-6xl">
                      Les bons travaux, dans le bon ordre.
                    </h2>
                  </div>
                  <p className="max-w-xl text-[15px] leading-8 text-[#6A6A6A] lg:justify-self-end">
                    GSE Isolation sélectionne les postes utiles selon votre logement, les pertes réelles et les aides disponibles.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                {solutions.map((solution, index) => (
                  <Reveal key={solution.title} delay={index * 0.05}>
                    <a
                      href={solution.href}
                      className="group block h-full overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-1.5 hover:border-green/25 hover:shadow-[0_30px_90px_rgba(30,30,30,0.11)]"
                      aria-label={`Découvrir ${solution.title}`}
                    >
                      <ImageFrame src={solution.image} alt={solution.alt} priority={index === 0} />
                      <div className="p-6">
                        <span className="mb-5 inline-flex rounded-full bg-green px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                          {solution.badge}
                        </span>
                        <h3 className="text-xl font-extrabold leading-tight tracking-tight transition-colors duration-300 group-hover:text-green">
                          {solution.title}
                        </h3>
                        <p className="mt-4 min-h-[72px] text-[13px] leading-6 text-[#6A6A6A]">
                          {solution.description}
                        </p>
                        <ul className="mt-6 space-y-3">
                          {solution.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3 text-[13px] font-semibold leading-5 text-[#1E1E1E]/75">
                              <span className="mt-0.5 text-green">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                        <span className="mt-7 inline-flex translate-y-0 items-center gap-3 rounded-full border border-[#E8E8E3] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] opacity-100 transition-all duration-300 group-hover:border-green group-hover:bg-green group-hover:text-white md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                          Découvrir <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {beforeAfterReady ? (
          <section className="px-6 py-28 md:px-10 lg:py-40">
            <div className="mx-auto max-w-7xl">
              <Reveal>
                <div className="mb-14 max-w-3xl">
                  <SectionEyebrow>Avant / après</SectionEyebrow>
                  <h2 className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-tightest md:text-5xl">
                    Une façade transformée sans perdre la sobriété du bâti.
                  </h2>
                  <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[#6A6A6A]">
                    Même maison, même lecture, même cadrage : l’objectif est de montrer le résultat avec sérieux, pas avec un effet catalogue.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_24px_90px_rgba(30,30,30,0.07)] md:grid-cols-2">
                  <BeforeAfterPanel {...BEFORE_AFTER.before} />
                  <BeforeAfterPanel {...BEFORE_AFTER.after} />
                </div>
              </Reveal>
            </div>
          </section>
        ) : null}

        <section className="bg-[#FAFAF8] px-6 py-28 md:px-10 lg:py-40">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal>
              <SectionEyebrow>Pourquoi choisir GSE Isolation ?</SectionEyebrow>
              <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.04] tracking-tightest md:text-5xl">
                Une entreprise locale, certifiée et organisée.
              </h2>
              <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#6A6A6A]">
                GSE Isolation cadre chaque projet avec une lecture technique, un accompagnement clair et des travaux suivis du premier échange à la réception.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {TRUST_ITEMS.map((item) => (
                  <TrustPoint key={item.title} {...item} />
                ))}
              </div>
            </Reveal>

            {hasPublicImage(WHY_GSE.image) ? (
              <Reveal delay={0.12}>
                <div className="overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white p-3 shadow-[0_24px_90px_rgba(30,30,30,0.075)]">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-[#F7F7F5]">
                    <img
                      src={WHY_GSE.image}
                      alt={WHY_GSE.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0"
                      style={imageStyle}
                    />
                  </div>
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>

        <section className="px-6 py-28 md:px-10 lg:py-40">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <SectionEyebrow>Notre méthode</SectionEyebrow>
                  <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.04] tracking-tightest md:text-5xl">
                    Comment se déroule un chantier GSE ?
                  </h2>
                </div>
                <div className="rounded-[24px] border border-[#E8E8E3] bg-white p-6 shadow-[0_18px_70px_rgba(30,30,30,0.05)] lg:justify-self-end">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#6A6A6A]">Appel non surtaxé</span>
                  <a href={phoneHref()} className="mt-2 block text-3xl font-extrabold tracking-tight text-[#1E1E1E] transition-colors hover:text-green">
                    {formatPhone()}
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {PROCESS_STEPS.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.06}>
                  <ProcessCard step={step} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {realisations.length > 0 ? (
          <section className="bg-[#FAFAF8] px-6 py-28 md:px-10 lg:py-40">
            <div className="mx-auto max-w-7xl">
              <Reveal>
                <div className="mb-14 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-2xl">
                    <SectionEyebrow>Réalisations</SectionEyebrow>
                    <h2 className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-tightest md:text-5xl">
                      Des interventions visibles, régulières, sans mise en scène inutile.
                    </h2>
                  </div>
                  <a href="/realisations/" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#1E1E1E] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_50px_rgba(30,30,30,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green">
                    Voir tous nos projets <span>→</span>
                  </a>
                </div>
              </Reveal>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {realisations.map((project, index) => (
                  <Reveal key={project.title} delay={index * 0.05}>
                    <a
                      href={project.href}
                      className="group block overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-1.5 hover:border-green/25 hover:shadow-[0_30px_90px_rgba(30,30,30,0.11)]"
                    >
                      <ImageFrame src={project.image} alt={project.alt} />
                      <div className="p-6">
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-green">{project.kicker}</span>
                        <h3 className="mt-3 text-xl font-extrabold tracking-tight">{project.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[#6A6A6A]">{project.text}</p>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <Testimonials />

        <section className="bg-[#FAFAF8] px-6 py-28 md:px-10 lg:py-40">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Reveal>
              <SectionEyebrow>Aides financières</SectionEyebrow>
              <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.04] tracking-tightest md:text-5xl">
                Des aides expliquées simplement, avant de signer.
              </h2>
              <p className="mt-7 max-w-lg text-[15px] leading-8 text-[#6A6A6A]">
                MaPrimeRénov’, CEE et TVA réduite sont étudiés en amont pour éviter les mauvaises surprises et cadrer le reste à charge.
              </p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {AID_ITEMS.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <AidCard {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-28 pt-4 md:px-10 lg:pb-40">
          <Reveal>
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[24px] border border-[#2F2F2F]/10 bg-[#1E1E1E] shadow-[0_34px_100px_rgba(30,30,30,0.18)]">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                <div className="px-7 py-10 md:px-10 lg:px-12 lg:py-14">
                  <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-green">Votre projet</span>
                  <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                    Un projet d’isolation mérite une réponse claire.
                  </h2>
                  <p className="mt-5 max-w-xl text-[15px] leading-8 text-white/58">
                    Audit, conseils, aides et devis : vous savez quoi faire, pourquoi le faire et dans quel ordre.
                  </p>
                  <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
                    <a href="/contact/" className="inline-flex w-fit items-center gap-3 rounded-full bg-green px-7 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_55px_rgba(63,166,107,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-dark">
                      Demander un devis <span>→</span>
                    </a>
                    <div className="text-sm font-semibold text-white/58">Audit · Conseils · Accompagnement</div>
                  </div>
                </div>
                {ctaImage ? (
                  <div className="relative min-h-[360px] overflow-hidden bg-[#111] lg:min-h-full">
                    <img
                      src={ctaImage}
                      alt={CTA_FINAL.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0"
                      style={imageStyle}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,30,30,0.16)_0%,rgba(30,30,30,0.02)_100%)]" />
                  </div>
                ) : null}
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  )
}

const SOLUTION_CARDS = [
  {
    title: 'Isolation des combles',
    description: 'Limiter les pertes par le haut et améliorer le confort été comme hiver.',
    href: '/isolation-thermique/isolation-des-combles/',
    badge: 'Éligible aux aides',
    image: '/gse/combles-soufflage.jpg',
    alt: 'Soufflage d’isolant dans des combles par un technicien GSE',
    benefits: ['Pertes de chaleur réduites', 'Isolation homogène', 'Confort mieux maîtrisé'],
  },
  {
    title: 'Isolation des murs',
    description: 'Traiter l’enveloppe du logement avec une pose propre et adaptée.',
    href: '/isolation-thermique/isolation-des-murs-par-linterieur/',
    badge: 'Sur devis',
    image: '/gse/isolation-murs.jpg',
    alt: 'Pose de laine isolante sur une ossature de mur intérieur',
    benefits: ['Parois moins froides', 'Pose maîtrisée', 'Finitions préparées'],
  },
  {
    title: 'Isolation planchers bas',
    description: 'Réduire les sols froids et les déperditions par sous-face.',
    href: '/isolation-thermique/isolation-des-planchers-bas/',
    badge: 'Intervention 06-83',
    image: '/gse/plancher-bas.jpg',
    alt: 'Technicien GSE posant une isolation en vide sanitaire',
    benefits: ['Sensation de froid réduite', 'Pose en vide sanitaire', 'Confort immédiat'],
  },
  {
    title: 'Audit énergétique',
    description: 'Identifier les pertes réelles avant d’engager le budget travaux.',
    href: '/audit-energetique/',
    badge: 'Diagnostic',
    image: '/gse/camera-thermique.jpg',
    alt: 'Caméra thermique mesurant les déperditions dans une pièce',
    benefits: ['Déperditions localisées', 'Priorités hiérarchisées', 'Décision plus sûre'],
  },
  {
    title: 'Aides financières',
    description: 'Cadrer les dispositifs mobilisables et simplifier les démarches.',
    href: '/aides-renovation-energetique/',
    badge: 'Budget cadré',
    image: '/gse/aides-financieres.jpg',
    alt: 'Documents MaPrimeRénov, CEE et TVA réduite sur un bureau GSE',
    benefits: ['MaPrimeRénov’ étudiée', 'CEE vérifiés', 'TVA réduite cadrée'],
  },
]

const BEFORE_AFTER = {
  before: {
    label: 'Avant',
    title: 'Façade existante',
    text: 'État initial du bâti avant rénovation énergétique.',
    image: '/gse/maison-avant.jpg',
    alt: 'Maison avant rénovation de façade',
  },
  after: {
    label: 'Après',
    title: 'Maison rénovée',
    text: 'Façade homogène, lignes sobres et confort amélioré.',
    image: '/gse/maison-renovee.jpg',
    alt: 'Maison rénovée après intervention GSE Isolation',
  },
}

const WHY_GSE = {
  image: '/gse/tablette-dpe.jpg',
  alt: 'Technicien GSE consultant un diagnostic de performance énergétique sur tablette',
}

const TRUST_ITEMS = [
  {
    title: 'Certification RGE',
    text: 'Travaux réalisés conformément aux exigences de qualité de la rénovation énergétique.',
    icon: <IconAward />,
  },
  {
    title: 'Entreprise locale',
    text: 'Interventions dans les Alpes-Maritimes et le Var, avec un ancrage à La Turbie.',
    icon: <IconHouse />,
  },
  {
    title: 'Accompagnement complet',
    text: 'Étude, aides financières, réalisation et suivi du chantier.',
    icon: <IconCheck />,
  },
  {
    title: 'Satisfaction client',
    text: 'Avis Google et Trustpilot affichés par source, sans mélange des provenances.',
    icon: <IconUsers />,
  },
]

const PROCESS_STEPS = [
  {
    title: 'Validation du projet',
    text: 'Un conseiller vous contacte par téléphone et s’assure avec vous de la pertinence de votre projet.',
  },
  {
    title: 'Visite technique',
    text: 'Un technicien expert se déplace chez vous pour confirmer la faisabilité des travaux.',
  },
  {
    title: 'Signature du devis',
    text: 'Un chargé de projet dédié réalise les démarches nécessaires à l’obtention de vos aides.',
  },
  {
    title: 'Travaux réalisés',
    text: 'La date est planifiée, l’équipe intervient et le chantier est suivi jusqu’à la fin.',
  },
]

const REALISATIONS = [
  {
    title: 'Isolation extérieure en cours',
    kicker: 'ITE',
    text: 'Traitement de façade avec échafaudage, préparation et pose structurée.',
    image: '/gse/chantier-ite.jpg',
    alt: 'Chantier d’isolation thermique extérieure sur maison',
    href: '/realisations/',
  },
  {
    title: 'Visite technique sur site',
    kicker: 'Étude',
    text: 'Échange avec le client, lecture du logement et cadrage de la proposition.',
    image: '/gse/visite-client.jpg',
    alt: 'Technicien GSE présentant un dossier à un client devant une maison',
    href: '/realisations/',
  },
]

const AID_ITEMS = [
  { title: 'MaPrimeRénov’', text: 'Une aide majeure selon vos revenus, votre logement et la nature des travaux.' },
  { title: 'CEE', text: 'Des primes énergie mobilisables pour réduire le reste à charge.' },
  { title: 'TVA réduite', text: 'Un taux adapté aux travaux de rénovation énergétique éligibles.' },
  { title: 'Dossier administratif', text: 'Un accompagnement pour avancer avec des justificatifs propres.' },
]

const CTA_FINAL = {
  image: '/gse/camion-gse.jpg',
  alt: 'Camion GSE Isolation prêt pour une intervention',
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-green">
      {children}
    </span>
  )
}

function ImageFrame({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const image = getPublicImage(src)

  if (!image) {
    return null
  }

  return (
    <div className="relative aspect-[3/4] overflow-hidden bg-[#F7F7F5]">
      <img
        src={image}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]"
        style={imageStyle}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.02)_0%,rgba(30,30,30,0.20)_100%)]" />
    </div>
  )
}

function BeforeAfterPanel({
  label,
  title,
  text,
  image,
  alt,
}: {
  label: string
  title: string
  text: string
  image: string
  alt: string
}) {
  return (
    <div className="group border-b border-[#E8E8E3] last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
      <ImageFrame src={image} alt={alt} />
      <div className="p-7">
        <span className="rounded-full bg-green px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
          {label}
        </span>
        <h3 className="mt-5 text-2xl font-extrabold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#6A6A6A]">{text}</p>
      </div>
    </div>
  )
}

function TrustPoint({ title, text, icon }: { title: string; text: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-[24px] border border-[#E8E8E3] bg-white p-5 shadow-[0_14px_50px_rgba(30,30,30,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-green/25 hover:shadow-[0_24px_70px_rgba(30,30,30,0.075)]">
      <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-green/10 text-sm font-extrabold text-green" aria-hidden="true">
        {icon}
      </span>
      <h3 className="text-[15px] font-extrabold">{title}</h3>
      <p className="mt-2 text-[13px] leading-6 text-[#6A6A6A]">{text}</p>
    </div>
  )
}

function ProcessCard({ step, index }: { step: { title: string; text: string }; index: number }) {
  return (
    <div className="relative h-full rounded-[24px] border border-[#E8E8E3] bg-white p-7 shadow-[0_18px_70px_rgba(30,30,30,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-green/25 hover:shadow-[0_28px_80px_rgba(30,30,30,0.08)]">
      <div className="mb-8 flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green text-sm font-extrabold text-white shadow-[0_16px_35px_rgba(63,166,107,0.22)]">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="ml-5 h-px flex-1 bg-[#E8E8E3]" />
      </div>
      <h3 className="text-lg font-extrabold text-[#1E1E1E]">{step.title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#6A6A6A]">{step.text}</p>
    </div>
  )
}

function AidCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="h-full rounded-[24px] border border-[#E8E8E3] bg-white p-7 shadow-[0_18px_70px_rgba(30,30,30,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-green/25 hover:shadow-[0_28px_80px_rgba(30,30,30,0.08)]">
      <span className="mb-6 flex h-9 w-9 items-center justify-center rounded-full bg-green/10 text-sm font-extrabold text-green">✓</span>
      <h3 className="text-lg font-extrabold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#6A6A6A]">{text}</p>
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

function IconHouse() {
  return <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v9.5h14V10" /><path d="M9.5 19.5v-5h5v5" /></svg>
}

function IconCheck() {
  return <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><path d="M5 13l4.5 4.5L19 7.5" /></svg>
}

function IconUsers() {
  return <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" /><circle cx="17" cy="9" r="2.3" /><path d="M21 20c0-2.6-1.7-4.7-4-5.4" /></svg>
}

function IconAward() {
  return <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><circle cx="12" cy="8" r="4.2" /><path d="m9.5 12-1.2 7 3.7-2 3.7 2-1.2-7" /><path d="m9.6 8 1.5 1.5 3.4-3.5" /></svg>
}
