import "dotenv/config";
import { Client } from "pg";

const client = new Client({ connectionString: process.env.DATABASE_URL });

client
  .connect()
  .then(() => client.query("select now()"))
  .then((res) => {
    console.log("✅ Connecté à Supabase :", res.rows[0]);
    return client.end();
  })
  .catch((err) => {
    console.error("❌ Échec :", err.message);
    process.exit(1);
  });