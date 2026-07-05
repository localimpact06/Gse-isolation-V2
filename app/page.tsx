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
      <section className="bg-paper border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <Feature icon={<IconHouse />} titre="Expertise reconnue" texte="Plus de 15 ans d'expérience en rénovation énergétique." />
          <Feature icon={<IconLeaf />} titre="Matériaux performants" texte="Des isolants durables et respectueux de l'environnement." />
          <Feature icon={<IconPercent />} titre="Économies garanties" texte="Jusqu'à 70% d'économies sur vos factures d'énergie." />
          <Feature icon={<IconCheck />} titre="Accompagnement complet" texte="De l'audit à la réalisation, nous nous occupons de tout." />
        </div>
      </section>

      {/* RÉALISATIONS — avant/après + chiffres génériques */}
      <section className="bg-paper py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <span className="text-green text-[12px] uppercase tracking-[0.2em]">Nos réalisations</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tightest mt-4 mb-6">
              Des résultats qui parlent d'eux-mêmes.
            </h2>
            <p className="text-ink/55 text-[15px] leading-relaxed mb-8 max-w-md">
              Découvrez nos projets de rénovation énergétique et les économies réalisées par nos clients.
            </p>
            <a href="/realisations/" className="bg-ink hover:bg-ink/85 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-flex items-center gap-2">
              Voir tous nos projets <span>→</span>
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl overflow-hidden border border-ink/10">
              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#8a7a5a] to-[#6a5a3a] flex items-end p-4">
                  <span className="bg-ink text-white text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-md">Avant</span>
                </div>
                <div className="relative aspect-[4/5] bg-gradient-to-br from-[#e8e4da] to-[#cfc9ba] flex items-end justify-end p-4">
                  <span className="bg-green text-white text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-md">Après</span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 bg-ink text-white text-center">
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
      <section className="bg-white px-6 py-28 md:px-10 lg:py-36">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="max-w-2xl">
                <span className="text-green text-[12px] uppercase tracking-[0.2em]">Nos solutions</span>
                <h2 className="mt-5 text-4xl font-extrabold tracking-tightest text-ink md:text-5xl">
                  Des prestations pensées pour améliorer durablement votre habitat.
                </h2>
              </div>
              <div className="max-w-xl lg:justify-self-end">
                <p className="text-[15px] leading-8 text-ink/55">
                  Isolation, rénovation globale et aides financières : GSE Isolation structure chaque projet avec une
                  lecture technique claire, des matériaux adaptés et un accompagnement de bout en bout.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SOLUTION_CARDS.map((solution, i) => (
              <Reveal key={solution.title} delay={i * 0.06}>
                <a
                  href={solution.href}
                  className="group block h-full overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_18px_60px_rgba(18,18,18,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-green/25 hover:shadow-[0_28px_80px_rgba(18,18,18,0.12)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-paper">
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.055]"
                      style={{ background: solution.visual }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(18,18,18,0.24)_100%)]" />
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 bg-white/85 text-green shadow-[0_16px_40px_rgba(18,18,18,0.12)] backdrop-blur-md">
                      {solution.icon}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 h-px bg-white/35" />
                  </div>

                  <div className="p-6 md:p-7">
                    <h3 className="text-xl font-extrabold tracking-tight text-ink transition-colors duration-300 group-hover:text-green">
                      {solution.title}
                    </h3>
                    <p className="mt-4 min-h-[56px] text-[14px] leading-7 text-ink/55">
                      {solution.description}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.12em] text-ink transition-colors duration-300 group-hover:text-green">
                      Découvrir
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 transition-all duration-300 group-hover:translate-x-1 group-hover:border-green/30 group-hover:bg-green group-hover:text-white">
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
      <section className="bg-paper py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <span className="text-green text-[12px] uppercase tracking-[0.2em]">Zones d'intervention</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tightest mt-4 mb-10">
              20 villes en Alpes-Maritimes &amp; Var.
            </h2>
            <div className="flex flex-wrap gap-3">
              {villes.map(v => (
                <a key={v.slug} href={`/renovation-energetique/${v.slug}/`} className="text-sm border border-ink/15 hover:border-green hover:text-green transition-colors px-5 py-2.5 rounded-full">
                  {v.nom}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* BANDEAU CTA FINAL — comme la référence : texte + 3 arguments + bouton */}
      <section className="bg-ink py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-10 justify-between">
          <div className="max-w-sm">
            <span className="text-green text-[12px] uppercase tracking-[0.2em] block mb-3">Votre projet</span>
            <h2 className="text-white text-2xl font-bold mb-2">Un projet ? Parlons-en.</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Bénéficiez d'un audit personnalisé et d'un devis gratuit pour votre projet de rénovation énergétique.
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            <MiniArg icon={<IconHouse light />} titre="Audit gratuit" sub="et sans engagement" />
            <MiniArg icon={<IconCheck light />} titre="Devis détaillé" sub="sous 48h" />
            <MiniArg icon={<IconUsers light />} titre="Accompagnement" sub="personnalisé" />
          </div>
          <a href="/contact/" className="bg-green hover:bg-green-dark transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-flex items-center gap-2 w-fit shrink-0">
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
    visual: 'linear-gradient(135deg,#2f332f 0%,#d6c59c 46%,#f4efe3 100%)',
    icon: <IconHouse key="combles" />,
  },
  {
    title: 'Isolation des murs',
    description: 'Une enveloppe intérieure mieux maîtrisée pour gagner en confort. Idéal lorsque la façade ne peut pas être traitée.',
    href: '/isolation-thermique/isolation-des-murs-par-linterieur/',
    visual: 'linear-gradient(135deg,#24282b 0%,#8b928b 48%,#e7e4dc 100%)',
    icon: <IconWindow key="murs" />,
  },
  {
    title: 'Isolation des planchers',
    description: 'Une réponse concrète aux sols froids et aux pertes par le bas. Le confort se ressent dès les premières pièces.',
    href: '/isolation-thermique/isolation-des-planchers-bas/',
    visual: 'linear-gradient(135deg,#30353a 0%,#a69374 52%,#efe9de 100%)',
    icon: <IconCheck key="planchers" />,
  },
  {
    title: 'Isolation extérieure',
    description: 'La solution hautes performances pour traiter les ponts thermiques. Votre façade gagne en efficacité et en valeur.',
    href: '/isolation-thermique/isolation-des-murs-par-lexterieur/',
    visual: 'linear-gradient(135deg,#19201d 0%,#3FA66B 43%,#d8e6d4 100%)',
    icon: <IconLeaf key="exterieure" />,
  },
  {
    title: 'Rénovation énergétique',
    description: 'Une vision globale du logement pour coordonner les bons travaux. Audit, priorités, chantier et performance finale.',
    href: '/renovation-energetique/',
    visual: 'linear-gradient(135deg,#1f2424 0%,#6e7b76 46%,#f1eadf 100%)',
    icon: <IconFan key="renovation" />,
  },
  {
    title: 'Aides financières',
    description: "Un accompagnement clair pour mobiliser les dispositifs disponibles. Vous avancez avec un budget cadré dès le départ.",
    href: '/aides-renovation-energetique/',
    visual: 'linear-gradient(135deg,#25211d 0%,#b7a16f 48%,#f3efe5 100%)',
    icon: <IconPercent key="aides" />,
  },
]

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="py-6 px-2 border-r border-white/10 last:border-r-0">
      <div className="text-green font-bold text-lg">{value}</div>
      <div className="text-[10px] uppercase tracking-wide text-white/40 mt-1 leading-tight">{label}</div>
    </div>
  )
}

function Feature({ icon, titre, texte }: { icon: React.ReactNode; titre: string; texte: string }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-9 h-9 flex items-center justify-center">{icon}</div>
      <div>
        <h3 className="font-bold text-[14px] mb-1">{titre}</h3>
        <p className="text-[13px] text-ink/50 leading-snug">{texte}</p>
      </div>
    </div>
  )
}

function MiniArg({ icon, titre, sub }: { icon: React.ReactNode; titre: string; sub: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="shrink-0">{icon}</div>
      <div>
        <div className="text-white text-[13px] font-semibold">{titre}</div>
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
function IconWindow() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><rect x="4" y="4" width="16" height="16" rx="1" /><line x1="12" y1="4" x2="12" y2="20" /><line x1="4" y1="12" x2="20" y2="12" /></svg>
}
function IconFan() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" strokeWidth="1.4"><circle cx="12" cy="12" r="2" /><path d="M12 10c0-3 1-6 4-6s2 4-1 6" /><path d="M14 12c3 0 6 1 6 4s-4 2-6-1" /><path d="M12 14c0 3-1 6-4 6s-2-4 1-6" /></svg>
}
