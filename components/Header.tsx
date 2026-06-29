'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/realisations/', label: 'Réalisations' },
  { href: '/solutions/', label: 'Solutions' },
  { href: '/villes/', label: 'Villes' },
  { href: '/aides-renovation-energetique/', label: 'Aides financières' },
  { href: '/quiz/', label: 'Quiz énergie' },
  { href: '/blog/', label: 'Blog' },
  { href: '/a-propos/', label: 'À propos' },
  { href: '/contact/', label: 'Contact' },
]

function NavLink(props: { href: string; label: string }) {
  return <a href={props.href} className="text-[13px] uppercase tracking-[0.12em] text-white/80 hover:text-white transition-colors">{props.label}</a>
}

function MobileNavLink(props: { href: string; label: string; onClick: () => void }) {
  return <a href={props.href} onClick={props.onClick} className="text-white text-base uppercase tracking-wide py-1">{props.label}</a>
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const headerBg = scrolled || open ? 'bg-ink/95 backdrop-blur-sm' : 'bg-transparent'

  return (
    <header className={'fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ' + headerBg}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="/" aria-label="GSE Isolation - Accueil" className="flex items-center">
          <Logo light />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map(function (l) { return <NavLink key={l.href} href={l.href} label={l.label} /> })}
        </nav>

        <div className="hidden lg:block">
          <a href="/contact/" className="bg-green hover:bg-green-dark transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.1em] px-6 py-3 rounded-full">Demander un devis</a>
        </div>

        <button aria-label="Ouvrir le menu" className="lg:hidden text-white text-2xl" onClick={function () { setOpen(!open) }}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="lg:hidden bg-ink overflow-hidden">
            <nav className="flex flex-col px-6 pb-8 gap-5">
              {links.map(function (l) { return <MobileNavLink key={l.href} href={l.href} label={l.label} onClick={function () { setOpen(false) }} /> })}
              <a href="/contact/" className="mt-3 bg-green text-white text-center text-[13px] font-semibold uppercase tracking-[0.1em] px-6 py-3 rounded-full">Demander un devis</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={light ? 'inline-block bg-white rounded-lg px-2.5 py-1.5' : 'inline-block'}>
      <img src="/logo.png" alt="GSE Isolation" width={138} height={63} className="h-9 w-auto" />
    </span>
  )
}
