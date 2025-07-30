// https://localhost:3000/api/users
import { immobilierElements } from "@/app/db/items/immobiliers";


export async function GET() {
  return new Response(JSON.stringify(immobilierElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
