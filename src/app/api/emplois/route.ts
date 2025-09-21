import { emploiElements } from "../../db/items/emplois";

// https://localhost:3000/api/emplois


export async function GET() {
  return new Response(JSON.stringify(emploiElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
