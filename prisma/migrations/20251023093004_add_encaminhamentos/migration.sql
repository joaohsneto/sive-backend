-- CreateTable
CREATE TABLE "encaminhamentos" (
    "encaminhamento_id" TEXT NOT NULL,
    "criancas_adolescentes_id" TEXT NOT NULL,
    "tipo_encaminhamento" TEXT NOT NULL,
    "necessario" INTEGER NOT NULL DEFAULT 0,
    "efetuado" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "encaminhamentos_pkey" PRIMARY KEY ("encaminhamento_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "encaminhamentos_criancas_adolescentes_id_tipo_encaminhament_key" ON "encaminhamentos"("criancas_adolescentes_id", "tipo_encaminhamento");

-- AddForeignKey
ALTER TABLE "encaminhamentos" ADD CONSTRAINT "encaminhamentos_criancas_adolescentes_id_fkey" FOREIGN KEY ("criancas_adolescentes_id") REFERENCES "criancas_adolescentes"("criancas_adolescentes_id") ON DELETE RESTRICT ON UPDATE CASCADE;
