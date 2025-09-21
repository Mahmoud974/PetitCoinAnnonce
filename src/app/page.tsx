import ScrollRow from "../components/ScrollRow";



 
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
 
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000/api';

const CATEGORY_CONFIG = [
  { key: 'voitures', title: 'Locomotion', slug: 'locomotion', path: 'cars' },
  { key: 'immobiliers', title: 'Immobilier', slug: 'immobilier', path: 'immobiliers' },
  { key: 'animaux', title: 'Animaux', slug: 'animaux', path: 'animals' },
  { key: 'services', title: 'Services', slug: 'services', path: 'services' },
  { key: 'emplois', title: 'Emploi', slug: 'emploi', path: 'emplois' },
  { key: 'voyages', title: 'Vacances', slug: 'vacances', path: 'voyage' },
  { key: 'sante', title: 'Santé', slug: 'healthy', path: 'healthy' },
  { key: 'activites', title: 'Activités', slug: 'activities', path: 'activities' },
  { key: 'alimentations', title: 'Alimentations', slug: 'alimentations', path: 'alimentations' },
  { key: 'vetements', title: 'Vêtements', slug: 'cloths', path: 'cloths' },
  { key: 'maisonJardin', title: 'Maison & Jardin', slug: 'house-garden', path: 'house-garden' },
] as const;

 
function buildUrl(path: string) {
  const base = BASE_URL.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return `${base}/${cleanPath}`;
}

async function fetchJson<T>(url: string): Promise<T[]> {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return [] as T[];
    const data = await res.json();
    return Array.isArray(data) ? (data as T[]) : [];
  } catch {
    return [] as T[];
  }
}

export default async function Page() {
   
  const results = await Promise.all(
    CATEGORY_CONFIG.map(({ path }) => fetchJson<Post>(buildUrl(path)))
  );
 
  const sections = CATEGORY_CONFIG.map((cfg, idx) => ({
    title: cfg.title,
    slug: cfg.slug,
    items: results[idx] ?? [],
  }));

  return (
    <div className="min-h-screen">
      <div className="container mt-16 mx-auto max-w-7xl">
        <div className="flex mb-8">
          <div className="w-2 bg-red-600 h-auto mr-3" />
          <div>
            <h1 className="text-2xl font-bold">Toutes les catégories</h1>
            <p>Parcourez les annonces par catégories</p>
          </div>
        </div>

        {sections.map(({ title, slug, items }) => (
          <section key={slug} className="mb-12">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <ScrollRow items={(items || []).slice(0, 12)} />
          </section>
        ))}
      </div>
    </div>
  );
}
