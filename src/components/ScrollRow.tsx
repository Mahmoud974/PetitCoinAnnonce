"use client";

import React, { useRef } from "react";
import CardPrincipal from "@/components/CardPrincipal";

type Informations = {
  version: string;
  annee: string;
  kilometrage: string;
  energie: string;
  couleur: string;
  transmission: string;
  portes: string;
  consommation: string;
  puissance: string;
  nombre_de_places: string;
};

export type Post = {
  id: number;
  title: string;
  price: number;
  category: string;
  images: string[];
  likes: number;
  description: string;
  date: string | Date;
  informations: Informations;
};

export default function ScrollRow({ items }: { items: Post[] }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  const scrollLeft = () => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div ref={ref} className="row flex gap-4 overflow-x-auto pr-10">
        {items.map((post) => (
          <div key={post.id} className="shrink-0 w-[280px] md:w-[300px]">
            <CardPrincipal posts={post} />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-1">
        <div className="flex flex-col gap-2">
          <button
            aria-label="Scroll left"
            className="rounded-full bg-white/90 text-black shadow p-2 hidden md:block"
            onClick={scrollLeft}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M15.53 19.03a.75.75 0 01-1.06 0l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 111.06 1.06L10.06 12l5.47 5.47a.75.75 0 010 1.06z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            aria-label="Scroll right"
            className="rounded-full bg-white/90 text-black shadow p-2"
            onClick={scrollRight}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M8.47 4.97a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06L13.94 12 8.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <style jsx>{`
        .row {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .row::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
}


