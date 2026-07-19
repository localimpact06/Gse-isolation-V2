import type { Metadata } from 'next'
import { villes, getVille } from '@/lib/villes'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import ContentSection from '@/components/ContentSection'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/seo/JsonLd'
import { ServiceJsonLd, WebPageJsonLd } from '@/components/seo/PageJsonLd'

export function generateStaticParams() {
  return villes.map(v => ({ ville: v.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville } = await params
  const v = getVille(ville)
  if (!v) return {}
  return {
    title: `Rénovation énergétique à ${v.nom}`,
    description: `Isolation thermique, audit énergétique et rénovation globale à ${v.nom}. Aides étudiées selon votre éligibilité avec GSE Isolation.`,
    alternates: { canonical: `/renovation-energetique/${v.slug}/` },
  }
}

export default async function VillePage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params
  const v = getVille(ville)
  if (!v) notFound()

  const autres = villes.filter(w => w.slug !== v.slug).slice(0, 6)
  const pagePath = `/renovation-energetique/${v.slug}/`
  const pageTitle = `Rénovation énergétique à ${v.nom}`
  const pageDescription = `Isolation thermique, audit énergétique et rénovation globale à ${v.nom}. Aides étudiées selon votre éligibilité avec GSE Isolation.`
  const faq = [
    {
      question: `Combien coûtent les travaux à ${v.nom} ?`,
      answer: 'Cela dépend de la surface, du type de bien et des travaux retenus. Un devis personnalisé est établi après échange et visite technique lorsque le projet le nécessite.',
    },
    {
      question: 'Quels délais pour les travaux ?',
      answer: 'Les délais dépendent de la disponibilité des équipes, de la validation du devis, des démarches administratives et de la nature des travaux.',
    },
    {
      question: `Puis-je cumuler plusieurs aides pour mon projet à ${v.nom} ?`,
      answer: "MaPrimeRénov', les CEE, la TVA réduite et l'Éco-PTZ peuvent être étudiés selon votre situation et les conditions officielles en vigueur.",
    },
    {
      question: `Intervenez-vous à ${v.nom} ?`,
      answer: `GSE Isolation intervient dans le secteur de ${v.nom} depuis son implantation à La Turbie, selon la faisabilité et le planning des équipes.`,
    },
  ]

  return (
    <>
      <Header />
      <WebPageJsonLd
        path={pagePath}
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={[{ name: 'Accueil', url: '/' }, { name: 'Rénovation énergétique', url: '/renovation-energetique/' }, { name: v.nom, url: pagePath }]}
      />
      <ServiceJsonLd
        path={pagePath}
        name={`Rénovation énergétique à ${v.nom}`}
        description={pageDescription}
        serviceType="Rénovation énergétique"
        areaServed={v.nom}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />

      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Rénovation énergétique', href: '/renovation-energetique/' }, { label: v.nom }]} />
      <PageHero eyebrow="Rénovation énergétique" title={`${v.nom}`} subtitle={`Isolation, audit énergétique et rénovation globale à ${v.nom} — aides étudiées selon votre projet`} />

      <ContentSection>
        <h2>Nos services de rénovation énergétique à {v.nom}</h2>
        <p>
          GSE Isolation intervient à {v.nom} pour vous accompagner dans tous vos travaux de rénovation énergétique :{' '}
          <a href="/isolation-thermique/">isolation thermique</a> des murs, combles et planchers,{' '}
          <a href="/renovation-energetique/">rénovation énergétique globale</a> et{' '}
          <a href="/audit-energetique/">audit énergétique</a>.
          Notre équipe locale, basée à La Turbie, se déplace dans tout le secteur de {v.nom} pour évaluer votre projet et vous accompagner de A à Z.
        </p>

        <h2>Isolation thermique à {v.nom} : nos prix</h2>
        <p>
          À {v.nom} comme partout dans notre zone d'intervention, nous proposons trois solutions principales d'isolation :{' '}
          <a href="/isolation-thermique/isolation-des-murs-par-lexterieur/">l'isolation des murs par l'extérieur</a>,{' '}
          <a href="/isolation-thermique/isolation-des-combles/">l'isolation des combles</a>, et{' '}
          <a href="/isolation-thermique/isolation-des-planchers-bas/">l'isolation des planchers bas</a>.
          Pour les logements en copropriété ou les façades classées de {v.nom}, nous proposons également une{' '}
          <a href="/isolation-thermique/isolation-des-murs-par-linterieur/">isolation par l'intérieur</a> sur devis.
        </p>

        <h2>Quartiers desservis</h2>
        <p>Nous intervenons dans l'ensemble des quartiers de {v.nom}, notamment {v.quartiers}, ainsi que dans les zones résidentielles environnantes.</p>

        <h2>Spécificités climatiques locales</h2>
        <p>{v.climat}</p>

        <h2>Le bâti à {v.nom}</h2>
        <p>{v.habitat}</p>

        <h2>Comment se déroule un chantier à {v.nom} ?</h2>
        <p>
          <strong>1. Validation du projet</strong> — un conseiller GSE vous contacte par téléphone pour s'assurer de la pertinence de votre projet à {v.nom}.<br />
          <strong>2. Visite technique</strong> — un technicien expert se déplace chez vous pour vérifier la faisabilité des travaux et prendre les mesures nécessaires.<br />
          <strong>3. Signature du devis</strong> — un chargé de projet dédié réalise pour vous toutes les démarches d'obtention de vos aides.<br />
          <strong>4. Travaux réalisés</strong> — nous planifions une date et réalisons les travaux dans les délais prévus, avec un chantier propre et respectueux de votre logement.
        </p>

        <h2>Aides disponibles à {v.nom}</h2>
        <p>
          Les propriétaires de {v.nom} peuvent faire étudier plusieurs dispositifs selon leur profil : <strong>MaPrimeRénov'</strong>,{' '}
          <strong>CEE</strong>, <strong>TVA réduite</strong> et <strong>Éco-prêt à taux zéro</strong>.
          GSE Isolation vous accompagne dans les démarches administratives, de la simulation initiale au suivi du dossier.
        </p>

        <h2>Pourquoi choisir GSE Isolation à {v.nom} ?</h2>
        <p>
          GSE Isolation met l’accent sur la visite technique, le devis détaillé, le suivi du dossier d’aides et la qualité d’exécution du chantier.
          GSE Isolation dispose du label RGE - Reconnu Garant de l’environnement et de la qualification QUALIBAT-RGE. Les garanties et assurances applicables sont précisées sur les documents contractuels remis au client.
        </p>

        <h2>Avis clients</h2>
        <p>
          Les avis publiés et références chantier sont à consulter depuis les supports officiels de l’entreprise ou à demander lors de l’échange commercial.
          Aucun témoignage nominatif n’est affiché ici sans validation explicite.
        </p>

        <h2>Questions fréquentes sur la rénovation énergétique à {v.nom}</h2>
        {faq.map((item) => (
          <p key={item.question}><strong>{item.question}</strong><br />{item.answer}</p>
        ))}

        <h2>Autres villes à proximité</h2>
        <p>
          {autres.map((a, i) => (
            <span key={a.slug}>
              <a href={`/renovation-energetique/${a.slug}/`}>{a.nom}</a>
              {i < autres.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
      </ContentSection>

      <section className="bg-green py-16 px-6 md:px-10 text-center">
        <h2 className="text-white text-2xl font-bold mb-6">Demandez votre devis gratuit à {v.nom}</h2>
        <a href="/contact/" className="bg-ink hover:bg-ink/85 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-block">
          Devis gratuit {v.nom}
        </a>
      </section>

      <Footer />
    </>
  )
}
