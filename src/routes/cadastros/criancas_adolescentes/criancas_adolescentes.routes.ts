import { FastifyPluginAsync } from 'fastify';
import { CriancasAdolescentesController } from '@/modules/cadastros/criancas_adolescentes/controller/CriancasAdolescentes.controller';

export const CriancasAdolescentesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CriancasAdolescentesController()

    app.post('/', controller.create);
    app.get('/', controller.load);
    app.get('/id', controller.loadById);
    app.get('/cpf', controller.loadByCpf);
    app.get('/email', controller.loadByEmail);
    app.put('/update', controller.update);
    app.delete('/delete', controller.delete);
}