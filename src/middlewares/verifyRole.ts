import { FastifyReply, FastifyRequest } from 'fastify';

export function verifyRole(requiredRole: string) {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const user = (request as any).user;

    if (!user) {
      return reply.status(401).send({ message: 'Usuário não autenticado' });
    }

    if (user.funcao !== requiredRole) {
      return reply.status(403).send({ message: 'Acesso negado' });
    }
  };
}
