"use client";

import { MapPin, ShieldCheck, ChevronRight, Heart, Share2 } from "lucide-react";
import Icons from "./Icons";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import ImgItem from "./ImgItem";
import Back from "../Back";
import type { Post } from "@/types/post";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Product({ posts }: { posts: Post[] }) {
  const params = useParams();
  const slug = params?.slug as string;
  const filterCard = posts?.filter((p: Post) => p.id === Number(slug));

  if (!filterCard.length)
    return <p className="text-center py-20 font-syne">Annonce introuvable</p>;

  const { title, ref, description, informations, category, price } = filterCard[0];
  const position: [number, number] = [-11.7022, 43.2551];

  return (
    <div className="min-h-screen mx-auto text-[#1b3226] pb-20">

      <header className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Back />
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-4 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* ── COLONNE GAUCHE ── */}
        <div className="lg:col-span-8 space-y-10">

          <div className="relative rounded-[1rem] overflow-hidden shadow-sm aspect-[16/10] bg-white">
            <ImgItem />
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold">
                1 / 3
              </span>
            </div>
          </div>

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
              <span
                className="text-5xl md:text-8xl font-black italic tracking-tighter"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {title.split(" ").slice(0, 2).join(" ")}
              </span>
              <span
                className="text-4xl md:text-7xl font-medium tracking-tight -mt-1 md:-mt-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  textTransform: "none",
                }}
              >
                {title.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            <div className="flex gap-12 pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase opacity-30 font-bold tracking-widest">
                  Localisation
                </span>
                <div className="flex items-center gap-1 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-[#D4E84A]" /> Moroni, Comores
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase opacity-30 font-bold tracking-widest">
                  Publication
                </span>
                <span className="font-bold text-sm">Il y a 3 jours</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase opacity-30 font-bold tracking-widest">
                  État
                </span>
                <span className="bg-[#1b3226] text-[#D4E84A] px-2 py-0.5 rounded text-[10px] font-bold self-start">
                  Excellent
                </span>
              </div>
            </div>
          </section>

          <div className="py-10 border-t border-[#1b3226]/5">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 opacity-40">
              Description
            </h3>
            <p className="text-xl leading-relaxed font-medium text-[#1b3226]/80 max-w-2xl">
              {description}
            </p>
          </div>

          <Icons informations={informations} />
        </div>

        {/* ── COLONNE DROITE ── */}
        <div className="lg:col-span-4">
          <div className="bg-[#1b3226] rounded-[2.5rem] p-8 text-white shadow-2xl sticky top-6 space-y-6">

            {/* Favoris / Partager */}
            <div className="flex gap-2">
              <button className="flex-1 h-12 rounded-2xl border border-white/10 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:bg-white/5 hover:text-white transition-all">
                <Heart className="w-4 h-4" />
                Favoris
              </button>
              <button className="flex-1 h-12 rounded-2xl border border-white/10 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:bg-white/5 hover:text-white transition-all">
                <Share2 className="w-4 h-4" />
                Partager
              </button>
            </div>

            {/* Prix */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-2">
                Prix souhaité
              </p>
              <div
                className="text-6xl font-black text-[#D4E84A] tracking-tighter italic"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {price}€
              </div>
            </div>

            {/* Boutons CTA */}
            <div className="space-y-3">
              <Button className="w-full h-16 rounded-2xl bg-[#D4E84A] text-[#1b3226] hover:scale-[1.02] transition-all font-black text-lg uppercase italic tracking-tighter">
                Faire une offre
              </Button>
              <div className="w-full h-16 rounded-2xl border border-white/10 flex items-center justify-center font-bold uppercase italic text-sm tracking-widest hover:bg-white/5 cursor-pointer transition-all">
                Contacter le vendeur
              </div>
            </div>

            {/* Vendeur */}
            <div className="pt-6 border-t border-white/5">
              <div className="bg-white rounded-3xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#1b3226] flex items-center justify-center font-black text-white">
                    M
                  </div>
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

            {/* Map intégrée */}
            <div
              className="rounded-[1.5rem] overflow-hidden border border-white/10"
              style={{ height: "180px" }}
            >
              <MapContainer
                center={position}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
                scrollWheelZoom={false}
                dragging={false}
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                <Circle
                  center={position}
                  radius={800}
                  pathOptions={{
                    color: "#D4E84A",
                    fillColor: "#D4E84A",
                    fillOpacity: 0.15,
                    weight: 2,
                  }}
                />
              </MapContainer>
            </div>

           

          </div>
        </div>

      </main>
    </div>
  );
}