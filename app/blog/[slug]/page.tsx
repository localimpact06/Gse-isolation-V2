import type { Metadata } from 'next'
import { articles, getArticle } from '@/lib/articles'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import ContentSection from '@/components/ContentSection'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a) return {}
  return {
    title: a.titre,
    description: a.metaDescription,
    alternates: { canonical: `/blog/${a.slug}/` },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a) notFound()
  const autres = articles.filter(x => x.slug !== a.slug).slice(0, 3)

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": a.titre, "datePublished": a.date,
        "author": { "@type": "Organization", "name": "GSE Isolation" },
      }) }} />

      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: a.titre }]} />
      <PageHero
        eyebrow={a.cat}
        title={a.titre}
        subtitle={new Date(a.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
      />

      <ContentSection>
        <p className="intro">{a.intro}</p>
        {a.sections.map((s, i) => (
          <div key={i}>
            <h2>{s.h2}</h2>
            <p>{s.texte}</p>
          </div>
        ))}

        <div className="bg-paper rounded-2xl p-7 mt-10">
          <h2 className="!mt-0">Ce qu'il faut retenir</h2>
          <p>
            Sur le sujet « {a.titre.toLowerCase()} », le point essentiel à retenir est que ces travaux s'inscrivent rarement isolément :
            ils gagnent en efficacité et en rentabilité lorsqu'ils sont intégrés à un projet de rénovation cohérent, avec un audit énergétique préalable pour prioriser les bons postes de travaux.
            GSE Isolation, certifiée Qualibat RGE, vous accompagne dans cette réflexion dès le premier contact, sans engagement de votre part.
          </p>
        </div>

        <h2>Nos services liés à cet article</h2>
        <p>
          <a href="/isolation-thermique/">Isolation thermique</a>
          {' · '}
          <a href="/renovation-energetique/">Rénovation globale</a>
          {' · '}
          <a href="/audit-energetique/">Audit énergétique gratuit</a>
          {' · '}
          <a href="/aides-renovation-energetique/">Aides &amp; financement</a>
        </p>

        <h2>À lire aussi</h2>
        <div className="grid sm:grid-cols-3 gap-4 not-prose">
          {autres.map(x => (
            <a key={x.slug} href={`/blog/${x.slug}/`} className="block bg-paper hover:bg-ink hover:text-white transition-colors rounded-xl p-5 text-sm font-semibold">
              {x.titre}
            </a>
          ))}
        </div>
      </ContentSection>

      <section className="bg-green py-16 px-6 md:px-10 text-center">
        <h2 className="text-white text-2xl font-bold mb-6">Une question sur votre projet ?</h2>
        <a href="/contact/" className="bg-ink hover:bg-ink/85 transition-colors text-white text-[13px] font-semibold uppercase tracking-[0.08em] px-7 py-4 rounded-full inline-block">
          Demander un devis gratuit
        </a>
      </section>

      <Footer />
    </>
  )
}
