import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomeHero from '@/components/HomeHero'
import Reveal from '@/components/Reveal'
import Testimonials from '@/components/Testimonials'
import { villes } from '@/lib/villes'

export const metadata: Metadata = {
  title: "Rénovation Énergétique à Nice — GSE Isolation",
  description: "GSE Isolation : rénovation énergétique premium à Nice et en Alpes-Maritimes. Isolation, audit, aides jusqu'à 80 000€. Devis gratuit.",
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />

      {/* 4 POINTS FORTS — icônes fines, fond clair */}
      <section className="bg-[#F7F7F5] px-6 py-20 md:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={<IconHouse />} titre="Expertise reconnue" texte="Plus de 15 ans d'expérience en rénovation énergétique." />
          <Feature icon={<IconLeaf />} titre="Matériaux performants" texte="Des isolants durables et respectueux de l'environnement." />
          <Feature icon={<IconPercent />} titre="Économies garanties" texte="Jusqu'à 70% d'économies sur vos factures d'énergie." />
          <Feature icon={<IconCheck />} titre="Accompagnement complet" texte="De l'audit à la réalisation, nous nous occupons de tout." />
        </div>
      </section>

      {/* RÉALISATIONS — avant/après + chiffres génériques */}
      <section className="bg-[#FAFAF8] px-6 py-28 md:px-10 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <span className="text-green text-[12px] font-bold uppercase tracking-[0.22em]">Nos réalisations</span>
            <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.02] tracking-tightest text-[#1E1E1E] md:text-5xl lg:text-6xl">
              Des résultats qui parlent d'eux-mêmes.
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-8 text-[#6A6A6A]">
              Découvrez nos projets de rénovation énergétique et les économies réalisées par nos clients.
            </p>
            <a href="/realisations/" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#1E1E1E] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_50px_rgba(30,30,30,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green">
              Voir tous nos projets <span>→</span>
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_24px_80px_rgba(30,30,30,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(30,30,30,0.11)]">
              <div className="grid grid-cols-2">
                <div className="relative flex aspect-[4/5] items-end overflow-hidden p-5">
                  <div
                    className="absolute inset-0 bg-cover bg-[position:38%_50%] transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: "url('/solutions/isolation-exterieure-card.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.06)_0%,rgba(30,30,30,0.48)_100%)]" />
                  <span className="relative rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1E1E1E] backdrop-blur-md">Chantier</span>
                </div>
                <div className="relative flex aspect-[4/5] items-end justify-end overflow-hidden p-5">
                  <div
                    className="absolute inset-0 bg-cover bg-[position:42%_50%] transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: "url('/solutions/isolation-murs-card.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.06)_0%,rgba(30,30,30,0.5)_100%)]" />
                  <span className="relative rounded-full bg-green px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_35px_rgba(63,166,107,0.22)]">Performance</span>
                </div>
              </div>
              <div className="grid grid-cols-2 bg-[#1E1E1E] text-center text-white sm:grid-cols-4">
                <StatBlock value="-70%" label="de consommation énergétique" />
                <StatBlock value="+4" label="classes DPE gagnées" />
                <StatBlock value="2 mois" label="de travaux en moyenne" />
                <StatBlock value="80 000€" label="d'aides possibles" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-[#F7F7F5] px-6 py-32 md:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="max-w-2xl">
                <span className="text-green text-[12px] font-bold uppercase tracking-[0.22em]">Nos solutions</span>
                <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-tightest text-[#1E1E1E] md:text-5xl lg:text-6xl">
                  Une isolation pensée comme un investissement durable.
                </h2>
              </div>
              <div className="max-w-xl lg:justify-self-end">
                <p className="text-[15px] leading-8 text-[#6A6A6A]">
                  GSE Isolation sélectionne les bonnes solutions selon votre logement, vos contraintes et votre budget.
                  Chaque prestation est cadrée pour améliorer le confort, réduire les pertes et valoriser votre bien.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SOLUTION_CARDS.map((solution, i) => (
              <Reveal key={solution.title} delay={i * 0.06}>
                <a
                  href={solution.href}
                  className="group block h-full overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-2 hover:border-green/25 hover:shadow-[0_34px_100px_rgba(30,30,30,0.12)]"
                  aria-label={`Découvrir ${solution.title}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                    <div
                      className={`absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105 ${solution.position}`}
                      style={{ backgroundImage: `url('${solution.image}')` }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.06)_0%,rgba(30,30,30,0.2)_48%,rgba(30,30,30,0.62)_100%)]" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1E1E1E] shadow-[0_16px_36px_rgba(30,30,30,0.14)] backdrop-blur-md">
                      {solution.badge}
                    </span>
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="h-px bg-white/30" />
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    <h3 className="text-xl font-extrabold tracking-tight text-[#1E1E1E] transition-colors duration-300 group-hover:text-green">
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

                    <span className="mt-7 inline-flex translate-y-0 items-center gap-3 rounded-full border border-[#E8E8E3] px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1E1E1E] opacity-100 transition-all duration-300 group-hover:border-green/30 group-hover:bg-green group-hover:text-white md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      Découvrir
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* VILLES */}
      <section className="bg-[#FAFAF8] px-6 py-28 md:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="text-green text-[12px] font-bold uppercase tracking-[0.22em]">Zones d'intervention</span>
            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.04] tracking-tightest text-[#1E1E1E] md:text-5xl">
              20 villes en Alpes-Maritimes &amp; Var.
            </h2>
            <div className="mt-12 flex flex-wrap gap-3">
              {villes.map(v => (
                <a key={v.slug} href={`/renovation-energetique/${v.slug}/`} className="rounded-full border border-[#E8E8E3] bg-white px-5 py-3 text-sm font-semibold text-[#1E1E1E]/75 shadow-[0_10px_30px_rgba(30,30,30,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-green/30 hover:text-green hover:shadow-[0_16px_45px_rgba(30,30,30,0.075)]">
                  {v.nom}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BANDEAU CTA FINAL — comme la référence : texte + 3 arguments + bouton */}
      <section className="bg-[#F7F7F5] px-6 pb-28 pt-4 md:px-10 lg:pb-36">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 rounded-[24px] border border-[#2F2F2F]/10 bg-[#1E1E1E] px-7 py-10 shadow-[0_30px_90px_rgba(30,30,30,0.16)] md:px-10 lg:flex-row lg:items-center lg:py-12">
          <div className="max-w-sm">
            <span className="mb-3 block text-[12px] font-bold uppercase tracking-[0.22em] text-green">Votre projet</span>
            <h2 className="mb-3 text-2xl font-extrabold tracking-tight text-white">Un projet ? Parlons-en.</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Bénéficiez d'un audit personnalisé et d'un devis gratuit pour votre projet de rénovation énergétique.
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            <MiniArg icon={<IconHouse light />} titre="Audit gratuit" sub="et sans engagement" />
            <MiniArg icon={<IconCheck light />} titre="Devis détaillé" sub="sous 48h" />
            <MiniArg icon={<IconUsers light />} titre="Accompagnement" sub="personnalisé" />
          </div>
          <a href="/contact/" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-green px-7 py-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_55px_rgba(63,166,107,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-dark">
            Demander un devis <span>→</span>
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}

const SOLUTION_CARDS = [
  {
    title: 'Isolation des combles',
    description: 'Le premier levier pour limiter les pertes de chaleur. Une intervention rapide, rentable et très lisible sur vos factures.',
    href: '/isolation-thermique/isolation-des-combles/',
    badge: 'Éligible aux aides',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=82',
    position: 'bg-center',
    benefits: ['Réduit les pertes par toiture', 'Chantier rapide et maîtrisé', 'Confort été comme hiver'],
  },
  {
    title: 'Isolation des murs',
    description: 'Une enveloppe intérieure mieux maîtrisée pour gagner en confort. Idéal lorsque la façade ne peut pas être traitée.',
    href: '/isolation-thermique/isolation-des-murs-par-linterieur/',
    badge: 'Sur devis',
    image: '/solutions/isolation-murs-card.jpg',
    position: 'bg-[position:38%_50%]',
    benefits: ['Améliore le confort thermique', 'Travaux adaptés pièce par pièce', 'Préserve l’aspect extérieur'],
  },
  {
    title: 'Isolation des planchers',
    description: 'Une réponse concrète aux sols froids et aux pertes par le bas. Le confort se ressent dès les premières pièces.',
    href: '/isolation-thermique/isolation-des-planchers-bas/',
    badge: 'Intervention 06-83',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=82',
    position: 'bg-center',
    benefits: ['Limite les sensations de sol froid', 'Pose possible par sous-face', 'Gain de confort immédiat'],
  },
  {
    title: 'Isolation extérieure',
    description: 'La solution hautes performances pour traiter les ponts thermiques. Votre façade gagne en efficacité et en valeur.',
    href: '/isolation-thermique/isolation-des-murs-par-lexterieur/',
    badge: 'Éligible aux aides',
    image: '/solutions/isolation-exterieure-card.jpg',
    position: 'bg-[position:42%_50%]',
    benefits: ['Traite les ponts thermiques', 'Valorise durablement la façade', 'Conserve la surface habitable'],
  },
  {
    title: 'Rénovation énergétique',
    description: 'Une vision globale du logement pour coordonner les bons travaux. Audit, priorités, chantier et performance finale.',
    href: '/renovation-energetique/',
    badge: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=82',
    position: 'bg-center',
    benefits: ['Audit et priorités claires', 'Travaux coordonnés', 'Performance finale mesurable'],
  },
  {
    title: 'Aides financières',
    description: "Un accompagnement clair pour mobiliser les dispositifs disponibles. Vous avancez avec un budget cadré dès le départ.",
    href: '/aides-renovation-energetique/',
    badge: 'Éligible aux aides',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=82',
    position: 'bg-center',
    benefits: ['MaPrimeRénov’ étudiée', 'CEE et TVA réduite', 'Budget cadré avant chantier'],
  },
]

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-r border-white/10 px-3 py-7 last:border-r-0">
      <div className="text-green font-bold text-lg">{value}</div>
      <div className="text-[10px] uppercase tracking-wide text-white/40 mt-1 leading-tight">{label}</div>
    </div>
  )
}

function Feature({ icon, titre, texte }: { icon: React.ReactNode; titre: string; texte: string }) {
  return (
    <div className="flex h-full gap-4 rounded-[24px] border border-[#E8E8E3] bg-white p-6 shadow-[0_16px_55px_rgba(30,30,30,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-green/25 hover:shadow-[0_28px_80px_rgba(30,30,30,0.09)]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green/10">{icon}</div>
      <div>
        <h3 className="mb-2 text-[14px] font-extrabold text-[#1E1E1E]">{titre}</h3>
        <p className="text-[13px] leading-6 text-[#6A6A6A]">{texte}</p>
      </div>
    </div>
  )
}

function MiniArg({ icon, titre, sub }: { icon: React.ReactNode; titre: string; sub: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">{icon}</div>
      <div>
        <div className="text-[13px] font-bold text-white">{titre}</div>
        <div className="text-white/40 text-[12px]">{sub}</div>
      </div>
    </div>
  )
}

/* --- Icônes fines (line icons), pas de gros pictos colorés --- */
function IconHouse({ light = false }: { light?: boolean }) {
  const c = light ? '#fff' : '#3FA66B'
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.4"><path d="M3 11.5 12 4l9 7.5" /><path d="M5 10v9.5h14V10" /><path d="M9.5 19.5v-5h5v5" /></svg>
}
function IconLeaf() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><path d="M5 19c8 1 14-5 14-14-9 0-14 6-14 14Z" /><path d="M5 19c2-5 5-8 9-10" /></svg>
}
function IconPercent() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><circle cx="7" cy="7" r="2.3" /><circle cx="17" cy="17" r="2.3" /><line x1="6" y1="18" x2="18" y2="6" /></svg>
}
function IconCheck({ light = false }: { light?: boolean }) {
  const c = light ? '#fff' : '#3FA66B'
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.4"><path d="M5 13l4.5 4.5L19 7.5" /></svg>
}
function IconUsers({ light = false }: { light?: boolean }) {
  const c = light ? '#fff' : '#3FA66B'
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.4"><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6" /><circle cx="17" cy="9" r="2.3" /><path d="M21 20c0-2.6-1.7-4.7-4-5.4" /></svg>
}
