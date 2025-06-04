import Navbar from "@/components/Navbar";
import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Recents from "@/components/Recents";
import AppPromo from "@/components/AppPromo";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Banner
        name="/home.jpg"
        title={"Annonces locales, opportunités globales"}
      />

      <div className="container mx-auto mt-24 max-w-7xl">
        <div className="flex">
          <div className="w-2 bg-red-600 h-auto mr-3"></div>
          <div>
            <h1 className="text-2xl font-bold">
              Nos rubriques, pour toutes les occasions
            </h1>
            <p>
              Découvrez nos catégories variées pour répondre à tous vos
              besoins :
            </p>
          </div>
        </div>

        <Recents />

        <div className="space-y-3 mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                D
              </div>
              <p className="ml-2">Baba62</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.75a5.25 5.25 0 00-4.5 2.472A5.25 5.25 0 007.5 3.75 5.25 5.25 0 003 9c0 7.25 9 11.25 9 11.25s9-4 9-11.25a5.25 5.25 0 00-5.25-5.25z"
                />
              </svg>
            </button>
          </div>
          <Image
            src="/1.jpg"
            alt="Macbook mockup from Aceternity UI"
            layout="intrinsic"
            width={400}
            height={700}
            objectFit="contain"
            className="rounded-xl"
          />
          <div>
            <p>Pièce seat ibiza</p>
            <p>10€</p>
          </div>
        </div>

        <AppPromo />
      </div>
      <Footer />
    </div>
  );
}
