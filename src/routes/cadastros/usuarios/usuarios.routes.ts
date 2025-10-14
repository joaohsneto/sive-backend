import { FastifyPluginAsync } from 'fastify';
import { UsuariosController } from '@/modules/cadastros/usuarios/controller/Usuarios.controller';

export const UsuariosRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UsuariosController()

    app.post('/', controller.create);
    app.get('/', controller.load);
    app.get('/id', controller.loadById);
    app.get('/login', controller.loadByLogin);
    app.get('/cpf', controller.loadByCpf);
    app.get('/email', controller.loadByEmail);
    app.put('/update', controller.update);
    app.delete('/delete', controller.delete);
}