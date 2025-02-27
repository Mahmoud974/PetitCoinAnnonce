import Navbar from "@/components/Navbar";
import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Recents from "@/components/Recents";
import { CarousselCategory } from "@/components/CarousselCategory";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Banner
        name="/home.jpg"
        title={"Annonces locales, opportunités globales"}
      />
      <div className="container mx-auto mt-5">
        <div className="flex">
          <div className="w-2 bg-yellow-300 h-auto mr-3"></div>
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
        <CarousselCategory />
      </div>
      <Footer />
    </div>
  );
}
