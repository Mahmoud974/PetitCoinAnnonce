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
  const title = TITLES[slug] || 'Mes Annonce(s)'

  return (
    <main className="min-h-screen bg-[#f9f9f7]">
      {/* Header inspiré par l'image du titre */}
      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto text-center">
          <nav className="text-xs uppercase tracking-widest text-gray-400 mb-6">
            <span>Accueil</span> <span className="mx-2">/</span> <span className="text-[#1a2e26] font-bold">{title}</span>
          </nav>
          
          {/* Style du titre calqué sur l'image fournie */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a2e26] leading-tight">
            Toutes les annonces
          </h1>
          <p className="mt-2 text-2xl md:text-3xl text-[#1a2e26] italic font-serif opacity-90">
            Parcourez les annonces de la catégorie {title.toLowerCase()}
          </p>
          
          {/* Petite barre décorative lime sous le titre */}
          <div className="w-16 h-1 bg-[#d4f45d] mx-auto mt-6 rounded-full" />
        </div>
      </div>

      {/* Grille d'annonces */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
            <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#1a2e26]">
                    Résultats récents
                </h2>
            </div>
            <div className="text-sm text-gray-500">
                Trié par : <span className="text-[#1a2e26] font-medium">Plus récent</span>
            </div>
        </div>
        
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Simulation des cartes dynamiques */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <CardPrincipalAnnonce key={item} />
            ))}
        </div>
      </div>
    </main>
  )
}