import { CriancasAdolescentes } from '@prisma/client';
import { ICriancasAdolescentesDTO } from '@/modules/cadastros/criancas_adolescentes/dtos/ICriancasAdolescentes.dto';
import { ICriancasAdolescentesRepository } from '@/modules/cadastros/criancas_adolescentes/repository/implementations/ICriancasAdolescentes.repository';

export class CriancasAdolescentesUsecase {
  constructor(
      private readonly repository: ICriancasAdolescentesRepository
    ) {}
  
  async create(data: ICriancasAdolescentesDTO): Promise<CriancasAdolescentes> {
    if (!data.cpf) {
      throw new Error('Digite o CPF!');
    }
    if (!data.nome) {
      throw new Error('Digite o nome da Criança/Adolescente!');
    }
    if (!data.email) {
      throw new Error('Digite o email da Criança/Adolescente!');
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

  async delete(criancas_adolescentes_id: string): Promise<void> {
    if (!criancas_adolescentes_id) {
        throw new Error('Informe o ID da Criança/Adolescente a ser excluído!');
    }
    
    const usuarioExists = await this.repository.loadById(criancas_adolescentes_id);

    if (!usuarioExists) {
      throw new Error('404: Não foram localizados registros de Usuário para este identificador.'); 
    }
    
    await this.repository.delete(criancas_adolescentes_id);
  }

  async load(): Promise<CriancasAdolescentes[]> {
    return this.repository.load();
  }
    
  async loadById(criancas_adolescentes_id: string): Promise<CriancasAdolescentes> {
    if (!criancas_adolescentes_id) {
        throw new Error('Informe o ID da Criança/Adolescente!');
    }
      
    const usuario = await this.repository.loadById(criancas_adolescentes_id);

    if (!usuario) {
      throw new Error('Criança/Adolescente não localizado.');
    }
    
    return usuario;
  }

  async loadByCpf(cpf: string): Promise<CriancasAdolescentes> {
      if (!cpf) {
        throw new Error('Informe o CPF da Criança/Adolescente!');
      }
      
      const usuario = await this.repository.loadByCpf(cpf);
  
      if (!usuario) {
        throw new Error('Criança/Adolescente não localizado pelo CPF informado.');
      }
      
      return usuario;
    }

  async loadByEmail(email: string): Promise<CriancasAdolescentes> {
    if (!email) {
      throw new Error('Informe o e-mail da Criança/Adolescente!');
    }
    
    const usuario = await this.repository.loadByEmail(email);

    if (!usuario) {
      throw new Error('Criança/Adolescente não localizado pelo e-mail informado.');
    }
    
    return usuario;
  }

  async update(criancas_adolescentes_id: string, data: Partial<ICriancasAdolescentesDTO>): Promise<CriancasAdolescentes> {
    if (!criancas_adolescentes_id) {
        throw new Error('Informe o ID da Criança/Adolescente a ser atualizado!');
    }
    if (!data.cpf) {
      throw new Error('Digite o CPF!');
    }
    if (!data.nome) {
      throw new Error('Digite o nome da Criança/Adolescente!');
    }
    if (!data.email) {
      throw new Error('Digite o email da Criança/Adolescente!');
    }

    const usuarioExists = await this.repository.loadById(criancas_adolescentes_id);

    if (!usuarioExists) {
      throw new Error('Criança/Adolescente não localizado para o ID informado.');
    }

    if (data.cpf) {
      const cpfInUse = await this.repository.loadByCpf(data.cpf);
      if (cpfInUse && cpfInUse.criancas_adolescentes_id !== criancas_adolescentes_id) {
        throw new Error('O CPF informado já está em uso por outra Criança/Adolescente.');
      }
    }
    
    if (data.email) {
      const emailInUse = await this.repository.loadByEmail(data.email);
      if (emailInUse && emailInUse.criancas_adolescentes_id !== criancas_adolescentes_id) {
        throw new Error('O email informado já está em uso por outra Criança/Adolescente.');
      }
    }

    let dataToUpdate = { ...data };

    return await this.repository.update(criancas_adolescentes_id, dataToUpdate);
  }
}
