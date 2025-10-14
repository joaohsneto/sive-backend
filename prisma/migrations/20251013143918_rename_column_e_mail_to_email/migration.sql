/*
  Warnings:

  - You are about to drop the column `e_mail` on the `criancas_adolescentes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `criancas_adolescentes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `criancas_adolescentes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."criancas_adolescentes_e_mail_key";

-- AlterTable
ALTER TABLE "criancas_adolescentes" DROP COLUMN "e_mail",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "criancas_adolescentes_email_key" ON "criancas_adolescentes"("email");
