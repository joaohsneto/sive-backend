-- CreateTable
CREATE TABLE "criancas_adolescentes" (
    "criancas_adolescentes_id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "filiacao_pai" TEXT NOT NULL,
    "filiacao_mae" TEXT NOT NULL,
    "idade_nascimento" TEXT NOT NULL,
    "com_quem_mora" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "ponto_referencia" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "e_mail" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "telefone_contato" TEXT NOT NULL,
    "registro_civil" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "comunidade_originarios" TEXT NOT NULL,
    "deficiencia" TEXT NOT NULL,
    "condicao_saude" TEXT NOT NULL,
    "programas_sociais" TEXT NOT NULL,
    "ocupacao_atividade" TEXT NOT NULL,
    "renda_familiar" TEXT NOT NULL,
    "tipo_imovel" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "criancas_adolescentes_pkey" PRIMARY KEY ("criancas_adolescentes_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "criancas_adolescentes_cpf_key" ON "criancas_adolescentes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "criancas_adolescentes_e_mail_key" ON "criancas_adolescentes"("e_mail");
