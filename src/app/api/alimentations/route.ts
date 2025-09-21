import { alimentationElements } from "../../db/items/alimentations";

// https://localhost:3000/api/alimentations


export async function GET() {
  return new Response(JSON.stringify(alimentationElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
