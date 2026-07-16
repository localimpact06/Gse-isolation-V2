import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import Quiz from '@/components/Quiz'
import { WebPageJsonLd } from '@/components/seo/PageJsonLd'

const pageTitle = "Quiz — Quel Potentiel d'Économies d'Énergie ?"
const pageDescription = "4 questions pour estimer le potentiel d'économies d'énergie de votre logement. Résultat immédiat et demande d'audit avec GSE Isolation."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/quiz/' },
}

export default function QuizPage() {
  return (
    <>
      <Header />
      <WebPageJsonLd
        path="/quiz/"
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={[{ name: 'Accueil', url: '/' }, { name: 'Quiz énergie', url: '/quiz/' }]}
      />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Quiz énergie' }]} />
      <PageHero
        eyebrow="En 1 minute"
        title="Quel est le potentiel d'économies de votre logement ?"
        subtitle="4 questions rapides pour une première estimation, sans engagement."
      />
      <section className="py-16 px-6 md:px-10">
        <Quiz />
      </section>
      <Footer />
    </>
  )
}
