import { NextResponse } from "next/server";
import { carsElements } from "@/app/db/items/cars";
import { clothsElements } from "@/app/db/items/cloths";
import { activitiesElements } from "@/app/db/items/activities";
import { alimentationElements } from "../../db/items/alimentations";
import { animalsElements } from '../../db/items/animals';
import { emploiElements } from "@/app/db/items/emplois";
import { healthyElements } from "@/app/db/items/healthy";
import { voyageElements } from "@/app/db/items/voyage";
import { servicesElements } from "@/app/db/items/services";
import { immobilierElements } from "@/app/db/items/immobiliers";
import { houseGardenElements } from "@/app/db/items/house-garden";

const dataByCategory = {
  cloths: clothsElements,
  cars: carsElements,
  activities: activitiesElements,
  alimentations: alimentationElements,
  animals: animalsElements,
  emplois: emploiElements,
  healthy: healthyElements,
  travel: voyageElements,
  services: servicesElements,
  immobiliers: immobilierElements,
  houses: houseGardenElements
} as const;

type Category = keyof typeof dataByCategory;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;

  if (!(category in dataByCategory)) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  const data = dataByCategory[category as Category];
  return NextResponse.json(data, { status: 200 });
}
