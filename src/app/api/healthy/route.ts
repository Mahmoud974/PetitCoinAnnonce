// https://localhost:3000/api/users
import { itemsElements } from "@/app/db/items/locomotions";

export async function GET() {
  return new Response(JSON.stringify(itemsElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
