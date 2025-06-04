"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Clock10, Heart, Pin } from "lucide-react";
import Image from "next/image";

const items = [
  {
    src: "/4.jpg",
    alt: "Kellian",
    location: "64110 Mazères-Lezons",
    time: "il y a 2 semaines",
    price: "490€",
  },
  {
    src: "/1.jpg",
    alt: "Example 2",
    location: "75001 Paris",
    time: "il y a 1 semaine",
    price: "550€",
  },
  {
    src: "/3.jpg",
    alt: "Example 3",
    location: "69002 Lyon",
    time: "il y a 3 jours",
    price: "620€",
  },
];

export default function ImgCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { src, alt, location, time, price } = items[currentIndex];

  return (
    <div className="relative w-[350px] mx-auto">
      <div className="overflow-hidden rounded-xl shadow-lg">
        {/* Conteneur image + flèches */}
        <div className="relative w-[350px] h-[350px]">
          <Image src={src} alt={alt} fill className="rounded-lg object-cover" />

          {/* Flèche gauche */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
            aria-label="Précédent"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Flèche droite */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
            aria-label="Suivant"
          >
            <ArrowRight size={20} />
          </button>

          {/* Icône cœur (favori) */}
          <div className="absolute top-2 right-2 bg-red-700 shadow-lg text-white px-4 py-4 rounded-full z-10">
            <Heart />
          </div>
        </div>

        {/* Footer du slide */}
        <div className="p-4 bg-[#131416] text-white">
          <div className="flex gap-2 items-center">
            <div className="flex items-center">
              <Pin className="text-red-500" />
              <p className="ml-1">{location}</p>
            </div>
            <div className="flex items-center ml-auto">
              <Clock10 className="text-red-500" />
              <p className="ml-1">{time}</p>
            </div>
          </div>

          <div className="flex mt-6 justify-between items-center">
            <div>
              <p>Prix</p>
              <p className="text-4xl font-bold">{price}</p>
            </div>
            <button className="px-3 bg-red-700 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition">
              Prendre contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
