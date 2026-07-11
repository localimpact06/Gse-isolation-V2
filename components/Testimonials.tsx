import Reveal from './Reveal'

const proofCards = [
  {
    title: 'Avis certifiés',
    text: 'Les avis clients vérifiés seront intégrés après validation depuis la fiche Google Business officielle.',
  },
  {
    title: 'Références chantier',
    text: 'Des exemples de chantiers comparables peuvent être présentés lors de l’échange, selon votre type de logement.',
  },
  {
    title: 'Suivi transparent',
    text: 'Chaque projet avance avec un interlocuteur identifié, une visite technique et un devis détaillé.',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-[#F7F7F5] px-6 py-32 md:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="text-green text-[12px] font-bold uppercase tracking-[0.22em]">Preuves sociales</span>
          <div className="mb-16 mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.03] tracking-tightest text-[#1E1E1E] md:text-6xl">
              Des retours clients à afficher proprement.
            </h2>
            <p className="rounded-full border border-[#E8E8E3] bg-white px-5 py-3 text-sm font-bold text-[#1E1E1E] shadow-[0_12px_35px_rgba(30,30,30,0.045)]">
              Avis Google à valider
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proofCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-[24px] border border-[#E8E8E3] bg-white p-7 shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-2 hover:border-green/25 hover:shadow-[0_34px_100px_rgba(30,30,30,0.12)]">
                <div className="mb-8 flex gap-1 text-green" aria-hidden="true">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <h3 className="text-lg font-extrabold text-[#1E1E1E]">{card.title}</h3>
                <p className="mt-4 flex-1 text-[14px] leading-7 text-[#6A6A6A]">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
