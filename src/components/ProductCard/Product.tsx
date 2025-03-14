import { Share, Printer } from "lucide-react";
import React from "react";
import Icons from "./Icons";

export default function Product() {
  return (
    <main className="mx-auto container">
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Kellina</h1>
          <p>2 à 4 ans dexp</p>
        </div>
        <ul className="flex my-4 gap-4 items-center  ">
          <li className="flex">
            <Share className="text-red-500" />{" "}
            <p className="ml-1">{`Partager l'annonce`}</p>
          </li>
          <li className="flex">
            <Printer className="text-red-500" />{" "}
            <p className="ml-1">{`Partager l'annonce`}</p>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p className="w-3/3">
            {` Bonjour, moi c est kellian. Je serai ravis de réaliser votre
            déménagement ou le transport de vos meubles, œuvres d'art etc.. Je
            possède 2 camions "14m3" et un "20m3" avec hayon et le matériel qui
            va avec. Faites moi confiance vous serez entre de bonnes mains 😊. A
            très bientôt. Kellian`}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-300 my-4"></div>
      <Icons />
      <div className="border-t border-gray-300 my-4"></div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">Engagements</h2>
          <ul className=" flex items-center gap-4    text-gray-700">
            <li className="bg-gray-700 text-white rounded-full w-auto text-center px-2">
              Rapidité et fiabilité
            </li>
            <li className="bg-gray-700 text-white rounded-full w-auto text-center px-2">
              Dynamique et souriant
            </li>
            <li className="bg-gray-700 text-white rounded-full w-auto text-center px-2">
              Réactif et flexible
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
