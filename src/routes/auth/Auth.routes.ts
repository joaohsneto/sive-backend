import { FastifyInstance } from 'fastify';
import { AuthController } from '@/modules/auth/Auth.controller';

export async function AuthRoutes(app: FastifyInstance) {
  const controller = new AuthController();

  app.post('/login', controller.login);
}
