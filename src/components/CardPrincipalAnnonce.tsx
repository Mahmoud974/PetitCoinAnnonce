'use client'

import React from 'react'
import Image from 'next/image'
import { MapPin, Clock, Heart, ArrowUpRight, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function CardPrincipalAnnonce() {
  return (
    <div className="group relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#1a2e26] text-white shadow-2xl transition-all duration-300 hover:-translate-y-1">
      
      {/* Image de fond avec overlay dégradé */}
      <div className="absolute inset-0">
        <Image
          src="/1.jpg"
          alt="Pièce seat ibiza"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Dégradé pour rendre le texte lisible (du noir vers le transparent) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e26] via-[#1a2e26]/40 to-transparent" />
      </div>

      {/* Badges du haut (Catégorie et Favoris) */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
        <span className="bg-[#d4f45d] text-[#1a2e26] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Auto
        </span>
        <button className="bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition-colors">
          <Heart className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Bouton Supprimer (Admin/User action) - Discret en haut */}
      <div className="absolute top-16 right-4 z-10">
         <button 
            onClick={() => confirm(`Voulez-vous supprimer l'annonce ?`)}
            className="p-2 bg-red-500/80 hover:bg-red-600 rounded-full transition-all scale-0 group-hover:scale-100"
         >
           <Trash2 className="w-4 h-4 text-white" />
         </button>
      </div>

      {/* Contenu du bas */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
        
        {/* Titre et Détails */}
        <div>
          <h3 className="font-bold text-xl leading-tight">
            Peugeot 208 - Essence - 2021
          </h3>
          <div className="flex items-center gap-4 mt-2 text-gray-300 text-xs">
             <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1 text-[#d4f45d]" />
                <span>Paris 75</span>
             </div>a
             <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                <span>18/03/2026</span>
             </div>
          </div>
        </div>

        {/* Prix et Action */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-2xl font-bold text-[#d4f45d]">
            18 500€
          </p>
          
          <Link href="/lists/immobilier">
            <div className="bg-[#d4f45d] p-3 rounded-xl text-[#1a2e26] hover:scale-110 transition-transform">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </Link>
        </div>

        {/* Bouton Modifier (Apparaît au hover) */}
        <button className="w-full bg-white/10 backdrop-blur-md py-2 rounded-xl font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           Modifier l'annonce
        </button>
      </div>
    </div>
  )
}