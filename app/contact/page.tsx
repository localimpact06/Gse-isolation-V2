import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: "Contact — Devis Gratuit en 48h",
  description: "Demandez votre devis gratuit pour vos travaux de rénovation énergétique. Réponse sous 48h. GSE Isolation, 04 22 13 86 11.",
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Contact' }]} />
      <section className="bg-ink pt-16 pb-28 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Reveal>
            <span className="text-green text-[12px] uppercase tracking-[0.2em] block mb-4">Estimez vos aides en 2 minutes</span>
            <h1 className="text-white font-extrabold text-3xl md:text-5xl tracking-tightest mb-5">
              Demandez votre devis gratuit
            </h1>
            <p className="text-white/50 text-[15px]">Remplissez ce court formulaire afin d'obtenir votre devis gratuit, sans engagement.</p>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
        <p className="text-center mt-12 text-sm text-white/40">
          Ou appelez directement : <a href="tel:0422138611" className="text-white font-semibold">04 22 13 86 11</a>
        </p>
      </section>
      <Footer />
    </>
  )
}
