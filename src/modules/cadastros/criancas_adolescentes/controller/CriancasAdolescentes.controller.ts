import { FastifyRequest, FastifyReply } from 'fastify';
import { ICriancasAdolescentesDTO } from '@/modules/cadastros/criancas_adolescentes/dtos/ICriancasAdolescentes.dto';
import { CriancasAdolescentesUsecase } from '@/modules/cadastros/criancas_adolescentes/usecase/CriancasAdolescentes.usecase';
import { CriancasAdolescentesRepository } from '@/modules/cadastros/criancas_adolescentes/repository/CriancasAdolescentes.repository';

const criancasAdolescentesRepository = new CriancasAdolescentesRepository();
const criancasAdolescentesUsecase = new CriancasAdolescentesUsecase(criancasAdolescentesRepository)

export class CriancasAdolescentesController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const data = await criancasAdolescentesUsecase.create(request.body as ICriancasAdolescentesDTO);
    
    return reply.status(201).send(data);
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { criancas_adolescentes_id } = request.query as { criancas_adolescentes_id: string };
    
    await criancasAdolescentesUsecase.delete(criancas_adolescentes_id);
    
    return reply.status(204).send();
  }

  async load(request: FastifyRequest, reply: FastifyReply) {
    const data = await criancasAdolescentesUsecase.load();
    
    return reply.status(200).send(data);
  }

  async loadById(request: FastifyRequest, reply: FastifyReply) {
    const { criancas_adolescentes_id } = request.query as { criancas_adolescentes_id: string };
    
    const data = await criancasAdolescentesUsecase.loadById(criancas_adolescentes_id);
    
    return reply.status(200).send(data);
  }

  async loadByCpf(request: FastifyRequest, reply: FastifyReply) {
    const { cpf } = request.query as { cpf: string };
    
    const data = await criancasAdolescentesUsecase.loadByCpf(cpf);
    
    return reply.status(200).send(data);
  }

  async loadByEmail(request: FastifyRequest, reply: FastifyReply) {
    const { email } = request.query as { email: string };
    
    const data = await criancasAdolescentesUsecase.loadByEmail(email);
    
    return reply.status(200).send(data);
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { criancas_adolescentes_id } = request.query as { criancas_adolescentes_id: string };
    const body = request.body as Partial<ICriancasAdolescentesDTO>;
    
    const data = await criancasAdolescentesUsecase.update(criancas_adolescentes_id, body);
    
    return reply.status(200).send(data);
  }
}