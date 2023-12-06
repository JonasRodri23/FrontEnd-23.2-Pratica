export interface Aluno {
  matricula: number;
  nome: string;
  idade: number;
  curso: string;
  rendimentoEscolar: {
    [disciplina: string]: number;
  };
}
