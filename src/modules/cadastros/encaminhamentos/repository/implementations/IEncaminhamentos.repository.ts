import { IEncaminhamentosDTO } from '@/modules/cadastros/encaminhamentos/dtos/IEncaminhamentos.dto';
import { Encaminhamentos } from '@prisma/client';

export interface IEncaminhamentosRepository {
  create(data: IEncaminhamentosDTO): Promise<Encaminhamentos>;
  delete(encaminhamento_id: string): Promise<Encaminhamentos>;
  load(): Promise<Encaminhamentos[]>;
  loadById(encaminhamento_id: string): Promise<Encaminhamentos | null>;
  loadByCriancasAdolescentesId(criancas_adolescentes_id: string): Promise<Encaminhamentos[]>;
  update(encaminhamento_id: string, criancas_adolescentes_id: string, data: Partial<IEncaminhamentosDTO>): Promise<Encaminhamentos>;
}
