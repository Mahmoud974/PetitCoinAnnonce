"use client";

import {
  Building2,
  Briefcase,
  Shirt,
  PawPrint,
  UtensilsCrossed,
  Hotel,
  BadgeEuro,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { icon: <Building2 className="w-6 h-6" />, label: "Immobilier", href: "#" },
  { icon: <Briefcase className="w-6 h-6" />, label: "Emploi", href: "#" },
  { icon: <Shirt className="w-6 h-6" />, label: "Seconde main", href: "#" },
  { icon: <PawPrint className="w-6 h-6" />, label: "Animaux", href: "#" },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    label: "Services",
    href: "#",
  },
  { icon: <Hotel className="w-6 h-6" />, label: "Vacances", href: "#" },
  { icon: <BadgeEuro className="w-6 h-6" />, label: "Affaires pro", href: "#" },
];

export default function RedNavbar() {
  return (
    <nav className="bg-red-600 py-2 px-4">
      <ul className="flex justify-center items-center gap-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex flex-col items-center text-white hover:text-gray-200"
            >
              {item.icon}
              <span className="text-sm font-semibold mt-1">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
