// https://localhost:3000/api/services
import { servicesElements } from "@/app/db/items/services";

export async function GET() {
  return new Response(JSON.stringify(servicesElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
