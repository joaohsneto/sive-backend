import { Usuario } from '@prisma/client';
import { IUsuariosDTO } from '@/modules/cadastros/usuarios/dtos/IUsuarios.dto';
import { IUsuariosRepository } from '@/modules/cadastros/usuarios/repository/implementatios/IUsuarios.repository';
import { hash } from 'bcrypt';

export class UsuariosUsecase {
  constructor(
    private readonly repository: IUsuariosRepository
  ) {}

  async create(data: IUsuariosDTO): Promise<Usuario> {
    if (!data.cpf) {
      throw new Error('Digite o CPF do usuário!');
    }
    if (!data.nome_usuario) {
      throw new Error('Digite o nome do usuário!');
    }
    if (!data.email) {
      throw new Error('Digite o email do usuário!');
    }
    if (!data.login) {
      throw new Error('Digite o login do usuário!');
    }
    if (!data.senha) {
      throw new Error('Digite uma senha para o usuário!');
    }
    
    const cpfExists = await this.repository.loadByCpf(data.cpf);
    if (cpfExists) {
      throw new Error('O CPF informado já está cadastrado no sistema.');
    }

    const loginExists = await this.repository.loadByLogin(data.login);
    if (loginExists) {
      throw new Error('O Login informado já está em uso.');
    }

    const emailExists = await this.repository.loadByEmail(data.email);
    if (emailExists) {
      throw new Error('O E-mail informado já está cadastrado no sistema.');
    }

    const custoProcessamento  = 10;
    const senhaHashed = await hash(data.senha, custoProcessamento);

    const result = await this.repository.create({
      ...data,
      senha: senhaHashed,
    });

    return result;

  }

  async delete(usuario_id: string): Promise<void> {
    if (!usuario_id) {
        throw new Error('Informe o ID do usuário a ser excluído!');
    }
    
    const usuarioExists = await this.repository.loadById(usuario_id);

    if (!usuarioExists) {
      throw new Error('404: Não foram localizados registros de Usuário para este identificador.'); 
    }
    
    await this.repository.delete(usuario_id);
  }

  async load(): Promise<Usuario[]> {
    return this.repository.load();
  }
  
  async loadById(usuario_id: string): Promise<Usuario> {
    if (!usuario_id) {
        throw new Error('Informe o ID do usuário!');
    }
      
    const usuario = await this.repository.loadById(usuario_id);

    if (!usuario) {
      throw new Error('Usuário não localizado.');
    }
    
    return usuario;
  }

  async loadByLogin(login: string): Promise<Usuario> {
    if (!login) {
      throw new Error('Informe o login do usuário!');
    }
    
    const usuario = await this.repository.loadByLogin(login);

    if (!usuario) {
      throw new Error('Usuário não localizado pelo login informado.');
    }
    
    return usuario;
  }

  async loadByCpf(cpf: string): Promise<Usuario> {
    if (!cpf) {
      throw new Error('Informe o CPF do usuário!');
    }
    
    const usuario = await this.repository.loadByCpf(cpf);

    if (!usuario) {
      throw new Error('Usuário não localizado pelo CPF informado.');
    }
    
    return usuario;
  }

  async loadByEmail(email: string): Promise<Usuario> {
    if (!email) {
      throw new Error('Informe o e-mail do usuário!');
    }
    
    const usuario = await this.repository.loadByEmail(email);

    if (!usuario) {
      throw new Error('Usuário não localizado pelo e-mail informado.');
    }
    
    return usuario;
  }

  async update(usuario_id: string, data: Partial<IUsuariosDTO>): Promise<Usuario> {
    if (!usuario_id) {
        throw new Error('Informe o ID do usuário a ser atualizado!');
    }

    if (!data.cpf) {
      throw new Error('Digite o CPF!');
    }
    if (!data.nome_usuario) {
      throw new Error('Digite o nome do usuário!');
    }
    if (!data.email) {
      throw new Error('Digite o email do usuário!');
    }
    if (!data.login) {
      throw new Error('Digite o login do usuário!');
    }
    if (!data.senha) {
      throw new Error('Digite a senha!');
    }
    
    const usuarioExists = await this.repository.loadById(usuario_id);

    if (!usuarioExists) {
      throw new Error('Usuário não localizado para o ID informado.');
    }
    
    if (data.login) {
      const loginInUse = await this.repository.loadByLogin(data.login);
      if (loginInUse && loginInUse.usuario_id !== usuario_id) {
        throw new Error('O login informado já está em uso por outro usuário.');
      }
    }
    
    if (data.email) {
      const emailInUse = await this.repository.loadByEmail(data.email);
      if (emailInUse && emailInUse.usuario_id !== usuario_id) {
        throw new Error('O email informado já está em uso por outro usuário.');
      }
    }

    if (data.cpf) {
      const cpfInUse = await this.repository.loadByCpf(data.cpf);
      if (cpfInUse && cpfInUse.usuario_id !== usuario_id) {
        throw new Error('O CPF informado já está em uso por outro usuário.');
      }
    }

    let dataToUpdate = { ...data };
    
    if (dataToUpdate.senha) {
      const custoProcessamento  = 10;
      const senhaHashed = await hash(data.senha, custoProcessamento); 
      dataToUpdate.senha = senhaHashed;
  }

    const result = await this.repository.update(usuario_id, dataToUpdate);

    return result;
  }
}