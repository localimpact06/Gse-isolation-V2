import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import ContentSection from '@/components/ContentSection'
import { getServiceIso, servicesIso } from '@/lib/services-iso'
import { notFound } from 'next/navigation'

const SLUG = 'isolation-des-combles'

export function generateMetadata(): Metadata {
  const s = getServiceIso(SLUG)!
  return {
    title: `${s.titre} — ${s.prix} | GSE Isolation`,
    description: `${s.titre}. À partir de ${s.prix} (${s.prixNote}). ${s.economie}. Devis gratuit GSE Isolation.`,
    alternates: { canonical: `/isolation-thermique/${s.slug}/` },
  }
}

export default function Page() {
  const s = getServiceIso(SLUG)
  if (!s) notFound()
  const autres = servicesIso.filter(x => x.slug !== s.slug)

  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Isolation thermique', href: '/isolation-thermique/' }, { label: s.titre }]} />
      <PageHero eyebrow="Isolation thermique" title={s.titre} subtitle={`${s.economie} — à partir de ${s.prix} (${s.prixNote})`} />

      <ContentSection>
        <p className="intro">{s.intro}</p>
        {s.sections.map((sec, i) => (
          <div key={i}>
            <h2>{sec.h2}</h2>
            <p>{sec.texte}</p>
          </div>
        ))}

        <h2>Autres solutions d'isolation</h2>
        <div className="grid sm:grid-cols-3 gap-4 not-prose">
          {autres.map(a => (
            <a key={a.slug} href={`/isolation-thermique/${a.slug}/`} className="block bg-paper hover:bg-ink hover:text-white transition-colors rounded-xl p-5 text-sm font-semibold">
              {a.titre} — {a.prix}
            </a>
          ))}
        </div>
      </ContentSection>

      <section className="bg-green py-16 px-6 md:px-10 text-center">
        <h2 className="text-white text-2xl font-bold mb-6">Demandez votre devis gratuit</h2>
        <a href="/contact/" className="bg-ink hover:bg-ink/85 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-block">
          Devis gratuit
        </a>
      </section>
      <Footer />
    </>
  )
}
