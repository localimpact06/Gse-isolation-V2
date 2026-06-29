import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import Testimonials from '@/components/Testimonials'
import { servicesIso } from '@/lib/services-iso'
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

      {/* HERO — texte sur noir à gauche, photo à droite, diagonale */}
      <section className="relative bg-ink overflow-hidden pt-20">
        <div className="relative grid lg:grid-cols-2 min-h-[640px] lg:min-h-[760px]">
          {/* Côté texte */}
          <div className="relative z-10 flex flex-col justify-center px-6 md:px-12 py-20 lg:py-0">
            <Reveal>
              <span className="text-green text-[12px] uppercase tracking-[0.2em] mb-5 block">
                Rénovation énergétique
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-white font-extrabold text-[2.6rem] sm:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tightest">
                Rénover aujourd'hui.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <h1 className="text-green font-extrabold text-[2.6rem] sm:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tightest mb-7">
                Économiser pendant 30 ans.
              </h1>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="text-white/60 text-[15px] leading-relaxed max-w-md mb-9">
                Spécialistes de l'isolation thermique, nous améliorons la performance énergétique de votre habitat pour plus de confort et des économies durables.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="flex flex-wrap gap-4">
                <a href="/realisations/" className="bg-green hover:bg-green-dark transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-flex items-center gap-2">
                  Nos réalisations <span>→</span>
                </a>
                <a href="/solutions/" className="border border-white/25 hover:border-white/60 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-flex items-center gap-2">
                  Découvrir nos solutions <span>→</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Côté photo (SVG provisoire — vraie photo à intégrer) */}
          <div className="relative min-h-[320px] lg:min-h-0">
            <HeroHouseSVG />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/10 to-transparent lg:block" />
          </div>
        </div>
      </section>

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

      {/* SOLUTIONS — cards avec photo (SVG provisoire) */}
      <section className="bg-white py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
              <div>
                <span className="text-green text-[12px] uppercase tracking-[0.2em]">Nos solutions</span>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tightest mt-4 mb-6">
                  Une approche globale pour une performance durable.
                </h2>
                <p className="text-ink/55 text-[15px] leading-relaxed max-w-md mb-6">
                  Nous intervenons sur tous les postes clés de votre habitat pour une efficacité maximale.
                </p>
                <a href="/solutions/" className="bg-green hover:bg-green-dark transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-flex items-center gap-2 w-fit">
                  Découvrir nos solutions <span>→</span>
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesIso.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <a href={`/isolation-thermique/${s.slug}/`} className="group block">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4" style={{ background: SOLUTION_BG[i % SOLUTION_BG.length] }}>
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      {SOLUTION_ICONS[i % SOLUTION_ICONS.length]}
                    </div>
                  </div>
                  <h3 className="font-bold text-[15px] mb-1 group-hover:text-green transition-colors">{s.titre}</h3>
                  <p className="text-[13px] text-ink/50">{s.economie}</p>
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

const SOLUTION_BG = ['#3a3530', '#8a8580', '#404a55', '#55514c']
const SOLUTION_ICONS = [<IconHouse key="1" />, <IconLeaf key="2" />, <IconWindow key="3" />, <IconFan key="4" />]

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

function HeroHouseSVG() {
  return (
    <svg viewBox="0 0 800 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2530" />
          <stop offset="100%" stopColor="#2a3a35" />
        </linearGradient>
      </defs>
      <rect width="800" height="700" fill="url(#sky)" />
      <rect y="560" width="800" height="140" fill="#1c2420" />
      {/* Maison contemporaine simplifiée */}
      <g transform="translate(150,200)">
        <rect x="0" y="120" width="500" height="240" fill="#caa86a" opacity="0.9" />
        <rect x="0" y="60" width="500" height="60" fill="#3a2a1a" />
        <rect x="40" y="150" width="140" height="180" fill="#0f1a16" />
        <rect x="48" y="158" width="124" height="164" fill="#e8c878" opacity="0.85" />
        <rect x="220" y="150" width="240" height="120" fill="#0f1a16" />
        <rect x="228" y="158" width="224" height="104" fill="#e8c878" opacity="0.7" />
        <rect x="-10" y="50" width="520" height="14" fill="#5a4a30" />
      </g>
      <circle cx="650" cy="120" r="50" fill="#e8c878" opacity="0.08" />
    </svg>
  )
}
