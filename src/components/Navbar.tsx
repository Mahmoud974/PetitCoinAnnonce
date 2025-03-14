import React from "react";
import { CirclePlus } from "lucide-react";
import { InputWithButton } from "@/components/ui/Search";
import { Button } from "@/components/ui/button";
import MenuProfil from "./MenuProfil";

export default function Navbar() {
  //bg-[#FDB714]
  return (
    <nav className="py-8 bg-red-600 text-white ">
      <div className="container mx-auto flex flex-col justify-between max-w-7xl">
        <div className="flex justify-between items-center">
          <p className="font-bold">Project-online</p>
          <Button className="bg-[#181a1b]">
            Déposer une annonce <CirclePlus />
          </Button>
          <InputWithButton />

          <div className="cursor-pointer text-white">
            <MenuProfil />
          </div>
        </div>
        <div className="border-t my-6 border-gray-300  "></div>
        <ul className="flex  justify-between items-center text-white    font-bold">
          <li>Immobilier</li>
          <li>Auto-Moto</li>
          <li>Emploi</li>
          <li>Seconde main</li>
          <li>Animaux</li>
          <li>Services</li>
          <li>Vacances</li>
          <li>Affaires pro</li>
        </ul>
      </div>
    </nav>
  );
}
