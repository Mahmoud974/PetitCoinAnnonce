import React from 'react'
import Tests from './Test';

export default async function page() {
  const data = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store'
  });
  
  const posts = await data.json();
  
  return (
   <Tests posts={posts}/>
  )
}
