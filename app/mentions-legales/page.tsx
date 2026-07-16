import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHero from '@/components/PageHero'
import ContentSection from '@/components/ContentSection'
import { company, formatAddress, formatLegalIdentity, formatPhone, phoneHref } from '@/lib/company'
import { WebPageJsonLd } from '@/components/seo/PageJsonLd'

const pageTitle = "Mentions Légales"
const pageDescription = "Mentions légales de GSE Isolation."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/mentions-legales/' },
}

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <WebPageJsonLd
        path="/mentions-legales/"
        title={pageTitle}
        description={pageDescription}
        breadcrumbs={[{ name: 'Accueil', url: '/' }, { name: 'Mentions légales', url: '/mentions-legales/' }]}
      />
      <PageHero eyebrow="Informations légales" title="Mentions légales" />
      <ContentSection>
        <h2>Éditeur du site</h2>
        <p>{formatLegalIdentity()}</p>
        <ul>
          <li>Dénomination commerciale : {company.tradeName}</li>
          <li>Adresse du siège : {formatAddress()}</li>
          {company.siren ? <li>SIREN : {company.siren}</li> : null}
          {company.siret ? <li>SIRET : {company.siret}</li> : null}
          {company.rcsNumber ? <li>RCS : {company.rcsNumber}{company.rcsCity ? ` R.C.S. ${company.rcsCity}` : ''}</li> : null}
          {company.vatNumber ? <li>Numéro de TVA intracommunautaire : {company.vatNumber}</li> : null}
          {company.shareCapital ? <li>Capital social : {company.shareCapital}</li> : null}
          <li>Téléphone : <a href={phoneHref()}>{formatPhone()}</a></li>
          <li>E-mail : <a href={`mailto:${company.email}`}>{company.email}</a></li>
        </ul>

        <h2>Directeur de publication</h2>
        <p>{company.directorName}</p>

        <h2>Hébergement</h2>
        <p>
          Ce site est hébergé par {company.host.name}
          {company.host.address ? `, ${company.host.address}` : ''}
          {company.host.website ? <> — <a href={company.host.website}>{company.host.website}</a></> : null}.
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>L’ensemble du contenu de ce site (textes, images, logo, structure et éléments graphiques) est protégé. Toute reproduction ou réutilisation sans autorisation préalable est interdite.</p>

        <h2>Limitation de responsabilité</h2>
        <p>Les informations publiées sur ce site sont fournies à titre informatif. Elles ne remplacent pas une étude technique personnalisée, un devis contractuel ou les conditions officielles des dispositifs d’aides applicables.</p>

        <h2>Médiation à la consommation</h2>
        <p>En cas de litige, le client consommateur peut recourir gratuitement à un dispositif de médiation de la consommation lorsque les informations du médiateur compétent lui ont été communiquées dans les documents contractuels applicables.</p>

        <h2>Droit applicable</h2>
        <p>Le présent site est soumis au droit français.</p>

        <h2>Contact</h2>
        <p>Pour toute question relative au site ou à son contenu, contactez {company.tradeName} par e-mail à <a href={`mailto:${company.email}`}>{company.email}</a> ou par téléphone au <a href={phoneHref()}>{formatPhone()}</a>.</p>
      </ContentSection>
      <Footer />
    </>
  )
}
