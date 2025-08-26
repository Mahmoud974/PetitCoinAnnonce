// https://localhost:3000/api/activities
import { activitiesElements } from "@/app/db/items/activities";

export async function GET() {
  return new Response(JSON.stringify(activitiesElements), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
