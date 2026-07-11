'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type WindowWithGtag = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}

export default function CookieBanner({ gaId }: { gaId?: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('gse-cookies-accepted')
    if (!accepted) setVisible(true)
    if (accepted === 'true') loadAnalytics()
  }, [gaId])

  function loadAnalytics() {
    if (!gaId || typeof window === 'undefined') return
    const win = window as WindowWithGtag
    if (win.gtag) return

    win.dataLayer = win.dataLayer || []
    win.gtag = function gtag() {
      win.dataLayer?.push(arguments)
    }

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`
    document.head.appendChild(script)

    win.gtag('js', new Date())
    win.gtag('config', gaId, { anonymize_ip: true })
  }

  function accept() {
    localStorage.setItem('gse-cookies-accepted', 'true')
    setVisible(false)
    loadAnalytics()
  }

  function refuse() {
    localStorage.setItem('gse-cookies-accepted', 'false')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-[9999] bg-ink/95 backdrop-blur-sm text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-white/60 flex-1">
            Ce site peut utiliser des cookies de mesure d’audience après votre accord. Aucun cookie publicitaire n’est déposé.{' '}
            <a href="/confidentialite/" className="text-green underline">En savoir plus</a>
          </p>
          <div className="flex gap-3">
            <button
              onClick={refuse}
              className="rounded-full border border-white/15 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70 transition-colors hover:text-white"
            >
              Refuser
            </button>
            <button
              onClick={accept}
              className="bg-green hover:bg-green-dark transition-colors text-white text-[11px] font-semibold uppercase tracking-[0.1em] px-5 py-2.5 rounded-full whitespace-nowrap"
            >
              Accepter
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
