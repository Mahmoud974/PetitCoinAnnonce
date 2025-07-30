'use client'

import React from "react";
import {
 
  BriefcaseBusiness,
  Building2,
  Car,
  Caravan,
  CirclePlus,
  CircleUserRound,
  Dog,
  HandPlatter,
  Heart,
  Shirt,
  Volleyball,
} from "lucide-react";
import { InputWithButton } from "@/components/ui/Search";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

 
const categories = [
  { slug: "immobilier", label: "Immobilier", icon: <Building2 size={24} /> },
  { slug: "emploi", label: "Emploi", icon: <BriefcaseBusiness size={24} /> },
  { slug: "locomotion", label: "Locomotion", icon: <Car size={24} /> },
  { slug: "seconde-main", label: "Seconde main", icon: <Shirt size={24} /> },
  { slug: "animaux", label: "Animaux", icon: <Dog size={24} /> },
  { slug: "services", label: "Services", icon: <HandPlatter size={24} /> },
  { slug: "vacances", label: "Vacances", icon: <Caravan size={24} /> },
  { slug: "activites", label: "Activites", icon: <Volleyball size={24} /> },
];

export default function Navbar() {
  const pathname = usePathname();
  

  return (
    <nav className="py-8 bg-red-600 text-white">
      <div className="container mx-auto flex flex-col justify-between max-w-7xl">
        {/* Barre du haut */}
        <div className="flex justify-between items-center cursor-pointer">
          <Link href="/">
            <p className="font-bold text-xl">Project-online</p>
          </Link>
          <Link href="/add">
            <Button className="bg-[#181a1b]">
              Déposer une annonce <CirclePlus className="ml-2" />
            </Button>
          </Link>
          <InputWithButton />
          <div className="cursor-pointer flex items-center space-x-4 text-white">
            <Link href="/favorites">
              <Heart />
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CircleUserRound />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/annonces">Mes annonces</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings">Paramètres</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <Link href="/account">
                <DropdownMenuItem>Login</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="border border-t my-6 border-white"></div>

       
        <ul className="flex justify-between items-center text-white font-bold gap-3 overflow-x-auto">
          {categories.map((cat) => {
            const isActive = pathname === `/lists/${cat.slug}`;
            return (
              <li key={cat.slug}>
                <Link
                  href={`/lists/${cat.slug}`}
                  className={`flex flex-col items-center px-3 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-white text-red-600 scale-105 shadow-md"
                      : "hover:bg-white/20"
                  }`}
                >
                  {cat.icon}
                  <span className="text-sm mt-1">{cat.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
