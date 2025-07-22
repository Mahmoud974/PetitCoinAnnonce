'use client';

import CardPrincipal from '@/components/CardPrincipal';
import React from 'react';
import { useParams } from 'next/navigation';
import Back from '@/components/Back';

const TITLES: Record<string, string> = {
  immobilier: "Immobilier",
  emploi: "Emploi",
  'seconde-main': "Seconde main",
  locomotion: "Locomotion",
  animaux: "Animaux",
  services: "Services",
  vacances: "Vacances",
  'affaires-pro': "Affaires pro",
};

export default function ListsLocomotion({ posts }: any) {
  const params = useParams();
  const slug = params?.slug as string;
  const title = TITLES[slug] || "Catégorie";

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
