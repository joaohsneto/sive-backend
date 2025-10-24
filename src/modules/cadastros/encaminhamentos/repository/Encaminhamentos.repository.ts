import { IEncaminhamentosDTO } from '@/modules/cadastros/encaminhamentos/dtos/IEncaminhamentos.dto';
import { IEncaminhamentosRepository } from '@/modules/cadastros/encaminhamentos/repository/implementations/IEncaminhamentos.repository';
import { Encaminhamentos } from '@prisma/client';
import { prisma } from '@/database/prisma-client';

export class EncaminhamentosRepository implements IEncaminhamentosRepository {
  async create(data: IEncaminhamentosDTO): Promise<Encaminhamentos> {
    return prisma.encaminhamentos.create({
      data,
    });
  }

  async delete(encaminhamento_id: string): Promise<Encaminhamentos> {
    return prisma.encaminhamentos.delete({
      where: { encaminhamento_id },
    });
  }

  async load(): Promise<Encaminhamentos[]> {
    return prisma.encaminhamentos.findMany();
  }

  async loadById(encaminhamento_id: string): Promise<Encaminhamentos | null> {
    return prisma.encaminhamentos.findUnique({
      where: { encaminhamento_id },
    });
  }

  async loadByCriancasAdolescentesId(criancas_adolescentes_id: string): Promise<Encaminhamentos[]> {
    return prisma.encaminhamentos.findMany({
      where: { criancas_adolescentes_id },
    });
  }

  async update(
    encaminhamento_id: string,
    criancas_adolescentes_id: string,
    data: Partial<IEncaminhamentosDTO>
  ): Promise<Encaminhamentos> {
    return prisma.encaminhamentos.update({
      where: { encaminhamento_id, criancas_adolescentes_id },
      data,
    });
  }
};