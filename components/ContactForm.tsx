'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { company as companyInfo, formatPhone, phoneHref } from '@/lib/company'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [nom, setNom] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [cp, setCp] = useState('')
  const [service, setService] = useState('Rénovation globale')
  const [consent, setConsent] = useState(false)
  const [company, setCompany] = useState('')
  const [formStartedAt] = useState(() => Date.now())

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const elapsedMs = Date.now() - formStartedAt
    const cleanNom = nom.trim()
    const cleanTel = tel.trim()
    const cleanEmail = email.trim().toLowerCase()
    const cleanCp = cp.trim()

    if (elapsedMs < 2500) { setError('Merci de patienter quelques secondes avant d’envoyer votre demande.'); return }
    if (!nom.trim()) { setError('Merci de renseigner votre nom.'); return }
    if (!/^[\p{L}\p{M}'’.\-\s]{2,80}$/u.test(cleanNom)) { setError('Merci de renseigner un nom valide.'); return }
    if (!/^[0-9+().\s-]{8,24}$/.test(cleanTel)) { setError('Merci de renseigner un téléphone valide.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail)) { setError('Merci de renseigner un e-mail valide.'); return }
    if (cleanCp && !/^[0-9]{5}$/.test(cleanCp)) { setError('Merci de renseigner un code postal valide.'); return }
    if (!consent) { setError('Merci d’accepter le traitement de vos données pour être recontacté.'); return }
    if (company.trim()) { setError('Votre demande n’a pas pu être envoyée.'); return }
    setError('')
    setSent(true)
  }

  const inputClass = "w-full bg-transparent border-b border-white/20 focus:border-green outline-none py-3 text-white placeholder:text-white/30 transition-colors"
  const labelClass = "block text-[11px] uppercase tracking-[0.12em] text-white/40 mb-2"

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-semibold text-green mb-3">Demande prête</h3>
          <p className="text-white/60 mb-6">
            Le formulaire est validé, mais aucun service d’envoi n’est encore connecté. Contactez GSE directement pour finaliser votre demande.
          </p>
          <div className="flex flex-col gap-3">
            <a href={phoneHref()} className="text-xl font-semibold text-white">{formatPhone()}</a>
            <a
              href={`mailto:${companyInfo.email}?subject=Demande%20de%20devis%20GSE%20Isolation&body=Nom%20:%20${encodeURIComponent(nom)}%0AT%C3%A9l%C3%A9phone%20:%20${encodeURIComponent(tel)}%0AE-mail%20:%20${encodeURIComponent(email)}%0ACode%20postal%20:%20${encodeURIComponent(cp)}%0AService%20:%20${encodeURIComponent(service)}`}
              className="text-sm font-semibold text-green underline"
            >
              Envoyer par e-mail
            </a>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-6"
        >
          <div>
            <label htmlFor="nom" className={labelClass}>Votre nom *</label>
            <input id="nom" name="nom" className={inputClass} value={nom} onChange={e => setNom(e.target.value)} type="text" autoComplete="name" required minLength={2} maxLength={80} />
          </div>
          <div>
            <label htmlFor="telephone" className={labelClass}>Votre téléphone *</label>
            <input id="telephone" name="telephone" className={inputClass} value={tel} onChange={e => setTel(e.target.value)} type="tel" autoComplete="tel" required minLength={8} maxLength={24} />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Votre e-mail *</label>
            <input id="email" name="email" className={inputClass} value={email} onChange={e => setEmail(e.target.value)} type="email" autoComplete="email" required maxLength={120} />
          </div>
          <div>
            <label htmlFor="code-postal" className={labelClass}>Code postal</label>
            <input id="code-postal" name="code-postal" className={inputClass} value={cp} onChange={e => setCp(e.target.value)} type="text" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{5}" maxLength={5} />
          </div>
          <div className="hidden" aria-hidden="true">
            <label>Entreprise</label>
            <input name="entreprise" value={company} onChange={e => setCompany(e.target.value)} type="text" tabIndex={-1} autoComplete="off" />
          </div>
          <div>
            <label htmlFor="service" className={labelClass}>Service souhaité</label>
            <select id="service" name="service" className={`${inputClass} appearance-none`} value={service} onChange={e => setService(e.target.value)}>
              <option className="text-ink">Rénovation globale</option>
              <option className="text-ink">Isolation des murs par l'extérieur</option>
              <option className="text-ink">Isolation des combles</option>
              <option className="text-ink">Isolation des planchers bas</option>
              <option className="text-ink">Audit énergétique</option>
            </select>
          </div>
          <label className="flex items-start gap-3 text-left text-xs leading-6 text-white/50">
            <input
              type="checkbox"
              checked={consent}
              onChange={e => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-white/20 accent-green"
              required
            />
            <span>
              J’accepte que GSE Isolation utilise ces informations pour me recontacter au sujet de ma demande de devis. Voir la{' '}
              <a href="/confidentialite/" className="text-green underline">politique de confidentialité</a>.
            </span>
          </label>
          {error && <p role="alert" className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green hover:bg-green-dark transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.12em] py-4 rounded-full mt-2"
          >
            Obtenir mon devis gratuit
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
