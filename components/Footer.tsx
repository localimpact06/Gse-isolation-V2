import { Logo } from './Header'
import CookieSettingsButton from './CookieSettingsButton'
import { company, formatAddress, formatPhone, phoneHref } from '@/lib/company'

export default function Footer() {
  const legalNumber = company.siret ? `SIRET ${company.siret}` : company.siren ? `SIREN ${company.siren}` : null

  return (
    <footer className="bg-ink text-white/70 pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <Logo light />
            <p className="mt-6 text-sm leading-relaxed text-white/50 max-w-xs">
              Rénovation énergétique en Alpes-Maritimes et Var. Isolation, audit et accompagnement administratif selon votre projet.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.15em] mb-5">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/solutions/" className="hover:text-white transition-colors">Toutes nos solutions</a></li>
              <li><a href="/renovation-energetique/" className="hover:text-white transition-colors">Rénovation globale</a></li>
              <li><a href="/audit-energetique/" className="hover:text-white transition-colors">Audit énergétique</a></li>
              <li><a href="/aides-renovation-energetique/" className="hover:text-white transition-colors">Aides &amp; financement</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.15em] mb-5">Entreprise</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/realisations/" className="hover:text-white transition-colors">Réalisations</a></li>
              <li><a href="/a-propos/" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="/mentions-legales/" className="hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="/confidentialite/" className="hover:text-white transition-colors">Confidentialité</a></li>
              <li><CookieSettingsButton /></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.15em] mb-5">Contact</h4>
            <p className="text-sm leading-relaxed mb-4">{formatAddress()}</p>
            <a href={phoneHref()} className="text-white text-lg font-semibold block mb-1">{formatPhone()}</a>
            <a href={`mailto:${company.email}`} className="text-sm text-white/55 transition-colors hover:text-white">{company.email}</a>
            <a
              href="/contact/"
              className="mt-6 inline-block bg-green hover:bg-green-dark transition-colors text-white text-[12px] font-semibold uppercase tracking-[0.1em] px-5 py-3 rounded-full"
            >
              Demander un devis
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <span>© 2026 {company.tradeName}{legalNumber ? ` — ${legalNumber}` : ''}</span>
          <span>{company.serviceAreas.join(' · ')}</span>
        </div>
      </div>
    </footer>
  )
}
