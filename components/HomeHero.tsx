import Reveal from './Reveal'

const proofs = [
  { value: '15+', label: "ans d'expérience" },
  { value: '06 / 83', label: "Alpes-Maritimes & Var" },
  { value: 'RGE', label: 'qualité certifiée' },
]

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 text-white sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(63,166,107,0.16),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_38%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 pb-16 pt-10 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20 lg:pt-12">
        <div className="max-w-3xl">
          <Reveal y={18}>
            <span className="mb-5 block text-[12px] font-bold uppercase tracking-[0.22em] text-green">
              Isolation thermique & performance énergétique
            </span>
          </Reveal>

          <Reveal delay={0.08} y={20}>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tightest text-white sm:text-5xl lg:text-6xl">
              Optimisez votre habitat avec une isolation durable et mesurable.
            </h1>
          </Reveal>

          <Reveal delay={0.16} y={22}>
            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-white/60 sm:text-base">
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
            <div className="mt-12 grid max-w-2xl grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md sm:grid-cols-3">
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

        <Reveal delay={0.18} y={18} className="lg:justify-self-end">
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -inset-6 rounded-[36px] border border-white/10 bg-white/[0.03] blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#171a18] shadow-[0_32px_90px_rgba(0,0,0,0.28)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">Diagnostic thermique</div>
                  <div className="mt-1 text-sm font-bold text-white">Maison individuelle</div>
                </div>
                <div className="rounded-full bg-green/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-green">
                  Optimisée
                </div>
              </div>

              <div className="relative aspect-[1.1/1] bg-[linear-gradient(145deg,#20241f,#111412)]">
                <div className="absolute inset-6 rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
                <div className="absolute left-[18%] top-[26%] h-[46%] w-[64%] border border-white/16 bg-[#2b2d28]">
                  <div className="absolute inset-x-0 top-0 h-8 bg-[#1d201d]" />
                  <div className="absolute left-[10%] top-[30%] h-[48%] w-[24%] border border-green/35 bg-green/10" />
                  <div className="absolute right-[10%] top-[30%] h-[26%] w-[38%] border border-white/10 bg-white/10" />
                  <div className="absolute bottom-0 left-0 right-0 h-5 bg-[#171a18]" />
                </div>
                <div className="absolute left-[14%] top-[21%] h-px w-[72%] bg-green/70" />
                <div className="absolute left-[14%] top-[72%] h-px w-[72%] bg-white/20" />
                <div className="absolute right-7 top-7 rounded-full border border-green/30 bg-green/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-green">
                  -35% pertes
                </div>
                <div className="absolute bottom-7 left-7 right-7 grid grid-cols-3 gap-2">
                  <Metric value="Toiture" label="renforcée" />
                  <Metric value="Murs" label="protégés" />
                  <Metric value="DPE" label="amélioré" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink/70 px-3 py-3 backdrop-blur-md">
      <div className="text-[12px] font-bold text-white">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/40">{label}</div>
    </div>
  )
}
