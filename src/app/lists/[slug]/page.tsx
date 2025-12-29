"use client";

import { useState, useCallback, useEffect } from "react";
import CarCard from "@/components/CarCard";
import EmptyCategory from "@/components/EmptyCategory";
import { useParams } from "next/navigation";

export default function ElementCategory() {
  const { slug } = useParams();
  const [dataElement, setDataElement] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cat = String(slug || "").toLowerCase();
    if (!cat) return;

    setIsLoading(true);

    fetch(`/api/${cat}`, { cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setDataElement(Array.isArray(data) ? data : data?.posts ?? []);
      })
      .catch((e) => {
        console.log(e);
        setDataElement([]);
      })
      .finally(() => setIsLoading(false));
  }, [slug]);

  const [favoriteIds, setFavoriteIds] = useState<Set<string | number>>(() => new Set());

  const toggleFavorite = useCallback((id: string | number) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-wrap items-end gap-3">
            <h1 className="text-3xl font-bold text-gray-900">
              {`Annonces ${slug ?? ""}`}
            </h1>
            <span className="text-2xl font-extrabold text-gray-800">
              ({dataElement.length.toLocaleString("fr-FR")})
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col gap-4">
          {isLoading ? (
            <p className="text-gray-500">Chargement…</p>  
          ) : dataElement.length > 0 ? (
            dataElement.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                isFavorite={favoriteIds.has(car.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))
          ) : (
           
            <div className="py-2">
              <p className="mb-4 text-gray-600">
                Aucune annonce dans cette catégorie pour le moment.
              </p>
              <a
                href="/add"
                className="inline-block rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700 active:scale-[0.99]"
              >
                Publier une annonce
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
