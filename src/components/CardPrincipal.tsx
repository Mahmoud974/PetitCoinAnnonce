'use client';

import Image from 'next/image';
import { Heart, ArrowUpRight, Trash2, SquarePen, PauseCircle, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

interface Post {
  id: number; 
  title: string; 
  price: number; 
  category: string;
  images: string[]; 
  likes: number; 
  description: string;
  date: string | Date; 
  createdAt: string;
}

export default function CardModern({ posts }: { posts: Post }) {
  // On utilise les données de l'objet posts ou des valeurs par défaut pour l'exemple
  const { id, title, price, category, likes } = posts;

  return (
    <div className="group relative w-full max-w-[320px] h-[440px] overflow-hidden rounded-[2rem] bg-[#1a2c23] shadow-2xl transition-all duration-500 hover:-translate-y-2">
      
      {/* Zone cliquable vers l'annonce */}
      <Link href={`/item/${id}/${category}`} className="absolute inset-0 z-0">
        <Image
          src="/1.jpg" // Remplace par posts.images[0]
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          priority
        />
        {/* Overlay progressif très sombre en bas pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a14] via-[#0d1a14]/20 to-transparent" />
      </Link>

      {/* --- ACTIONS HAUTE (Favoris & Admin) --- */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start">
        {/* Badge Catégorie */}
        <span className="px-3 py-1 bg-[#D4E84A] text-[#0d1a14] text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
          {category || "Annonce"}
        </span>

        <div className="flex flex-col gap-2">
          {/* Bouton Favoris */}
          <button className="p-2.5 backdrop-blur-md bg-black/20 border border-white/10 rounded-full hover:bg-[#D4E84A] transition-all group/icon">
            <Heart className="w-4 h-4 text-white group-hover/icon:text-[#0d1a14]" />
          </button>
          
          {/* Boutons d'administration (apparaissent au hover de la carte) */}
          <div className="flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
            <button 
              onClick={(e) => { e.preventDefault(); confirm('Supprimer ?'); }}
              className="p-2.5 bg-red-500/80 backdrop-blur-md rounded-full hover:bg-red-600 text-white shadow-xl"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button className="p-2.5 bg-orange-500/80 backdrop-blur-md rounded-full hover:bg-orange-600 text-white shadow-xl">
              <SquarePen className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* --- CONTENU BAS --- */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 pointer-events-none">
        <div className="space-y-3">
          
          {/* Infos de localisation/date */}
          <div className="flex items-center gap-3 text-[10px] text-white/70 font-medium uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#D4E84A]" /> Paris
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> 2 heures
            </span>
          </div>

          {/* Titre */}
          <h3 className="text-white font-bold text-xl leading-tight line-clamp-2 drop-shadow-md">
            {title}
          </h3>

          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-[#D4E84A] tracking-tighter">
                {price.toLocaleString()}€
              </span>
              {likes > 0 && (
                <span className="text-[10px] text-white/50 italic mt-1">
                  {likes} personnes adorent ça
                </span>
              )}
            </div>

            {/* Bouton d'action principal */}
            <div className="pointer-events-auto flex flex-col items-center gap-2">
                 {/* Petit bouton pause discret au dessus du principal */}
                <button className="p-2 text-white/40 hover:text-white transition-colors">
                    <PauseCircle className="w-5 h-5" />
                </button>
                <div className="p-4 bg-[#D4E84A] rounded-2xl shadow-[0_10px_20px_rgba(212,232,74,0.3)] group-hover:rotate-12 transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 text-[#0d1a14]" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}