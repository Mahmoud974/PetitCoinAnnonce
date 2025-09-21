// src/app/api/users/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; 
export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      title: "Cours de Yoga - Tous Niveaux",
      price: 25,
      category: "Activities",
      images: ["yoga.jpg"],
      date: new Date().toISOString(),
      likes: 20,
      description:
        "Cours de yoga en salle, tous niveaux, matériel fourni, ambiance zen.",
      ref: 1080000001,
      informations: {
        type_activite: "Sport",
        categorie: "Bien-être",
        duree: "1h30",
        niveau: "Tous niveaux",
        localisation: "Paris 11e",
        professeur: "Diplômé",
        materiel: "Fourni",
        horaires: "Matin/Soir",
        capacite: "15 personnes",
      },
    },
  ]);
}
