"use client";

import {   MapPin,  ShieldCheck, ChevronRight } from "lucide-react";
import Icons from "./Icons";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import ImgItem from "./ImgItem";
import Back from "../Back";
 
import type { Post } from "@/types/post";
import { MapContainer, TileLayer, Circle  } from "react-leaflet";
import "leaflet/dist/leaflet.css";
 

export default function Product({ posts }: { posts: Post[] }) {
  const params = useParams();
  const slug = params?.slug as string;
  const filterCard = posts?.filter((p: Post) => p.id === Number(slug));

  if (!filterCard.length) return <p className="text-center py-20 font-syne">Annonce introuvable</p>;

  const { title, ref, description, informations, category, price } = filterCard[0];
  const position: [number, number] = [-11.7022, 43.2551];

  return (
    <div className="min-h-screen mx-auto  text-[#1b3226] pb-20">
      
      {/* 1. HEADER MINIMALISTE (Style image_514f74.jpg) */}
      <header className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Back />
         
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* COLONNE GAUCHE (8/12) */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* IMAGE PRINCIPALE (Inspiré image_514f74.jpg) */}
          <div className="relative rounded-[1rem] overflow-hidden shadow-sm aspect-[16/10] bg-white">
            <ImgItem />
            <div className="absolute top-6 left-6 flex gap-2">
               <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold">1 / 3</span>
            </div>
          </div>

          {/* TITRE "SIGNATURE" (Style image_514f4e.png) */}
          <section className="space-y-4 pt-4 border-t border-[#1b3226]/5">
            <div className="flex items-center gap-4">
              <span className="bg-[#D4E84A] px-2 py-0.5 rounded-sm text-[10px] font-black uppercase tracking-widest">
                {category}
              </span>
              <span className="text-[10px] text-[#1b3226]/30 font-bold tracking-widest uppercase">
                REF_{ref}
              </span>
            </div>

            <h1 className="flex flex-col leading-[0.8] tracking-tighter uppercase italic">
              <span className="text-5xl md:text-8xl font-black italic tracking-tighter" 
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                {title.split(' ').slice(0, 2).join(' ')}
              </span>
              <span className="text-4xl md:text-7xl font-medium lowercase tracking-tight -mt-1 md:-mt-2" 
                    style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', textTransform: 'none' }}>
                {title.split(' ').slice(2).join(' ')}
              </span>
            </h1>

            <div className="flex gap-12 pt-8">
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] uppercase opacity-30 font-bold tracking-widest">Localisation</span>
                 <div className="flex items-center gap-1 font-bold text-sm">
                   <MapPin className="w-4 h-4 text-[#D4E84A]" /> Moroni, Comores
                 </div>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] uppercase opacity-30 font-bold tracking-widest">Publication</span>
                 <span className="font-bold text-sm">Il y a 3 jours</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[10px] uppercase opacity-30 font-bold tracking-widest">État</span>
                 <span className="bg-[#1b3226] text-[#D4E84A] px-2 py-0.5 rounded text-[10px] font-bold self-start">Excellent</span>
               </div>
            </div>
          </section>

          {/* DESCRIPTION */}
          <div className="py-10 border-t border-[#1b3226]/5">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 opacity-40">Description</h3>
            <p className="text-xl leading-relaxed font-medium text-[#1b3226]/80 max-w-2xl">
              {description}
            </p>
          </div>

          <Icons informations={informations} />
        </div>

        {/* COLONNE DROITE (4/12) - STICKY (Inspiré image_514f74.jpg) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* CARTE PRIX NOIRE */}
          <div className="bg-[#1b3226] rounded-[2.5rem] p-8 text-white shadow-2xl sticky top-6">
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-2">Prix souhaité</p>
            <div className="text-6xl font-black text-[#D4E84A] mb-10 tracking-tighter italic" style={{ fontFamily: "'Syne', sans-serif" }}>
              {price}€
            </div>
            
            <div className="space-y-4">
              <Button className="w-full h-16 rounded-2xl bg-[#D4E84A] text-[#1b3226] hover:scale-[1.02] transition-all font-black text-lg uppercase italic tracking-tighter">
                Faire une offre
              </Button>
              <div className="w-full h-16 rounded-2xl border border-white/10 flex items-center justify-center font-bold uppercase italic text-sm tracking-widest hover:bg-white/5 cursor-pointer transition-all">
                Contacter le vendeur
              </div>
            </div>

            {/* VENDEUR INTEGRÉ (Style image_514f74.jpg) */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="bg-white rounded-3xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#1b3226] flex items-center justify-center font-black text-white">M</div>
                  <div>
                    <h4 className="font-bold text-[#1b3226] leading-none">Moussa. A</h4>
                    <div className="flex items-center gap-1 mt-1">
                      <FaStar className="text-[#D4E84A] w-2.5 h-2.5" />
                      <span className="text-[10px] text-[#1b3226]/40">(12 avis)</span>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#1b3226]/10 flex items-center justify-center text-[#1b3226]">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* SECURITÉ (Style image_514f74.jpg) */}
            <div className="mt-6 p-6 bg-[#D4E84A]/5 border border-[#D4E84A]/10 rounded-3xl">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#D4E84A]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#D4E84A]">Achat Sécurisé</span>
              </div>
              <ul className="text-[10px] space-y-2 opacity-50 font-medium leading-tight">
                <li>• Remise en main propre uniquement.</li>
                <li>• Paiement en espèces après inspection.</li>
                <li>• Ne jamais envoyer d'argent à distance.</li>
              </ul>
            </div>
          </div>

          {/* MINI CARTE MAP */}
          <div className="h-[200px] w-full rounded-[2rem] overflow-hidden grayscale border border-[#1b3226]/5 shadow-sm">
            <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }} zoomControl={false}>
              <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
              <Circle center={position} radius={800} pathOptions={{ color: '#1b3226', fillColor: '#D4E84A', fillOpacity: 0.3 }} />
            </MapContainer>
          </div>
        </div>
      </main>
    </div>
  );
}