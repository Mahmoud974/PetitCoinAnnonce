import React from 'react';
import Image from 'next/image';
import { Search, MapPin, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-[#FDFBF7]">
      
      {/* Hero Content */}
      <section className="relative bg-[#1b3226] text-white px-6 md:px-10 pt-16 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Texte gauche : L'accroche Diaspora & Comores */}
          <div className="space-y-8 z-10">
            <h1 className="text-5xl md:text-7xl   font-serif leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Tout se trouve <br />
              <span className="font-serif italic   border-[#D4E84A] text-[#D4E84A]">sur l{`'`}île </span>  
              et au-delà.
            </h1>
            
            <p className="text-gray-300 max-w-md leading-relaxed text-lg">
              La plateforme de confiance pour la communauté comorienne. 
              Vendez aux Comores, achetez depuis la France, restez connectés.
            </p>

            {/* Barre de recherche rapide intégrée au Hero */}
            <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl p-2 shadow-2xl max-w-xl">
              <div className="flex items-center flex-1 px-4 py-2 border-b sm:border-b-0 sm:border-r border-gray-100 w-full">
                <Search className="text-gray-400 mr-2" size={20} />
                <input 
                  type="text" 
                  placeholder="Que cherchez-vous ?" 
                  className="bg-transparent text-gray-800 outline-none w-full text-sm"
                />
              </div>
              <div className="flex items-center px-4 py-2 w-full sm:w-auto">
                <MapPin className="text-gray-400 mr-2" size={20} />
                <select className="bg-transparent text-gray-600 outline-none text-sm cursor-pointer">
                  <option>Toutes les îles</option>
                  <option>Grande Comore</option>
                  <option>Anjouan</option>
                  <option>Mohéli</option>
                  <option>Mayotte</option>
                  <option>France (Diaspora)</option>
                </select>
              </div>
              <button className="bg-[#1b3226] text-[#D4E84A] px-6 py-3 rounded-xl font-bold text-sm w-full sm:w-auto hover:bg-[#254635] transition-colors">
                Trouver
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <button className="text-[#D4E84A] font-medium flex items-center gap-2 hover:underline">
                Comment ça marche ? <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* Image droite : Visuel moderne Comores/Lifestyle */}
          <div className="relative">
            <div className="relative z-10 rounded-tl-[120px] rounded-br-[50px] overflow-hidden border-[12px] border-white/5 shadow-2xl">
              <Image 
                src="/images/hero-kisiwa.jpg" // Remplace par une belle photo de Moroni ou d'un marché
                alt="Petites annonces Comores" 
                width={600} 
                height={800}
                className="object-cover h-[550px] w-full"
                priority
              />
            </div>
            
            {/* Badge Diaspora */}
            <div className="absolute -bottom-6 -left-6 bg-[#D4E84A] text-[#1b3226] p-6 rounded-2xl shadow-xl z-20 max-w-[180px]">
              <p className="text-xs font-bold uppercase tracking-wider mb-1">Diaspora</p>
              <p className="text-sm font-medium leading-tight">Publiez vos annonces depuis la France vers les Comores.</p>
            </div>
          </div>
        </div>

        {/* Courbe du bas (SVG) pour la transition douce */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="#FDFBF7"></path>
          </svg>
        </div>
      </section>

      {/* Section Statistiques / Réassurance */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#1b3226]/60 text-sm uppercase tracking-[0.3em] font-bold">Pourquoi Kisiwa?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b3226] mt-4" style={{ fontFamily: "'Syne', sans-serif" }}>
            Le pont entre l{`'`}archipel <br /> et le reste du monde.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-5xl font-light text-[#1b3226] mb-2">0€</h3>
            <p className="text-gray-500 uppercase text-xs tracking-widest">Frais de dépôt</p>
          </div>
          <div>
            <h3 className="text-5xl font-light text-[#1b3226] mb-2">24h</h3>
            <p className="text-gray-500 uppercase text-xs tracking-widest">Validation rapide</p>
          </div>
          <div>
            <h3 className="text-5xl font-light text-[#1b3226] mb-2">+4 Iles</h3>
            <p className="text-gray-500 uppercase text-xs tracking-widest">Couverture totale</p>
          </div>
        </div>
      </section>
    </main>
  );
}