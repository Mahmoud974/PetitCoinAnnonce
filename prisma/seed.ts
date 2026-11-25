import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const heures = (n: number) => new Date(Date.now() - n * 3600 * 1000);

async function main() {
  // On repart d'une base propre (ordre : tables dépendantes d'abord)
  await prisma.message.deleteMany();
  await prisma.favori.deleteMany();
  await prisma.annonce.deleteMany();
  await prisma.utilisateur.deleteMany();

  const motDePasse = await bcrypt.hash("Test1234!", 10);

  const mahamoud = await prisma.utilisateur.create({
    data: {
      nom: "Mahamoud Moussa",
      email: "mahamoud@test.com",
      motDePasse,
      genre: "Homme",
      dateNaissance: new Date("1992-05-28"),
    },
  });

  const amina = await prisma.utilisateur.create({
    data: {
      nom: "Amina Said",
      email: "amina@test.com",
      motDePasse,
    },
  });

  const annonces = [
    {
      titre: "Peugeot 208 - Essence - 2021",
      description: "Très bon état, entretien suivi, 45 000 km.",
      categorie: "vehicules",
      ville: "Moroni",
      prix: 18500,
      devise: "EUR" as const,
      contact: "+269 321 00 00",
      dateCreation: heures(2),
      utilisateurId: mahamoud.id,
    },
    {
      titre: "Scooter Yamaha 125",
      description: "Scooter fiable, idéal pour la ville.",
      categorie: "vehicules",
      ville: "Moroni",
      prix: 1200000,
      devise: "KMF" as const,
      contact: "+269 322 11 11",
      dateCreation: heures(3),
      utilisateurId: amina.id,
    },
    {
      titre: "Appartement 3 pièces meublé",
      description: "Proche du centre, cuisine équipée, climatisation.",
      categorie: "immobilier",
      ville: "Mutsamudu",
      prix: 350000,
      devise: "KMF" as const,
      typePrix: "PAR_MOIS" as const,
      contact: "+269 333 22 22",
      professionnel: true,
      dateCreation: heures(5),
      utilisateurId: mahamoud.id,
    },
    {
      titre: "iPhone 13 128 Go",
      description: "Débloqué tout opérateur, batterie à 89 %.",
      categorie: "electronique",
      ville: "Marseille",
      prix: 450,
      devise: "EUR" as const,
      contact: "amina@test.com",
      dateCreation: heures(24),
      utilisateurId: amina.id,
    },
    {
      titre: "Canapé 3 places",
      description: "À donner, à récupérer sur place.",
      categorie: "maison",
      ville: "Moroni",
      typePrix: "GRATUIT" as const,
      contact: "+269 321 00 00",
      dateCreation: heures(30),
      utilisateurId: mahamoud.id,
    },
    {
      titre: "Robe de cérémonie traditionnelle",
      description: "Portée une seule fois, taille M.",
      categorie: "mode",
      ville: "Mitsamiouli",
      prix: 60000,
      typePrix: "A_NEGOCIER" as const,
      contact: "+269 322 11 11",
      dateCreation: heures(48),
      utilisateurId: amina.id,
    },
    {
      titre: "Transport de colis Paris - Moroni",
      description: "Départ chaque mois, tarif au kilo.",
      categorie: "fret-colis",
      ville: "Paris",
      prix: 8,
      devise: "EUR" as const,
      contact: "+33 6 00 00 00 00",
      professionnel: true,
      dateCreation: heures(72),
      utilisateurId: mahamoud.id,
    },
    {
      titre: "Recherche studio à louer",
      description: "Je cherche un studio calme, budget 100 000 KMF.",
      categorie: "immobilier",
      ville: "Moroni",
      type: "DEMANDE" as const,
      contact: "amina@test.com",
      dateCreation: heures(96),
      utilisateurId: amina.id,
    },
  ];

  for (const a of annonces) {
    await prisma.annonce.create({ data: { photos: ["/1.jpg"], ...a } });
  }

  // Quelques favoris pour tester le compteur
  const toutes = await prisma.annonce.findMany();
  await prisma.favori.createMany({
    data: toutes.slice(0, 4).map((a) => ({
      utilisateurId: mahamoud.id,
      annonceId: a.id,
    })),
  });

  console.log(`✅ ${toutes.length} annonces, 2 utilisateurs, favoris créés`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());