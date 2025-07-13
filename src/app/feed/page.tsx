import Card from '@/components/Card'
import React from 'react'

export default function page() {
  return (
    <div className='mt-[100px] bg-white container mx-auto'>
      <ul className='flex justify-start gap-4 text-xl font-bold'>
        <li>En ligne (2)</li>
        <li>Vendus (2)</li>
      </ul>
      <hr className='border-gray-300 my-4' />
      <Card />

      
    </div>
  )
}
