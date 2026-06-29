import { avisReels, noteMoyenne, nombreAvis } from '@/lib/avis'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section className="bg-paper py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-green text-[12px] uppercase tracking-[0.2em]">Avis clients</span>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-14">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tightest max-w-2xl">
              Ils nous ont fait confiance.
            </h2>
            <p className="text-green font-semibold text-sm">★★★★★ {noteMoyenne} — {nombreAvis} avis Google</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avisReels.map((a, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <blockquote className="border border-ink/10 rounded-2xl p-7 h-full flex flex-col">
                <p className="text-[14px] leading-relaxed text-ink/80 mb-5 flex-1">"{a.texte}"</p>
                <footer className="text-xs">
                  <span className="text-green">★★★★★</span>
                  <span className="block font-semibold text-ink mt-1">{a.auteur}</span>
                  <span className="block uppercase tracking-wide text-ink/40 text-[10px] mt-0.5">{a.contexte}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
