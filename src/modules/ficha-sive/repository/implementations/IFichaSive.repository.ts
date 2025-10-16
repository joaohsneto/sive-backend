import { IFichaSiveReturnDTO } from '@/modules/ficha-sive/dtos/IFichaSive.dto'
export interface IFichaSiveRepository {
  gerarFicha(
    criancas_adolescentes_id: string,
    responsavel_id: string,
  ): Promise<IFichaSiveReturnDTO>;
}