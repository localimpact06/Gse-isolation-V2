import type { Metadata } from 'next'
import { articles } from '@/lib/articles'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: "Guides & Actualités de la Rénovation Énergétique",
  description: "Conseils, prix et guides pratiques sur l'isolation, les pompes à chaleur, les aides MaPrimeRénov' et la rénovation énergétique.",
  alternates: { canonical: '/blog/' },
}

const CAT_COLORS: Record<string, string> = {
  'Aides': '#2D7A4F', 'Isolation': '#3a3530', 'Pompe à chaleur': '#404a55',
  'Audit': '#55514c', 'DPE': '#8a8580', 'Rénovation': '#3FA66B', 'Conseils': '#1c2420',
}

export default function BlogIndex() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Blog' }]} />
      <PageHero eyebrow="Ressources" title="Guides & actualités" subtitle="Conseils pratiques et guides détaillés sur la rénovation énergétique." />

      <section className="py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.05}>
              <a href={`/blog/${a.slug}/`} className="group block">
                <div
                  className="aspect-[16/10] rounded-xl mb-4 flex items-end p-4"
                  style={{ background: CAT_COLORS[a.cat] || '#3a3530' }}
                >
                  <span className="bg-white text-ink text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-md">{a.cat}</span>
                </div>
                <h3 className="font-bold text-[16px] mb-2 group-hover:text-green transition-colors leading-snug">{a.titre}</h3>
                <p className="text-[13px] text-ink/50 mb-3 leading-snug">{a.intro.slice(0, 90)}...</p>
                <span className="text-[11px] text-ink/35 uppercase tracking-wide">
                  {new Date(a.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
