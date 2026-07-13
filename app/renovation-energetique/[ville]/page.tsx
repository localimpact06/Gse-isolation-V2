import type { Metadata } from 'next'
import { villes, getVille } from '@/lib/villes'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import ContentSection from '@/components/ContentSection'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return villes.map(v => ({ ville: v.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville } = await params
  const v = getVille(ville)
  if (!v) return {}
  return {
    title: `Rénovation Énergétique à ${v.nom} — GSE Isolation`,
    description: `Isolation thermique, audit énergétique et rénovation globale à ${v.nom}. Aides étudiées selon votre éligibilité. Devis gratuit GSE Isolation.`,
    alternates: { canonical: `/renovation-energetique/${v.slug}/` },
  }
}

export default async function VillePage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params
  const v = getVille(ville)
  if (!v) notFound()

  const autres = villes.filter(w => w.slug !== v.slug).slice(0, 6)

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        "name": `Rénovation énergétique à ${v.nom}`,
        "provider": { "@type": "LocalBusiness", "name": "GSE Isolation" },
        "areaServed": v.nom, "serviceType": "Rénovation énergétique",
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": `Combien coûtent les travaux à ${v.nom} ?`, "acceptedAnswer": { "@type": "Answer", "text": "Cela dépend de la surface et du type de bien. Un conseiller GSE propose un devis gratuit et personnalisé après une visite technique." } },
          { "@type": "Question", "name": "Quels délais pour les travaux ?", "acceptedAnswer": { "@type": "Answer", "text": "Audit sous une semaine, montage des démarches d'aides en 2 à 3 semaines, puis travaux planifiés selon votre disponibilité." } },
        ]
      }) }} />

      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Rénovation énergétique', href: '/renovation-energetique/' }, { label: v.nom }]} />
      <PageHero eyebrow="Rénovation énergétique" title={`${v.nom}`} subtitle={`Isolation, audit énergétique et rénovation globale à ${v.nom} — aides étudiées selon votre projet`} />

      <ContentSection>
        <h2>Nos services de rénovation énergétique à {v.nom}</h2>
        <p>
          GSE Isolation intervient à {v.nom} pour vous accompagner dans tous vos travaux de rénovation énergétique :{' '}
          <a href="/isolation-thermique/">isolation thermique</a> des murs, combles et planchers,{' '}
          <a href="/renovation-energetique/">rénovation énergétique globale</a> et{' '}
          <a href="/audit-energetique/">audit énergétique gratuit</a>.
          Notre équipe locale, basée à Saint-Paul-de-Vence, se déplace dans tout le secteur de {v.nom} pour évaluer votre projet et vous accompagner de A à Z.
        </p>

        <h2>Isolation thermique à {v.nom} : nos prix</h2>
        <p>
          À {v.nom} comme partout dans notre zone d'intervention, nous proposons trois solutions principales d'isolation :{' '}
          <a href="/isolation-thermique/isolation-des-murs-par-lexterieur/">l'isolation des murs par l'extérieur</a> à partir de 120€/m² (aides non déduites),{' '}
          <a href="/isolation-thermique/isolation-des-combles/">l'isolation des combles</a> à partir de 23€/m² aides déduites, et{' '}
          <a href="/isolation-thermique/isolation-des-planchers-bas/">l'isolation des planchers bas</a> à partir de 30€/m² aides déduites.
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
          Les propriétaires de {v.nom} peuvent bénéficier de plusieurs aides cumulables selon leur profil : <strong>MaPrimeRénov'</strong>,{' '}
          <strong>CEE</strong> versés par les fournisseurs d'énergie, <strong>TVA réduite à 5,5%</strong> au lieu de 20%, et l'<strong>Éco-prêt à taux zéro</strong> jusqu'à 50 000€ sans intérêt.
          GSE Isolation vous accompagne dans les démarches administratives, de la simulation initiale au suivi du dossier.
        </p>

        <h2>Pourquoi choisir GSE Isolation à {v.nom} ?</h2>
        <p>
          GSE Isolation met l’accent sur la visite technique, le devis détaillé, le suivi du dossier d’aides et la qualité d’exécution du chantier.
          Les qualifications, garanties et assurances applicables sont vérifiées et précisées sur les documents contractuels remis au client.
        </p>

        <h2>Avis clients</h2>
        <p>
          Les avis certifiés et références chantier sont à consulter depuis les supports officiels de l’entreprise ou à demander lors de l’échange commercial.
          Aucun témoignage nominatif n’est affiché ici sans validation explicite.
        </p>

        <h2>Questions fréquentes sur la rénovation énergétique à {v.nom}</h2>
        <p><strong>Combien coûtent les travaux à {v.nom} ?</strong><br />Cela dépend de la surface et du type de bien. Un conseiller GSE vous propose un devis gratuit et personnalisé après une visite technique.</p>
        <p><strong>Quels délais pour les travaux ?</strong><br />Audit sous une semaine, montage des démarches d'aides en 2 à 3 semaines, puis travaux planifiés selon votre disponibilité.</p>
        <p><strong>Puis-je cumuler plusieurs aides pour mon projet à {v.nom} ?</strong><br />Oui, MaPrimeRénov', les CEE, la TVA réduite et l'Éco-PTZ sont entièrement cumulables.</p>
        <p><strong>Intervenez-vous rapidement à {v.nom} ?</strong><br />Oui, notre équipe basée à Saint-Paul-de-Vence se déplace rapidement, avec un premier contact généralement sous 48h.</p>

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
