import { FastifyRequest, FastifyReply } from 'fastify';
import { IUsuariosDTO } from '@/modules/cadastros/usuarios/dtos/IUsuarios.dto';
import { UsuariosUsecase } from '@/modules/cadastros/usuarios/usecase/Usuarios.usecase';
import { UsuariosRepository } from '@/modules/cadastros/usuarios/repository/Usuarios.repository';

const usuarioRepository = new UsuariosRepository();
const usuariosUsecase = new UsuariosUsecase(usuarioRepository)

export class UsuariosController {
  async create(request: FastifyRequest, reply: FastifyReply) {
    const data = await usuariosUsecase.create(request.body as IUsuariosDTO);
    
    return reply.status(201).send(data);
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { usuario_id } = request.query as { usuario_id: string };
    
    await usuariosUsecase.delete(usuario_id);
    
    return reply.status(204).send();
  }

  async load(request: FastifyRequest, reply: FastifyReply) {
    const data = await usuariosUsecase.load();
    
    return reply.status(200).send(data);
  }

  async loadById(request: FastifyRequest, reply: FastifyReply) {
    const { usuario_id } = request.query as { usuario_id: string };
    
    const data = await usuariosUsecase.loadById(usuario_id);
    
    return reply.status(200).send(data);
  }

  async loadByLogin(request: FastifyRequest, reply: FastifyReply) {
    const { login } = request.query as { login: string };
    
    const data = await usuariosUsecase.loadByLogin(login);
    
    return reply.status(200).send(data);
  }

  async loadByCpf(request: FastifyRequest, reply: FastifyReply) {
    const { cpf } = request.query as { cpf: string };
    
    const data = await usuariosUsecase.loadByCpf(cpf);
    
    return reply.status(200).send(data);
  }

  async loadByEmail(request: FastifyRequest, reply: FastifyReply) {
    const { email } = request.query as { email: string };
    
    const data = await usuariosUsecase.loadByEmail(email);
    
    return reply.status(200).send(data);
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { usuario_id } = request.query as { usuario_id: string };
    const body = request.body as Partial<IUsuariosDTO>;
    
    const data = await usuariosUsecase.update(usuario_id, body);
    
    return reply.status(200).send(data);
  }
}