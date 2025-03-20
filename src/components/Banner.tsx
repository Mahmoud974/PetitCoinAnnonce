import React from "react";
import Image from "next/image";
import { Home, Lightbulb, Calculator } from "lucide-react";
import Link from "next/link";

interface BannerProps {
  name: string;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ name, title }) => {
  return (
    <div className="relative w-full h-[300px]">
      {/* Image de fond */}
      <Image
        src={name}
        quality={100}
        alt="Image d'accueil parlant avec une femme de la prestation"
        fill
        className="w-full h-full object-cover"
      />

      {/* Titre au centre */}
      <div className="absolute inset-0 font-bold bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-4xl w-auto mt-4">{title}</p>
      </div>

      {/* Section en bas avec icônes et texte */}
      <div className="absolute bottom-[-70px] left-0 w-full bg-black py-6 px-6 shadow-lg  ">
        <div className="container mx-auto flex justify-center gap-12 text-white">
          <div className="flex items-center gap-2">
            <Home className="text-red-600" size={24} />
            <Link href="/equipments">
              <span className="text-red-600 font-bold">
                ESTIMER LA VALEUR DE MON BIEN &gt;
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Lightbulb className="text-red-600" size={24} />
            <Link href="/lists">
              <span className="text-red-600 font-bold">
                INVESTIR DANS LE NEUF &gt;
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Calculator className="text-red-600" size={24} />
            <span className="text-red-600 font-bold">
              SIMULER MON EMPRUNT IMMOBILIER &gt;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
