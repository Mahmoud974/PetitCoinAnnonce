import CardPrincipal from '@/components/CardPrincipal'
import React from 'react'

export default function page() {
  return (
    <div className='mt-12 max-w-7xl  container mx-auto'>
 
      <h1 className="text-2xl font-bold">
             Mes favorites (12) 
            </h1>
<hr className='border-gray-300 my-4' />
   <div className='flex gap-3'>
   <CardPrincipal />
   <CardPrincipal />
   </div>

      
    </div>
  )
}
