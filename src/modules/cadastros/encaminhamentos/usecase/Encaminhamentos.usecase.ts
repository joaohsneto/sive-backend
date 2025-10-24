import {Encaminhamentos  } from '@prisma/client';
import { IEncaminhamentosDTO } from '@/modules/cadastros/encaminhamentos/dtos/IEncaminhamentos.dto';
import { IEncaminhamentosRepository } from '@/modules/cadastros/encaminhamentos/repository/implementations/IEncaminhamentos.repository';

export class EncaminhamentosUsecase {
  constructor(
    private readonly repository: IEncaminhamentosRepository
  ) {}

  async create(data: IEncaminhamentosDTO): Promise<Encaminhamentos> {
    return this.repository.create(data);
  }

  async delete(encaminhamento_id: string): Promise<Encaminhamentos> {
    return this.repository.delete(encaminhamento_id);
  }

  async load(): Promise<Encaminhamentos[]> {
    return this.repository.load();
  }

  async loadById(encaminhamento_id: string): Promise<Encaminhamentos | null> {
    return this.repository.loadById(encaminhamento_id);
  }

  async loadByCriancasAdolescentesId(criancas_adolescentes_id: string): Promise<Encaminhamentos[]> {
    return this.repository.loadByCriancasAdolescentesId(criancas_adolescentes_id);
  }

  async update(
    encaminhamento_id: string,
    criancas_adolescentes_id: string,
    data: Partial<IEncaminhamentosDTO>
  ): Promise<Encaminhamentos> {
    return this.repository.update(encaminhamento_id, criancas_adolescentes_id, data);
  }
} 