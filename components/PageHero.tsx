import Reveal from './Reveal'

export default function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-ink pt-40 pb-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <span className="text-green text-[12px] uppercase tracking-[0.2em] block mb-4">{eyebrow}</span>
          <h1 className="text-white font-extrabold text-3xl md:text-5xl tracking-tightest max-w-3xl">{title}</h1>
          {subtitle && <p className="text-white/50 text-[15px] mt-5 max-w-xl">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  )
}
