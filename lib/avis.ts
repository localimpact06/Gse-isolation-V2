export type Avis = {
  texte: string
  auteur: string
  contexte: string
}

export type CustomerReview = {
  author: string
  source: 'google' | 'trustpilot'
  rating?: number
  service?: string
  city?: string
  content: string
  url?: string
}

// Avis issus de la fiche Google Business de GSE Isolation, à conserver tant que la fiche officielle les affiche.
export const googleReviews: CustomerReview[] = [
  {
    content: "Très satisfaite de GSE isolation qui a effectué d'excellents travaux mais en plus m'a aidée pour mes travaux de ventilation et pour mes documents prime renov : un service rare et exceptionnel dont je remercie personnellement M Lesueur !",
    author: "Mor Daniele",
    source: 'google',
    rating: 5,
    service: "Travaux et démarches MaPrimeRénov'",
  },
  {
    content: "Satisfait de la prestation de A à Z. J'ai rénové en quasi totalité ma maison en rénovation énergétique globale et je n'avais pas le temps ni envie de comprendre le fonctionnement des aides, dispositifs MaPrimeRénov' etc. Ils s'en sont chargés parfaitement.",
    author: "William Huguet",
    source: 'google',
    rating: 5,
    service: "Rénovation énergétique globale",
  },
  {
    content: "Entreprise sérieuse, isolation extérieure s'est déroulée très bien. Propre en fin de chantier. Merci !",
    author: "Lina Antoine",
    source: 'google',
    rating: 5,
    service: "Isolation extérieure",
  },
  {
    content: "Ne pas hésiter un instant ! Parfait de A à Z vraiment bien.",
    author: "Muriel Guillier",
    source: 'google',
    rating: 5,
    service: "Accompagnement de A à Z",
  },
  {
    content: "Très satisfait des travaux effectués dans le cadre de Ma Prime Renov en avril 2025. Ouvriers compétents et discrets. Suivi de chantier régulier et toujours disponibles.",
    author: "Client GSE",
    source: 'google',
    rating: 5,
    service: "Travaux MaPrimeRénov' 2025",
  },
]

export const trustpilotReviews: CustomerReview[] = [
  {
    author: 'Marie SOMME',
    source: 'trustpilot',
    service: 'Isolation thermique par l’extérieur',
    city: 'Nice',
    content: "J’ai réalisé l’isolation par l’extérieur, les travaux ont été réalisés avec beaucoup de professionnalisme, les délais ont été respectés, outillages de haute performance pour ce chantier, je recommande GSE. Merci.",
  },
  {
    author: 'Wiliam HUGUET',
    source: 'trustpilot',
    service: 'Rénovation globale',
    city: 'Antibes',
    content: "Satisfait de la prestation de A à Z. J’ai rénové en quasi-totalité ma maison en rénovation énergétique globale et je n’avais pas le temps ni envie de comprendre le fonctionnement des aides, dispositifs MaPrimeRénov’, etc. Ils s’en sont chargés parfaitement. Je n’ai rien eu à faire. Commercialement, Stéphane sait absolument de quoi il parle. On est dans du sérieux !",
  },
  {
    author: 'Sophie BOURGOIN',
    source: 'trustpilot',
    service: 'Isolation thermique par l’extérieur',
    city: 'Grasse',
    content: "L’isolation des murs a été faite par GSE et je sens déjà l’impact sur ma facture d’électricité et sur le confort intérieur. De plus, la façade est également renouvelée et esthétiquement plus belle. Les travaux se sont très bien déroulés. Je recommande sans hésiter.",
  },
  {
    author: 'Patrick GOMEZ',
    source: 'trustpilot',
    service: 'Rénovation globale',
    city: 'Fréjus',
    content: "Nous avons fait confiance à GSE pour la rénovation globale avec isolation des combles, isolation extérieure, installation de nouvelles fenêtres et ventilation. L’intervention a été très rapide à l’issue de la validation des travaux par le technicien. Le suivi du projet est bon, avec un appel du service qualité après-vente. On voit que la satisfaction client est très importante pour eux et cela se ressent du début à la fin. Je recommande à 1000 %. Encore merci à toute l’équipe de GSE.",
  },
]

export const avisReels: Avis[] = googleReviews.map((review) => ({
  texte: review.content,
  auteur: review.author,
  contexte: review.service ?? 'Avis Google',
}))

export const noteMoyenne = "5/5"
export const nombreAvis = googleReviews.length
