import { ICriancasAdolescentesDTO } from '@/modules/cadastros/criancas_adolescentes/dtos/ICriancasAdolescentes.dto'
import { CriancasAdolescentes } from '@prisma/client';

export interface ICriancasAdolescentesRepository {
  create(data: ICriancasAdolescentesDTO): Promise<CriancasAdolescentes>;
  delete(criancas_adolescentes_id: string): Promise<CriancasAdolescentes>;
  load(): Promise<CriancasAdolescentes[]>;
  loadById(criancas_adolescentes_id: string): Promise<CriancasAdolescentes | null>;
  loadByCpf(cpf: string): Promise<CriancasAdolescentes | null>;
  loadByEmail(email: string): Promise<CriancasAdolescentes | null>;
  update(criancas_adolescentes_id: string, data: Partial<ICriancasAdolescentesDTO>): Promise<CriancasAdolescentes>;
}