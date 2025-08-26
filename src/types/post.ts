export type Informations = {
  version: string;
  annee: string;
  kilometrage: string;
  energie: string;
  couleur: string;
  transmission: string;
  portes: string;
  consommation: string;
  puissance: string;
  nombre_de_places: string;
};

export type Post = {
  id: number;
  title: string;
  price: number;
  category: string;
  images: string[];
  likes: number;
  description: string;
  date: string | Date;
  informations: Informations;
};


