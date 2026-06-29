'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('gse-cookies-accepted')
    if (!accepted) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('gse-cookies-accepted', 'true')
    setVisible(false)
    // @ts-ignore
    if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'granted' })
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
            Ce site utilise des cookies pour améliorer votre expérience et mesurer l'audience.{' '}
            <a href="/confidentialite/" className="text-green underline">En savoir plus</a>
          </p>
          <button
            onClick={accept}
            className="bg-green hover:bg-green-dark transition-colors text-white text-[11px] font-semibold uppercase tracking-[0.1em] px-5 py-2.5 rounded-full whitespace-nowrap"
          >
            Accepter
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
