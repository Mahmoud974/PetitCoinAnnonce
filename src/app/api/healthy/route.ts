// https://localhost:3000/api/healthy
import { healthyElements } from "@/app/db/items/healthy";

export async function GET() {
  return new Response(JSON.stringify(healthyElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
