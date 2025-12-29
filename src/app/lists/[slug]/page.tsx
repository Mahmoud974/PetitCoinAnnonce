"use client"
import  { useState, useCallback, useEffect } from "react";
import CarCard from "@/components/CarCard";
import { useParams } from "next/navigation";


export default function ElementCategory({ posts = [] }) {
  const { slug  } = useParams();
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
        setDataElement(Array.isArray(data) ? data : (data.posts ?? []));
      })
      .catch((e) => {
        console.log(e);
        setDataElement([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [slug]);
  console.log(dataElement);
  
 

  
  const [favoriteIds, setFavoriteIds] = useState(() => new Set());

  const toggleFavorite = useCallback((id) => {
    setFavoriteIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
         <div className="flex">
         <h1 className="text-3xl font-bold text-gray-900 mb-2">
           {`Annonces ${slug}`} 
          </h1>
          <i className="text-3xl font-bold">   ({ dataElement.length.toLocaleString("fr-FR")})</i>
         </div>
         
     
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-4">
          {dataElement.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              isFavorite={favoriteIds.has(car.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
 
    </div>
  );
}
