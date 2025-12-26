"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Clock10,
  Flag,
  Heart,
  Phone,
  Pin,
  Share2,
  Eye,
} from "lucide-react";
import Image from "next/image";

const items = [
  {
    src: "/4.jpg",
    alt: "Kellian",
    location: "Hahaya",
    time: "03/06/2025",
    views: 30,
    price: "490€",
  },
  {
    src: "/1.jpg",
    alt: "Example 2",
    location: "75001 Paris",
    time: "03/06/2025",
    views: 30,
    price: "550€",
  },
  {
    src: "/3.jpg",
    alt: "Example 3",
    location: "69002 Lyon",
    time: "03/06/2025",
    views: 30,
    price: "620€",
  },
];

export default function ImgCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const [likeCounts, setLikeCounts] = useState<number[]>(items.map(() => 0));

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

  const incrementLike = () => {
    setLikeCounts((prev) => {
      const newCounts = [...prev];
      newCounts[currentIndex] += 1;
      return newCounts;
    });
  };

  const { src, alt, location, time, price,views } = items[currentIndex];
  const likeCount = likeCounts[currentIndex];
  const slideNumber = currentIndex + 1;

  return (
    <div className="sticky top-0 w-[350px] mx-auto">
      <div className="overflow-hidden rounded-xl shadow-lg bg-white">
        <div className="relative w-[350px] h-[350px]">
          <Image
            src={src}
            alt={alt}
            fill
            className="rounded-t-lg object-cover"
          />

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
            aria-label="Précédent"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-20"
            aria-label="Suivant"
          >
            <ArrowRight size={20} />
          </button>

          <div className="absolute top-4 right-4 flex space-x-2 z-10">
            <button
              className="bg-red-600 bg-opacity-70 hover:bg-opacity-90 rounded-full p-3 flex items-center justify-center transition"
              aria-label="Partager"
            >
              <Share2 className="w-5 h-5 text-white " />
            </button>

            <button
              onClick={incrementLike}
              className="bg-red-600 bg-opacity-70 hover:bg-opacity-90 rounded-full px-3 py-2 flex items-center gap-1 transition"
              aria-label="J’aime"
            >
              <span className="text-white font-medium">{likeCount}</span>
              <Heart className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Overlay en haut à gauche : position du slide */}
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 rounded-full px-3 py-1 text-white text-sm font-medium z-10">
            {slideNumber} / {items.length}
          </div>
        </div>

        <div className="p-4 bg-[#131416] text-white">
          <div className="flex gap-2 items-center">
            <div className="flex items-center">
              <Pin className="text-red-500 w-5 h-5" />
              <p className="ml-1 text-sm">{location}</p>
            </div>
            <div className="flex items-center ml-auto">
              <Clock10 className="text-red-500 w-5 h-5" />
              <p className="ml-1 text-sm">{time}</p>
            </div>
          </div>

          <div className="flex justify-between">
          <div className="flex gap-2 mt-3">
            <Phone className="text-red-500 w-5 h-5" />
            <p>08.90.12.12.12</p>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <Eye className="text-red-500 w-5 h-5" />
            <p>{views} vues</p>
          </div>
          </div>

          <div className="flex mt-3 justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Prix</p>
              <p className="text-4xl font-bold">{price}</p>
            </div>
            <div>
              <button className="px-3 bg-red-700 text-white font-semibold py-2 rounded-lg hover:bg-red-800 transition">
                Faire une offre
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-3">
            <Flag className="w-5" />
            <p className="underline text-base">Signaler l’annonce</p>
          </div>
    </div>
  );
}
