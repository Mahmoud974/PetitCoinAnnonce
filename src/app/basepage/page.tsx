'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search, MapPin, Heart, ArrowUpRight,
  Car, Home, Briefcase, Smartphone, Shirt, Sofa, Package, Plane,
} from 'lucide-react';

const categories = [
  { name: 'Véhicules', icon: Car, href: '/annonces?cat=vehicules' },
  { name: 'Immobilier', icon: Home, href: '/annonces?cat=immobilier' },
  { name: 'Emploi', icon: Briefcase, href: '/annonces?cat=emploi' },
  { name: 'Électronique', icon: Smartphone, href: '/annonces?cat=electronique' },
  { name: 'Mode', icon: Shirt, href: '/annonces?cat=mode' },
  { name: 'Maison', icon: Sofa, href: '/annonces?cat=maison' },
  { name: 'Fret & colis', icon: Package, href: '/annonces?cat=fret' },
  { name: 'Voyages', icon: Plane, href: '/annonces?cat=voyages' },
];

const listings = [
  { id: 1, category: 'Cars', title: 'Peugeot 208 - Essence - 2021', price: '18 500€', place: 'Paris', time: '2 heures', likes: 8 },
  { id: 2, category: 'Moto', title: 'Scooter Yamaha 125', price: '1 200 000 KMF', place: 'Moroni', time: '3 heures', likes: 12 },
  { id: 3, category: 'Immo', title: 'Appartement 3 pièces meublé', price: '350 000 KMF / mois', place: 'Mutsamudu', time: '5 heures', likes: 5 },
  { id: 4, category: 'Mobile', title: 'iPhone 13 128 Go', price: '450€', place: 'Marseille', time: '1 jour', likes: 15 },
  { id: 5, category: 'Cars', title: 'Renault Clio - Diesel - 2019', price: '12 500€', place: 'Lyon', time: '1 jour', likes: 12 },
  { id: 6, category: 'Maison', title: 'Canapé 3 places', price: '180€', place: 'Fomboni', time: '1 jour', likes: 3 },
  { id: 7, category: 'Outils', title: 'Groupe électrogène 5 kVA', price: '400 000 KMF', place: 'Moroni', time: '2 jours', likes: 6 },
  { id: 8, category: 'Cars', title: 'Volkswagen Golf - Essence - 2020', price: '22 500€', place: 'Paris', time: '2 jours', likes: 15 },
];

export default function KisiwaHomePage() {
  const [query, setQuery] = useState('');
  const [place, setPlace] = useState('');
  const [liked, setLiked] = useState<number[]>([]);

  const toggleLike = (id: number) =>
    setLiked((l) => (l.includes(id) ? l.filter((x) => x !== id) : [...l, id]));

  const search = () => {
    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (place) params.set('lieu', place);
    window.location.href = `/annonces?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1b3226]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Recherche */}
      <section className="bg-[#1b3226] px-4 py-14  ">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
            Achetez et vendez <span className="italic font-serif font-normal">aux Comores</span>
          </h1>

          <div className="bg-white rounded-2xl p-2 flex flex-col md:flex-row gap-2 shadow-xl">
            <label className="flex items-center gap-3 flex-1 px-4 py-3">
              <Search size={20} className="text-[#1b3226]/50 shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && search()}
                placeholder="Que recherchez-vous ?"
                className="w-full outline-none bg-transparent placeholder:text-[#1b3226]/40"
              />
            </label>
            <label className="flex items-center gap-3 md:w-56 px-4 py-3 border-t md:border-t-0 md:border-l border-[#1b3226]/10">
              <MapPin size={20} className="text-[#1b3226]/50 shrink-0" />
              <input
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && search()}
                placeholder="Ville ou île"
                className="w-full outline-none bg-transparent placeholder:text-[#1b3226]/40"
              />
            </label>
            <button
              onClick={search}
              className="bg-[#D4E84A] text-[#1b3226] font-bold px-8 py-3 rounded-xl hover:brightness-95 transition"
            >
              Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
          Catégories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map(({ name, icon: Icon, href }) => (
            <Link
              key={name}
              href={href}
              className="bg-white border border-[#1b3226]/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-[#1b3226] transition-colors"
            >
              <Icon size={28} strokeWidth={1.5} />
              <span className="font-medium text-sm">{name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Dernières annonces */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
            Dernières annonces
          </h2>
          <Link href="/annonces" className="text-sm font-medium underline underline-offset-4">
            Tout voir
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((item) => {
            const isLiked = liked.includes(item.id);
            const [priceMain, priceSuffix] = item.price.split(' / ');
            const likes = item.likes + (isLiked ? 1 : 0);

            return (
              <article
                key={item.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-[#1b3226] shadow-[0_10px_30px_-12px_rgba(27,50,38,0.45)]"
              >
                {/* Image plein cadre */}
                <Image
                  src="/3.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />

                {/* Dégradé */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,.92) 0%, rgba(0,0,0,.6) 32%, rgba(0,0,0,0) 62%)',
                  }}
                />

                {/* Lien sur toute la carte */}
                <Link
                  href={`/annonces/${item.id}`}
                  aria-label={item.title}
                  className="absolute inset-0 z-10 rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1b3226]"
                />

                {/* Haut : catégorie + cœur */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-5">
                  <span className="rounded-full bg-[#D4E84A] px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-wider text-[#1b3226]">
                    {item.category}
                  </span>
                  <button
                    onClick={() => toggleLike(item.id)}
                    aria-label={isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                    aria-pressed={isLiked}
                    className="pointer-events-auto -mr-1 p-1 transition active:scale-90"
                  >
                    <Heart
                      size={18}
                      strokeWidth={1.5}
                      className={isLiked ? 'fill-[#D4E84A] stroke-[#D4E84A]' : 'stroke-white/90'}
                    />
                  </button>
                </div>

                {/* Bas : lieu, titre, prix, flèche */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-5 pb-6 text-white">
                  <div className="flex items-center gap-3 text-[11px] text-white/85">
                    <span className="flex min-w-0 items-center gap-1">
                      <span aria-hidden>📍</span>
                      <span className="truncate">{item.place}</span>
                    </span>
                    <span className="flex shrink-0 items-center gap-1">
                      <span aria-hidden>🕒</span>
                      {item.time}
                    </span>
                  </div>

                  <h3 className="mt-1.5 line-clamp-2 min-h-[2.75rem] text-[17px] font-semibold leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="whitespace-nowrap text-xl font-bold leading-none text-[#D4E84A]">
                        {priceMain}
                        {priceSuffix && (
                          <span className="ml-1 text-xs font-normal text-[#D4E84A]/80">/ {priceSuffix}</span>
                        )}
                      </p>
                      <p className="mt-1.5 truncate text-[10px] italic text-white/55">
                        {likes} personne{likes > 1 ? 's' : ''} adore{likes > 1 ? 'nt' : ''} ça
                      </p>
                    </div>

                    <span
                      aria-hidden
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#D4E84A] text-[#1b3226] transition group-hover:scale-105"
                    >
                      <ArrowUpRight size={18} strokeWidth={2.25} />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

    </div>
  );
}