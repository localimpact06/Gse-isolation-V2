import Reveal from './Reveal'

const proofs = [
  { value: '15+', label: "ans d'expérience" },
  { value: '06 / 83', label: "Alpes-Maritimes & Var" },
  { value: 'RGE', label: 'qualité certifiée' },
]

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-28 text-white sm:pt-32 lg:pt-36">
      <img
        src="/hero-chantier.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full scale-[1.04] select-none object-cover animate-[heroZoom_28s_ease-in-out_infinite_alternate]"
        style={{ objectPosition: '70% center' }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.40)_38%,rgba(0,0,0,0.35)_58%,rgba(0,0,0,0.12)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 pb-16 pt-10 md:px-10 lg:min-h-[760px] lg:pb-20 lg:pt-12">
        <div className="max-w-3xl">
          <Reveal y={18}>
            <span className="mb-5 block text-[12px] font-bold uppercase tracking-[0.22em] text-green">
              Isolation thermique & performance énergétique
            </span>
          </Reveal>

          <Reveal delay={0.08} y={20}>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tightest text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-6xl">
              Optimisez votre habitat avec une isolation durable et mesurable.
            </h1>
          </Reveal>

          <Reveal delay={0.16} y={22}>
            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/80 drop-shadow-[0_2px_12px_rgba(0,0,0,0.28)] sm:text-base">
              GSE Isolation accompagne les particuliers des Alpes-Maritimes et du Var avec des solutions sobres,
              performantes et adaptées aux contraintes de chaque maison.
            </p>
          </Reveal>

          <Reveal delay={0.24} y={22}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact/"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-green px-7 text-[13px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_18px_42px_rgba(63,166,107,0.26)] transition-colors hover:bg-green-dark"
              >
                Demander un devis
              </a>
              <a
                href="/realisations/"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/20 px-7 text-[13px] font-bold uppercase tracking-[0.1em] text-white/90 transition-colors hover:border-white/40 hover:text-white"
              >
                Voir nos réalisations
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32} y={18}>
            <div className="mt-12 grid max-w-2xl grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-ink/40 backdrop-blur-md sm:grid-cols-3">
              {proofs.map(function (proof) {
                return (
                  <div key={proof.label} className="border-b border-white/10 px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                    <div className="text-xl font-extrabold tracking-tight text-white">{proof.value}</div>
                    <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">{proof.label}</div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.04); }
          to { transform: scale(1.05); }
        }
      `}</style>
    </section>
  )
}
