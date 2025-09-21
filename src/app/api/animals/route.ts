import { animalsElements } from "../../db/items/animals";

// https://localhost:3000/api/animals


export async function GET() {
  return new Response(JSON.stringify(animalsElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
