import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthUseCase } from './Auth.usecase';

export class AuthController {
  async login(request: FastifyRequest, reply: FastifyReply) {
    const { login, senha } = request.body as { login: string; senha: string };

    const usecase = new AuthUseCase();

    try {
      const result = await usecase.login(login, senha);
      return reply.status(200).send(result);
    } catch (error) {
      return reply.status(401).send({ message: (error as Error).message });
    }
  }
}
