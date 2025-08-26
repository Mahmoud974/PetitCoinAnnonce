// https://localhost:3000/api/alimentations
import { alimentationElements } from "@/app/db/items/alimentations";

export async function GET() {
  return new Response(JSON.stringify(alimentationElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
