import {
  ArrowLeftRight,
  Home,
  Ruler,
  LayoutGrid,
  BedDouble,
  Building,
  Flame,
  Calendar,
  Trees,
  Leaf,
  Droplets,
  Car,
  Box,
  BadgeCheck,
} from "lucide-react";

export const propertyInfos = [
  { icon: ArrowLeftRight, label: "Transaction", key: "transaction" },
  { icon: Home, label: "Type de bien", key: "type" },
  { icon: Ruler, label: "Surface", key: "surface" },
  { icon: LayoutGrid, label: "Pièces", key: "pieces" },
  { icon: BedDouble, label: "Chambres", key: "chambres" },
  { icon: Building, label: "Étage", key: "etage" },
  { icon: Flame, label: "Chauffage", key: "chauffage" },
  { icon: Calendar, label: "Année de construction", key: "annee_construction" },

  // options (booléens)
  { icon: Trees, label: "Terrain", key: "terrain" },
  { icon: Leaf, label: "Jardin", key: "jardin" },
  { icon: Droplets, label: "Piscine", key: "piscine" },
  { icon: Car, label: "Parking", key: "parking" },
  { icon: Box, label: "Box", key: "box" },

  // diagnostics
  { icon: BadgeCheck, label: "DPE", key: "dpe" },
  { icon: BadgeCheck, label: "GES", key: "ges" },
];
