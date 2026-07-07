import { avisReels, noteMoyenne, nombreAvis } from '@/lib/avis'
import Reveal from './Reveal'

export default function Testimonials() {
  return (
    <section className="bg-[#F7F7F5] px-6 py-32 md:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="text-green text-[12px] font-bold uppercase tracking-[0.22em]">Avis clients</span>
          <div className="mb-16 mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.03] tracking-tightest text-[#1E1E1E] md:text-6xl">
              Ils nous ont fait confiance.
            </h2>
            <p className="rounded-full border border-[#E8E8E3] bg-white px-5 py-3 text-sm font-bold text-green shadow-[0_12px_35px_rgba(30,30,30,0.045)]">
              ★★★★★ {noteMoyenne} — {nombreAvis} avis Google
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {avisReels.map((a, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <blockquote className="flex h-full flex-col rounded-[24px] border border-[#E8E8E3] bg-white p-7 shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-2 hover:border-green/25 hover:shadow-[0_34px_100px_rgba(30,30,30,0.12)]">
                <p className="mb-7 flex-1 text-[14px] leading-7 text-[#1E1E1E]/80">"{a.texte}"</p>
                <footer className="text-xs">
                  <span className="text-green">★★★★★</span>
                  <span className="mt-2 block font-bold text-[#1E1E1E]">{a.auteur}</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-[#6A6A6A]">{a.contexte}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
