// /app/locomotion/[category]/page.tsx


import ElementCategory from '@/app/ListsLocomotion';
import React from 'react';


interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  //http://localhost:3000/api/product/ok
 
  const res = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    return (
      <div className='my-12 max-w-7xl container mx-auto'>
        <p>Erreur lors du chargement des données</p>
      </div>
    );
  }

  const posts = await res.json();

  // S'assurer que posts est un tableau
  const postsArray = Array.isArray(posts) ? posts : [];

  return (
    <ElementCategory posts={postsArray} />
  );
}
