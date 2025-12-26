"use client";

import React, { useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { Heart, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=600&fit=crop";

function CarCard({ car, isFavorite, onToggleFavorite }) {
  const images = useMemo(() => {
    const arr = Array.isArray(car?.images) ? car.images.filter(Boolean) : [];
    return arr.length ? arr : [FALLBACK_IMAGE];
  }, [car?.images]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((e, idx) => {
    e.stopPropagation();
    setCurrentImageIndex(idx);
  }, []);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
    
      <div className="relative w-full md:w-80 h-56 md:h-auto   group flex-shrink-0">
        {car.featured && (
          <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
            À la une
          </div>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(car.id);
          }}
          aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>

       
        <Image
          src={images[currentImageIndex]}
          alt={car.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover"
          priority={car.featured} 
        />

     
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Image précédente"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Image suivante"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={(e) => goToImage(e, idx)}
                  aria-label={`Aller à l’image ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1">
            {car.title}
          </h3>

          <div className="text-2xl font-bold text-gray-900 flex-shrink-0">
            {Number(car.price || 0).toLocaleString("fr-FR")} €
          </div>
        </div>

        <div className="mb-4">
          {car.isPro && (
            <span className="inline-block px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded">
              Pro
            </span>
          )}

          {car.pack && (
            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded ml-2">
              {car.pack}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-sm mb-4">
          <div>
            <span className="text-gray-500 text-xs">Année</span>
            <div className="font-medium text-gray-900">{car.year}</div>
          </div>
          <div>
            <span className="text-gray-500 text-xs">Kilométrage</span>
            <div className="font-medium text-gray-900">
              {Number(car.mileage || 0).toLocaleString("fr-FR")} km
            </div>
          </div>
          <div>
            <span className="text-gray-500 text-xs">Carburant</span>
            <div className="font-medium text-gray-900">{car.fuel}</div>
          </div>
          <div>
            <span className="text-gray-500 text-xs">Boîte de vitesse</span>
            <div className="font-medium text-gray-900">{car.transmission}</div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4 mt-auto border-t border-gray-200">
          <div className="w-10 h-10 bg-gray-200 rounded overflow-hidden flex-shrink-0 relative">
            {car.dealerLogo ? (
              <Image
                src={car.dealerLogo}
                alt={car.dealerName}
                fill
                sizes="40px"
                className="object-cover"
              />
            ) : null}
          </div>

          <div className="flex-1 min-w-0">
            <div className="font-medium text-sm text-gray-900">{car.dealerName}</div>
            <div className="text-xs text-gray-600 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {car.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ElementCategory({ posts = [] }) {
  const demoData = [
    {
      id: 1,
      title: "AUDI RS6 AVANT PERFORMANCE - Quattro - 4.0i V8 605cv",
      price: 64990,
      year: 2017,
      mileage: 102000,
      fuel: "Essence",
      transmission: "Automatique",
      isPro: true,
      featured: true,
      dealerName: "DRIVEOVER",
      location: "Saint-Germain-du-Puch 33750",
      images: [
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop",
      ],
    },
    {
      id: 2,
      title: "Audi q7 60 tfsi e 490 quattro s line tiptronic ph3 2025 ttc",
      price: 106000,
      year: 2025,
      mileage: 10572,
      fuel: "Hybride",
      transmission: "Automatique",
      isPro: true,
      featured: true,
      dealerName: "CC AUTO 30",
      location: "Saint-Martin-de-Valgalgues 30520",
      images: [
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      ],
    },
    {
      id: 3,
      title: "Audi a1 sportback",
      price: 13600,
      year: 2017,
      mileage: 130000,
      fuel: "Essence",
      transmission: "Automatique",
      pack: "Pack Sérénité",
      isPro: false,
      featured: false,
      dealerName: "Particulier",
      location: "Lyon 69000",
      images: [
        "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop",
      ],
    },
  ];

  const displayData = posts.length > 0 ? posts : demoData;

  // favoris au niveau parent (persistable + partageable)
  const [favoriteIds, setFavoriteIds] = useState(() => new Set());

  const toggleFavorite = useCallback((id) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Annonces Voitures AUDI d'occasion
          </h1>
          <p className="text-gray-600">
            {displayData.length.toLocaleString("fr-FR")} annonces
          </p>
          <p className="text-xs text-gray-500 mt-3">
            * Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-4">
          {displayData.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isFavorite={favoriteIds.has(car.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
 
    </div>
  );
}
