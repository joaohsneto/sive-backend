import { FastifyRequest, FastifyReply } from 'fastify';
import { IResponsaveisDTO } from '@/modules/cadastros/responsaveis/dtos/IResponsaveis.dto';
import { ResponsaveisUsecase } from '@/modules/cadastros/responsaveis/usecase/Responsaveis.usecase';
import { ResponsaveisRepository } from '@/modules/cadastros/responsaveis/repository/Responsaveis.repository';

const responsaveisRepository = new ResponsaveisRepository();
const responsaveisUsecase = new ResponsaveisUsecase(responsaveisRepository)

export class ResponsaveisController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const data = await responsaveisUsecase.create(request.body as IResponsaveisDTO);
    
    return reply.status(201).send(data);
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { responsavel_id } = request.query as { responsavel_id: string };
    
    await responsaveisUsecase.delete(responsavel_id);
    
    return reply.status(204).send();
  }

  async load(request: FastifyRequest, reply: FastifyReply) {
    const data = await responsaveisUsecase.load();
    
    return reply.status(200).send(data);
  }

  async loadById(request: FastifyRequest, reply: FastifyReply) {
    const { responsavel_id } = request.query as { responsavel_id: string };
    
    const data = await responsaveisUsecase.loadById(responsavel_id);
    
    return reply.status(200).send(data);
  }

  async loadByCpf(request: FastifyRequest, reply: FastifyReply) {
    const { cpf } = request.query as { cpf: string };
    
    const data = await responsaveisUsecase.loadByCpf(cpf);
    
    return reply.status(200).send(data);
  }

  async loadByEmail(request: FastifyRequest, reply: FastifyReply) {
    const { email } = request.query as { email: string };
    
    const data = await responsaveisUsecase.loadByEmail(email);
    
    return reply.status(200).send(data);
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { responsavel_id } = request.query as { responsavel_id: string };
    const body = request.body as Partial<IResponsaveisDTO>;
    
    const data = await responsaveisUsecase.update(responsavel_id, body);
    
    return reply.status(200).send(data);
  }
}