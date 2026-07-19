import Reveal from './Reveal'
import { company } from '@/lib/company'
import { googleReviews, nombreAvis, noteMoyenne, trustpilotReviews, type CustomerReview } from '@/lib/avis'

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
          {googleReviews.map((review, i) => (
            <Reveal key={`${review.author}-${review.service}`} delay={i * 0.08}>
              <ReviewCard review={review} showStars />
            </Reveal>
          ))}
        </div>

        {company.googleReviewsUrl ? (
          <div className="mt-10">
            <a
              href={company.googleReviewsUrl}
              className="inline-flex items-center gap-3 rounded-full border border-[#E8E8E3] bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1E1E] transition-all duration-300 hover:-translate-y-0.5 hover:border-green hover:bg-green hover:text-white"
            >
              Voir tous nos avis Google <span aria-hidden="true">→</span>
            </a>
          </div>
        ) : null}

        {trustpilotReviews.length > 0 ? (
          <div className="mt-20 rounded-[24px] border border-[#E8E8E3] bg-[#FAFAF8] p-5 shadow-[0_18px_70px_rgba(30,30,30,0.04)] md:p-8">
            <Reveal>
              <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="text-green text-[12px] font-bold uppercase tracking-[0.22em]">Trustpilot</span>
                  <h3 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tightest text-[#1E1E1E] md:text-4xl">
                    Ils parlent également de nous sur Trustpilot.
                  </h3>
                </div>
                {company.trustpilotUrl ? (
                  <a
                    href={company.trustpilotUrl}
                    className="inline-flex w-fit items-center gap-3 rounded-full border border-[#E8E8E3] bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1E1E] transition-all duration-300 hover:-translate-y-0.5 hover:border-green hover:bg-green hover:text-white"
                  >
                    Voir tous nos avis sur Trustpilot <span aria-hidden="true">→</span>
                  </a>
                ) : null}
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {trustpilotReviews.map((review, i) => (
                <Reveal key={`${review.author}-${review.city}`} delay={i * 0.08}>
                  <ReviewCard review={review} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function ReviewCard({ review, showStars = false }: { review: CustomerReview; showStars?: boolean }) {
  const sourceLabel = review.source === 'google' ? 'Avis Google' : 'Avis publié sur Trustpilot'
  const details = [review.service, review.city].filter(Boolean).join(' · ')

  return (
    <blockquote className="flex h-full flex-col rounded-[24px] border border-[#E8E8E3] bg-white p-7 shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-2 hover:border-green/25 hover:shadow-[0_34px_100px_rgba(30,30,30,0.12)]">
      <div className="mb-7 flex items-center justify-between gap-4">
        {showStars ? (
          <div className="flex gap-1 text-green" aria-hidden="true">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        ) : (
          <span className="h-px flex-1 bg-[#E8E8E3]" aria-hidden="true" />
        )}
        <span className="rounded-full border border-[#E8E8E3] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#6A6A6A]">
          {sourceLabel}
        </span>
      </div>
      <p className="flex-1 text-[14px] leading-7 text-[#1E1E1E]/80">"{review.content}"</p>
      <footer className="mt-7 text-xs">
        <span className="block font-bold text-[#1E1E1E]">{review.author}</span>
        {details ? (
          <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-[#6A6A6A]">{details}</span>
        ) : null}
      </footer>
    </blockquote>
  )
}
