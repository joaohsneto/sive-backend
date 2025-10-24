export interface ICriancasAdolescentesDTO {
  cpf: string;
  nome: string;
  filiacao_pai: string;
  filiacao_mae: string;
  idade_nascimento: string;
  com_quem_mora: string;
  endereco: string;
  ponto_referencia: string;
  telefone: string;
  email: string;
  contato: string;
  telefone_contato: string;
  registro_civil: string;
  sexo: string;
  comunidade_originarios: string;
  deficiencia: string;
  condicao_saude: string;
  programas_sociais: string;
  ocupacao_atividade: string;
  renda_familiar: string;
  tipo_imovel: string;
  situacao_trabalho: string;

  orgao_responsavel: string;
  orgao_responsavel_outro?: string;
  data_encaminhamento: string;

  motivacao_encaminhamento: string;
  motivacao_encaminhamento_outro?: string;

  descricao_atendimento: string;
  relato_espontaneo: string;

  Avaliacao_individual: string | null;
  Avaliacao_familiar: string | null;
  Avaliacao_domicilio: string | null;
  Escuta_especializada: string | null;
  Organ_cuidado_individual: string | null;
  Organ_cuidado_conjunto: string | null;
  Organ_cuidado_familia: string | null;

  agente_violador: string;
  status: string;
  tipo_acompanhamento: string;
  periodo_acompanhamento: string;

  motivo_encerramento: string;
  motivo_encerramento_outro?: string;
}