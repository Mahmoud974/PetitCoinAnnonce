'use client';

import CardPrincipal from '@/components/CardPrincipal';
import React from 'react';
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

export default function ListsLocomotion({ posts }: { posts: any[] }) {
  const params = useParams();
  const slug = params?.slug as string;
  const title = TITLES[slug] || "Catégorie";
  console.log(title);
  

  return (
    <div className='my-12 max-w-7xl container mx-auto'>
      <Back/>
      <h1 className="text-2xl font-bold">{title}</h1>
      <hr className='border-gray-300 my-4' />
      
      <div className='grid grid-cols-4 gap-4'>
        {posts.map((post: any, index: number) => (
          <CardPrincipal key={index} posts={post} />
        ))}
      </div>
    </div>
  );
}
