"use client";

import { useMemo, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Calendar,
  Gauge,
  Fuel,
  Settings2,
  Ruler,
  Home,
  Building,
  DoorOpen,
  type LucideIcon,
} from "lucide-react";

// ─────────────────────────────────────────────
// Constants & helpers
// ─────────────────────────────────────────────

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800&h=600&fit=crop";

function isValidSrc(src: unknown): src is string {
  if (!src || typeof src !== "string") return false;
  return src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/");
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
  return n.toLocaleString("fr-FR") + "€";
}

function formatMileage(mileage?: number | string): string {
  if (!mileage && mileage !== 0) return "—";
  const n = Number(mileage);
  if (isNaN(n)) return String(mileage);
  return n.toLocaleString("fr-FR") + " km";
}

/** "2 heures", "3 jours"… à partir d'une date de publication */
function timeAgo(raw?: string): string | null {
  if (!raw) return null;
  const d = new Date(raw);
  if (isNaN(d.getTime())) return null;
  const min = Math.max(0, Math.floor((Date.now() - d.getTime()) / 60000));
  if (min < 1) return "à l'instant";
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  if (h < 24) return `${h} heure${h > 1 ? "s" : ""}`;
  const days = Math.floor(h / 24);
  if (days < 30) return `${days} jour${days > 1 ? "s" : ""}`;
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
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
  /** Date de publication (ISO) → affichée "il y a 2 heures" */
  createdAt?: string;
  /** Nombre de personnes qui ont mis l'annonce en favori */
  likesCount?: number;
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
// Specs (utilisées en repli sous le prix)
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
    return specs;
  }

  return [];
}

// ─────────────────────────────────────────────
// Composant
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

  const priceDisplay = formatPrice(car.price) + (car.priceLabel ?? "");
  const ago = timeAgo(car.createdAt);

  const subLine =
    typeof car.likesCount === "number"
      ? `${car.likesCount} personne${car.likesCount > 1 ? "s" : ""} adore${car.likesCount > 1 ? "nt" : ""} ça`
      : buildSpecs(car)
          .map((s) => s.value)
          .filter((v) => v && v !== "—")
          .slice(0, 3)
          .join(" · ");

  const arrowClass =
    "absolute top-[38%] z-20 hidden h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#1b3226] transition hover:bg-white focus-visible:flex group-hover:flex";

  return (
    <Link
      href={`/item/${car.id}/${car.category}`}
      className="group relative block aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-[#1b3226] shadow-[0_10px_30px_-12px_rgba(27,50,38,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1b3226]"
    >
      {/* Image plein cadre */}
      <Image
        src={images[currentImageIndex] as string}
        alt={car.title ?? ""}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />

      {/* Dégradé : transparent en haut, noir en bas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,.92) 0%, rgba(0,0,0,.6) 32%, rgba(0,0,0,0) 62%)",
        }}
      />

      {/* Haut : catégorie + cœur */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-5">
        <span className="rounded-full bg-[#d3e85d] px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-wider text-[#1b3226]">
          {car.category}
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onToggleFavorite(car.id);
          }}
          aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          aria-pressed={isFavorite}
          className="-mr-1 p-1 transition active:scale-90"
        >
          <Heart
            className={`h-[18px] w-[18px] ${
              isFavorite ? "fill-[#d3e85d] stroke-[#d3e85d]" : "stroke-white/90"
            }`}
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Navigation images (au survol uniquement) */}
      {images.length > 1 && (
        <>
          <button type="button" onClick={prevImage} aria-label="Image précédente" className={`${arrowClass} left-3`}>
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button type="button" onClick={nextImage} aria-label="Image suivante" className={`${arrowClass} right-3`}>
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Bas : lieu, titre, prix, flèche */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-6 text-white">
        <div className="flex items-center gap-3 text-[11px] text-white/85">
          {car.location && (
            <span className="flex min-w-0 items-center gap-1">
              <span aria-hidden>📍</span>
              <span className="truncate">{car.location}</span>
            </span>
          )}
          {ago && (
            <span className="flex flex-shrink-0 items-center gap-1">
              <span aria-hidden>🕒</span>
              {ago}
            </span>
          )}
        </div>

        <h3 className="mt-1.5 line-clamp-2 min-h-[2.75rem] text-[17px] font-semibold leading-snug">
          {car.title ?? "Sans titre"}
        </h3>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-2xl font-bold leading-none text-[#d3e85d]">{priceDisplay}</p>
            {subLine && (
              <p className="mt-1.5 truncate text-[10px] italic text-white/55">{subLine}</p>
            )}
          </div>

          <span
            aria-hidden
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[14px] bg-[#d3e85d] text-[#1b3226] transition group-hover:scale-105"
          >
            <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.25} />
          </span>
        </div>
      </div>
    </Link>
  );
}