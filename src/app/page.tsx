
import CardPrincipal from '@/components/CardPrincipal';

type Informations = {
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

type Post = {
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

export default async function Page() {
  const endpoints = {
    voitures: 'http://localhost:3000/api/cars',
    immobiliers: 'http://localhost:3000/api/immobiliers',
    animaux: 'http://localhost:3000/api/animals',
    services: 'http://localhost:3000/api/services',
    emplois: 'http://localhost:3000/api/emplois',
    voyages: 'http://localhost:3000/api/voyage',
    sante: 'http://localhost:3000/api/healthy',
    activites: 'http://localhost:3000/api/activities',
    alimentations: 'http://localhost:3000/api/alimentations',
    vetements: 'http://localhost:3000/api/cloths',
    maisonJardin: 'http://localhost:3000/api/house-garden',
  } as const;

  const fetchCategory = async (url: string): Promise<Post[]> => {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return [] as Post[];
    return res.json();
  };

  const [
    cars,
    immobiliers,
    animals,
    services,
    emplois,
    voyage,
    healthy,
    activities,
    alimentations,
    cloths,
    houseGarden,
  ] = await Promise.all([
    fetchCategory(endpoints.voitures),
    fetchCategory(endpoints.immobiliers),
    fetchCategory(endpoints.animaux),
    fetchCategory(endpoints.services),
    fetchCategory(endpoints.emplois),
    fetchCategory(endpoints.voyages),
    fetchCategory(endpoints.sante),
    fetchCategory(endpoints.activites),
    fetchCategory(endpoints.alimentations),
    fetchCategory(endpoints.vetements),
    fetchCategory(endpoints.maisonJardin),
  ]);

  const sections: { title: string; slug: string; items: Post[] }[] = [
    { title: 'Locomotion', slug: 'locomotion', items: cars || [] },
    { title: 'Immobilier', slug: 'immobilier', items: immobiliers || [] },
    { title: 'Animaux', slug: 'animaux', items: animals || [] },
    { title: 'Services', slug: 'services', items: services || [] },
    { title: 'Emploi', slug: 'emploi', items: emplois || [] },
    { title: 'Vacances', slug: 'vacances', items: voyage || [] },
    { title: 'Santé', slug: 'healthy', items: healthy || [] },
    { title: 'Activités', slug: 'activities', items: activities || [] },
    { title: 'Alimentations', slug: 'alimentations', items: alimentations || [] },
    { title: 'Vêtements', slug: 'cloths', items: cloths || [] },
    { title: 'Maison & Jardin', slug: 'house-garden', items: houseGarden || [] },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mt-16 mx-auto max-w-7xl">
        <div className="flex mb-8">
          <div className="w-2 bg-red-600 h-auto mr-3"></div>
          <div>
            <h1 className="text-2xl font-bold">Toutes les catégories</h1>
            <p>Parcourez les annonces par catégories</p>
          </div>
        </div>

        {sections.map(({ title, slug, items }) => (
          <div key={slug} className="mb-12">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-4 gap-4">
              {(items || []).slice(0, 8).map((post: Post) => (
                <CardPrincipal key={post.id} posts={post} />
              ))}
            </div>
            <hr className="border-gray-300 my-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
