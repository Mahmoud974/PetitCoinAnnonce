// /app/locomotion/[category]/page.tsx

import React from 'react';
import ListsLocomotion from '../../ListsLocomotion';

interface Props {
  params: {
    category: string;
  };
}

export default async function Page({ params }: Props) {
  const { category } = params;

  console.log('Category:', category); 
  const res = await fetch('http://localhost:3000/api/cars', {
    cache: 'no-store'
  });

  const posts = await res.json();

  return (
    <ListsLocomotion posts={posts} />
  );
}
