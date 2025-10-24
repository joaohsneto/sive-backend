export interface IEncaminhamentosDTO {
  criancas_adolescentes_id: string;
  tipo_encaminhamento: string;
  tipo_encaminhamento_outro: string | null;
  necessario: number;
  efetuado: number;
}