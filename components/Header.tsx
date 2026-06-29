'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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

const navItem = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
}

function NavLink(props: { href: string; label: string; light: boolean }) {
  return (
    <motion.a
      href={props.href}
      className={
        'group relative whitespace-nowrap px-1 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ' +
        (props.light ? 'text-white/80 hover:text-white' : 'text-ink/70 hover:text-ink')
      }
      variants={navItem}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      {props.label}
      <span
        className={
          'absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full ' +
          (props.light ? 'bg-white/80' : 'bg-green')
        }
      />
    </motion.a>
  )
}

function MobileNavLink(props: { href: string; label: string; onClick: () => void }) {
  return (
    <motion.a
      href={props.href}
      onClick={props.onClick}
      className="group flex items-center justify-between border-b border-white/10 py-4 text-[15px] font-semibold uppercase tracking-[0.12em] text-white/90 transition-colors hover:text-white"
      variants={{
        initial: { opacity: 0, x: -12 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -8 },
      }}
    >
      {props.label}
      <span className="h-1.5 w-1.5 rounded-full bg-green opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.a>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open
  const light = !solid

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
      <motion.div
        className={
          'mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-full border px-4 shadow-[0_18px_55px_rgba(0,0,0,0.12)] transition-colors duration-500 sm:h-[74px] sm:px-5 lg:px-6 ' +
          (solid
            ? 'border-white/70 bg-white/75 text-ink backdrop-blur-2xl supports-[backdrop-filter]:bg-white/70'
            : 'border-white/10 bg-ink/10 text-white backdrop-blur-md')
        }
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="/" aria-label="GSE Isolation - Accueil" className="flex shrink-0 items-center">
          <Logo />
        </a>

        <motion.nav
          aria-label="Navigation principale"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.035, delayChildren: 0.12 }}
        >
          {links.map(function (link) {
            return <NavLink key={link.href} href={link.href} label={link.label} light={light} />
          })}
        </motion.nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <motion.a
            href="/contact/"
            className="group relative isolate overflow-hidden rounded-full bg-ink px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_14px_34px_rgba(18,18,18,0.18)] transition-colors hover:bg-green-dark xl:px-6"
            whileHover={{ y: -2, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.22),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            Demander un devis
          </motion.a>
        </div>

        <motion.button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={function () {
            setOpen(!open)
          }}
          className={
            'relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden ' +
            (solid ? 'border-ink/10 bg-ink text-white' : 'border-white/20 bg-white/10 text-white')
          }
          whileTap={{ scale: 0.94 }}
        >
          <span className="sr-only">Menu</span>
          <span
            className={
              'absolute h-px w-5 rounded-full bg-current transition-transform duration-300 ' +
              (open ? 'translate-y-0 rotate-45' : '-translate-y-1.5 rotate-0')
            }
          />
          <span className={'absolute h-px w-5 rounded-full bg-current transition-opacity duration-200 ' + (open ? 'opacity-0' : 'opacity-100')} />
          <span
            className={
              'absolute h-px w-5 rounded-full bg-current transition-transform duration-300 ' +
              (open ? 'translate-y-0 -rotate-45' : 'translate-y-1.5 rotate-0')
            }
          />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-ink/95 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.nav
              aria-label="Navigation mobile"
              className="flex max-h-[calc(100vh-110px)] flex-col overflow-y-auto px-5 pb-5 pt-2 sm:px-6"
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ staggerChildren: 0.045, delayChildren: 0.05 }}
            >
              {links.map(function (link) {
                return <MobileNavLink key={link.href} href={link.href} label={link.label} onClick={function () { setOpen(false) }} />
              })}
              <motion.a
                href="/contact/"
                onClick={function () {
                  setOpen(false)
                }}
                className="mt-5 rounded-full bg-green px-6 py-4 text-center text-[13px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_42px_rgba(63,166,107,0.28)] transition-colors hover:bg-green-dark"
                variants={{
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 8 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Demander un devis
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Logo({ light = false }: { light?: boolean }) {
  const shadow = light ? 'shadow-[0_10px_28px_rgba(0,0,0,0.08)]' : 'shadow-[0_8px_22px_rgba(0,0,0,0.06)]'

  return (
    <span className={'inline-flex items-center rounded-2xl bg-white px-2.5 py-1.5 ' + shadow}>
      <img src="/logo.png" alt="GSE Isolation" width={138} height={63} className="h-9 w-auto sm:h-10" />
    </span>
  )
}
