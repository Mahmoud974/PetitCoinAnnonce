import Navbar from "@/components/Navbar";
import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Recents from "@/components/Recents";
import { CarousselCategory } from "@/components/CarousselCategory";
import AppPromo from "@/components/AppPromo";

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
        <CarousselCategory />
        <AppPromo />
      </div>
      <Footer />
    </div>
  );
}
