import { FastifyPluginAsync } from "fastify";
import { UsuariosRoutes } from '@/routes/cadastros/usuarios/usuarios.routes';
import { CriancasAdolescentesRoutes } from '@/routes/cadastros/criancas_adolescentes/criancas_adolescentes.routes';
import { ResponsaveisRoutes } from '@/routes/cadastros/responsaveis/responsaveis.routes';

export const CadastrosRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.register(UsuariosRoutes, { prefix: "/usuarios" });
  fastify.register(CriancasAdolescentesRoutes, { prefix: "/criancas-adolescentes" });
  fastify.register(ResponsaveisRoutes, { prefix: "/responsavel" });
}