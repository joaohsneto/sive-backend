import { FastifyPluginAsync } from "fastify";
import { UsuariosRoutes } from '@/routes/cadastros/usuarios/usuarios.routes';
import { CriancasAdolescentesRoutes } from '@/routes/cadastros/criancas_adolescentes/criancas_adolescentes.routes';
import { ResponsaveisRoutes } from '@/routes/cadastros/responsaveis/responsaveis.routes';
import { EncaminhamentosRoutes } from '@/routes/cadastros/encaminhamentos/encaminhamentos.routes';
import { verifyJWT } from "@/middlewares/verifyJWT";

export const CadastrosRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.addHook('onRequest', verifyJWT)
  fastify.register(UsuariosRoutes, { prefix: "/usuarios" });
  fastify.register(CriancasAdolescentesRoutes, { prefix: "/criancas-adolescentes" });
  fastify.register(ResponsaveisRoutes, { prefix: "/responsavel" });
  fastify.register(EncaminhamentosRoutes, { prefix: "/encaminhamentos" });
}