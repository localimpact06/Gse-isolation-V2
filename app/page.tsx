import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomeHero from '@/components/HomeHero'
import Reveal from '@/components/Reveal'
import Testimonials from '@/components/Testimonials'

export const metadata: Metadata = {
  title: "Rénovation Énergétique à Nice — GSE Isolation",
  description: "GSE Isolation : rénovation énergétique premium à Nice et en Alpes-Maritimes. Isolation, audit, aides financières et devis gratuit.",
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />

      <main className="bg-[#F7F7F5] text-[#1E1E1E]">
        <section className="px-6 py-20 md:px-10 lg:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROOFS.map((proof, index) => (
              <Reveal key={proof.title} delay={index * 0.05}>
                <ProofCard {...proof} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-[#FAFAF8] px-6 py-28 md:px-10 lg:py-36">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <Reveal>
              <SectionEyebrow>Réalisations</SectionEyebrow>
              <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.03] tracking-tightest md:text-5xl lg:text-6xl">
                Des réalisations qui inspirent confiance.
              </h2>
              <p className="mt-7 max-w-lg text-[15px] leading-8 text-[#6A6A6A]">
                Une preuve claire de notre méthode : diagnostic, choix technique, chantier suivi et amélioration concrète du confort.
              </p>
              <a href="/realisations/" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#1E1E1E] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_50px_rgba(30,30,30,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green">
                Voir tous nos projets <span>→</span>
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_24px_80px_rgba(30,30,30,0.07)]">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <ProjectVisual label="Chantier" tone="before" />
                  <ProjectVisual label="Résultat" tone="after" />
                </div>
                <div className="grid grid-cols-2 border-t border-[#E8E8E3] bg-[#1E1E1E] text-white sm:grid-cols-4">
                  {PROJECT_STATS.map((stat) => (
                    <StatBlock key={stat.label} {...stat} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-28 md:px-10 lg:py-40">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div className="max-w-2xl">
                  <SectionEyebrow>Nos solutions</SectionEyebrow>
                  <h2 className="mt-5 text-4xl font-extrabold leading-[1.03] tracking-tightest md:text-5xl lg:text-6xl">
                    Des solutions d’isolation adaptées à chaque projet.
                  </h2>
                </div>
                <p className="max-w-xl text-[15px] leading-8 text-[#6A6A6A] lg:justify-self-end">
                  GSE Isolation vous aide à choisir le bon poste de travaux selon votre logement, vos priorités et les aides mobilisables.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {SOLUTION_CARDS.map((solution, index) => (
                <Reveal key={solution.title} delay={index * 0.05}>
                  <a
                    href={solution.href}
                    className="group block h-full overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-2 hover:border-green/25 hover:shadow-[0_34px_100px_rgba(30,30,30,0.11)]"
                    aria-label={`Découvrir ${solution.title}`}
                  >
                    <SolutionVisual
                      label={solution.visualLabel}
                      index={index}
                      badge={solution.badge}
                      image={solution.image}
                      position={solution.position}
                    />
                    <div className="p-6 md:p-7">
                      <h3 className="text-xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-green">
                        {solution.title}
                      </h3>
                      <p className="mt-4 min-h-[56px] text-[14px] leading-7 text-[#6A6A6A]">
                        {solution.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {solution.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-3 text-[13px] font-medium text-[#6A6A6A]">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green/10 text-[12px] font-bold text-green">
                              ✓
                            </span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-7 inline-flex translate-y-0 items-center gap-3 rounded-full border border-[#E8E8E3] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] opacity-100 transition-all duration-300 group-hover:border-green/30 group-hover:bg-green group-hover:text-white md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                        Découvrir <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAF8] px-6 py-28 md:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <SectionEyebrow>Pourquoi choisir GSE</SectionEyebrow>
                <h2 className="mt-5 text-4xl font-extrabold leading-[1.04] tracking-tightest md:text-5xl">
                  Une équipe locale, une méthode claire, un chantier tenu.
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {TRUST_ITEMS.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <TrustCard {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-28 md:px-10 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <SectionEyebrow>Notre mode de fonctionnement</SectionEyebrow>
                  <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.04] tracking-tightest md:text-5xl">
                    Comment se déroule un chantier GSE ?
                  </h2>
                </div>
                <div className="rounded-[24px] border border-[#E8E8E3] bg-white p-6 shadow-[0_18px_70px_rgba(30,30,30,0.05)] lg:justify-self-end">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#6A6A6A]">Appel non surtaxé</span>
                  <a href="tel:0422138611" className="mt-2 block text-3xl font-extrabold tracking-tight text-[#1E1E1E] transition-colors hover:text-green">
                    04 22 13 86 11
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

        <Testimonials />

        <section className="bg-[#FAFAF8] px-6 py-28 md:px-10 lg:py-36">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <Reveal>
              <SectionEyebrow>Aides financières</SectionEyebrow>
              <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.04] tracking-tightest md:text-5xl">
                Des dispositifs expliqués simplement, sans flou.
              </h2>
              <p className="mt-7 max-w-lg text-[15px] leading-8 text-[#6A6A6A]">
                Nous vous aidons à identifier les aides mobilisables et à cadrer le budget avant de lancer les travaux.
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
            <div className="mx-auto overflow-hidden rounded-[24px] border border-[#2F2F2F]/10 bg-[#1E1E1E] shadow-[0_34px_100px_rgba(30,30,30,0.18)]">
              <div className="grid gap-10 px-7 py-10 md:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-14">
                <div className="max-w-2xl">
                  <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-green">Votre projet</span>
                  <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                    Parlons de votre isolation avant que les pertes ne coûtent plus cher.
                  </h2>
                  <p className="mt-5 max-w-xl text-[15px] leading-8 text-white/58">
                    Audit, conseils, aides et devis : vous obtenez une vision claire avant de vous engager.
                  </p>
                </div>
                <div className="flex flex-col gap-5 lg:items-end">
                  <a href="/contact/" className="inline-flex w-fit items-center gap-3 rounded-full bg-green px-7 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_55px_rgba(63,166,107,0.26)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-dark">
                    Demander un devis <span>→</span>
                  </a>
                  <div className="flex flex-wrap gap-3 text-[12px] font-semibold text-white/58 lg:justify-end">
                    <span className="rounded-full border border-white/10 px-4 py-2">Audit</span>
                    <span className="rounded-full border border-white/10 px-4 py-2">Conseils</span>
                    <span className="rounded-full border border-white/10 px-4 py-2">Accompagnement</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  )
}

const PROOFS = [
  { title: 'Expertise locale', text: "Plus de 15 ans d'expérience en rénovation énergétique.", icon: <IconHouse /> },
  { title: 'Matériaux performants', text: 'Des solutions adaptées au climat des Alpes-Maritimes et du Var.', icon: <IconLeaf /> },
  { title: 'Aides cadrées', text: 'MaPrimeRénov’, CEE et TVA réduite étudiées dès le départ.', icon: <IconPercent /> },
  { title: 'Chantier maîtrisé', text: 'Un interlocuteur clair, du premier audit à la réception.', icon: <IconCheck /> },
]

const PROJECT_STATS = [
  { value: 'Audit', label: 'lecture technique' },
  { value: 'Aides', label: 'dossier cadré' },
  { value: '06 / 83', label: "zone d'intervention" },
  { value: 'Devis', label: 'proposition claire' },
]

const SOLUTION_CARDS = [
  {
    title: 'Isolation des combles',
    description: 'Le premier levier pour limiter les pertes de chaleur par la toiture.',
    href: '/isolation-thermique/isolation-des-combles/',
    badge: 'Éligible aux aides',
    visualLabel: 'Combles',
    image: null,
    position: '50% 50%',
    benefits: ['Pertes par toiture réduites', 'Chantier rapide', 'Confort été comme hiver'],
  },
  {
    title: 'Isolation des murs',
    description: 'Une enveloppe intérieure mieux maîtrisée lorsque la façade ne peut pas être traitée.',
    href: '/isolation-thermique/isolation-des-murs-par-linterieur/',
    badge: 'Sur devis',
    visualLabel: 'Murs',
    image: '/solutions/isolation-murs-card.jpg',
    position: '38% 50%',
    benefits: ['Confort thermique renforcé', 'Pose pièce par pièce', 'Aspect extérieur préservé'],
  },
  {
    title: 'Isolation des planchers bas',
    description: 'Une réponse concrète aux sols froids et aux déperditions par le bas.',
    href: '/isolation-thermique/isolation-des-planchers-bas/',
    badge: 'Intervention 06-83',
    visualLabel: 'Planchers',
    image: null,
    position: '50% 50%',
    benefits: ['Sols moins froids', 'Pose par sous-face', 'Confort immédiat'],
  },
  {
    title: 'Isolation extérieure',
    description: 'La solution haute performance pour traiter les ponts thermiques et valoriser la façade.',
    href: '/isolation-thermique/isolation-des-murs-par-lexterieur/',
    badge: 'Éligible aux aides',
    visualLabel: 'Extérieur',
    image: '/solutions/chantier-isolation-exterieure.png',
    position: '43% 50%',
    benefits: ['Ponts thermiques traités', 'Façade valorisée', 'Surface habitable conservée'],
  },
  {
    title: 'Rénovation énergétique',
    description: 'Une vision globale du logement pour coordonner les bons travaux dans le bon ordre.',
    href: '/renovation-energetique/',
    badge: 'Projet complet',
    visualLabel: 'Global',
    image: null,
    position: '50% 50%',
    benefits: ['Audit et priorités', 'Travaux coordonnés', 'Performance mesurable'],
  },
  {
    title: 'Aides financières',
    description: 'Un accompagnement clair pour mobiliser les dispositifs disponibles.',
    href: '/aides-renovation-energetique/',
    badge: 'Budget cadré',
    visualLabel: 'Aides',
    image: null,
    position: '50% 50%',
    benefits: ['MaPrimeRénov’ étudiée', 'CEE mobilisés', 'TVA réduite vérifiée'],
  },
]

const TRUST_ITEMS = [
  { title: 'Expertise', text: 'Une lecture technique du logement avant de parler travaux.', icon: <IconHouse /> },
  { title: 'Accompagnement', text: 'Un suivi clair, des étapes simples, un interlocuteur identifié.', icon: <IconUsers /> },
  { title: 'Matériaux performants', text: 'Des choix adaptés aux contraintes du bâti et au climat local.', icon: <IconLeaf /> },
  { title: 'Chantier propre', text: 'Protection, méthode et finitions suivies jusqu’à la réception.', icon: <IconCheck /> },
  { title: 'Aides financières', text: 'Les dispositifs sont vérifiés avant de figer le budget.', icon: <IconPercent /> },
  { title: 'Devis gratuit', text: 'Une proposition lisible, détaillée et sans engagement.', icon: <IconFile /> },
]

const AID_ITEMS = [
  { title: 'MaPrimeRénov’', text: 'Une aide majeure selon vos revenus, le logement et la nature des travaux.' },
  { title: 'CEE', text: 'Des primes énergie mobilisables pour réduire le reste à charge.' },
  { title: 'TVA réduite', text: 'Un taux adapté aux travaux de rénovation énergétique éligibles.' },
  { title: 'Dossier administratif', text: 'Un accompagnement pour avancer avec des justificatifs propres.' },
]

const PROCESS_STEPS = [
  {
    title: 'Validation du projet',
    text: 'Un conseiller vous contacte par téléphone, et s’assure avec vous de la pertinence de votre projet.',
  },
  {
    title: 'Visite technique',
    text: 'Un technicien expert se déplace chez vous pour s’assurer de la faisabilité des travaux.',
  },
  {
    title: 'Signature du devis',
    text: 'Un chargé de projet dédié réalise pour vous toutes les démarches nécessaires à l’obtention de vos aides.',
  },
  {
    title: 'Travaux réalisés',
    text: 'C’est parti, on planifie une date pour vos travaux et on les réalise.',
  },
]

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-green">
      {children}
    </span>
  )
}

function ProofCard({ title, text, icon }: { title: string; text: string; icon: React.ReactNode }) {
  return (
    <div className="flex h-full gap-4 rounded-[24px] border border-[#E8E8E3] bg-white p-6 shadow-[0_16px_55px_rgba(30,30,30,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-green/25 hover:shadow-[0_26px_70px_rgba(30,30,30,0.08)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green/10">{icon}</div>
      <div>
        <h3 className="mb-2 text-[14px] font-extrabold">{title}</h3>
        <p className="text-[13px] leading-6 text-[#6A6A6A]">{text}</p>
      </div>
    </div>
  )
}

function ProjectVisual({ label, tone }: { label: string; tone: 'before' | 'after' }) {
  const isAfter = tone === 'after'
  return (
    <div className="group relative flex min-h-[320px] overflow-hidden p-6">
      <div className={`absolute inset-0 transition-transform duration-700 group-hover:scale-105 ${isAfter ? 'bg-[radial-gradient(circle_at_78%_20%,rgba(63,166,107,0.32),transparent_32%),linear-gradient(135deg,#EFF4EC_0%,#DDE7D8_44%,#B9CBB3_100%)]' : 'bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.55),transparent_30%),linear-gradient(135deg,#D6D0C3_0%,#B9AE9A_46%,#756D5F_100%)]'}`} />
      <div className="absolute inset-x-10 top-14 h-px bg-white/30" />
      <div className="absolute bottom-20 left-10 h-28 w-px bg-white/25" />
      <div className="absolute right-10 top-16 h-28 w-28 rounded-full border border-white/25" />
      <div className="absolute bottom-10 right-16 h-16 w-40 rounded-full border border-white/15" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.04)_0%,rgba(30,30,30,0.38)_100%)]" />
      <div className="relative mt-auto w-full">
        <span className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] ${isAfter ? 'bg-green text-white shadow-[0_14px_35px_rgba(63,166,107,0.22)]' : 'bg-white/90 text-[#1E1E1E] backdrop-blur-md'}`}>
          {label}
        </span>
        <div className="mt-8 h-px bg-white/35" />
        <p className="mt-4 max-w-xs text-sm font-semibold leading-6 text-white">
          {isAfter ? 'Maison valorisée, confort stabilisé et projet prêt à être mesuré.' : 'Isolation extérieure en cours, chantier suivi et façade préparée.'}
        </p>
      </div>
    </div>
  )
}

function SolutionVisual({
  label,
  index,
  badge,
  image,
  position,
}: {
  label: string
  index: number
  badge: string
  image: string | null
  position: string
}) {
  const gradients = [
    'bg-[radial-gradient(circle_at_24%_22%,rgba(255,255,255,0.55),transparent_28%),linear-gradient(135deg,#DAD4C8_0%,#AFA38E_48%,#6D665A_100%)]',
    'bg-[radial-gradient(circle_at_78%_18%,rgba(63,166,107,0.28),transparent_26%),linear-gradient(135deg,#E7E5DE_0%,#CFC8B8_46%,#938A78_100%)]',
    'bg-[radial-gradient(circle_at_20%_82%,rgba(255,255,255,0.5),transparent_28%),linear-gradient(135deg,#C8D2CA_0%,#A7B5A9_48%,#66736A_100%)]',
    'bg-[radial-gradient(circle_at_76%_24%,rgba(255,255,255,0.5),transparent_30%),linear-gradient(135deg,#E6E0D1_0%,#B8AA8C_42%,#776C58_100%)]',
    'bg-[radial-gradient(circle_at_18%_20%,rgba(63,166,107,0.26),transparent_28%),linear-gradient(135deg,#EEF0EA_0%,#CDD6CB_48%,#7D887F_100%)]',
    'bg-[radial-gradient(circle_at_78%_24%,rgba(63,166,107,0.32),transparent_26%),linear-gradient(135deg,#F0EEE7_0%,#D6D0C0_48%,#807869_100%)]',
  ]

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#1E1E1E]">
      <div className={`absolute inset-0 transition-transform duration-700 group-hover:scale-105 ${gradients[index % gradients.length]}`} />
      {image ? (
        <div
          className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${image}')`, backgroundPosition: position }}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_28%),linear-gradient(135deg,#D9D5CA_0%,#A9A293_44%,#5D625A_100%)]" />
      )}
      <div className="absolute inset-x-8 top-1/2 h-px bg-white/30" />
      <div className="absolute left-8 top-10 h-24 w-px bg-white/25" />
      <div className="absolute bottom-8 right-8 h-16 w-16 rounded-full border border-white/25" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.08)_0%,rgba(30,30,30,0.24)_45%,rgba(30,30,30,0.68)_100%)]" />
      <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1E1E1E] shadow-[0_16px_36px_rgba(30,30,30,0.14)] backdrop-blur-md">
        {badge}
      </span>
      <span className="absolute bottom-5 left-5 text-2xl font-extrabold tracking-tight text-white">
        {label}
      </span>
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
        <div className="h-px flex-1 bg-[#E8E8E3] ml-5" />
      </div>
      <h3 className="text-lg font-extrabold text-[#1E1E1E]">{step.title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#6A6A6A]">{step.text}</p>
    </div>
  )
}

function TrustCard({ title, text, icon }: { title: string; text: string; icon: React.ReactNode }) {
  return (
    <div className="h-full rounded-[24px] border border-[#E8E8E3] bg-white p-7 shadow-[0_18px_70px_rgba(30,30,30,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-green/25 hover:shadow-[0_28px_80px_rgba(30,30,30,0.08)]">
      <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-green/10">{icon}</div>
      <h3 className="text-lg font-extrabold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#6A6A6A]">{text}</p>
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

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-r border-white/10 px-3 py-7 text-center last:border-r-0">
      <div className="text-lg font-extrabold text-green">{value}</div>
      <div className="mt-1 text-[10px] uppercase leading-tight tracking-[0.13em] text-white/42">{label}</div>
    </div>
  )
}

function IconHouse() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v9.5h14V10" /><path d="M9.5 19.5v-5h5v5" /></svg>
}

function IconLeaf() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><path d="M5 19c8 1 14-5 14-14-9 0-14 6-14 14Z" /><path d="M5 19c2-5 5-8 9-10" /></svg>
}

function IconPercent() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><circle cx="7" cy="7" r="2.3" /><circle cx="17" cy="17" r="2.3" /><line x1="6" y1="18" x2="18" y2="6" /></svg>
}

function IconCheck() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><path d="M5 13l4.5 4.5L19 7.5" /></svg>
}

function IconUsers() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" /><circle cx="17" cy="9" r="2.3" /><path d="M21 20c0-2.6-1.7-4.7-4-5.4" /></svg>
}

function IconFile() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><path d="M6 3.5h8l4 4V20.5H6z" /><path d="M14 3.5V8h4" /><path d="M9 13h6" /><path d="M9 16h4" /></svg>
}
