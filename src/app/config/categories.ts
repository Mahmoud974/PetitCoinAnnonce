export const CATEGORIES = [
    { value: "", label: "Choisir une catégorie" },
    { value: "emploi", label: "Emploi" },
    { value: "vehicules", label: "Véhicules" },
    { value: "immobilier", label: "Immobilier" },
    { value: "locations_vacances", label: "Locations de vacances" },
    { value: "electronique", label: "Électronique" },
    { value: "maison_jardin", label: "Maison & Jardin" },
    { value: "famille", label: "Famille" },
    { value: "mode", label: "Mode" },
    { value: "loisirs", label: "Loisirs" },
    { value: "animaux", label: "Animaux" },
    { value: "materiel_professionnel", label: "Matériel professionnel" },
    { value: "services", label: "Services" },
    { value: "divers", label: "Divers" },
  ] as const;
  
  export type CategoryValue = (typeof CATEGORIES)[number]["value"];
  
  export type FieldDef = {
    name: string;
    label: string;
    type: "text" | "number" | "select";
    placeholder?: string;
    options?: string[];
  };
  
  export const CATEGORY_FIELDS: Record<CategoryValue, FieldDef[]> = {
    immobilier: [
      { name: "typeBien", label: "Type de bien", type: "select", options: ["Appartement", "Maison", "Studio", "Terrain"] },
      { name: "surface", label: "Surface (m²)", type: "number", placeholder: "Ex: 65" },
      { name: "pieces", label: "Nombre de pièces", type: "number", placeholder: "Ex: 3" },
      { name: "meuble", label: "Meublé", type: "select", options: ["Oui", "Non"] },
    ],
    vehicules: [
      { name: "marque", label: "Marque", type: "text", placeholder: "Ex: Peugeot" },
      { name: "modele", label: "Modèle", type: "text", placeholder: "Ex: 208" },
      { name: "annee", label: "Année", type: "number", placeholder: "Ex: 2020" },
      { name: "kilometrage", label: "Kilométrage", type: "number", placeholder: "Ex: 85000" },
      { name: "carburant", label: "Carburant", type: "select", options: ["Essence", "Diesel", "Hybride", "Électrique"] },
    ],
    electronique: [
      { name: "type", label: "Type", type: "select", options: ["Téléphone", "PC", "Console", "TV", "Accessoire"] },
      { name: "marque", label: "Marque", type: "text", placeholder: "Ex: Apple" },
      { name: "etat", label: "État", type: "select", options: ["Neuf", "Très bon", "Bon", "Correct"] },
      { name: "garantie", label: "Garantie", type: "select", options: ["Oui", "Non"] },
    ],
    services: [
      { name: "domaine", label: "Domaine", type: "select", options: ["BTP", "Informatique", "Cours", "Ménage", "Autre"] },
      { name: "disponibilite", label: "Disponibilité", type: "text", placeholder: "Ex: Week-end / Soir / Tous les jours" },
      { name: "zone", label: "Zone d’intervention", type: "text", placeholder: "Ex: Paris et alentours" },
    ],
    emploi: [],
    locations_vacances: [],
    maison_jardin: [],
    famille: [],
    mode: [],
    loisirs: [],
    animaux: [],
    materiel_professionnel: [],
    divers: [],
    "": [],
  };

  export type FormValues = {
    typeAnnonce: "offre" | "demande";
    nom: string;
    categorie: CategoryValue;
    professionnel: "oui" | "non" | "";
    lieu: string;
    contact: string;
    clientContact: string;
    prix: string;
    description: string;
    infosSupp: string;
    photo: FileList | null;
    caracteristiques: Record<string, string | number>;
  };