import { FastifyRequest, FastifyReply } from 'fastify';
import { IFichaSiveRequestDTO } from '@/modules/ficha-sive/dtos/IFichaSive.dto';
import { FichaSiveUsecase } from '@/modules/ficha-sive/usecase/FichaSive.usecase'
import { FichaSiveRepository } from '@/modules/ficha-sive/repository/FichaSive.repository'

const fichaSiveRepository = new FichaSiveRepository();
const fichaSiveUsecase = new FichaSiveUsecase(fichaSiveRepository)

export class FichaSiveController {
    async gerarFicha(
        request: FastifyRequest<{ Body: IFichaSiveRequestDTO }>,
        reply: FastifyReply
    ) {
        const { criancas_adolescentes_id, responsavel_id } = request.body;
        
        try {
            const data = await fichaSiveUsecase.gerarFicha({ criancas_adolescentes_id, responsavel_id });
            
            return reply.status(200).send(data);
            
        } catch (error) {
            const message = error instanceof Error ? error.message : "Erro interno do servidor.";
            return reply.status(400).send({ message });
        }
    }
}