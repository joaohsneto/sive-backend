import { Responsavel } from '@prisma/client';
import { IResponsaveisDTO } from '@/modules/cadastros/responsaveis/dtos/IResponsaveis.dto';
import { IResponsaveisRepository } from '@/modules/cadastros/responsaveis/repository/implementations/IResponsaveis.repository';

export class ResponsaveisUsecase {
  constructor(
      private readonly repository: IResponsaveisRepository
    ) {}
  
  async create(data: IResponsaveisDTO): Promise<Responsavel> {
    if (!data.cpf) {
      throw new Error('Digite o CPF do Responsável!');
    }
    if (!data.nome) {
      throw new Error('Digite o nome do Responsável!');
    }
    if (!data.email) {
      throw new Error('Digite o email do Responsável!');
    }

    const cpfExists = await this.repository.loadByCpf(data.cpf);
    if (cpfExists) {
      throw new Error('O CPF informado já está cadastrado no sistema.');
    }

    const emailExists = await this.repository.loadByEmail(data.email);
    if (emailExists) {
      throw new Error('O E-mail informado já está cadastrado no sistema.');
    }

    return await this.repository.create({
      ...data
    })
  }

  async delete(responsavel_id: string): Promise<void> {
    if (!responsavel_id) {
        throw new Error('Informe o ID do Responsável a ser excluído!');
    }
    
    const usuarioExists = await this.repository.loadById(responsavel_id);

    if (!usuarioExists) {
      throw new Error('404: Não foram localizados registros de Responsável para este identificador.'); 
    }
    
    await this.repository.delete(responsavel_id);
  }

  async load(): Promise<Responsavel[]> {
    return this.repository.load();
  }
    
  async loadById(responsavel_id: string): Promise<Responsavel> {
    if (!responsavel_id) {
        throw new Error('Informe o ID do Responsável!');
    }
      
    const usuario = await this.repository.loadById(responsavel_id);

    if (!usuario) {
      throw new Error('Responsável não localizado.');
    }
    
    return usuario;
  }

  async loadByCpf(cpf: string): Promise<Responsavel> {
      if (!cpf) {
        throw new Error('Informe o CPF do Responsável!');
      }
      
      const usuario = await this.repository.loadByCpf(cpf);
  
      if (!usuario) {
        throw new Error('Responsável não localizado pelo CPF informado.');
      }
      
      return usuario;
    }

  async loadByEmail(email: string): Promise<Responsavel> {
    if (!email) {
      throw new Error('Informe o e-mail do Responsável!');
    }
    
    const usuario = await this.repository.loadByEmail(email);

    if (!usuario) {
      throw new Error('Responsável não localizado pelo e-mail informado.');
    }
    
    return usuario;
  }

  async update(responsavel_id: string, data: Partial<IResponsaveisDTO>): Promise<Responsavel> {
    if (!responsavel_id) {
        throw new Error('Informe o ID do Responsável a ser atualizado!');
    }
    if (!data.cpf) {
      throw new Error('Digite o CPF Responsável!');
    }
    if (!data.nome) {
      throw new Error('Digite o nome do Responsável!');
    }
    if (!data.email) {
      throw new Error('Digite o email do Responsável!');
    }

    const usuarioExists = await this.repository.loadById(responsavel_id);

    if (!usuarioExists) {
      throw new Error('Responsável não localizado para o ID informado.');
    }

    if (data.cpf) {
      const cpfInUse = await this.repository.loadByCpf(data.cpf);
      if (cpfInUse && cpfInUse.responsavel_id !== responsavel_id) {
        throw new Error('O CPF informado já está em uso por outro responsável.');
      }
    }
    
    if (data.email) {
      const emailInUse = await this.repository.loadByEmail(data.email);
      if (emailInUse && emailInUse.responsavel_id !== responsavel_id) {
        throw new Error('O email informado já está em uso por outro responsável.');
      }
    }

    let dataToUpdate = { ...data };

    return await this.repository.update(responsavel_id, dataToUpdate);
  }
}
