"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  MapPin,
  Heart,
  Share2,
  ChevronRight,
  Check,
  ShieldAlert,
  Flag,
  MessageCircle,
} from "lucide-react";
import { FaStar } from "react-icons/fa";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Icons from "./Icons";
import ImgItem from "./ImgItem";
import { Button } from "../ui/button";
import type { Post } from "@/types/post";

const MAX_W = "1280px";

export default function Product({ posts }: { posts: Post[] }) {
  const params = useParams();
  const slug = params?.slug as string;
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const found = (posts ?? []).filter((p: Post) => p.id === Number(slug));

  if (!found.length) {
    return (
      <div
        className="mx-auto w-full px-6 py-20 text-center"
        style={{ maxWidth: MAX_W }}
      >
        <p className="mb-2 text-2xl font-bold text-[#1b3226]">Annonce introuvable</p>
        <p className="mb-6 font-serif italic text-[#1b3226]/70">
          Elle a peut-être été vendue ou supprimée.
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-[#D4E84A] px-5 py-3 text-sm font-bold text-[#1b3226] transition hover:brightness-95"
        >
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  // Champs optionnels : s'affichent seulement s'ils existent dans vos données
  const post = found[0] as Post & Record<string, any>;
  const { title = "", ref, description, informations, category, price } = post;

  const words = String(title).split(" ");
  const titleStrong = words.length > 2 ? words.slice(0, 2).join(" ") : title;
  const titleSerif = words.length > 2 ? words.slice(2).join(" ") : "";

  const priceText =
    price !== undefined && price !== null && price !== "" && !isNaN(Number(price))
      ? Number(price).toLocaleString("fr-FR") + "€"
      : String(price ?? "Prix sur demande");

  const position: [number, number] = [post.lat ?? -11.7022, post.lng ?? 43.2551];
  const location: string = post.location ?? "Moroni, Comores";
  const published = post.createdAt ? new Date(post.createdAt) : null;
  const phone = String(post.whatsapp ?? post.phone ?? "").replace(/[^\d]/g, "");
  const sellerName: string = post.dealerName ?? "Vendeur";

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title, url });
      else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {}
  };

  return (
    <div className="mx-auto w-full px-6 pb-16" style={{ maxWidth: MAX_W }}>
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        {/* ── COLONNE GAUCHE ── */}
        <div className="min-w-0 space-y-10">
          {/* Galerie */}
          <div className="    ">
            <ImgItem />
          </div>

          {/* En-tête de l'annonce */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[#D4E84A] px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-wider text-[#1b3226]">
                {category}
              </span>
              {ref && <span className="text-xs text-[#1b3226]/50">Réf. {ref}</span>}
            </div>

            <h1
              className="text-3xl font-bold leading-tight tracking-tight text-[#1b3226] md:text-5xl"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {titleStrong}
              {titleSerif && (
                <>
                  {" "}
                  <span className="font-serif font-normal italic">{titleSerif}</span>
                </>
              )}
            </h1>

            <dl className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-3 ring-1 ring-[#1b3226]/10">
                <MapPin className="h-4 w-4 text-[#1b3226]" aria-hidden />
                <dt className="sr-only">Localisation</dt>
                <dd className="text-sm font-semibold">{location}</dd>
              </div>
              {published && !isNaN(published.getTime()) && (
                <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-[#1b3226]/10">
                  <dt className="sr-only">Publication</dt>
                  <dd className="text-sm font-semibold">
                    Publiée le{" "}
                    {published.toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </dd>
                </div>
              )}
              {post.condition && (
                <div className="rounded-2xl bg-[#1b3226] px-4 py-3 text-[#D4E84A]">
                  <dt className="sr-only">État</dt>
                  <dd className="flex items-center gap-1.5 text-sm font-semibold">
                    <Check className="h-4 w-4" aria-hidden />
                    {post.condition}
                  </dd>
                </div>
              )}
            </dl>
          </section>

          {/* Description */}
          {description && (
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#1b3226]">Description</h2>
              <p className="max-w-2xl whitespace-pre-line font-serif text-lg leading-relaxed text-[#1b3226]/85">
                {description}
              </p>
            </section>
          )}

          {/* Caractéristiques */}
          {informations && (
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#1b3226]">Caractéristiques</h2>
              <Icons informations={informations} />
            </section>
          )}
        </div>

        {/* ── COLONNE DROITE ── */}
        <aside className="space-y-4 lg:sticky lg:top-6">
          <div className="space-y-6 rounded-[2rem] bg-[#1b3226] p-7 text-white shadow-[0_10px_30px_-12px_rgba(27,50,38,0.45)]">
            {/* Prix + actions */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="mb-2 text-xs text-white/60">Prix souhaité</p>
                <p className="text-5xl font-bold leading-none text-[#D4E84A]">{priceText}</p>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={share}
                  aria-label="Partager l'annonce"
                  className="rounded-full p-2.5 transition hover:bg-white/10"
                >
                  {copied ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Share2 className="h-5 w-5" strokeWidth={1.5} />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setLiked((v) => !v)}
                  aria-label={liked ? "Retirer des favoris" : "Ajouter aux favoris"}
                  aria-pressed={liked}
                  className="rounded-full p-2.5 transition hover:bg-white/10"
                >
                  <Heart
                    className={`h-5 w-5 ${liked ? "fill-[#D4E84A] stroke-[#D4E84A]" : "stroke-white"}`}
                    strokeWidth={1.5}
                  />
                </button>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <Button className="h-14 w-full rounded-xl bg-[#D4E84A] text-base font-bold text-[#1b3226] transition hover:bg-[#D4E84A] hover:brightness-95 active:scale-[0.99]">
                Faire une offre
              </Button>

              {phone ? (
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(
                    `Bonjour, je suis intéressé(e) par votre annonce « ${title} » sur Kisiwa.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-xl border border-white/25 font-semibold transition hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  Contacter sur WhatsApp
                </a>
              ) : (
                <button
                  type="button"
                  className="flex h-14 w-full items-center justify-center rounded-xl border border-white/25 font-semibold transition hover:bg-white/10"
                >
                  Contacter le vendeur
                </button>
              )}
            </div>

            {/* Vendeur */}
            <div className="flex items-center justify-between rounded-2xl bg-white p-4 text-[#1b3226]">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#1b3226] font-bold text-white">
                  {sellerName.trim().charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-bold leading-none">{sellerName}</h3>
                  {typeof post.reviewsCount === "number" && post.reviewsCount > 0 ? (
                    <div className="mt-1.5 flex items-center gap-1 text-xs text-[#1b3226]/60">
                      <FaStar className="h-3 w-3 text-[#D4E84A]" aria-hidden />
                      {post.reviewsCount} avis
                    </div>
                  ) : (
                    <p className="mt-1.5 text-xs text-[#1b3226]/60">
                      {post.isPro ? "Vendeur professionnel" : "Particulier"}
                    </p>
                  )}
                </div>
              </div>
              <ChevronRight className="h-5 w-5 flex-shrink-0 text-[#1b3226]/50" aria-hidden />
            </div>

            {/* Carte */}
            <div className="overflow-hidden rounded-2xl border border-white/10" style={{ height: 180 }}>
              <MapContainer
                center={position}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
                zoomControl={false}
                scrollWheelZoom={false}
                dragging={false}
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                <Circle
                  center={position}
                  radius={800}
                  pathOptions={{ color: "#D4E84A", fillColor: "#D4E84A", fillOpacity: 0.15, weight: 2 }}
                />
              </MapContainer>
            </div>
          </div>

          {/* Sécurité */}
          <div className="rounded-[2rem] bg-white p-6 ring-1 ring-[#1b3226]/10">
            <p className="mb-2 flex items-center gap-2 font-bold text-[#1b3226]">
              <ShieldAlert className="h-5 w-5" aria-hidden />
              Achetez en toute sécurité
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-[#1b3226]/75">
              <li>Rencontrez le vendeur dans un lieu public.</li>
              <li>Vérifiez le produit avant de payer.</li>
              <li>N'envoyez jamais d'argent à l'avance.</li>
            </ul>
            <Link
              href={`/contact?signaler=${post.id}`}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#1b3226] underline underline-offset-4"
            >
              <Flag className="h-4 w-4" aria-hidden />
              Signaler cette annonce
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}