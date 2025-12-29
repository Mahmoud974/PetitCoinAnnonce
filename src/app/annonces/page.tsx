'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import CardPrincipalAnnonce from '@/components/CardPrincipalAnnonce'

const TITLES: Record<string, string> = {
  immobilier: 'Immobilier',
  emploi: 'Emploi',
  'seconde-main': 'Seconde main',
  animaux: 'Animaux',
  services: 'Services',
  vacances: 'Vacances',
  'affaires-pro': 'Affaires pro',
}

export default function Page() {
  const params = useParams()
  const slug = params?.slug as string
  const title = TITLES[slug] || 'Annonce(s)'

  return (
    <div className="mt-[100px] container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold">{title}</h1>
      <hr className="border-gray-300 my-4" />

 
      <div
        className="grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        <CardPrincipalAnnonce />
      </div>
    </div>
  )
}
