import { FastifyPluginAsync } from 'fastify';
import { EncaminhamentosController } from '@/modules/cadastros/encaminhamentos/controller/Encaminhamentos.controller';

export const EncaminhamentosRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EncaminhamentosController();

    app.post('/', controller.create);
    app.get('/', controller.load);
    app.get('/id', controller.loadById);
    app.get('/crianca_adolescente', controller.loadByCriancasAdolescentesId);
    app.put('/update', controller.update);
    app.delete('/delete', controller.delete);
}