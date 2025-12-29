'use client'

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
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import InputWithButton from "./ui/Search";

const categories = [
  { slug: "immobiliers", label: "Immobilier", icon: <Building2 size={20} /> },
  { slug: "emplois", label: "Emploi", icon: <BriefcaseBusiness size={20} /> },
  { slug: "cars", label: "Locomotion", icon: <Car size={20} /> },
  { slug: "cloths", label: "Seconde main", icon: <Shirt size={20} /> },
  { slug: "animals", label: "Animaux", icon: <Dog size={20} /> },
  { slug: "services", label: "Services", icon: <HandPlatter size={20} /> },
  { slug: "vacances", label: "Vacances", icon: <Caravan size={20} /> },
  { slug: "activities", label: "Activites", icon: <Heart size={20} /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="no-print py-4 md:py-6 lg:py-8 bg-red-600 text-white">
      <div className="container mx-auto px-4 max-w-7xl">

      <div className="flex flex-col lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center gap-4">


          {/* ✅ MOBILE : ligne 1 (logo gauche + icônes droite) */}
          <div className="flex items-center justify-between lg:hidden">
            <Link href="/" className="flex-shrink-0">
              <p className="font-bold text-lg md:text-xl">Project-online</p>
            </Link>

            <div className="flex items-center gap-3">
              <Link href="/favorites" className="hover:opacity-80 transition-opacity">
                <Heart size={20} />
              </Link>
              <Link href="/settings" className="hover:opacity-80 transition-opacity">
                <Settings size={20} />
              </Link>
              <Link href="/annonces" className="hover:opacity-80 transition-opacity">
                <Newspaper size={20} />
              </Link>
              <Link href="/account" className="hover:opacity-80 transition-opacity">
                <CircleUserRound size={20} />
              </Link>
            </div>
          </div>

         
          <div className="hidden lg:flex lg:flex-1 items-center">
            <Link href="/" className="flex-shrink-0">
              <p className="font-bold text-lg md:text-xl lg:text-2xl">Project-online</p>
            </Link>
          </div>

       
          <div className="flex flex-col sm:flex-row gap-3 lg:items-center lg:justify-center">

          <Link href="/add" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto py-6 bg-black hover:bg-black/90 px-4   flex items-center justify-center gap-2 whitespace-nowrap">
                <span className="hidden md:inline">Vends tes articles</span>
                <span className="md:hidden">Vendre</span>
                <CirclePlus size={20} />
              </Button>
            </Link>
            <div className="flex-1 lg:flex-initial lg:w-auto">
              <InputWithButton />
            </div>

          
          </div>

          {/* ✅ DESKTOP : icônes (inchangé) */}
          <div className="hidden lg:flex items-center gap-3 lg:gap-4">
            <Link href="/favorites" className="hover:opacity-80 transition-opacity">
              <Heart size={20} className="lg:w-[22px] lg:h-[22px]" />
            </Link>
            <Link href="/settings" className="hover:opacity-80 transition-opacity">
              <Settings size={20} className="lg:w-[22px] lg:h-[22px]" />
            </Link>
            <Link href="/annonces" className="hover:opacity-80 transition-opacity">
              <Newspaper size={20} className="lg:w-[22px] lg:h-[22px]" />
            </Link>
            <Link href="/account" className="hover:opacity-80 transition-opacity">
              <CircleUserRound size={20} className="lg:w-[22px] lg:h-[22px]" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t my-4 md:my-6 border-white" />

        {/* =========================
            CATEGORIES - MOBILE (scroll horizontal)
        ========================== */}
        <div className="lg:hidden -mx-4 px-4 overflow-x-auto">
          <ul className="flex gap-3 w-max pb-2">
            {categories.map((cat) => {
              const isActive = pathname === `/lists/${cat.slug}`;
              return (
                <li key={cat.slug} className="flex-shrink-0">
                  <Link
                    href={`/lists/${cat.slug}`}
                    className={`
                      flex flex-col items-center justify-center
                      min-w-[80px] px-3 py-3 rounded-xl
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-white text-red-600 shadow-md scale-105"
                          : "bg-white/10 hover:bg-white/20"
                      }
                    `}
                  >
                    <span className="mb-1">{cat.icon}</span>
                    <span className="text-xs text-center leading-tight">
                      {cat.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

       
        <ul className="hidden lg:flex lg:justify-between gap-3">
          {categories.map((cat) => {
            const isActive = pathname === `/lists/${cat.slug}`;
            return (
              <li key={cat.slug}>
                <Link
                  href={`/lists/${cat.slug}`}
                  className={`flex flex-col items-center px-4 py-2 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-white text-red-600 scale-105 shadow-md"
                      : "hover:bg-white/20"
                  }`}
                >
                  <span className="mb-1">{cat.icon}</span>
                  <span className="text-sm text-center">{cat.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
