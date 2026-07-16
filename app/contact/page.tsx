import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'
import { formatPhone, phoneHref } from '@/lib/company'
import { WebPageJsonLd } from '@/components/seo/PageJsonLd'

const pageTitle = "Contact — Demande de Devis"
const pageDescription = `Demandez un devis pour vos travaux de rénovation énergétique. GSE Isolation, ${formatPhone()}.`

export const metadata: Metadata = {
  title: "Contact — Demande de Devis",
  description: pageDescription,
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <WebPageJsonLd
        path="/contact/"
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={[{ name: 'Accueil', url: '/' }, { name: 'Contact', url: '/contact/' }]}
      />
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
          Ou appelez directement : <a href={phoneHref()} className="text-white font-semibold">{formatPhone()}</a>
        </p>
      </section>
      <Footer />
    </>
  )
}
