import React from 'react';
import Tests from './Test'; 

type Props = {
  params: {
    category: string;
  };
};

export default async function Page({ params }: Props) {
  const { category } = params;

  

  const res = await fetch(`http://localhost:3000/api/${category}`, {
    cache: 'no-store',
  });
  console.log(res);

  if (!res.ok) {
    return <div>Erreur lors du chargement des données</div>;
  }

  const posts = await res.json();

  return <Tests posts={posts} />;
}
