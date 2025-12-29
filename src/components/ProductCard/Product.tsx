"use client";

import { HandCoins, Clock4, Maximize2, Printer, Flag, MapPin } from "lucide-react";
import Icons from "./Icons";
import { useParams } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import ImgItem from "./ImgItem";
import Back from "../Back";
import Image from "next/image";
import type { Post } from "@/types/post";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Composant pour une annonce similaire
function SimilarAd({ post }: { post: Post }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <div className="relative h-44 sm:h-48 bg-gray-200">
        {post.images?.[0] ? (
          <Image
            src="/2.jpg"
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Pas d&apos;image
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{post.title}</h3>
        {post.price && (
          <p className="text-lg font-bold text-orange-600 mb-2">
            {post.price.toLocaleString()} KMF
          </p>
        )}
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span>Moroni, Comores</span>
        </div>
      </div>
    </div>
  );
}

export default function Product({ posts }: { posts: Post[] }) {
  const params = useParams();
  const slug = params?.slug as string;

  const filterCard = posts?.filter((p: Post) => p.id === Number(slug));
  if (!filterCard.length) return <p className="px-4">Annonce introuvable</p>;

  const { title, ref, description, informations } = filterCard[0];
  const refValue = String(ref ?? "");
  const position: [number, number] = [-11.7022, 43.2551];

  const similarPosts = posts.filter((p) => p.id !== filterCard[0].id).slice(0, 4);

  return (
    <div className="mx-auto">
      <div className="px-4 sm:px-6">
        <Back />
      </div>

      <main
        className="
          container mx-auto max-w-6xl
          px-4 sm:px-6
          mt-6
          grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]
          gap-6 lg:gap-8
        "
      >
        {/* Colonne images */}
        <div className="w-full">
          <ImgItem />
        </div>

        {/* Colonne contenu */}
        <div className="min-w-0">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <small className="text-black">Réf. annonce : Mouss {refValue}</small>
            <h1 className="text-2xl sm:text-3xl font-bold text-black">{title}</h1>
          </div>

          {/* Actions */}
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <button
              type="button"
              className="flex items-center text-base underline cursor-pointer w-fit"
              onClick={() => window.print()}
            >
              <Printer className="w-5 mr-2" />
              Imprimer l&apos;annonce
            </button>

            <button type="button" className="flex items-center text-base underline cursor-pointer w-fit">
              <Flag className="w-5 mr-2" />
              Signaler l&apos;annonce
            </button>
          </div>

          <div className="border-t border-gray-300 my-5" />

          {/* Détail */}
          <div>
            <h2 className="text-lg font-bold mb-2">Détail de l&apos;annonce</h2>
            <p className="text-base text-gray-900 break-words">{description}</p>
          </div>

          <div className="border-t border-gray-300 my-5" />

          {/* Icons */}
          <Icons informations={informations} />

          <div className="border-t border-gray-300 my-5" />

          {/* Profil vendeur + bouton */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start">
              <div className="bg-orange-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full text-2xl sm:text-3xl flex items-center justify-center shrink-0">
                Z
              </div>

              <div className="ml-3">
                <div className="flex flex-wrap items-center gap-x-2">
                  <p className="font-medium">Moussa</p>
                  <div className="flex items-center text-md">
                    <FaStar className="text-yellow-400" />
                    <p className="ml-1 text-base">5 (1)</p>
                  </div>
                </div>

                <small className="block text-gray-600">Membre depuis aujourd&apos;hui</small>

                <div className="mt-1 flex items-center text-gray-700">
                  <Clock4 className="w-4 h-4" />
                  <p className="ml-2 text-base">Dernière activité il y a 3 jours</p>
                </div>
              </div>
            </div>

            <Button className="w-full sm:w-auto">Suivre</Button>
          </div>

          <div className="border-t border-gray-300 my-5" />

          {/* Paiement */}
          <div>
            <h2 className="text-xl font-bold mb-3">Moyen de paiement</h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-gray-700 w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                <HandCoins className="text-white w-6 h-6" />
              </div>

              <div className="min-w-0">
                <p className="font-medium text-gray-900 mb-3">
                  Paiement uniquement en espèces, sur place.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Aucun paiement à distance ou à l&apos;avance.</p>
                  <p>• Effectuez la transaction dans un lieu public.</p>
                  <p>• Ne remettez l&apos;argent qu&apos;après vérification.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 my-5" />

          {/* Localisation */}
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-1">Localisation</h2>
            <p className="text-gray-900 font-semibold mb-4">Moroni, Comores (KM)</p>

            <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[340px] overflow-hidden border border-gray-300 z-0 rounded-md">
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle
                  center={position}
                  pathOptions={{ fillColor: "#3b82f6", color: "#1d4ed8", weight: 2 }}
                  radius={800}
                />
                <Marker position={position} icon={icon}>
                  <Popup>Zone de vente : Moroni</Popup>
                </Marker>
              </MapContainer>

              <div className="absolute top-3 right-3 z-[1000]">
                <div className="bg-white p-2 rounded-lg shadow-md cursor-pointer">
                  <Maximize2 className="w-5 h-5 text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Annonces similaires */}
          {similarPosts.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-4">Annonces similaires</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {similarPosts.map((post) => (
                  <SimilarAd key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
