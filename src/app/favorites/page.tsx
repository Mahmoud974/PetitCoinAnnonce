import CardPrincipal from '@/components/CardPrincipal'
import React from 'react'

// Local lightweight mock only; remove when real data is used

export default function page() {
  return (
    <div className='mt-12 max-w-7xl  container mx-auto'>
 
      <h1 className="text-2xl font-bold">
             Mes favorites (12) 
            </h1>
<hr className='border-gray-300 my-4' />
   <div className='flex gap-3'>
     {[1,2].map((i) => (
       <CardPrincipal key={i} posts={{
         id: i,
         title: 'Annonce favorite',
         price: 100 + i,
         category: 'Divers',
         images: [],
         likes: i,
         description: '',
         date: new Date().toISOString(),
         informations: {
           version: '', annee: '', kilometrage: '', energie: '', couleur: '', transmission: '', portes: '', consommation: '', puissance: '', nombre_de_places: ''
         }
       }} />
     ))}
   </div>

      
    </div>
  )
}
