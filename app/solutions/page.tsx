import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'
import { servicesIso } from '@/lib/services-iso'

export const metadata: Metadata = {
  title: "Nos Solutions — Rénovation Énergétique",
  description: "Isolation thermique, audit énergétique et rénovation globale. Découvrez toutes nos solutions de rénovation énergétique en Alpes-Maritimes.",
  alternates: { canonical: '/solutions/' },
}

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Solutions' }]} />
      <PageHero
        eyebrow="Nos solutions"
        title="Une approche globale pour une performance durable."
        subtitle="Nous intervenons sur tous les postes clés de votre habitat pour une efficacité maximale."
      />

      <section className="bg-[#F7F7F5] px-6 py-28 md:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="text-green text-[12px] font-bold uppercase tracking-[0.22em]">Isolation thermique</span>
            <h2 className="mb-12 mt-5 max-w-2xl text-4xl font-extrabold leading-[1.04] tracking-tightest text-[#1E1E1E] md:text-5xl">
              Des solutions d’isolation adaptées à chaque projet.
            </h2>
          </Reveal>
          <div className="mb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicesIso.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <a
                  href={`/isolation-thermique/${s.slug}/`}
                  className="group block h-full overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-2 hover:border-green/25 hover:shadow-[0_34px_100px_rgba(30,30,30,0.12)]"
                >
                  <SolutionVisual
                    label={s.titre.replace('Isolation des ', '')}
                    badge={s.prix}
                    index={i}
                    tall
                    image={SOLUTION_VISUALS[s.slug]?.image ?? null}
                    position={SOLUTION_VISUALS[s.slug]?.position ?? '50% 50%'}
                  />
                  <div className="p-6">
                    <h3 className="text-[17px] font-extrabold leading-snug text-[#1E1E1E] transition-colors duration-300 group-hover:text-green">{s.titre}</h3>
                    <p className="mt-3 text-[13px] leading-6 text-[#6A6A6A]">{s.economie}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <span className="text-green text-[12px] font-bold uppercase tracking-[0.22em]">Accompagnement</span>
            <h2 className="mb-10 mt-5 max-w-xl text-4xl font-extrabold leading-[1.04] tracking-tightest text-[#1E1E1E] md:text-5xl">Piloter le bon chantier, au bon moment.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            <Reveal delay={0.05}>
              <a href="/audit-energetique/" className="group block h-full overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-2 hover:border-green/25 hover:shadow-[0_34px_100px_rgba(30,30,30,0.12)]">
                <SolutionVisual label="Audit" badge="Première étape" index={4} image="/solutions/isolation-exterieure-card.jpg" position="45% 50%" />
                <div className="p-8">
                  <span className="text-green text-xs font-bold uppercase tracking-[0.18em]">Première étape</span>
                  <h3 className="mt-3 text-xl font-extrabold text-[#1E1E1E] transition-colors group-hover:text-green">Audit énergétique</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6A6A6A]">Diagnostic complet de votre logement, gratuit avec demande de devis.</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <a href="/renovation-energetique/" className="group block h-full overflow-hidden rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-2 hover:border-green/25 hover:shadow-[0_34px_100px_rgba(30,30,30,0.12)]">
                <SolutionVisual label="Global" badge="Projet complet" index={5} image="/hero-chantier.webp" position="58% 50%" />
                <div className="p-8">
                  <span className="text-green text-xs font-bold uppercase tracking-[0.18em]">Projet complet</span>
                  <h3 className="mt-3 text-xl font-extrabold text-[#1E1E1E] transition-colors group-hover:text-green">Rénovation globale</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6A6A6A]">Isolation, chauffage et accompagnement de A à Z, aides jusqu'à 80 000€.</p>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-green py-16 px-6 md:px-10 text-center">
        <h2 className="text-white text-2xl font-bold mb-6">Quelle solution pour votre logement ?</h2>
        <a href="/contact/" className="bg-ink hover:bg-ink/85 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-block">
          Demander un devis gratuit
        </a>
      </section>
      <Footer />
    </>
  )
}

const SOLUTION_VISUALS: Record<string, { image: string | null; position: string }> = {
  'isolation-des-combles': { image: '/solutions/isolation-murs-card.jpg', position: '42% 50%' },
  'isolation-des-murs-par-linterieur': { image: '/solutions/isolation-murs-card.jpg', position: '38% 50%' },
  'isolation-des-planchers-bas': { image: null, position: '50% 50%' },
  'isolation-des-murs-par-lexterieur': { image: '/solutions/isolation-exterieure-card.jpg', position: '42% 50%' },
}

function SolutionVisual({
  label,
  badge,
  index,
  image,
  position,
  tall = false,
}: {
  label: string
  badge: string
  index: number
  image: string | null
  position: string
  tall?: boolean
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
    <div className={`relative overflow-hidden bg-[#1E1E1E] ${tall ? 'aspect-[4/5]' : 'aspect-[16/8]'}`}>
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
      <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#1E1E1E] backdrop-blur-md">
        {badge}
      </span>
      <span className="absolute bottom-5 left-5 text-2xl font-extrabold tracking-tight text-white">
        {label}
      </span>
    </div>
  )
}
