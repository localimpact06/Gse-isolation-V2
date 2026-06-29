export type Avis = {
  texte: string
  auteur: string
  contexte: string
}

// Avis réels récupérés depuis la fiche Google Business de GSE Isolation
export const avisReels: Avis[] = [
  {
    texte: "Très satisfaite de GSE isolation qui a effectué d'excellents travaux mais en plus m'a aidée pour mes travaux de ventilation et pour mes documents prime renov : un service rare et exceptionnel dont je remercie personnellement M Lesueur !",
    auteur: "Mor Daniele",
    contexte: "Travaux et démarches MaPrimeRénov'",
  },
  {
    texte: "Satisfait de la prestation de A à Z. J'ai rénové en quasi totalité ma maison en rénovation énergétique globale et je n'avais pas le temps ni envie de comprendre le fonctionnement des aides, dispositifs MaPrimeRénov' etc. Ils s'en sont chargés parfaitement.",
    auteur: "William Huguet",
    contexte: "Rénovation énergétique globale",
  },
  {
    texte: "Entreprise sérieuse, isolation extérieure s'est déroulée très bien. Propre en fin de chantier. Merci !",
    auteur: "Lina Antoine",
    contexte: "Isolation extérieure",
  },
  {
    texte: "Ne pas hésiter un instant ! Parfait de A à Z vraiment bien.",
    auteur: "Muriel Guillier",
    contexte: "Accompagnement de A à Z",
  },
  {
    texte: "Très satisfait des travaux effectués dans le cadre de Ma Prime Renov en avril 2025. Ouvriers compétents et discrets. Suivi de chantier régulier et toujours disponibles.",
    auteur: "Client GSE",
    contexte: "Travaux MaPrimeRénov' 2025",
  },
]

// Note moyenne réelle constatée sur la fiche Google Business
export const noteMoyenne = "5/5"
export const nombreAvis = 5
