export const servicesElements = [
  {
    id: 1,
    title: 'Cours de Piano - Débutant à Avancé',
    price: 45,
    category: "Services",
    images: ["courspiano.jpg"],
    date: new Date(),
    likes: 12,
    description: "Cours de piano à domicile, tous niveaux, professeur diplômé conservatoire.",
    ref: 1060000001,
    informations: {
      type_service: "Cours",
      domaine: "Musique",
      duree: "1 heure",
      localisation: "Paris",
      niveau: "Tous niveaux",
      diplome: "Conservatoire",
      experience: "10 ans",
      deplacement: "Oui",
      materiel: "Fourni"
    }
  },
  {
    id: 2,
    title: 'Ménage et Repassage - 3h/semaine',
    price: 25,
    category: "Services",
    images: ["menage.jpg"],
    date: new Date(),
    likes: 8,
    description: "Service de ménage et repassage, 3h par semaine, personne de confiance.",
    ref: 1060000002,
    informations: {
      type_service: "Ménage",
      domaine: "Entretien",
      duree: "3h/semaine",
      localisation: "Lyon",
      niveau: "Professionnel",
      diplome: "CAP",
      experience: "5 ans",
      deplacement: "Oui",
      materiel: "Fourni"
    }
  },
  {
    id: 3,
    title: 'Déménagement - 2 Chambres',
    price: 350,
    category: "Services",
    images: ["demenagement.jpg"],
    date: new Date(),
    likes: 15,
    description: "Service de déménagement complet, 2 chambres, emballage inclus.",
    ref: 1060000003,
    informations: {
      type_service: "Déménagement",
      domaine: "Transport",
      duree: "1 journée",
      localisation: "Marseille",
      niveau: "Professionnel",
      diplome: "Permis poids lourd",
      experience: "8 ans",
      deplacement: "Oui",
      materiel: "Fourni"
    }
  },
  {
    id: 4,
    title: 'Garde d\'Enfants - Soirées/Weekends',
    price: 15,
    category: "Services",
    images: ["gardeenfants.jpg"],
    date: new Date(),
    likes: 20,
    description: "Garde d'enfants ponctuelle, soirs et weekends, expérience avec enfants.",
    ref: 1060000004,
    informations: {
      type_service: "Garde",
      domaine: "Enfants",
      duree: "Variable",
      localisation: "Toulouse",
      niveau: "Étudiant",
      diplome: "BAFA",
      experience: "3 ans",
      deplacement: "Oui",
      materiel: "Non"
    }
  },
  {
    id: 5,
    title: 'Réparation Informatique - Dépannage',
    price: 60,
    category: "Services",
    images: ["reparation.jpg"],
    date: new Date(),
    likes: 18,
    description: "Dépannage informatique à domicile, PC, Mac, réseaux, virus.",
    ref: 1060000005,
    informations: {
      type_service: "Réparation",
      domaine: "Informatique",
      duree: "Variable",
      localisation: "Bordeaux",
      niveau: "Expert",
      diplome: "BTS Informatique",
      experience: "12 ans",
      deplacement: "Oui",
      materiel: "Fourni"
    }
  }
];
