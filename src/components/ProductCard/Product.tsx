'use client';

import { HandCoins, Clock4,   Maximize2 } from "lucide-react";
import Icons from "./Icons";
import { useParams } from 'next/navigation';
import { FaStar } from "react-icons/fa";
import { Button } from "../ui/button";
import ImgItem from "./ImgItem";
import Back from "../Back";
import type { Post } from "@/types/post";
import type { InfoItem } from "../../app/db/categories/icons";

// Importations Leaflet pour la carte
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Correction icône Leaflet par défaut
const icon = L.icon({ iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png', shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png', iconSize: [25, 41], iconAnchor: [12, 41] });

export default function Product({ posts }: { posts: Post[] }) {
  const params = useParams();
  const slug = params?.slug as string;

  const filterCard = posts?.filter((p: Post) => p.id === Number(slug));
  if (!filterCard.length) return <p>Annonce introuvable</p>;

  const { title, ref, description, informations } = filterCard[0];
  const refValue = String(ref ?? '');
 
  const vehicule: InfoItem[] = Object.entries(informations).map(([key, value]) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, " "),
    value: String(value ?? ""),
    icon: <span className="text-lg">🚗</span>,
  }));

 
  const position: [number, number] = [-11.7022, 43.2551]; 

  return (
    <div className="mx-auto">
      <Back/>
      <main className="mx-auto gap-5 flex container max-w-7xl mt-6 ">
        <ImgItem />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <small className="text-black">Réf. annonce : Mouss {refValue}</small>
              <h1 className="text-3xl font-bold text-black mb-2">{title}</h1>
            </div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          <div className="flex mt-3 justify-between">
            <div>
              <h2 className="text-lg font-bold mb-2">Détail de l{`'`}annonce</h2>
              <p className="w-3/3">{description}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-300 my-4"></div>
          
          <Icons vehicule={vehicule} />
          
          <div className="border-t border-gray-300 my-4"></div>
          <div className="flex justify-between">
            <div className="flex ">
              <div className="flex">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full text-3xl flex items-center justify-center">Z</div>
                <div className="ml-3">
                  <div className="flex">
                    <p>Moussa</p>
                    <div className="ml-2 flex items-center text-md">
                      <FaStar className="text-yellow-400" />
                      <p className="ml-1 text-base">5 (1)</p>
                    </div>
                  </div>
                  <small>Membre depuis aujourd{`'`}hui</small>
                  <div className="flex flex-col text-md">
                    <div className="flex items-center">
                      <Clock4 className="w-4 h-4" />
                      <p className="ml-1 text-base">Dernière activité il y a 3 jours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button>Suivre</Button>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

          {/* Moyen de paiement */}
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">Moyen de paiement</h2>
              <div className="flex gap-4">
                <div className="bg-gray-700 w-12 h-12 flex items-center justify-center rounded-full">
                  <HandCoins className=" text-white w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <p className="font-medium text-gray-900 mb-3">Paiement uniquement en espèces, sur place.</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Aucun paiement à distance ou à l’avance.</p>
                    <p>• Effectuez la transaction dans un lieu public.</p>
                    <p>• Ne remettez l’argent qu’après vérification.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 my-4"></div>

     
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-1">Localisation</h2>
            <p className="text-gray-900 font-semibold mb-4">Moroni, Comores (KM)</p>
            
            <div className="relative w-full h-[300px]  overflow-hidden border border-gray-300 z-0">
               <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
               
                  <Circle 
                    center={position} 
                    pathOptions={{ fillColor: '#3b82f6', color: '#1d4ed8', weight: 2 }} 
                    radius={800} 
                  />
                  <Marker position={position} icon={icon}>
                    <Popup>Zone de vente : Moroni</Popup>
                  </Marker>
               </MapContainer>
               
               {/* Bouton plein écran factice pour le design */}
               <div className="absolute top-4 right-4 z-[1000]">
                  <div className="bg-white p-2 rounded-lg shadow-md cursor-pointer">
                    <Maximize2 className="w-5 h-5 text-gray-600" />
                  </div>
               </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}