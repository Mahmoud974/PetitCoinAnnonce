'use client';

import { HandCoins, Clock4 } from "lucide-react";
import Icons from "./Icons";
import { useParams } from 'next/navigation';
import ContactForm from "./Form";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import ImgItem from "./ImgItem";
import Back from "../Back";
import type { Post } from "@/types/post";
import type { InfoItem } from "../../app/db/categories/icons";

export default function Product({ posts }: { posts: Post[] }) {
  const params = useParams();
  const slug = params?.slug as string;

  const filterCard = posts.filter((p: Post) => p.id === Number(slug));
  if (!filterCard.length) return <p>Annonce introuvable</p>;

  const {
    title,
    ref,
    description,
    informations,
  } = filterCard[0];
  const refValue = String(ref ?? '');
 
  const vehicule: InfoItem[] = Object.entries(informations).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
    value: String(value ?? ""),
    icon: <span className="text-lg">🚗</span>,
  }));

  return (
    <div className="mx-auto">
      <Back/>
      <main className="mx-auto gap-5 flex container max-w-7xl mt-6 ">
        <ImgItem />
        <div>
          <div className="flex justify-between items-start">
            <div>
              <small className="text-black">Réf. annonce : Mouss {refValue}</small>
              <h1 className="text-3xl font-bold text-black mb-2">{title}</h1>
            </div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <div className="flex mt-3 justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p className="w-3/3">{description}</p>
            </div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <Icons vehicule={vehicule} />

          <div className="border-t border-gray-300 my-4"></div>

          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Moyen de paiement</h2>
              <div className="flex gap-4">
                <div className="bg-gray-700 w-12 h-12 flex items-center justify-center rounded-full">
                  <HandCoins className=" text-black w-6 h-6" />
                </div>
                <p className="w-2/3">
                  Pour votre sécurité, privilégiez le paiement en espèces uniquement sur place.
                  Assurez-vous d’effectuer la transaction dans un lieu public et sécurisé.
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
                  <div className="flex flex-col text-md">
                    <div className="flex items-center text-md">
                      <FaStar className="text-yellow-400" />
                      <p className="ml-1 text-base">5 (1)</p>
                    </div>
                    <div className="flex items-center">
                      <Clock4 className="w-4 h-4" />
                      <p className="ml-1 text-base">Dernière activité il y a 3 jours</p>
                    </div>
                    <div className="flex items-center">
                      <Clock4 className="w-4 h-4" />
                      <p className="ml-1 text-base">Répond en moyenne en 12 heures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button>Suivre</Button>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <ContactForm />
        </div>
      </main>
    </div>
  );
}
