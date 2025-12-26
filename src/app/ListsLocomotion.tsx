'use client';

import CardPrincipal from '@/components/CardPrincipal';
import { useParams } from 'next/navigation';
import Back from '@/components/Back';

const TITLES: Record<string, string> = {
  immobiliers: "Immobilier",
  emplois: "Emploi",
  cars: "Locomotion",
  animals: "Animaux",
  services: "Services",
  voyage: "Vacances",
  'house-garden': "Maison & Jardin",
  healthy: "Santé",
  alimentations: "Alimentation",
  activities: "Activités",
  cloths: "Vêtements",
};

interface Informations {
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
}

interface Article {
  id: number;
  title: string;
  price: number;
  category: string;
  images: string[];
  likes: number;
  description: string;
  createdAt: string;
  date: string | Date;
  informations: Informations;
}

export default function ElementCategory({ posts }: { posts: Article[] }) {
  const params = useParams();
  const slug = params?.slug as string;
  const title = TITLES[slug] || "Catégorie";
  console.log(title);
  //http://localhost:3000/api/product/ok
 
  const postsArray = Array.isArray(posts) ? posts : [];

  return (
    <div className='my-12 max-w-7xl container mx-auto'>
      <Back/>
      <h1 className="text-2xl font-bold">{title}</h1>
      <hr className='border-gray-300 my-4' />
      
      {postsArray.length === 0 ? (
        <p className="text-gray-500">Aucun article trouvé dans cette catégorie.</p>
      ) : (
        <div className='grid grid-cols-4 gap-4'>
          {postsArray.map((post: Article, index: number) => (
            <CardPrincipal key={index} posts={post} />
          ))}
        </div>
      )}
    </div>
  );
}
