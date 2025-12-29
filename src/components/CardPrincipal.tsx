'use client';

import Image from 'next/image';
import { MapPin, Clock, Heart } from 'lucide-react';
import Link from 'next/link';

interface Informations {
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
}

interface Post {
  id: number;
  title: string;
  price: number;
  category: string;
  images: string[];
  likes: number;
  description: string;
  date: string | Date;
  informations: Informations;
  createdAt: string;
}

export default function CardPrincipal({ posts }: { posts: Post }) {
  const { id, title, price, category, likes, date } = posts;

  const getTimeAgo = (date: Date | string): string => {
    const now = new Date();
    const postDate = new Date(date);
    const diff = now.getTime() - postDate.getTime();

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (minutes < 1) return "Publié à l'instant";
    if (minutes < 60) return `Publié il y a ${minutes} min`;
    if (hours < 24) return `Publié il y a ${hours}h`;
    return `Publié il y a plus de 24h`;
  };

  return (
    <div
      className="
        group w-full
        max-w-[380px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[360px]
        rounded-2xl text-black bg-white
        shadow-md hover:shadow-xl transition-all duration-300
        overflow-hidden border border-gray-100 hover:border-gray-200
      "
    >
      <Link href={`/item/${id}/${category}`} className="cursor-pointer block">
        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={`/2.jpg`}
            alt={title}
            width={800}
            height={600}
            priority={false}
            className="
              w-full object-cover
              h-44 sm:h-52 md:h-56 lg:h-48
              group-hover:scale-105 transition-transform duration-300
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Likes */}
          <div className="absolute top-3 right-3">
            <button
              type="button"
              className="
                px-2.5 py-2 flex items-center gap-1
                bg-white/90 hover:bg-white
                rounded-full shadow-md transition-all duration-200
                hover:scale-110
              "
              onClick={(e) => e.preventDefault()} // évite la navigation si tu cliques le coeur
            >
              <Heart className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-black">{likes}</span>
            </button>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-3 sm:p-4 space-y-3">
          {/* Header vendeur + prix */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <div className="bg-gradient-to-r from-green-400 to-green-600 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-black font-bold text-sm shadow-md">
                D
              </div>

              <div className="min-w-0">
                <p className="font-semibold text-black text-sm sm:text-base truncate">
                  Baba62
                </p>
                <div className="flex items-center text-xs sm:text-sm text-gray-700">
                  <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                  <span className="truncate">Paris, France</span>
                </div>
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <p className="text-2xl sm:text-3xl font-extrabold text-red-600 leading-none">
                {price}€
              </p>
            </div>
          </div>

          {/* Titre + catégorie */}
          <div className="space-y-1">
            <h3 className="font-bold text-base sm:text-lg text-black group-hover:text-red-600 transition-colors duration-200 line-clamp-1">
              {title}
            </h3>

            <span className="text-xs sm:text-sm text-gray-700 hover:text-red-600 cursor-pointer">
              {category || "Autre"}
            </span>
          </div>

          {/* Footer info */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center text-xs sm:text-sm text-gray-700">
              <Clock className="w-4 h-4 mr-1 text-gray-700" />
              <p className="truncate">{getTimeAgo(date)}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-1">
            <button
              type="button"
              className="
                w-full bg-red-600 hover:bg-red-700 text-white
                py-2.5 px-4 rounded-lg font-semibold
                transition-colors duration-200
                text-sm sm:text-base
              "
              onClick={(e) => e.preventDefault()}
            >
              Contact
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
