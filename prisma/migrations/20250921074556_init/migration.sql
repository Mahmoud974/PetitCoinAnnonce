-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('HOUSES', 'WORKS', 'CARS', 'CLOTHS', 'ANIMALS', 'SERVICES', 'HOLIDAYS', 'ACTIVITIES');

-- CreateTable
CREATE TABLE "public"."Article" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" "public"."Role" NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "ref" INTEGER NOT NULL DEFAULT 0,
    "informations" JSONB,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
