-- CreateTable
CREATE TABLE "responsaveis" (
    "responsavel_id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT,
    "whatsapp" TEXT,
    "funcao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "responsaveis_pkey" PRIMARY KEY ("responsavel_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "responsaveis_cpf_key" ON "responsaveis"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "responsaveis_email_key" ON "responsaveis"("email");
