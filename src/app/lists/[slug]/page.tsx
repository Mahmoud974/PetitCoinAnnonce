// /app/locomotion/[category]/page.tsx

import React from 'react';
import ListsLocomotion from '../../ListsLocomotion';

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  const { slug } = params;
  
  console.log('URL slug:', slug); 
  const res = await fetch(`http://localhost:3000/api/${slug}`, {
    cache: 'no-store'
  });

  const posts = await res.json();

  return (
    <ListsLocomotion posts={posts} />
  );
}
