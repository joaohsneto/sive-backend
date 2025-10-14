import { IUsuariosDTO } from "@/modules/cadastros/usuarios/dtos/IUsuarios.dto";
import { Usuario } from '@prisma/client';

export interface IUsuariosRepository {
  create(data: IUsuariosDTO): Promise<Usuario>;
  delete(usuario_id: string): Promise<Usuario>;
  load(): Promise<Usuario[]>;
  loadById(usuario_id: string): Promise<Usuario | null>;
  loadByLogin(login: string): Promise<Usuario | null>;
  loadByCpf(cpf: string): Promise<Usuario | null>;
  loadByEmail(email: string): Promise<Usuario | null>;
  update(usuario_id: string, data: Partial<IUsuariosDTO>): Promise<Usuario>;
}