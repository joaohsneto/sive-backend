import { FastifyPluginAsync } from "fastify";
import { CadastrosRoutes } from "./cadastros/cadastros.routes";
import { RelatoriosRoutes } from '@/routes/relatorios/relatorios.routes'
import { AuthRoutes } from "./auth/Auth.routes";

export const routes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/', (request, reply) => {
    return reply.status(200).send({ message: "Working!" });
  })
  fastify.register(CadastrosRoutes, { prefix: "/cadastros" });
  fastify.register(AuthRoutes, { prefix: "/auth" });
  fastify.register(RelatoriosRoutes, { prefix: "/relatorios" });
}