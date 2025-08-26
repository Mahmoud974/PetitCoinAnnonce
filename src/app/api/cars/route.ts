// https://localhost:3000/api/cars
import { carsElements } from "@/app/db/items/cars";

export async function GET() {
  return new Response(JSON.stringify(carsElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
