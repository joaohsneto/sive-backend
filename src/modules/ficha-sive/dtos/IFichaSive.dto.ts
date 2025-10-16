import { Responsavel, CriancasAdolescentes } from "@prisma/client";
export interface IFichaSiveReturnDTO {
    criancaAdolescente: CriancasAdolescentes | null;
    responsavel: Responsavel | null;
}

export interface IFichaSiveRequestDTO {
    criancas_adolescentes_id: string;
    responsavel_id: string;
}