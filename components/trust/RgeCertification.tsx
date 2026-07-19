import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { company } from '@/lib/company'

type RgeCertificationProps = {
  compact?: boolean
  className?: string
  href?: string
}

const rgeLogoCandidates = [
  '/rge.png',
  '/rge.webp',
  '/qualibat-rge.png',
  '/qualibat-rge.webp',
  '/certification-rge.png',
  '/certification-rge.webp',
]

const hasRgeCertification = company.certifications.some((certification) =>
  certification.toLowerCase().includes('rge'),
)

export default function RgeCertification({
  compact = false,
  className = '',
  href = '/aides-renovation-energetique/',
}: RgeCertificationProps) {
  if (!hasRgeCertification) return null

  const logo = getPublicAsset(rgeLogoCandidates)

  return (
    <aside
      className={[
        'rounded-[24px] border border-[#E8E8E3] bg-white shadow-[0_18px_70px_rgba(30,30,30,0.055)] transition-all duration-500 hover:-translate-y-1 hover:border-green/25 hover:shadow-[0_28px_90px_rgba(30,30,30,0.08)]',
        compact ? 'p-5 md:p-6' : 'p-6 md:p-8 lg:p-10',
        className,
      ].join(' ')}
      aria-label="Entreprise certifiée RGE"
    >
      <div className="flex items-start gap-5 md:gap-7">
        <div className="shrink-0">
          {logo ? (
            <img
              src={logo}
              alt="Logo certification RGE"
              loading="lazy"
              decoding="async"
              className="block h-16 w-16 rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] object-contain p-3 md:h-20 md:w-20"
            />
          ) : (
            <div
              className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-[#E8E8E3] bg-[#FAFAF8] text-center md:h-20 md:w-20"
              aria-label="Certification RGE"
            >
              <span className="text-lg font-extrabold tracking-tight text-[#1E1E1E] md:text-2xl">RGE</span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-green">Certifié</span>
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-green">
            {company.certifications.join(' · ')}
          </span>
          <h2 className={compact ? 'mt-2 text-xl font-extrabold tracking-tight text-[#1E1E1E]' : 'mt-3 text-2xl font-extrabold tracking-tight text-[#1E1E1E] md:text-3xl'}>
            Entreprise certifiée RGE
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-7 text-[#6A6A6A] md:text-[15px]">
            Une certification reconnue garantissant des travaux réalisés selon les exigences de la rénovation énergétique.
          </p>

          <ul className="mt-6 grid gap-3 text-[13px] font-semibold leading-6 text-[#1E1E1E]/78 md:grid-cols-3">
            {RGE_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 text-green" aria-hidden="true">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            href={href}
            className="mt-7 inline-flex w-fit items-center gap-3 rounded-full border border-[#E8E8E3] bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1E1E] transition-all duration-300 hover:-translate-y-0.5 hover:border-green hover:bg-green hover:text-white"
          >
            En savoir plus <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </aside>
  )
}

export function RgeTrustStrip({ className = '' }: { className?: string }) {
  const trustItems = [
    hasRgeCertification ? 'Entreprise certifiée RGE' : null,
    company.serviceAreas.length > 0 ? `Intervention ${company.serviceAreas.join(' & ')}` : null,
    'Avis Google & Trustpilot',
    'Accompagnement MaPrimeRénov’',
  ].filter((item): item is string => Boolean(item))

  if (trustItems.length === 0) return null

  return (
    <section className={['bg-[#F7F7F5] px-6 py-8 md:px-10 lg:py-10', className].join(' ')} aria-label="Preuves de confiance GSE Isolation">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 md:justify-between">
        {trustItems.map((item) => (
          <div
            key={item}
            className="inline-flex min-h-11 items-center gap-3 rounded-full border border-[#E8E8E3] bg-white px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#1E1E1E] shadow-[0_10px_30px_rgba(30,30,30,0.04)] md:px-5"
          >
            <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

const RGE_POINTS = [
  'Travaux éligibles aux aides selon les conditions en vigueur',
  'Entreprise engagée dans une démarche qualité',
  'Respect des exigences techniques',
]

function getPublicAsset(candidates: string[]) {
  return candidates.find((src) => existsSync(join(process.cwd(), 'public', src.replace(/^\//, '')))) ?? null
}
