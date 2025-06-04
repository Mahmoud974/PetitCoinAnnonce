import { Heart } from "lucide-react";
import Image from "next/image";

export default function NikeShoeItem() {
  return (
    <div className="mx-auto">
      <div className="sticky top-4 bg-white text-black rounded-xl p-6 shadow-lg">
        <div className="relative" style={{ width: "350px", height: "350px" }}>
          <Image
            src="/nike-shoe.jpg" // Vous devrez ajouter cette image à votre dossier public
            alt="Nike Running Shoe"
            fill
            className="rounded-lg object-cover"
          />
          <div className="absolute top-2 right-2 bg-purple-600 shadow-lg text-white px-4 py-4 rounded-full">
            <Heart />
          </div>
        </div>

        <div className="flex justify-between items-center mt-5">
          <div className=" ">
            <h2 className="text-2xl font-bold">Nike Running Shoe</h2>
            <p className="text-gray-400">BLACK/WHITE</p>
          </div>
          <p className="text-2xl">$69.99</p>
        </div>

        <div className="flex items-center justify-between bg-gray-100 p-4 mt-6 rounded-lg">
          <div className="text-center">
            <p className="text-black text-2xl font-semibold">EU38</p>
            <p className="text-gray-500 text-sm">Size</p>
          </div>
          <div className="text-center">
            <p className="text-black text-2xl font-semibold">80s</p>
            <p className="text-gray-500 text-sm">Style</p>
          </div>
          <div className="text-center">
            <p className="text-black text-2xl font-semibold">★★★★★</p>
            <p className="text-gray-500 text-sm">Comfort</p>
          </div>
        </div>

        <button className="mt-6 w-full bg-purple-600 text-white font-semibold py-4 rounded-lg hover:bg-purple-700 transition">
          Add to cart
        </button>
      </div>
    </div>
  );
}