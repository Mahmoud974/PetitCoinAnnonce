import React from "react";
import { CircleX, Heart } from "lucide-react";
export default function Recents() {
  return (
    <div className="mt-8">
      <h2 className="text-xl md:text-2xl font-bold ">Recherches récentes</h2>
      <ul className="flex gap-4 mt-4">
        <li className="flex-1 bg-gradient-to-r rounded-xl space-y-3 bg-red-600 text-[#181a1b]">
          <div className="  rounded-xl p-3">
            <div className="flex justify-between">
              <p className="font-bold">Vos coup de coeur</p>
            </div>
            <p>
              <Heart />
            </p>
            <p className="underline">Voir plus</p>
          </div>
        </li>
        <li className=" flex-1">
          <div className="border rounded-xl p-3">
            <div className="flex justify-between">
              <p className="font-bold">Voitures</p>
              <CircleX />
            </div>
            <p>6000 - 12 000€</p>
            <p>Toute la France</p>
          </div>
        </li>
        <li className=" flex-1">
          <div className="border rounded-xl p-3">
            <div className="flex justify-between">
              <p className="font-bold">Voitures</p>
              <CircleX />
            </div>
            <p>6000 - 12 000€</p>
            <p>Toute la France</p>
          </div>
        </li>
        <li className=" flex-1">
          <div className="border rounded-xl p-3">
            <div className="flex justify-between">
              <p className="font-bold">Voitures</p>
              <CircleX />
            </div>
            <p>6000 - 12 000€</p>
            <p>Toute la France</p>
          </div>
        </li>
        <li className=" flex-1">
          <div className="border rounded-xl p-3">
            <div className="flex justify-between">
              <p className="font-bold">Voitures</p>
              <CircleX />
            </div>
            <p>6000 - 12 000€</p>
            <p>Toute la France</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
