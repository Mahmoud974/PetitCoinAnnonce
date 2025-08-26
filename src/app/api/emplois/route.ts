// https://localhost:3000/api/emplois
import { emploiElements } from "@/app/db/items/emplois";

export async function GET() {
  return new Response(JSON.stringify(emploiElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
