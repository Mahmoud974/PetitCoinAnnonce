// https://localhost:3000/api/animals
import { animalsElements } from "@/app/db/items/animals";

export async function GET() {
  return new Response(JSON.stringify(animalsElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
