'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [nom, setNom] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [cp, setCp] = useState('')
  const [service, setService] = useState('Rénovation globale')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!nom.trim()) { setError('Merci de renseigner votre nom.'); return }
    if (!tel.trim()) { setError('Merci de renseigner votre téléphone.'); return }
    if (!email.includes('@')) { setError('Merci de renseigner un e-mail valide.'); return }
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
          <h3 className="text-2xl font-semibold text-green mb-3">Demande envoyée</h3>
          <p className="text-white/60 mb-6">Un conseiller GSE vous recontactera sous 48h pour votre devis gratuit.</p>
          <a href="tel:0422138611" className="text-xl font-semibold text-white">04 22 13 86 11</a>
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
            <label className={labelClass}>Votre nom *</label>
            <input className={inputClass} value={nom} onChange={e => setNom(e.target.value)} type="text" />
          </div>
          <div>
            <label className={labelClass}>Votre téléphone *</label>
            <input className={inputClass} value={tel} onChange={e => setTel(e.target.value)} type="tel" />
          </div>
          <div>
            <label className={labelClass}>Votre e-mail *</label>
            <input className={inputClass} value={email} onChange={e => setEmail(e.target.value)} type="email" />
          </div>
          <div>
            <label className={labelClass}>Code postal</label>
            <input className={inputClass} value={cp} onChange={e => setCp(e.target.value)} type="text" />
          </div>
          <div>
            <label className={labelClass}>Service souhaité</label>
            <select className={`${inputClass} appearance-none`} value={service} onChange={e => setService(e.target.value)}>
              <option className="text-ink">Rénovation globale</option>
              <option className="text-ink">Isolation des murs par l'extérieur</option>
              <option className="text-ink">Isolation des combles</option>
              <option className="text-ink">Isolation des planchers bas</option>
              <option className="text-ink">Audit énergétique</option>
            </select>
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
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
