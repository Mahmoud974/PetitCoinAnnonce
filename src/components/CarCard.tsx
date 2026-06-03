"use client";

import { useMemo, useState, useCallback } from "react";
import Image from "next/image";
import {
  Heart,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Gauge,
  Fuel,
  Settings2,
  Ruler,
  Home,
  Building,
  DoorOpen,
  Flame,
  Palette,
  Wind,
  X,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=600&fit=crop";

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

function isValidSrc(src: unknown): src is string {
  if (!src || typeof src !== "string") return false;
  return (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("/")
  );
}

function formatDate(raw?: string): string {
  if (!raw) return "—";
  const d = new Date(raw);
  if (isNaN(d.getTime())) return raw;
  return d.toLocaleDateString("fr-FR", { month: "short", year: "numeric" });
}

function formatYear(raw?: string): string {
  if (!raw) return "—";
  const d = new Date(raw);
  if (isNaN(d.getTime())) return raw;
  return String(d.getFullYear());
}

function formatPrice(price?: number | string): string {
  if (!price && price !== 0) return "Prix sur demande";
  const n = Number(price);
  if (isNaN(n)) return String(price);
  return n.toLocaleString("fr-FR") + " €";
}

function formatMileage(mileage?: number | string): string {
  if (!mileage && mileage !== 0) return "—";
  const n = Number(mileage);
  if (isNaN(n)) return String(mileage);
  return n.toLocaleString("fr-FR") + " km";
}

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface SpecItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface CaracItem {
  icon: LucideIcon;
  label: string;
  active: boolean;
}

export interface ListingItem {
  id: string;
  category: string;
  images?: unknown[];
  featured?: boolean;
  isPro?: boolean;
  pack?: string;
  title?: string;
  price?: number | string;
  priceLabel?: string;
  // Vehicle
  date?: string;
  mileage?: number | string;
  fuel?: string;
  transmission?: string;
  color?: string;
  interior?: string;
  ac?: boolean;
  sunroof?: boolean;
  // Real-estate
  surface?: number | string;
  rooms?: number | string;
  bedrooms?: number | string;
  propertyType?: string;
  floor?: string;
  heating?: string;
  terrain?: boolean;
  pool?: boolean;
  garden?: boolean;
  parking?: boolean;
  box?: boolean;
  buildYear?: string;
  transactionType?: string;
  // Overrides
  specs?: SpecItem[];
  caracs?: CaracItem[];
  // Seller
  dealerLogo?: unknown;
  dealerName?: string;
  location?: string;
}

interface CarCardProps {
  car: ListingItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

// ─────────────────────────────────────────────
// Auto spec + carac builders
// ─────────────────────────────────────────────

const VEHICLE_CATS = ["véhicules", "voitures", "motos", "cars", "transport"];
const REAL_ESTATE_CATS = ["immobiliers", "immobilier", "locations", "location"];

function buildSpecs(car: ListingItem): SpecItem[] {
  if (car.specs?.length) return car.specs;
  const cat = car.category?.toLowerCase() ?? "";

  if (VEHICLE_CATS.some((c) => cat.includes(c))) {
    return [
      { icon: Calendar, label: "Année", value: formatYear(car.date) },
      { icon: Gauge, label: "Kilométrage", value: formatMileage(car.mileage) },
      { icon: Fuel, label: "Carburant", value: car.fuel ?? "—" },
      { icon: Settings2, label: "Boîte", value: car.transmission ?? "—" },
    ];
  }

  if (REAL_ESTATE_CATS.some((c) => cat.includes(c))) {
    const specs: SpecItem[] = [];
    if (car.surface) specs.push({ icon: Ruler, label: "Surface", value: `${car.surface} m²` });
    if (car.propertyType) specs.push({ icon: Home, label: "Bien", value: car.propertyType });
    if (car.rooms) specs.push({ icon: DoorOpen, label: "Pièces", value: `${car.rooms} pièce${Number(car.rooms) > 1 ? "s" : ""}` });
    if (car.floor) specs.push({ icon: Building, label: "Étage", value: car.floor });
    if (car.bedrooms != null) specs.push({ icon: Building, label: "Chambres", value: String(car.bedrooms) });
    return specs;
  }

  const specs: SpecItem[] = [];
  if (car.date) specs.push({ icon: Calendar, label: "Publié", value: formatDate(car.date) });
  return specs;
}

function buildCaracs(car: ListingItem): CaracItem[] {
  if (car.caracs?.length) return car.caracs;
  const cat = car.category?.toLowerCase() ?? "";

  if (VEHICLE_CATS.some((c) => cat.includes(c))) {
    const caracs: CaracItem[] = [];
    if (car.color) caracs.push({ icon: Palette, label: car.color, active: true });
    if (car.interior) caracs.push({ icon: Home, label: car.interior, active: true });
    if (car.ac != null) caracs.push({ icon: Wind, label: "Clim auto", active: !!car.ac });
    if (car.sunroof != null) caracs.push({ icon: Home, label: "Toit ouvrant", active: !!car.sunroof });
    return caracs;
  }

  if (REAL_ESTATE_CATS.some((c) => cat.includes(c))) {
    const caracs: CaracItem[] = [];
    if (car.heating) caracs.push({ icon: Flame, label: `Chauffage ${car.heating}`, active: true });
    if (car.buildYear) caracs.push({ icon: Calendar, label: car.buildYear, active: true });
    if (car.terrain != null) caracs.push({ icon: Ruler, label: "Terrain", active: !!car.terrain });
    if (car.pool != null) caracs.push({ icon: Home, label: "Piscine", active: !!car.pool });
    if (car.garden != null) caracs.push({ icon: Home, label: "Jardin", active: !!car.garden });
    if (car.parking != null) caracs.push({ icon: Building, label: "Parking", active: !!car.parking });
    if (car.box != null) caracs.push({ icon: Building, label: "Box", active: !!car.box });
    return caracs;
  }

  return [];
}

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function SpecGrid({ specs }: { specs: SpecItem[] }) {
  if (!specs.length) return null;
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
      {specs.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-center gap-1.5 min-w-0">
          <Icon className="w-3 h-3 text-gray-300 flex-shrink-0" />
          <div className="min-w-0">
            <p className="text-[9px] text-gray-400 leading-none mb-0.5">{label}</p>
            <p className="text-[11px] font-medium text-gray-800 truncate">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function CaracBadges({ caracs }: { caracs: CaracItem[] }) {
  if (!caracs.length) return null;
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest">
        Caractéristiques
      </p>
      <div className="flex flex-wrap gap-1.5">
        {caracs.map(({ icon: Icon, label, active }) => (
          <span
            key={label}
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] ${
              active ? "bg-gray-100 text-gray-600" : "bg-gray-50 text-gray-300"
            }`}
          >
            {active ? (
              <Icon className="w-2.5 h-2.5" />
            ) : (
              <X className="w-2.5 h-2.5" />
            )}
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────

export default function CarCard({ car, isFavorite, onToggleFavorite }: CarCardProps) {
  const images = useMemo(() => {
    const arr = Array.isArray(car?.images) ? car.images.filter(isValidSrc) : [];
    return arr.length ? arr : [FALLBACK_IMAGE];
  }, [car?.images]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    },
    [images.length]
  );

  const prevImage = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    },
    [images.length]
  );

  const goToImage = useCallback((e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex(idx);
  }, []);

  const dealerLogoSrc = isValidSrc(car.dealerLogo) ? car.dealerLogo : null;
  const dealerInitial = car.dealerName?.trim().charAt(0)?.toUpperCase() ?? "?";
  const specs = buildSpecs(car);
  const caracs = buildCaracs(car);
  const priceDisplay = formatPrice(car.price) + (car.priceLabel ?? "");

  return (
    <Link
      href={`/item/${car.id}/${car.category}`}
      className="group flex flex-row bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-300 transition-all duration-200"
    >
      {/* ── Image gauche — sans texte dessus ── */}
      <div className="relative w-44 sm:w-52 flex-shrink-0 overflow-hidden bg-gray-100">
        <Image
          src={images[currentImageIndex] as string}
          alt={car.title ?? ""}
          fill
          sizes="(max-width: 640px) 176px, 208px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {car.featured && (
          <span className="absolute top-2 left-2 z-10 bg-black text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">
            À la une
          </span>
        )}

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              aria-label="Image précédente"
              className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white/80 hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-3.5 h-3.5 text-gray-700" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Image suivante"
              className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white/80 hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-3.5 h-3.5 text-gray-700" />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1 items-center">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => goToImage(e, idx)}
                  aria-label={`Image ${idx + 1}`}
                  className={`h-1 rounded-full transition-all duration-200 ${
                    idx === currentImageIndex ? "w-4 bg-white" : "w-1 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Contenu droite ── */}
      <div className="flex flex-col flex-1 min-w-0 p-3 sm:p-4 gap-2.5">

        {/* Titre + Prix/Favori */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
              {car.title ?? "Sans titre"}
            </h3>
            <div className="flex items-center gap-1.5 flex-wrap">
              {car.isPro && (
                <span className="text-[9px] font-bold px-2 py-0.5 bg-gray-900 text-white rounded">
                  Pro
                </span>
              )}
              {car.pack && (
                <span className="text-[9px] font-medium px-2 py-0.5 bg-gray-100 text-gray-500 rounded">
                  {car.pack}
                </span>
              )}
              <span className="text-[10px] text-gray-400">{car.category}</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
            <span className="text-base font-bold text-gray-900 whitespace-nowrap">
              {priceDisplay}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onToggleFavorite(car.id);
              }}
              aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
              className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <Heart
                className={`w-3.5 h-3.5 transition-colors ${
                  isFavorite ? "fill-red-500 stroke-red-500" : "stroke-gray-400"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="h-px bg-gray-100" />

        <SpecGrid specs={specs} />

        {caracs.length > 0 && (
          <>
            <div className="h-px bg-gray-100" />
            <CaracBadges caracs={caracs} />
          </>
        )}

        {/* Footer vendeur */}
        <div className="flex items-center gap-2 mt-auto pt-2.5 border-t border-gray-100">
          <div className="w-6 h-6 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 relative">
            {dealerLogoSrc ? (
              <Image
                src={dealerLogoSrc}
                alt={car.dealerName ?? ""}
                fill
                sizes="24px"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[9px] font-bold text-gray-400">
                {dealerInitial}
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-medium text-gray-700 truncate">
              {car.dealerName ?? "Vendeur"}
            </p>
            <p className="text-[10px] text-gray-400 flex items-center gap-0.5">
              <MapPin className="w-2.5 h-2.5 flex-shrink-0" />
              {car.location ?? "—"}
            </p>
          </div>
          <span className="text-[11px] font-semibold text-gray-800 whitespace-nowrap group-hover:underline">
            Voir →
          </span>
        </div>
      </div>
    </Link>
  );
}