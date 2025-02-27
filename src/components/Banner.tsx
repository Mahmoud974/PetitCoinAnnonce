import React from "react";
import Image from "next/image";

interface BannerProps {
  name: string;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ name, title }) => {
  return (
    <div className="relative  w-full h-[300px]">
      <Image
        src={name}
        quality={100}
        alt="Image d'accueil parlant avec une femme de la prestation"
        fill
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 font-bold bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-4xl w-auto mt-4">{title}</p>
      </div>
    </div>
  );
};

export default Banner;
