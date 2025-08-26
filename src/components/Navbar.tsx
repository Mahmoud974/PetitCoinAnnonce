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
  Newspaper,
  Settings,
 
  Shirt,
  Volleyball,
} from "lucide-react";
import { InputWithButton } from "@/components/ui/Search";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
 

 
const categories = [
  { slug: "immobiliers", label: "Immobilier", icon: <Building2 size={24} /> },
  { slug: "emplois", label: "Emploi", icon: <BriefcaseBusiness size={24} /> },
  { slug: "cars", label: "Locomotion", icon: <Car size={24} /> },
  { slug: "cloths", label: "Seconde main", icon: <Shirt size={24} /> },
  { slug: "animals", label: "Animaux", icon: <Dog size={24} /> },
  { slug: "services", label: "Services", icon: <HandPlatter size={24} /> },
  { slug: "vacances", label: "Vacances", icon: <Caravan size={24} /> },
  { slug: "activities", label: "Activites", icon: <Volleyball size={24} /> },
];

export default function Navbar() {
  const pathname = usePathname();
  

  return (
    <nav className="py-8 bg-red-600 text-white">
      <div className="container mx-auto flex flex-col justify-between max-w-7xl">
      
        <div className="flex justify-between items-center cursor-pointer">
          <Link href="/">
            <p className="font-bold text-xl">Project-online</p>
          </Link>
          <Link href="/add">
            <Button className="bg-[#181a1b]">
              Vends tes articles <CirclePlus className="ml-2" />
            </Button>
          </Link>
          <InputWithButton />
          <div className="cursor-pointer flex items-center space-x-4 text-white">
            <Link href="/favorites">
              <Heart />
            </Link>
            <Link href="/settings">
              <Settings/>
            </Link>
            <Link href="/annonces">
            <Newspaper />
            </Link>
            <Link href="/account">
            <CircleUserRound/>
            </Link>
   
          </div>
        </div>

        <div className="border border-t my-6 border-white"></div>

       
        <ul className="flex justify-between items-center text-white font-bold gap-3 flex-wrap">
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
