import React from "react";
import {
  Bell,
  BriefcaseBusiness,
  Building2,
  Car,
  Caravan,
  CirclePlus,
  Dog,
  HandPlatter,
  Heart,
  Shirt,
  Volleyball,
} from "lucide-react";
import { InputWithButton } from "@/components/ui/Search";
import { Button } from "@/components/ui/button";
import MenuProfil from "./MenuProfil";
import Link from "next/link";

export default function Navbar() {
  const notificationCount = 3;
  return (
    <nav className="py-8 bg-red-600 text-white ">
      <div className="container mx-auto flex flex-col justify-between max-w-7xl">
        <div className="flex justify-between items-center cursor-pointer">
          <Link href="/">
            <p className="font-bold">Project-online</p>
          </Link>
          <Button className="bg-[#181a1b]">
            Déposer une annonce <CirclePlus />
          </Button>
          <InputWithButton />

          <div className="cursor-pointer flex items-center space-x-4 text-white">
            <Heart />
            <div className="relative">
              {/* Icône de cloche */}
              <button className="relative   text-white p-2 rounded-full   hover:bg-gray-700 transition">
                <Bell className="w-6 h-6" />

                {notificationCount > 0 && (
                  <span className="absolute top-2 right-3 transform translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                    {notificationCount}
                  </span>
                )}
              </button>
            </div>
            <MenuProfil />
          </div>
        </div>
        <div className="border-t my-6 border-gray-300  "></div>
        <ul className="flex  justify-between items-center   text-white    font-bold">
          <li className="flex flex-col items-center cursor-pointer">
            <Building2 />
            <p>Immobilier</p>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <Car />
            <p>Auto-Moto</p>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <BriefcaseBusiness />
            <p>Emploi</p>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <Shirt />
            <p>Seconde main</p>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            {/* Pas de vente d'animaux */}
            <Dog />
            <p>Animaux</p>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <HandPlatter />
            <p>Services</p>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <Caravan />
            <p>Vacances</p>
          </li>
          <li className="flex flex-col items-center cursor-pointer">
            <Volleyball />
            <p>Affaires pro</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
