/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/

-- CreateTable
CREATE TABLE "Ocorrencia" (
    "OcoId" TEXT NOT NULL,
    "SE" TEXT NOT NULL,
    "AL" TEXT NOT NULL,
    "EQP" TEXT NOT NULL,
    "DtHrAlt" TIMESTAMP(3) NOT NULL,
    "DtHrOco" TIMESTAMP(3) NOT NULL,
    "DtHrIni" TIMESTAMP(3) NOT NULL,
    "DtHrFim" TIMESTAMP(3) NOT NULL,
    "NRelig" INTEGER NOT NULL,
    "Duracao" DOUBLE PRECISION NOT NULL,
    "TipoOco" TEXT NOT NULL,
    "ProtSen" TEXT NOT NULL,
    "ProtAtu" TEXT NOT NULL,
    "Faltas" TEXT NOT NULL,
    "CondPre" TEXT NOT NULL,
    "CondPos" TEXT NOT NULL,
    "EmailSended" TEXT NOT NULL,
    "SMSSended" TEXT NOT NULL,
    "IdCausa" INTEGER NOT NULL,
    "ModifyBy" TEXT NOT NULL,
    "Causa" TEXT NOT NULL,
    "Obs" TEXT NOT NULL,
    "IdEleRede" INTEGER NOT NULL,
    "Dados_CC" TEXT NOT NULL,
    "Dados_COD" TEXT NOT NULL,
    "RefLocFalt" TEXT NOT NULL,
    "ContabData" TIMESTAMP(3) NOT NULL,
    "ContaBy" TEXT NOT NULL,
    "ModifBy" TEXT NOT NULL,

    CONSTRAINT "Ocorrencia_pkey" PRIMARY KEY ("OcoId")
);
