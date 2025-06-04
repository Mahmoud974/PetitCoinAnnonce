import {
  Printer,
  HandCoins,
  Clock4,
  FlagTriangleRight,
  Share2,
  MoveLeft,
} from "lucide-react";
import React from "react";
import Icons from "./Icons";

import ContactForm from "./Form";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import ImgItem from "./ImgItem";

export default function Product() {
  return (
    <div className="mx-auto">
      <button className="flex border p-2  mb-3 rounde-lg gap-2">
        <MoveLeft />
        <p>Retour à la liste</p>
      </button>
      <main className="mx-auto gap-5 flex container max-w-7xl ">
        <ImgItem />
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Vente de voiture Hyundai
              </h1>
              <small className="text-gray-400">
                Réf. annonce : Mouss 9926569973
              </small>
            </div>
            <ul className="flex  gap-4 items-center  ">
              <li className="flex">
                <Share2 className="text-red-500" />{" "}
                <p className="ml-1">{`Partager l'annonce`}</p>
              </li>
              <li className="flex">
                <Printer className="text-red-500" />{" "}
                <p className="ml-1">{`Partager l'annonce`}</p>
              </li>
            </ul>
          </div>
          <div className="border-t border-gray-300 my-4"></div>
          <div className="flex mt-3 justify-between">
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
          <div className="border-t border-gray-300 my-4"></div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Moyen de paiement</h2>
              <div className="flex gap-4">
                <div className="bg-gray-700 w-12 h-12 flex items-center justify-center rounded-full">
                  <HandCoins className="text-white w-6 h-6" />
                </div>
                <p className="w-2/3">
                  Pour votre sécurité, privilégiez le paiement en espèces
                  uniquement sur place. Assurez-vous d’effectuer la transaction
                  dans un lieu public et sécurisé.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 my-4"></div>
          <div className="flex justify-between">
            <div className="flex ">
              <div className="flex">
                <div className="bg-green-500 w-16 h-16 rounded-full text-3xl flex items-center justify-center">
                  Z
                </div>
                <div className="ml-3 ">
                  <p>Moussa</p>
                  <div className="flex flex-col   text-md">
                    <div className="flex  items-center text-md">
                      <FaStar className="text-yellow-400" />
                      <p className="ml-1 text-base">5 (1)</p>
                    </div>
                    <div className="flex items-center">
                      <Clock4 className="w-4 h-4" />
                      <p className="ml-1 text-base">
                        Dernière activité il y a 3 jours
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Clock4 className="w-4 h-4" />
                      <p className="ml-1 text-base">
                        Repond en moyenne en 12 heures
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button>Suivre</Button>
          </div>

          <div className="flex mt-3">
            <FlagTriangleRight className="w-5" />
            <p className="underline text-base">Signaler l’annonce</p>
          </div>
          <div className="border-t border-gray-300 my-4"></div>

          <ContactForm />
        </div>
      </main>
    </div>
  );
}
