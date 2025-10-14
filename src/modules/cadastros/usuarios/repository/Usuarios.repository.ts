import { IUsuariosDTO } from '@/modules/cadastros/usuarios/dtos/IUsuarios.dto';
import { IUsuariosRepository } from '@/modules/cadastros/usuarios/repository/implementatios/IUsuarios.repository';
import { Usuario } from '@prisma/client';
import { prisma } from '@/database/prisma-client';

export class UsuariosRepository implements IUsuariosRepository {
  async create(data: IUsuariosDTO): Promise<Usuario> {
    return prisma.usuario.create({
      data,
    })
  }

  async delete(usuario_id: string): Promise<Usuario> {
    return prisma.usuario.delete({
      where: { usuario_id },
    })
  }

  async load(): Promise<Usuario[]> {
    return prisma.usuario.findMany();
  }

  async loadById(usuario_id: string): Promise<Usuario | null> {
    return prisma.usuario.findUnique({
      where: { usuario_id },
    })
  }

  async loadByLogin(login: string): Promise<Usuario | null> {
    return prisma.usuario.findUnique({
      where: { login },
    });
  }

  async loadByCpf(cpf: string): Promise<Usuario | null> {
    return prisma.usuario.findUnique({
      where: { cpf },
    });
  }

  async loadByEmail(email: string): Promise<Usuario | null> {
    return prisma.usuario.findUnique({
      where: { email },
    });
  }

  async update(usuario_id: string, data: Partial<IUsuariosDTO>): Promise<Usuario> {
    return prisma.usuario.update({
      where: { usuario_id },
      data,
    });
  }
}
