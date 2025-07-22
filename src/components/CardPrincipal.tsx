'use client';

import React from 'react';
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
}

export default function CardPrincipal({ posts }: { posts: Post }) {
  const {
    id,
    title,
    price,
    category,
    images,
    likes,
    description,
    date,
  } = posts;

 

  const getTimeAgo = (date: Date | string): string => {
    const now = new Date();
    const postDate = new Date(date);
    const diff = now.getTime() - postDate.getTime();

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return "Publié à l'instant";
    if (minutes < 60) return `Publié il y a ${minutes} min`;
    if (hours < 24) return `Publié il y a ${hours}h`;
    return `Publié il y a ${days}j`;
  };

  return (
    
    <div className="group max-w-xs rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden    hover:border-gray-200">
      <Link href={`/item/${id}`} className="cursor-pointer">
        <div className="relative overflow-hidden">
          <Image
            src={`/2.jpg`}
            alt={title}
            width={400}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 right-3 flex space-x-2">
            <button className="p-2 flex items-center bg-red-500 hover:bg-white rounded-full shadow-md transition-all duration-200 hover:scale-110">
              <Heart className="w-5 h-5 text-white hover:text-red-500 transition-colors duration-200" />
              <p className="ml-1 text-white">{likes}</p>
            </button>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-green-400 to-green-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                D
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Baba62</p>
                <div className="flex items-center text-xs text-white">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>Paris, France</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-red-600">{price}€</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-white group-hover:text-red-600 transition-colors duration-200 truncate">
              {title}
            </h3>
            <Link href={`/lists/${category ? category.toLowerCase() : 'autre'}`}>
  <p className="text-sm text-white mt-1 hover:text-red-600">{category || "Autre"}</p>
</Link>

          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-white">
                <Clock className="w-3 h-3 mr-1 text-white" />
                <p>{getTimeAgo(date)}</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-2 pt-2">
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 text-sm">
              Contact
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
