export interface Atendimento {
  id: number;
  imovelId: number;
  imovelTitulo: string;
  nomeUsuario: string;
  emailUsuario: string;
  mensagem: string;
  resposta?: string;
}