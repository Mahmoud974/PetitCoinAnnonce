import { Bath, BedDouble, Building, Calendar,  Home, LayoutGrid, Ruler  } from "lucide-react";

export const propertyInfos = [
  { icon: <Home/>, label: "Type de bien", key: "type" },
  { icon: <Ruler/>, label: "Surface", key: "surface" },
  { icon: <LayoutGrid/>, label: "Pièces", key: "rooms" },
  { icon: <Bath/>, label: "Salles de bain", key: "bathrooms" },
  { icon: <BedDouble/>, label: "Chambres", key: "bedrooms" },
  { icon: <Building/>, label: "Étage", key: "floor" },
  { icon: <Calendar/>, label: "Année", key: "year" },
  { icon: <Calendar/>, label: "Extérieur", key: "outside" },
];
