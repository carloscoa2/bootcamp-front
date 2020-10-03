function soma(a: number, b: number): number {
  return a + b;
}

// soma('a', 5);
soma(2, 5);

function cadastrarAluno(aluno: Aluno) {}

cadastrarAluno({ matricula: 123, nome: 'oi', dataNascimento: '30/09/1991' });

interface Aluno {
  matricula: number;
  nome: string;
  dataNascimento?: string; //opcional
}

let aluno2 = {
  matricula: 132,
  nome: 'João',
  dataNascimento: '01/01/2000',
  turma: 3,
};

cadastrarAluno(aluno2);

class Estudante {
  matricula: number;
  nome: string;

  salvar() {}
}

let estudante1 = new Estudante();

estudante1.salvar();
estudante1.chama();
