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

const easing = [0.22, 1, 0.36, 1]

function NavLink({ href, label, light }: { href: string; label: string; light: boolean }) {
  return (
    <motion.a
      href={href}
      className={
        'group relative flex h-9 items-center whitespace-nowrap px-1.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 ' +
        (light ? 'text-white/80 hover:text-white' : 'text-ink/70 hover:text-ink')
      }
      whileHover={{ y: -1 }}
      transition={{ duration: 0.22, ease: easing }}
    >
      {label}
      <span
        className={
          'absolute bottom-1 left-1.5 right-1.5 h-px origin-center scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100 ' +
          (light ? 'bg-white/75' : 'bg-green')
        }
      />
    </motion.a>
  )
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="group flex items-center justify-between border-b border-white/10 py-4 text-[15px] font-bold uppercase tracking-[0.12em] text-white/86 transition-colors hover:text-white"
      variants={{
        closed: { opacity: 0, x: -14 },
        open: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.26, ease: easing }}
    >
      <span>{label}</span>
      <span className="h-1.5 w-1.5 rounded-full bg-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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

  const elevated = scrolled || open
  const light = !elevated

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 xl:px-8">
      <motion.div
        className={
          'mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-full border px-4 transition-all duration-500 sm:h-[74px] sm:px-5 xl:px-6 ' +
          (elevated
            ? 'border-white/70 bg-white/[.78] text-ink shadow-[0_18px_60px_rgba(18,18,18,0.14)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/70'
            : 'border-white/[.12] bg-ink/10 text-white shadow-[0_18px_60px_rgba(0,0,0,0.10)] backdrop-blur-md')
        }
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: easing }}
      >
        <a href="/" aria-label="GSE Isolation - Accueil" className="flex shrink-0 items-center">
          <Logo light={light} />
        </a>

        <motion.nav
          aria-label="Navigation principale"
          className={
            'mx-4 hidden min-w-0 flex-1 items-center justify-center rounded-full border px-4 py-1.5 backdrop-blur-xl xl:flex ' +
            (light ? 'border-white/10 bg-white/[.08]' : 'border-ink/5 bg-white/[.42]')
          }
          initial="closed"
          animate="open"
          variants={{
            closed: { opacity: 0 },
            open: { opacity: 1, transition: { staggerChildren: 0.035, delayChildren: 0.08 } },
          }}
        >
          <div className="flex w-full items-center justify-center gap-3 2xl:gap-5">
            {links.map(function (link) {
              return <NavLink key={link.href} href={link.href} label={link.label} light={light} />
            })}
          </div>
        </motion.nav>

        <div className="hidden shrink-0 items-center xl:flex">
          <motion.a
            href="/contact/"
            className="group relative isolate overflow-hidden rounded-full bg-ink px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_14px_34px_rgba(18,18,18,0.18)] transition-colors hover:bg-green-dark 2xl:px-6"
            whileHover={{ y: -2, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.22, ease: easing }}
          >
            <span className="absolute inset-y-0 -left-10 -z-10 w-10 skew-x-[-18deg] bg-white/25 opacity-0 blur-sm transition-all duration-500 group-hover:left-[115%] group-hover:opacity-100" />
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
            'relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 xl:hidden ' +
            (elevated ? 'border-ink/10 bg-ink text-white' : 'border-white/20 bg-white/10 text-white')
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
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-ink/95 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-2xl xl:hidden"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.28, ease: easing }}
          >
            <motion.nav
              aria-label="Navigation mobile"
              className="flex max-h-[calc(100vh-110px)] flex-col overflow-y-auto px-5 pb-5 pt-2 sm:px-6"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                closed: { opacity: 0 },
                open: { opacity: 1, transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
              }}
            >
              {links.map(function (link) {
                return (
                  <MobileNavLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    onClick={function () {
                      setOpen(false)
                    }}
                  />
                )
              })}
              <motion.a
                href="/contact/"
                onClick={function () {
                  setOpen(false)
                }}
                className="mt-5 rounded-full bg-green px-6 py-4 text-center text-[13px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_42px_rgba(63,166,107,0.28)] transition-colors hover:bg-green-dark"
                variants={{
                  closed: { opacity: 0, y: 10 },
                  open: { opacity: 1, y: 0 },
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.26, ease: easing }}
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
