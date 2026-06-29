export type ServiceIso = {
  slug: string
  titre: string
  prix: string
  prixNote: string
  economie: string
  intro: string
  sections: { h2: string; texte: string }[]
}

export const servicesIso: ServiceIso[] = [
  {
    slug: "isolation-des-murs-par-lexterieur",
    titre: "Isolation des murs par l'extérieur",
    prix: "120€/m²",
    prixNote: "aides non déduites",
    economie: "Jusqu'à 25% d'économies d'énergie",
    intro: "L'isolation thermique par l'extérieur (ITE) est la solution la plus performante pour traiter les ponts thermiques de votre logement tout en valorisant votre façade. Votre maison gagne en beauté et en valeur.",
    sections: [
      { h2: "Pourquoi choisir l'isolation par l'extérieur ?", texte: "L'ITE traite efficacement les ponts thermiques au niveau des murs, là où se concentrent souvent les déperditions de chaleur les plus importantes après la toiture. Contrairement à l'isolation intérieure, elle ne réduit pas la surface habitable de votre logement, un avantage non négligeable pour les petites surfaces." },
      { h2: "Comment se déroule le chantier ?", texte: "Un isolant (laine de roche, polystyrène expansé ou fibre de bois selon le projet) est posé sur la totalité de la façade puis recouvert d'un enduit de finition au choix parmi une large gamme de teintes. Le chantier se déroule entièrement à l'extérieur du logement : vous pouvez continuer à habiter votre maison normalement pendant les travaux, qui durent généralement une à trois semaines selon la surface." },
      { h2: "Quelles économies attendre ?", texte: "Jusqu'à 25% d'économies sur votre facture de chauffage et de climatisation, avec un confort thermique nettement amélioré été comme hiver : les murs isolés par l'extérieur conservent une température plus stable, réduisant les écarts de confort entre les pièces." },
      { h2: "Quel impact esthétique ?", texte: "L'ITE permet de moderniser entièrement l'aspect de votre façade, avec un large choix de finitions (crépi, bardage, parement) qui peuvent transformer visuellement une maison ancienne tout en améliorant ses performances thermiques." },
      { h2: "Quelles aides mobiliser ?", texte: "MaPrimeRénov', CEE et TVA réduite à 5,5% permettent de réduire fortement le montant de 120€/m² indiqué, qui est calculé aides non déduites. Pour les ménages aux revenus modestes, le reste à charge peut être réduit de moitié grâce au cumul de ces dispositifs." },
      { h2: "Combien de temps dure le chantier ?", texte: "Pour une maison individuelle standard, comptez généralement entre une et trois semaines de travaux selon la surface de façade à traiter et la complexité architecturale (angles, ouvertures, débords de toit)." },
    ],
  },
  {
    slug: "isolation-des-combles",
    titre: "Isolation des combles",
    prix: "23€/m²",
    prixNote: "aides déduites",
    economie: "Jusqu'à 500€ d'économies par an",
    intro: "Confort assuré, été comme hiver, chez vous. L'isolation des combles est le geste de rénovation énergétique le plus rentable, à partir de 23€/m² aides déduites.",
    sections: [
      { h2: "Pourquoi isoler ses combles en priorité ?", texte: "Jusqu'à 30% des déperditions de chaleur d'une maison passent par la toiture. Isoler les combles est le premier réflexe pour un meilleur confort thermique, avant d'envisager d'autres travaux plus coûteux comme l'isolation des murs ou le changement de chauffage." },
      { h2: "Quelle technique utilisons-nous ?", texte: "Le soufflage de laine minérale ou de ouate de cellulose est la technique la plus courante et la plus rapide à mettre en œuvre pour des combles perdus, réalisable en une seule journée pour la plupart des logements. Pour des combles aménagés, nous posons des panneaux isolants sous rampants." },
      { h2: "Quelles économies attendre ?", texte: "En moyenne, les foyers économisent jusqu'à 500€ par an sur leur facture de chauffage et de climatisation après isolation des combles, avec un retour sur investissement particulièrement rapide, souvent en moins de 5 ans même hors aides." },
      { h2: "Quelle épaisseur d'isolant prévoir ?", texte: "Pour atteindre les performances thermiques recommandées (résistance thermique R ≥ 7 m².K/W pour les combles perdus), l'épaisseur d'isolant soufflé est généralement comprise entre 30 et 40 cm selon le matériau choisi." },
      { h2: "Quelles aides mobiliser ?", texte: "Le prix de 23€/m² est déjà calculé aides déduites grâce au cumul de MaPrimeRénov' et des CEE, ce qui rend ce poste de travaux particulièrement accessible, souvent le premier choisi par nos clients avant d'envisager une rénovation plus globale." },
      { h2: "Faut-il traiter la ventilation en même temps ?", texte: "Une bonne isolation des combles doit s'accompagner d'une ventilation adaptée de la toiture pour éviter tout phénomène de condensation qui dégraderait l'isolant dans le temps : notre équipe vérifie systématiquement ce point lors de la visite technique." },
    ],
  },
  {
    slug: "isolation-des-planchers-bas",
    titre: "Isolation des planchers bas",
    prix: "30€/m²",
    prixNote: "aides déduites",
    economie: "Jusqu'à 10% d'économies d'énergie",
    intro: "Pieds froids ? Fini grâce à la chaleur uniforme. L'isolation des planchers bas est souvent négligée mais reste très efficace pour le confort de votre logement.",
    sections: [
      { h2: "Pourquoi isoler les planchers bas ?", texte: "Au-dessus d'un vide sanitaire, d'un garage ou d'une cave non chauffée, le plancher bas est une source de déperdition thermique importante, responsable de la sensation de pieds froids en hiver et d'un inconfort souvent sous-estimé par les propriétaires." },
      { h2: "Comment se déroule l'intervention ?", texte: "L'isolant est posé sous le plancher, généralement par le dessous lorsque la configuration le permet (vide sanitaire, sous-sol accessible), sans travaux à l'intérieur du logement ni perturbation de votre quotidien pendant le chantier." },
      { h2: "Quelles économies attendre ?", texte: "Jusqu'à 10% d'économies d'énergie supplémentaires, avec une amélioration immédiate du confort ressenti, notamment dans les pièces du rez-de-chaussée où la sensation de froid au sol disparaît dès les premiers jours suivant les travaux." },
      { h2: "Quelle technique selon la configuration ?", texte: "Si le vide sanitaire est accessible, l'isolant est fixé directement sous la dalle. Si l'accès est limité ou inexistant, une isolation par le dessus (sous le revêtement de sol) peut être envisagée, bien que plus invasive pour les pièces concernées." },
      { h2: "Quelles aides mobiliser ?", texte: "Le prix de 30€/m² est calculé aides déduites grâce à MaPrimeRénov' et aux CEE, ce qui en fait un investissement rapidement amorti, particulièrement pertinent en complément d'une isolation des combles déjà réalisée." },
      { h2: "Un geste souvent oublié, à tort", texte: "Beaucoup de propriétaires isolent leurs combles et leurs murs sans jamais traiter le plancher bas, alors que ce poste représente une part non négligeable des déperditions, en particulier pour les maisons sur vide sanitaire ou sur garage non chauffé." },
    ],
  },
  {
    slug: "isolation-des-murs-par-linterieur",
    titre: "Isolation des murs par l'intérieur",
    prix: "Sur devis",
    prixNote: "selon configuration",
    economie: "Confort thermique amélioré",
    intro: "Solution idéale pour les façades historiques, les copropriétés, ou lorsque l'isolation par l'extérieur n'est pas envisageable. Moins invasif, compatible avec une rénovation progressive de votre logement.",
    sections: [
      { h2: "Quand choisir l'isolation par l'intérieur ?", texte: "Cette solution est particulièrement adaptée aux façades classées ou situées en secteur protégé, aux immeubles en copropriété où l'ITE n'est pas autorisée par le règlement, ou lorsque vous souhaitez réaliser les travaux progressivement, pièce par pièce, selon votre budget." },
      { h2: "Comment se déroule le chantier ?", texte: "Un isolant est posé sur la face intérieure des murs, généralement complété par une finition en plaques de plâtre. Le chantier nécessite de libérer temporairement les pièces concernées, ce qui en fait une solution souvent réalisée par étapes plutôt qu'en une seule fois sur tout le logement." },
      { h2: "Quel impact sur la surface habitable ?", texte: "L'isolation par l'intérieur réduit légèrement la surface habitable, de l'ordre de quelques centimètres par mur traité, un point à prendre en compte dans votre projet selon la configuration et la taille des pièces de votre logement." },
      { h2: "Quels matériaux sont utilisés ?", texte: "Selon le budget et les contraintes d'épaisseur disponible, nous utilisons de la laine minérale, des panneaux de polyuréthane (plus performants mais plus onéreux) ou des isolants biosourcés comme la fibre de bois pour les projets recherchant une approche plus écologique." },
      { h2: "Quelles aides mobiliser ?", texte: "MaPrimeRénov', CEE et TVA réduite à 5,5% s'appliquent également à ce type de travaux. Un devis personnalisé est établi après visite technique selon la configuration de votre logement, le nombre de murs concernés et les finitions souhaitées." },
      { h2: "Peut-on combiner intérieur et extérieur ?", texte: "Oui, il est fréquent de traiter une façade principale par l'extérieur (visible depuis la rue, sans contrainte) et une façade secondaire ou mitoyenne par l'intérieur lorsque l'ITE y est techniquement ou réglementairement impossible." },
    ],
  },
]

export function getServiceIso(slug: string) {
  return servicesIso.find(s => s.slug === slug)
}
