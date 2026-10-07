"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import CarCard from "@/components/CarCard";
type Car = { id: string | number; [key: string]: any };
type Status = "loading" | "ready" | "error";
type Layout = "list" | "grid";

export default function ElementCategory() {
  const params = useParams();
  const rawSlug = params?.slug;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

  const [cars, setCars] = useState<Car[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [layout, setLayout] = useState<Layout>("list");
  const [reloadKey, setReloadKey] = useState(0);
  const [favoriteIds, setFavoriteIds] = useState<Set<string | number>>(() => new Set());

  useEffect(() => {
    const cat = String(slug || "").toLowerCase();
    if (!cat) return;

    const controller = new AbortController();
    setStatus("loading");

    fetch(`/api/${cat}`, { cache: "no-store", signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setCars(Array.isArray(data) ? data : data?.posts ?? []);
        setStatus("ready");
      })
      .catch((e) => {
        if (e?.name === "AbortError") return;
        console.log(e);
        setCars([]);
        setStatus("error");
      });

    return () => controller.abort();
  }, [slug, reloadKey]);

  const toggleFavorite = useCallback((id: string | number) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const count = cars.length.toLocaleString("fr-FR");
  const title = slug ? decodeURIComponent(slug) : "";

  return (
    <div className="min-h-screen bg-[#eef1ec] text-[#14211a]">
      {/* En-tête */}
      <header className="bg-[#1b3226] text-white">
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:pb-14 sm:pt-12">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white focus-visible:text-white">
              Accueil
            </Link>
            <span aria-hidden className="mx-2">/</span>
            <span className="text-white/90">Catégories</span>
          </nav>

          <h1
            className="max-w-3xl text-5xl font-extrabold capitalize leading-[1.02] tracking-tight sm:text-7xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {title}
          </h1>

          <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">
            {status === "loading"
              ? "Recherche des annonces…"
              : status === "error"
              ? "Impossible de charger les annonces."
              : cars.length === 0
              ? "Aucune annonce pour le moment."
              : `${count} ${cars.length > 1 ? "annonces disponibles" : "annonce disponible"} dans cette catégorie.`}
          </p>
        </div>
      </header>

      {/* Barre d'outils */}
      <div className="sticky top-0 z-10 border-b border-[#14211a]/10 bg-[#eef1ec]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <p className="text-sm text-[#14211a]/70" aria-live="polite">
            {favoriteIds.size > 0 ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f2b134] px-3 py-1 font-semibold text-[#14211a]">
                {favoriteIds.size} {favoriteIds.size > 1 ? "favoris" : "favori"}
              </span>
            ) : (
              "Touchez le cœur pour garder une annonce de côté."
            )}
          </p>

          <div
            role="group"
            aria-label="Mode d'affichage"
            className="inline-flex rounded-lg border border-[#14211a]/15 bg-white p-0.5 text-sm font-semibold"
          >
            {(["list", "grid"] as Layout[]).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setLayout(mode)}
                aria-pressed={layout === mode}
                className={`rounded-md px-3 py-1.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b3226] ${
                  layout === mode
                    ? "bg-[#1b3226] text-white"
                    : "text-[#14211a]/70 hover:text-[#14211a]"
                }`}
              >
                {mode === "list" ? "Liste" : "Grille"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        {status === "loading" && (
          <div className="flex flex-col gap-4" aria-busy="true">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-40 animate-pulse rounded-2xl bg-[#14211a]/[0.07]" />
            ))}
          </div>
        )}

        {status === "error" && (
          <div className="rounded-2xl border border-[#14211a]/10 bg-white p-8">
            <p className="mb-1 text-lg font-bold">Aucun article trouvé</p>
             
           
          </div>
        )}

        {status === "ready" && cars.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#14211a]/25 p-10 text-center">
            <p className="mb-1 text-xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
              Cette catégorie est encore vide
            </p>
            <p className="mb-6 text-[#14211a]/70">Soyez le premier à y déposer une annonce.</p>
            <Link
              href="/add"
              className="inline-block rounded-xl bg-[#1b3226] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0e1e16] active:scale-[0.99]"
            >
              Publier une annonce
            </Link>
          </div>
        )}

        {status === "ready" && cars.length > 0 && (
          <div
            className={
              layout === "grid"
                ? "grid grid-cols-1 gap-5 lg:grid-cols-2"
                : "flex flex-col gap-5"
            }
          >
            {cars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                isFavorite={favoriteIds.has(car.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}