import { FastifyPluginAsync } from 'fastify';
import { ResponsaveisController } from '@/modules/cadastros/responsaveis/controller/Responsaveis.controller';

export const ResponsaveisRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ResponsaveisController()

    app.post('/', controller.create);
    app.get('/', controller.load);
    app.get('/id', controller.loadById);
    app.get('/cpf', controller.loadByCpf);
    app.get('/email', controller.loadByEmail);
    app.put('/update', controller.update);
    app.delete('/delete', controller.delete);
}