import React from "react";
import { CircleUserRound, Heart, Bell, CirclePlus } from "lucide-react";
import { InputWithButton } from "@/components/ui/Search";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="py-8 bg-[#FDB714] text-black">
      <div className="container mx-auto flex flex-col justify-between">
        <div className="flex justify-between">
          <p className="font-bold">Project-online</p>
          <Button>
            Déposer une annonce <CirclePlus />
          </Button>
          <InputWithButton />

          <ul className="flex gap-4">
            <li className="cursor-pointer">
              <Heart />
            </li>
            <li className="cursor-pointer">
              <Bell />
            </li>
            <li className="cursor-pointer">
              <CircleUserRound />
            </li>
          </ul>
        </div>
        <ul className="flex justify-between items-center  mt-4 font-bold">
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
