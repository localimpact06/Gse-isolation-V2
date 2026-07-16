'use client'

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('gse:open-cookie-settings'))}
      className="text-left transition-colors hover:text-white"
    >
      Gérer mes cookies
    </button>
  )
}
