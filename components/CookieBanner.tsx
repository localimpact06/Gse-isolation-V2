'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type WindowWithGtag = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}

type CookieConsent = {
  necessary: true
  analytics: boolean
  decidedAt: string
}

const CONSENT_KEY = 'gse-cookie-consent-v1'

export default function CookieBanner({ gaId }: { gaId?: string }) {
  const [visible, setVisible] = useState(false)
  const [customize, setCustomize] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)

  useEffect(() => {
    const consent = getStoredConsent()
    if (!consent) {
      setVisible(true)
      return
    }

    setAnalyticsEnabled(consent.analytics)
    if (consent.analytics) loadAnalytics()
  }, [gaId])

  useEffect(() => {
    function openSettings() {
      const consent = getStoredConsent()
      setAnalyticsEnabled(Boolean(consent?.analytics))
      setCustomize(true)
      setVisible(true)
    }

    window.addEventListener('gse:open-cookie-settings', openSettings)
    return () => window.removeEventListener('gse:open-cookie-settings', openSettings)
  }, [])

  function getStoredConsent(): CookieConsent | null {
    if (typeof window === 'undefined') return null
    try {
      const raw = localStorage.getItem(CONSENT_KEY)
      if (!raw) return null
      const parsed = JSON.parse(raw) as CookieConsent
      return typeof parsed.analytics === 'boolean' ? parsed : null
    } catch {
      localStorage.removeItem(CONSENT_KEY)
      return null
    }
  }

  function saveConsent(analytics: boolean) {
    const consent: CookieConsent = {
      necessary: true,
      analytics,
      decidedAt: new Date().toISOString(),
    }

    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
    localStorage.removeItem('gse-cookies-accepted')
    setAnalyticsEnabled(analytics)
    setVisible(false)
    setCustomize(false)

    if (analytics) loadAnalytics()
    else disableAnalytics()
  }

  function loadAnalytics() {
    if (!gaId || typeof window === 'undefined') return
    const win = window as WindowWithGtag
    setAnalyticsDisabled(false)

    if (win.gtag) {
      win.gtag('consent', 'update', { analytics_storage: 'granted' })
      win.gtag('config', gaId, { anonymize_ip: true })
      return
    }

    win.dataLayer = win.dataLayer || []
    win.gtag = function gtag() {
      win.dataLayer?.push(arguments)
    }

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`
    document.head.appendChild(script)

    win.gtag('consent', 'default', { analytics_storage: 'granted' })
    win.gtag('js', new Date())
    win.gtag('config', gaId, { anonymize_ip: true })
  }

  function disableAnalytics() {
    if (typeof window === 'undefined') return
    const win = window as WindowWithGtag
    setAnalyticsDisabled(true)
    win.gtag?.('consent', 'update', { analytics_storage: 'denied' })
    clearAnalyticsCookies()
  }

  function setAnalyticsDisabled(disabled: boolean) {
    if (!gaId || typeof window === 'undefined') return
    const win = window as unknown as Record<string, boolean>
    win[`ga-disable-${gaId}`] = disabled
  }

  function clearAnalyticsCookies() {
    const names = document.cookie
      .split(';')
      .map((cookie) => cookie.split('=')[0]?.trim())
      .filter((name): name is string => Boolean(name && (name === '_ga' || name === '_gid' || name === '_gat' || name.startsWith('_ga_'))))

    for (const name of names) {
      document.cookie = `${name}=; Max-Age=0; path=/`
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${window.location.hostname}`
    }
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
          <div className="flex-1">
            <p className="text-xs text-white/65">
              Ce site peut utiliser des cookies de mesure d’audience uniquement après votre accord. Aucun cookie publicitaire n’est déposé.{' '}
              <a href="/confidentialite/#cookies" className="text-green underline">En savoir plus</a>
            </p>
            {customize && (
              <label className="mt-4 flex items-start gap-3 text-xs text-white/70">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-white/20 accent-green"
                />
                <span>Autoriser les cookies de mesure d’audience Google Analytics.</span>
              </label>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {customize ? (
              <button
                onClick={() => saveConsent(analyticsEnabled)}
                className="rounded-full bg-green px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-green-dark"
              >
                Enregistrer
              </button>
            ) : (
              <button
                onClick={() => setCustomize(true)}
                className="rounded-full border border-white/25 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-white/50"
              >
                Personnaliser
              </button>
            )}
            <button
              onClick={() => saveConsent(false)}
              className="rounded-full border border-white/25 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-white/50"
            >
              Refuser
            </button>
            <button
              onClick={() => saveConsent(true)}
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
