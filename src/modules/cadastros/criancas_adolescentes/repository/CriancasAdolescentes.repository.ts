import { ICriancasAdolescentesDTO } from '@/modules/cadastros/criancas_adolescentes/dtos/ICriancasAdolescentes.dto';
import { ICriancasAdolescentesRepository } from '@/modules/cadastros/criancas_adolescentes/repository/implementations/ICriancasAdolescentes.repository';
import { CriancasAdolescentes } from '@prisma/client';
import { prisma } from '@/database/prisma-client';

export class CriancasAdolescentesRepository implements ICriancasAdolescentesRepository {
  async create(data: ICriancasAdolescentesDTO): Promise<CriancasAdolescentes> {
    return prisma.criancasAdolescentes.create({
      data,
    })
  }

  async delete(criancas_adolescentes_id: string): Promise<CriancasAdolescentes> {
    return prisma.criancasAdolescentes.delete({
      where: { criancas_adolescentes_id },
    })
  }

  async load(): Promise<CriancasAdolescentes[]> {
    return prisma.criancasAdolescentes.findMany();
  }

  async loadById(criancas_adolescentes_id: string): Promise<CriancasAdolescentes | null> {
    return prisma.criancasAdolescentes.findUnique({
      where: { criancas_adolescentes_id },
    })
  }

  async loadByCpf(cpf: string): Promise<CriancasAdolescentes | null> {
    return prisma.criancasAdolescentes.findUnique({
      where: { cpf },
    });
  }

  async loadByEmail(email: string): Promise<CriancasAdolescentes | null> {
    return prisma.criancasAdolescentes.findUnique({
      where: { email },
    });
  }

  async update(criancas_adolescentes_id: string, data: Partial<ICriancasAdolescentesDTO>): Promise<CriancasAdolescentes> {
    return prisma.criancasAdolescentes.update({
      where: { criancas_adolescentes_id },
      data,
    });
  }
}
