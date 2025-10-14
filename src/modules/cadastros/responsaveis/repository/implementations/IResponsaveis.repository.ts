import { IResponsaveisDTO } from '@/modules/cadastros/responsaveis/dtos/IResponsaveis.dto'
import { Responsavel } from '@prisma/client';

export interface IResponsaveisRepository {
  create(data: IResponsaveisDTO): Promise<Responsavel>;
  delete(responsavel_id: string): Promise<Responsavel>;
  load(): Promise<Responsavel[]>;
  loadById(responsavel_id: string): Promise<Responsavel | null>;
  loadByCpf(cpf: string): Promise<Responsavel | null>;
  loadByEmail(email: string): Promise<Responsavel | null>;
  update(responsavel_id: string, data: Partial<IResponsaveisDTO>): Promise<Responsavel>;
}