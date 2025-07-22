import React from 'react'
import ListsLocomotion from './ListsLocomotion';
 

export default async function page() {
  const data = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store'
  });
  
  const posts = await data.json();
  
  return (
  <ListsLocomotion posts={posts}/>
  )
}
