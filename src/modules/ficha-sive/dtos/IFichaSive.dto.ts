import { Responsavel, CriancasAdolescentes, Encaminhamentos } from "@prisma/client";

type CriancasAdolescentesComEncaminhamentos = CriancasAdolescentes & {
    encaminhamentos: Encaminhamentos[];
};
export interface IFichaSiveReturnDTO {
    criancaAdolescente: CriancasAdolescentesComEncaminhamentos | null; 
    responsavel: Responsavel | null;
}

export interface IFichaSiveRequestDTO {
    criancas_adolescentes_id: string;
    responsavel_id: string;
}