// https://localhost:3000/api/house-garden
import { houseGardenElements } from "@/app/db/items/house-garden";

export async function GET() {
  return new Response(JSON.stringify(houseGardenElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
