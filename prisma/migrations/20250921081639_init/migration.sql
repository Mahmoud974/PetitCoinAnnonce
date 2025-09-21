/*
  Warnings:

  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Article";

-- CreateTable
CREATE TABLE "public"."Articles" (
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

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);
