import { FastifyRequest, FastifyReply } from 'fastify';
import { IEncaminhamentosDTO } from '@/modules/cadastros/encaminhamentos/dtos/IEncaminhamentos.dto';
import { EncaminhamentosUsecase } from '@/modules/cadastros/encaminhamentos/usecase/Encaminhamentos.usecase';
import { EncaminhamentosRepository } from '@/modules/cadastros/encaminhamentos/repository/Encaminhamentos.repository';

const encaminhamentosRepository = new EncaminhamentosRepository();
const encaminhamentosUsecase = new EncaminhamentosUsecase(encaminhamentosRepository)

export class EncaminhamentosController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const data = await encaminhamentosUsecase.create(request.body as IEncaminhamentosDTO);
    
    return reply.status(201).send(data);
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { encaminhamento_id } = request.query as { encaminhamento_id: string };
    
    await encaminhamentosUsecase.delete(encaminhamento_id);
    
    return reply.status(204).send();
  }

  async load(request: FastifyRequest, reply: FastifyReply) {
    const data = await encaminhamentosUsecase.load();
    
    return reply.status(200).send(data);
  }

  async loadById(request: FastifyRequest, reply: FastifyReply) {
    const { encaminhamento_id } = request.query as { encaminhamento_id: string };
    
    const data = await encaminhamentosUsecase.loadById(encaminhamento_id);
    
    return reply.status(200).send(data);
  }

  async loadByCriancasAdolescentesId(request: FastifyRequest, reply: FastifyReply) {
    const { criancas_adolescentes_id } = request.query as { criancas_adolescentes_id: string };
    
    const data = await encaminhamentosUsecase.loadByCriancasAdolescentesId(criancas_adolescentes_id);
    
    return reply.status(200).send(data);
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { encaminhamento_id, criancas_adolescentes_id } = request.query as { encaminhamento_id: string; criancas_adolescentes_id: string };
    const body = request.body as Partial<IEncaminhamentosDTO>;
    
    const data = await encaminhamentosUsecase.update(encaminhamento_id, criancas_adolescentes_id, body);
    
    return reply.status(200).send(data);
  }
}