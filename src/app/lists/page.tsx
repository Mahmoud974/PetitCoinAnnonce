import Navbar from "@/components/Navbar";
import React from "react";

import Footer from "@/components/Footer";
import AppPromo from "@/components/AppPromo";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const annonces = [
  {
    id: 1,
    title: "Bmw r1250 gs",
    price: "19 700 €",
    location: "Valence 26000",
    date: "aujourd’hui à 13:56",
    image: "/bmw-r1250.jpg",
    badge: "Paiement sécurisé",
  },
  {
    id: 2,
    title: "Bmw série 1 f40 128ti 265 bva8",
    price: "35 990 €",
    location: "Valence 26000",
    date: "aujourd’hui à 12:20",
    image: "/bmw-f40.jpg",
    badge: "Pro",
  },
  {
    id: 3,
    title: "BMW Série 1 F21 118DA 143 LUXE GARANTIE",
    price: "9 999 €",
    location: "Bourg-lès-Valence 26500",
    date: "aujourd’hui à 14:40",
    image: "/bmw-f21.jpg",
    badge: "Pro",
  },
  {
    id: 4,
    title: "BMW Série 1 F21 118DA 143 LUXE GARANTIE",
    price: "9 999 €",
    location: "Bourg-lès-Valence 26500",
    date: "aujourd’hui à 14:40",
    image: "/bmw-f21.jpg",
    badge: "Pro",
  },
];

export default function Page() {
  return (
    <div className="  text-white min-h-screen">
      <Navbar />

      <div className="container mx-auto   px-4 flex gap-6 max-w-7xl mt-12">
        {/* Barre de filtres */}
        <aside className="w-1/4 bg-[#131416] p-4 rounded-lg shadow-lg max-h-max">
          <h2 className="text-xl font-bold mb-4">Filtrer par :</h2>

          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Votre budget</label>
            <input type="range" min="40" max="500" className="w-full" />
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Filtres populaires</h3>
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Très bien : 8+
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Hôtel
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Petit-déjeuner
                compris
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Parking
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Annulation gratuite
              </label>
            </div>
          </div>
        </aside>

        {/* Liste des annonces */}
        <div className="w-3/4">
          <div className="grid gap-6">
            {annonces.map((annonce) => (
              <Link href="/item" key={annonce.id}>
                <div className=" bg-[#131416] p-4 rounded-lg   flex gap-4">
                  <Image
                    width={200}
                    height={200}
                    className="rounded-lg"
                    src={annonce.image}
                    alt={annonce.title}
                  />
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h2 className="text-lg font-bold">{annonce.title}</h2>
                      <p className="text-green-400 text-xl font-bold">
                        {annonce.price}
                      </p>
                      {annonce.badge && (
                        <span className="bg-gray-700 text-white text-sm px-2 py-1 rounded">
                          {annonce.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">
                      {annonce.location} • {annonce.date}
                    </p>
                  </div>
                  <button>
                    <Heart
                      size={20}
                      className="text-gray-500 hover:text-red-500"
                    />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-24 max-w-7xl">
        <AppPromo />
      </div>
      <Footer />
    </div>
  );
}
