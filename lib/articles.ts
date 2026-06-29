export type Article = {
  slug: string
  cat: string
  date: string
  titre: string
  intro: string
  sections: { h2: string; texte: string }[]
  metaDescription: string
}

export const articles: Article[] = [
  {
    slug: "maprimerenov-guide-complet",
    cat: "Aides",
    date: "2026-06-15",
    titre: "MaPrimeRénov 2026 : Guide Complet des Aides",
    metaDescription: "MaPrimeRénov 2026 : conditions, montants par revenus, démarches et cumul avec les autres aides. Guide complet pour financer votre rénovation énergétique.",
    intro: "L'État peut payer jusqu'à 90% de vos travaux d'isolation. Oui, vraiment. Voici comment savoir si vous en faites partie, et comment ne pas laisser un centime sur la table.",
    sections: [
      { h2: "MaPrimeRénov', c'est quoi exactement ?", texte: "C'est l'aide phare de l'Agence nationale de l'habitat (Anah) pour financer la rénovation énergétique. Elle a remplacé en 2020 le crédit d'impôt et les aides Habiter Mieux. Bonne nouvelle : tous les propriétaires peuvent y prétendre, qu'ils habitent le logement ou le louent. Le montant, lui, dépend de vos revenus et du gain énergétique apporté par les travaux." },
      { h2: "Combien vous pouvez toucher en 2026", texte: "Jusqu'à 90% du coût des travaux pour les revenus les plus modestes (catégorie « bleu »), un peu moins pour les catégories « jaune », « violet » et « rose ». Le montant change aussi selon le type de travaux : isoler des combles ne rapporte pas le même forfait qu'installer un nouveau système de chauffage." },
      { h2: "Comment l'obtenir sans se tromper", texte: "La demande se fait en ligne, avant de signer le moindre devis, avec un artisan certifié RGE comme GSE Isolation. L'erreur classique ? Commencer les travaux avant validation du dossier. Résultat : l'aide tombe à l'eau, même après coup. Notre équipe s'occupe de tout, de la simulation jusqu'au virement." },
      { h2: "Le vrai levier : cumuler les aides", texte: "MaPrimeRénov' se cumule avec les CEE, l'Éco-prêt à taux zéro et la TVA à 5,5%. Concrètement, pour 5 000€ de travaux d'isolation des combles, ces aides combinées couvrent souvent 70 à 90% de la facture selon votre profil." },
      { h2: "Les pièges qui coûtent cher", texte: "Un artisan « presque » RGE, ça n'existe pas pour l'administration : vérifiez toujours la certification sur l'annuaire officiel, pas sur la promesse verbale d'un commercial. Et gardez précieusement chaque facture — un dossier incomplet, c'est une aide refusée, même chantier terminé." },
      { h2: "Un exemple concret à Nice", texte: "Maison de 100m², DPE classé F. Isolation des combles plus isolation des murs par l'extérieur : jusqu'à 25 000€ d'aides cumulées entre MaPrimeRénov' et les CEE. Le reste à charge devient soudain beaucoup plus raisonnable, pour un logement qui gagne plusieurs classes au DPE." },
    ],
  },
  {
    slug: "isolation-combles-prix-guide",
    cat: "Isolation",
    date: "2026-06-10",
    titre: "Isolation des Combles : Prix et Économies en 2026",
    metaDescription: "Prix de l'isolation des combles en 2026 : à partir de 23€/m² aides déduites. Techniques, économies attendues et aides disponibles.",
    intro: "30% de la chaleur de votre maison s'échappe par le toit. Pas par les murs, pas par les fenêtres : le toit. C'est pour ça que l'isolation des combles reste le geste numéro un, et le plus abordable, de toute la rénovation énergétique.",
    sections: [
      { h2: "Pourquoi commencer par là", texte: "Avant de penser aux murs ou au chauffage, la toiture reste la priorité absolue pour un logement mal isolé. C'est le geste le plus rentable, et souvent le plus rapide à réaliser." },
      { h2: "Combles perdus ou aménagés : pas la même technique", texte: "Pour des combles perdus (non habités), on souffle de la laine minérale ou de la ouate de cellulose : chantier réglé en une journée. Pour des combles aménagés, on pose des panneaux isolants rigides sous les rampants — plus long, mais l'espace reste utilisable ensuite." },
      { h2: "Le vrai prix, pas le prix gonflé", texte: "23€/m² aides déduites pour un soufflage classique, contre 40 à 60€/m² sans aides. Pour une isolation sous rampants plus technique, comptez davantage selon la complexité du chantier." },
      { h2: "Ce que ça change sur la facture", texte: "En moyenne, jusqu'à 500€ d'économies par an sur le chauffage et la climatisation. Le retour sur investissement tombe souvent sous les 5 ans, même sans compter les aides." },
      { h2: "Combien de temps ça dure", texte: "Bien posé, un isolant de combles garde ses performances 25 à 30 ans. La seule condition : une toiture correctement ventilée, sinon l'humidité finit par dégrader l'isolant." },
      { h2: "Les aides qui font baisser la note", texte: "MaPrimeRénov', CEE et TVA à 5,5% rendent ce poste de travaux particulièrement accessible — souvent le premier choisi par nos clients avant d'envisager un projet plus large." },
    ],
  },
  {
    slug: "pompe-chaleur-air-eau-prix",
    cat: "Pompe à chaleur",
    date: "2026-06-05",
    titre: "Pompe à Chaleur Air-Eau : Prix et Aides en 2026",
    metaDescription: "Prix d'une pompe à chaleur air-eau en 2026 : environ 12 000€, jusqu'à 80% d'aides. Fonctionnement, économies et compatibilité avec votre logement.",
    intro: "Chauffer sa maison et son eau chaude avec une seule machine, et une facture d'électricité qui ne donne plus le vertige : voici ce que promet la pompe à chaleur air-eau. Voici ce qu'elle coûte vraiment, une fois les aides déduites.",
    sections: [
      { h2: "Le principe en deux phrases", texte: "Elle capte la chaleur de l'air extérieur, même par temps froid, et la redistribue dans vos radiateurs ou votre plancher chauffant, ainsi que dans votre eau chaude sanitaire. Plus le COP (coefficient de performance) est élevé, plus la machine est efficace : un bon COP tourne autour de 3,5 à 4." },
      { h2: "Le budget réel", texte: "Comptez environ 12 000€ pose comprise pour une maison standard. Avec MaPrimeRénov' et les CEE cumulés, les profils les plus modestes peuvent voir jusqu'à 80% du montant couvert." },
      { h2: "Ce qu'on observe sur la facture", texte: "En moyenne, 3 000€ d'économies par an comparé à une vieille chaudière au fioul ou au gaz. Le chiffre varie évidemment selon l'isolation du logement et les habitudes de chauffe du foyer." },
      { h2: "Avant d'installer, vérifiez ça", texte: "Une PAC dans une maison mal isolée, c'est comme remplir une baignoire sans bouchon : une bonne partie de l'efficacité part en fumée. Un audit énergétique préalable permet de savoir si l'isolation est suffisante, ou s'il faut d'abord traiter les combles ou les murs." },
      { h2: "L'entretien, sans surprise", texte: "Un entretien annuel par un professionnel certifié, comme pour une chaudière classique, et généralement moins coûteux qu'un entretien de chaudière fioul." },
      { h2: "Air-eau ou air-air, quelle différence", texte: "L'air-air chauffe directement l'air ambiant et fait souvent office de clim réversible. L'air-eau s'intègre à un circuit de radiateurs existant et produit aussi l'eau chaude sanitaire — le choix naturel quand on remplace une chaudière déjà reliée à des radiateurs à eau." },
    ],
  },
  {
    slug: "audit-energetique-obligatoire",
    cat: "Audit",
    date: "2026-05-28",
    titre: "Audit Énergétique : Est-il Obligatoire en 2026 ?",
    metaDescription: "Audit énergétique 2026 : dans quels cas est-il obligatoire pour la vente d'un bien, et pourquoi le réaliser même sans obligation légale.",
    intro: "Vendre une « passoire thermique » sans audit ? Plus possible. Voici dans quels cas la loi vous y oblige, et pourquoi le faire même sans y être forcé reste la meilleure décision avant de lancer le moindre chantier.",
    sections: [
      { h2: "Quand la loi vous y oblige", texte: "Pour la vente d'un logement classé F ou G au DPE — les fameuses passoires thermiques — l'audit énergétique réglementaire est obligatoire. Il informe l'acheteur des travaux nécessaires, avec une estimation du coût et des aides mobilisables." },
      { h2: "Pourquoi le faire même sans obligation", texte: "Sans audit, on isole souvent au hasard : on traite un poste secondaire avant la vraie source de déperdition. L'audit GSE, gratuit avec une demande de devis, identifie précisément où votre logement perd de l'énergie, et dans quel ordre agir." },
      { h2: "Ce qui se passe concrètement", texte: "Un spécialiste analyse votre logement, vos équipements de chauffage et de ventilation, et vos habitudes de consommation. Comptez 45 minutes, par téléphone ou en visio — pas besoin de déplacement dans un premier temps." },
      { h2: "Ce que vous récupérez à la fin", texte: "Un diagnostic complet qui pointe les postes de déperdition (toiture, murs, fenêtres, ventilation), plus un devis détaillé intégrant les aides auxquelles vous êtes éligible. Parfois même une simulation du gain de classe DPE selon différents scénarios de travaux." },
      { h2: "Audit réglementaire ou audit GSE : pas pareil", texte: "L'audit obligatoire pour vendre un bien F ou G doit être réalisé par un professionnel spécifiquement certifié, avec un format encadré par la loi. Notre audit gratuit, lui, prépare votre projet de travaux. Les deux ne se remplacent pas si vous êtes en démarche de vente." },
      { h2: "Le coût d'un audit réglementaire", texte: "Hors notre offre gratuite, un audit réglementaire facturé par un bureau d'études indépendant coûte généralement entre 500 et 1 000€ — à anticiper si vous prévoyez de vendre un bien classé F ou G." },
    ],
  },
  {
    slug: "eco-pret-taux-zero",
    cat: "Aides",
    date: "2026-05-20",
    titre: "Éco-Prêt à Taux Zéro (Éco-PTZ) : Guide 2026",
    metaDescription: "Éco-PTZ 2026 : prêt sans intérêt jusqu'à 50 000€ pour financer vos travaux de rénovation énergétique, cumulable avec MaPrimeRénov'.",
    intro: "Un prêt de 50 000€, zéro intérêt, zéro avance de trésorerie. Ça paraît trop beau ? C'est pourtant exactement ce que propose l'Éco-PTZ, et il se cumule avec MaPrimeRénov'.",
    sections: [
      { h2: "Le principe, sans jargon", texte: "Un prêt sans intérêt accordé par des banques partenaires de l'État pour financer vos travaux, remboursable sur 15 à 20 ans. L'État prend les intérêts à sa charge : vous ne remboursez que ce que vous avez emprunté." },
      { h2: "Jusqu'où ça monte", texte: "50 000€ pour un projet ambitieux combinant isolation, chauffage et ventilation. Pour un seul geste de travaux (juste les combles, par exemple), le plafond tombe plutôt autour de 15 000€." },
      { h2: "Qui peut en profiter", texte: "Tous les propriétaires, occupants ou bailleurs, sans condition de revenus, pour un logement construit depuis plus de deux ans." },
      { h2: "La démarche, en pratique", texte: "On dépose la demande auprès d'une banque conventionnée, avec un devis d'une entreprise RGE comme GSE Isolation. On vous fournit tous les documents techniques nécessaires pour monter le dossier bancaire sans accroc." },
      { h2: "Le vrai intérêt : le cumul", texte: "MaPrimeRénov' réduit le montant total de vos travaux. L'Éco-PTZ permet d'étaler le paiement du solde restant, sans frais financiers. Ensemble, ça change complètement l'équation budgétaire d'un projet de rénovation." },
      { h2: "Les travaux qui comptent", texte: "Isolation (murs, toiture, planchers, fenêtres), chauffage ou eau chaude utilisant une énergie renouvelable, amélioration de la ventilation — à condition que ce soit un professionnel certifié RGE qui s'en occupe." },
    ],
  },
  {
    slug: "dpe-comment-ameliorer",
    cat: "DPE",
    date: "2026-05-15",
    titre: "DPE Mauvais ? Comment Passer de F à B en 3 Étapes",
    metaDescription: "Comment améliorer son DPE de F à B : plan d'action en 3 étapes combinant isolation, chauffage performant et ventilation.",
    intro: "Un DPE classé F, c'est une étiquette qui plombe la valeur de votre bien et qui, depuis peu, peut carrément vous empêcher de louer. La bonne nouvelle : remonter plusieurs classes ne demande pas forcément un chantier pharaonique. Voici l'ordre qui marche.",
    sections: [
      { h2: "Pourquoi ce petit logo pèse si lourd", texte: "Le DPE influence directement la valeur de votre bien sur le marché, et pour les classes F et G, désormais qualifiées de « passoires thermiques », la possibilité même de louer le logement." },
      { h2: "Étape 1 : on isole, toujours en premier", texte: "Combles et murs sont le levier le plus efficace pour gagner plusieurs classes en une seule intervention. Pour une maison classée F, isoler simplement les combles permet souvent de monter d'une à deux classes." },
      { h2: "Étape 2 : on revoit le chauffage", texte: "Remplacer une vieille chaudière au fioul ou un gaz peu performant par une pompe à chaleur améliore sensiblement la note, car le DPE évalue à la fois les besoins de chauffage et l'efficacité de l'équipement qui les couvre." },
      { h2: "Étape 3 : on n'oublie pas l'air", texte: "Une VMC double flux complète le tableau en assurant un renouvellement d'air sain sans perdre la chaleur — un critère de plus en plus pesant dans le calcul du DPE depuis sa réforme de 2021." },
      { h2: "Et si le budget est serré ?", texte: "Commencez systématiquement par les combles : le geste le moins coûteux et le plus rentable. Le chauffage vient ensuite si votre équipement est ancien, puis la ventilation et les murs pour viser les meilleures classes." },
      { h2: "L'impact sur la valeur de votre bien", texte: "Selon les études notariales, passer d'une classe F à une classe C ou B peut faire grimper la valeur de vente de plusieurs pourcents — un argument de poids, même sans projet de revente immédiat." },
    ],
  },
  {
    slug: "isolation-exterieure",
    cat: "Isolation",
    date: "2026-05-10",
    titre: "Isolation par l'Extérieur : Prix et Avantages",
    metaDescription: "Isolation thermique par l'extérieur (ITE) : prix à partir de 120€/m², avantages et aides disponibles pour ce type de travaux.",
    intro: "Une façade neuve et une facture de chauffage qui fond : l'isolation thermique par l'extérieur fait coup double. C'est la solution la plus performante du marché pour traiter les ponts thermiques. Voici ce qu'il faut savoir avant de signer.",
    sections: [
      { h2: "Pourquoi l'ITE change la donne", texte: "Elle traite les ponts thermiques des murs — souvent responsables d'une grosse part des déperditions — sans rogner un centimètre de surface habitable, contrairement à une isolation par l'intérieur." },
      { h2: "Le prix, sans surprise à l'arrivée", texte: "À partir de 120€/m² aides non déduites, pose et finition en enduit comprises. Avec MaPrimeRénov', le reste à charge peut fondre de moitié selon vos revenus." },
      { h2: "Ce que vous gagnez concrètement", texte: "Jusqu'à 25% d'économies d'énergie, chauffage comme climatisation, grâce à une enveloppe thermique continue qui supprime quasiment tous les ponts thermiques des murs." },
      { h2: "Le déroulement du chantier", texte: "Tout se passe à l'extérieur : vous continuez à vivre normalement chez vous pendant les travaux. Comptez une à trois semaines selon la surface de façade et la complexité architecturale." },
      { h2: "Le bonus esthétique", texte: "L'ITE se marie très bien avec un ravalement de façade : un résultat à neuf, en plus du gain énergétique — particulièrement appréciable sur les villas anciennes de la Côte d'Azur." },
      { h2: "Ce qu'il faut savoir avant de se lancer", texte: "Sur une façade classée ou en copropriété, l'ITE n'est pas toujours autorisée sans accord préalable. Dans ce cas, l'isolation par l'intérieur reste une alternative tout à fait pertinente." },
    ],
  },
  {
    slug: "renovation-globale-guide",
    cat: "Rénovation",
    date: "2026-05-05",
    titre: "Rénovation Globale : Budget et Aides Jusqu'à 80 000€",
    metaDescription: "Rénovation énergétique globale : budget, étapes du projet et aides cumulées pouvant atteindre 80 000€.",
    intro: "Passer d'une maison qui dévore l'énergie à un logement performant, sans vider son compte en banque : c'est exactement ce que permet une rénovation globale bien menée, avec jusqu'à 80 000€ d'aides cumulées pour les profils éligibles.",
    sections: [
      { h2: "Ce qu'on entend par « rénovation globale »", texte: "Isolation des murs, combles et planchers, changement du système de chauffage, parfois panneaux solaires — tout ça dans un projet pensé d'un bloc, plutôt qu'en travaux dispersés et désordonnés." },
      { h2: "Le budget, sans tabou", texte: "Entre 30 000 et 60 000€ pour une maison individuelle traitée intégralement, selon la surface et l'état du bien. Mais les aides cumulées peuvent grimper jusqu'à 80 000€ pour les profils les plus modestes, ce qui change radicalement le reste à charge réel." },
      { h2: "Notre rôle dans votre projet", texte: "On réalise l'audit préalable, on hiérarchise les travaux selon votre budget, on gère toutes les démarches d'aides, et on coordonne le chantier de bout en bout — un seul interlocuteur, du premier jour à la réception." },
      { h2: "Le timing à prévoir", texte: "Comptez 2 à 4 mois entre la validation du projet et la fin des travaux, plus un mois en amont pour monter et valider les dossiers d'aides." },
      { h2: "Pourquoi l'ordre des travaux compte", texte: "Isoler avant de changer le chauffage, toujours. Installer une pompe à chaleur dans une maison mal isolée, c'est surdimensionner un équipement pour rien. On établit systématiquement la priorité isolation puis chauffage, sauf cas particulier identifié à l'audit." },
      { h2: "Le saut de classe DPE attendu", texte: "Une rénovation globale bien menée permet souvent de passer d'une classe F ou G à une classe C ou B — un bond rarement atteignable avec des travaux isolés, et qui valorise sérieusement votre bien sur le marché." },
    ],
  },
  {
    slug: "5-erreurs-renovation",
    cat: "Conseils",
    date: "2026-04-10",
    titre: "5 Erreurs de Rénovation Énergétique à Éviter",
    metaDescription: "Les 5 erreurs les plus fréquentes en rénovation énergétique : audit négligé, artisan non RGE, aides non cumulées, ventilation oubliée, délais sous-estimés.",
    intro: "Certaines erreurs ne se voient qu'une fois la facture arrivée — ou pire, une fois l'aide refusée. Voici les 5 pièges qui coûtent le plus cher en rénovation énergétique, et comment les éviter sans effort.",
    sections: [
      { h2: "1. Zapper l'audit énergétique", texte: "Se lancer sans diagnostic précis, c'est souvent prioriser le mauvais poste de travaux. Beaucoup isolent les murs en premier alors que la toiture, bien moins chère à traiter, représente une déperdition plus importante dans leur cas." },
      { h2: "2. Faire confiance à un artisan « presque » RGE", texte: "Sans certification RGE, vous perdez l'accès à quasiment toutes les aides de l'État. Vérifiez toujours sur l'annuaire officiel, pas sur une simple promesse commerciale." },
      { h2: "3. Oublier de cumuler les aides", texte: "MaPrimeRénov', CEE, TVA réduite, Éco-PTZ : tout ça se cumule. Ne pas le faire, c'est laisser plusieurs milliers d'euros sur la table — l'erreur classique de ceux qui montent leur dossier seuls." },
      { h2: "4. Isoler sans repenser la ventilation", texte: "Une maison bien isolée mais mal ventilée développe vite des problèmes d'humidité, car l'isolation réduit naturellement le renouvellement d'air. Une VMC adaptée doit accompagner tout projet d'isolation sérieux." },
      { h2: "5. Sous-estimer les délais administratifs", texte: "Entre la demande d'aide et sa validation, comptez plusieurs semaines. Anticipez, surtout si vous avez une contrainte de date — vente, location, événement familial." },
      { h2: "Le moyen le plus simple d'éviter ces 5 erreurs", texte: "Passer par une entreprise qui gère tout le parcours : audit, choix des travaux, montage des dossiers d'aides, réalisation du chantier. C'est exactement l'accompagnement de A à Z que propose GSE Isolation." },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find(a => a.slug === slug)
}
