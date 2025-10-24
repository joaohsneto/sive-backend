import { IFichaSiveReturnDTO } from '@/modules/ficha-sive/dtos/IFichaSive.dto'
import { IFichaSiveRepository } from '@/modules/ficha-sive/repository/implementations/IFichaSive.repository'
import { prisma } from '@/database/prisma-client';

export class FichaSiveRepository implements IFichaSiveRepository {
  async gerarFicha(
        criancas_adolescentes_id: string,
        responsavel_id: string,
    ): Promise<IFichaSiveReturnDTO> {
        const [criancaAdolescente, responsavel] = await Promise.all([
            prisma.criancasAdolescentes.findUnique({
                where: {
                    criancas_adolescentes_id: criancas_adolescentes_id,
                },
                include: {
                    encaminhamentos: true,
                },
            }),
            prisma.responsavel.findUnique({
                where: {
                    responsavel_id: responsavel_id,
                },
            }),
        ]);

        // Combina os resultados no formato DTO desejado
        const result: IFichaSiveReturnDTO = {
            criancaAdolescente,
            responsavel,
        };

        return result;
    }
}