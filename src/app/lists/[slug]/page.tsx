'use client'
import CardPrincipal from '@/components/CardPrincipal'
import React from 'react'
import { useParams } from 'next/navigation';

const TITLES: Record<string, string> = {
  immobilier: "Immobilier",
  emploi: "Emploi",
  'seconde-main': "Seconde main",
  animaux: "Animaux",
  services: "Services",
  vacances: "Vacances",
  'affaires-pro': "Affaires pro",
};

export default function Page() {
  const params = useParams();
  const slug = params.slug as string;
  const title = TITLES[slug] || "Catégorie";
  console.log(slug);
  

  return (
    <div className='mt-[100px] container mx-auto'>
      <h1 className="text-2xl font-bold">{title}</h1>
      <hr className='border-gray-300 my-4' />
      <div className='flex gap-3'>
        <CardPrincipal />
        <CardPrincipal />
      </div>
    </div>
  );
}
