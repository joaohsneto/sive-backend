import { IResponsaveisDTO } from '@/modules/cadastros/responsaveis/dtos/IResponsaveis.dto';
import { IResponsaveisRepository } from '@/modules/cadastros/responsaveis/repository/implementations/IResponsaveis.repository';
import { Responsavel } from '@prisma/client';
import { prisma } from '@/database/prisma-client';

export class ResponsaveisRepository implements IResponsaveisRepository {
  async create(data: IResponsaveisDTO): Promise<Responsavel> {
    return prisma.responsavel.create({
      data,
    })
  }

  async delete(responsavel_id: string): Promise<Responsavel> {
    return prisma.responsavel.delete({
      where: { responsavel_id },
    })
  }

  async load(): Promise<Responsavel[]> {
    return prisma.responsavel.findMany();
  }

  async loadById(responsavel_id: string): Promise<Responsavel | null> {
    return prisma.responsavel.findUnique({
      where: { responsavel_id },
    })
  }

  async loadByCpf(cpf: string): Promise<Responsavel | null> {
    return prisma.responsavel.findUnique({
      where: { cpf },
    });
  }

  async loadByEmail(email: string): Promise<Responsavel | null> {
    return prisma.responsavel.findUnique({
      where: { email },
    });
  }

  async update(responsavel_id: string, data: Partial<IResponsaveisDTO>): Promise<Responsavel> {
    return prisma.responsavel.update({
      where: { responsavel_id },
      data,
    });
  }
}
