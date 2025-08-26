// https://localhost:3000/api/cloths
import { clothsElements } from "@/app/db/items/cloths";

export async function GET() {
  return new Response(JSON.stringify(clothsElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
