/*
  Warnings:

  - You are about to alter the column `prix` on the `Annonce` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - The `statut` column on the `Annonce` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `contact` to the `Annonce` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeAnnonce" AS ENUM ('OFFRE', 'DEMANDE');

-- CreateEnum
CREATE TYPE "Statut" AS ENUM ('ACTIVE', 'PAUSE');

-- CreateEnum
CREATE TYPE "Devise" AS ENUM ('KMF', 'EUR');

-- CreateEnum
CREATE TYPE "TypePrix" AS ENUM ('FIXE', 'GRATUIT', 'A_NEGOCIER', 'PAR_MOIS');

-- DropForeignKey
ALTER TABLE "Annonce" DROP CONSTRAINT "Annonce_utilisateurId_fkey";

-- DropForeignKey
ALTER TABLE "Favori" DROP CONSTRAINT "Favori_annonceId_fkey";

-- DropForeignKey
ALTER TABLE "Favori" DROP CONSTRAINT "Favori_utilisateurId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_annonceId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_destinataireId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_expediteurId_fkey";

-- AlterTable
ALTER TABLE "Annonce" ADD COLUMN     "contact" TEXT NOT NULL,
ADD COLUMN     "devise" "Devise" NOT NULL DEFAULT 'KMF',
ADD COLUMN     "infosComp" TEXT,
ADD COLUMN     "modeContact" TEXT,
ADD COLUMN     "professionnel" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "type" "TypeAnnonce" NOT NULL DEFAULT 'OFFRE',
ADD COLUMN     "typePrix" "TypePrix" NOT NULL DEFAULT 'FIXE',
ALTER COLUMN "prix" DROP NOT NULL,
ALTER COLUMN "prix" SET DATA TYPE INTEGER,
DROP COLUMN "statut",
ADD COLUMN     "statut" "Statut" NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Utilisateur" ADD COLUMN     "adresse" TEXT,
ADD COLUMN     "dateNaissance" TIMESTAMP(3),
ADD COLUMN     "genre" TEXT,
ADD COLUMN     "modeVacances" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "motDePasse" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Annonce_categorie_dateCreation_idx" ON "Annonce"("categorie", "dateCreation");

-- CreateIndex
CREATE INDEX "Annonce_utilisateurId_idx" ON "Annonce"("utilisateurId");

-- AddForeignKey
ALTER TABLE "Annonce" ADD CONSTRAINT "Annonce_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favori" ADD CONSTRAINT "Favori_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "Utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favori" ADD CONSTRAINT "Favori_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonce"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_expediteurId_fkey" FOREIGN KEY ("expediteurId") REFERENCES "Utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_destinataireId_fkey" FOREIGN KEY ("destinataireId") REFERENCES "Utilisateur"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_annonceId_fkey" FOREIGN KEY ("annonceId") REFERENCES "Annonce"("id") ON DELETE CASCADE ON UPDATE CASCADE;
