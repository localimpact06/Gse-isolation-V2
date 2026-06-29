import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import Quiz from '@/components/Quiz'

export const metadata: Metadata = {
  title: "Quiz Gratuit — Quel Potentiel d'Économies d'Énergie ?",
  description: "4 questions pour estimer le potentiel d'économies d'énergie de votre logement. Résultat immédiat et audit gratuit avec GSE Isolation.",
  alternates: { canonical: '/quiz/' },
}

export default function QuizPage() {
  return (
    <>
      <Header />
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
