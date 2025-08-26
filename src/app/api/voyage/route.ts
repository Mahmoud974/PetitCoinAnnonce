// https://localhost:3000/api/voyage
import { voyageElements } from "@/app/db/items/voyage";

export async function GET() {
  return new Response(JSON.stringify(voyageElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
