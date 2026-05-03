"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Heart, Share2 } from "lucide-react";
import Image from "next/image";

const items = [
  { src: "/4.jpg", alt: "Photo 1" },
  { src: "/1.jpg", alt: "Photo 2" },
  { src: "/3.jpg", alt: "Photo 3" },
];

export default function ImgItem() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likeCounts, setLikeCounts] = useState<number[]>(items.map(() => 0));

  const prevSlide = () => setCurrentIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const nextSlide = () => setCurrentIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  const incrementLike = () => {
    setLikeCounts((prev) => {
      const next = [...prev];
      next[currentIndex] += 1;
      return next;
    });
  };

  const { src, alt } = items[currentIndex];
  const likeCount = likeCounts[currentIndex];

  return (
    <div className="relative w-full h-[360px] sm:h-[480px] rounded-[1.5rem] overflow-hidden shadow-2xl">
      <Image src={src} alt={alt} fill className="object-cover" priority />

      {/* Gradient bas */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a14]/50 via-transparent to-transparent" />

      {/* Prev / Next */}
      <button onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#D4E84A] hover:text-[#1b3226] transition-all z-20"
        aria-label="Précédent">
        <ArrowLeft size={20} />
      </button>
      <button onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-[#D4E84A] hover:text-[#1b3226] transition-all z-20"
        aria-label="Suivant">
        <ArrowRight size={20} />
      </button>

      {/* Actions haut droite */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button className="bg-white/10 backdrop-blur-sm hover:bg-[#D4E84A] group rounded-full p-3 transition-all"
          aria-label="Partager">
          <Share2 className="w-4 h-4 text-white group-hover:text-[#1b3226]" />
        </button>
        <button onClick={incrementLike}
          className="bg-white/10 backdrop-blur-sm hover:bg-[#D4E84A] group rounded-full px-4 py-2 flex items-center gap-2 transition-all"
          aria-label="J'aime">
          <Heart className="w-4 h-4 text-white group-hover:text-[#1b3226]" />
          <span className="text-white group-hover:text-[#1b3226] text-sm font-bold">{likeCount}</span>
        </button>
      </div>

      {/* Compteur */}
      <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-white text-xs font-bold z-10">
        {currentIndex + 1} / {items.length}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {items.map((_, i) => (
          <button key={i} onClick={() => setCurrentIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-6 h-2 bg-[#D4E84A]" : "w-2 h-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}