import { FastifyPluginAsync } from 'fastify';
import { UsuariosController } from '@/modules/cadastros/usuarios/controller/Usuarios.controller';
import { verifyRole } from '@/middlewares/verifyRole';

export const UsuariosRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UsuariosController()

    app.post('/', { preHandler: [verifyRole('admin')] } , controller.create);
    app.get('/', { preHandler: [verifyRole('admin')] }, controller.load);
    app.get('/id', { preHandler: [verifyRole('admin')] }, controller.loadById);
    app.get('/login', { preHandler: [verifyRole('admin')] }, controller.loadByLogin);
    app.get('/cpf', { preHandler: [verifyRole('admin')] }, controller.loadByCpf);
    app.get('/email', { preHandler: [verifyRole('admin')] }, controller.loadByEmail);
    app.put('/update', { preHandler: [verifyRole('admin')] }, controller.update);
    app.delete('/delete', { preHandler: [verifyRole('admin')] }, controller.delete);
}