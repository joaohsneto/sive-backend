import { FastifyPluginAsync } from "fastify";
import { FichaSivesRoutes } from '@/routes/relatorios/ficha-sive/ficha-sive.routes'
import { verifyJWT } from "@/middlewares/verifyJWT";

export const RelatoriosRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onRequest', verifyJWT)
  fastify.register(FichaSivesRoutes, { prefix: "/ficha-sive" });
}