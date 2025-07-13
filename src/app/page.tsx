import React from "react";
import Recents from "@/components/Recents";
import AppPromo from "@/components/AppPromo";
import CardPrincipal from "@/components/CardPrincipal";

export default function Page(){
  return (
    <div>
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

        <div className="">
        <h1 className="text-2xl my-6 font-bold"> {` Fil d'actu`}</h1>
     <div className="grid grid-cols-4 gap-4">
     {Array.from({ length: 14 }).map((_, index) => (
        <CardPrincipal key={index} />
      ))}
     </div>

        </div>
 

        <AppPromo />
      </div>
      
    </div>
  );
}
