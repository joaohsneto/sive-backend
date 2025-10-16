import { IFichaSiveRepository } from '@/modules/ficha-sive/repository/implementations/IFichaSive.repository';
import { IFichaSiveRequestDTO, IFichaSiveReturnDTO } from '@/modules/ficha-sive/dtos/IFichaSive.dto';

export class FichaSiveUsecase {
    private readonly fichaSiveRepository: IFichaSiveRepository;

    constructor(fichaSiveRepository: IFichaSiveRepository) {
        this.fichaSiveRepository = fichaSiveRepository;
    }

    async gerarFicha(
        { criancas_adolescentes_id, responsavel_id }: IFichaSiveRequestDTO 
    ): Promise<IFichaSiveReturnDTO> { 

        const dados = await this.fichaSiveRepository.gerarFicha(
            criancas_adolescentes_id,
            responsavel_id,
        );
        if (!dados.criancaAdolescente) {
            throw new Error("Criança/Adolescente não encontrada.");
        }
        if (!dados.responsavel) {
            throw new Error("Responsável não encontrado.");
        }

        return dados; 
    }
}