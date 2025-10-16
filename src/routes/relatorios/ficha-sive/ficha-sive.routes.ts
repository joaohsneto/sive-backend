import { FastifyPluginAsync } from 'fastify';
import { FichaSiveController } from '@/modules/ficha-sive/controller/FichaSive.controller';

export const FichaSivesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new FichaSiveController()

    app.post('/', controller.gerarFicha);
}