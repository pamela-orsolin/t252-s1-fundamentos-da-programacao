type Estudante ={
    nome: string;
    cursoID:number;
    notas: number;
    mensagem: string;
}
const cursos = [
  { id: 1, nome: "Bacharelado em Ciência e Tecnologia"},
  { id: 2, nome: "BCH" },
  { id: 3, nome: "licenciatura"}
];
type Curso = {
  id: number;
  nome: string;
};


const estudante1: Estudante = {
  nome: "Alice",
  cursoId: 1,
  notas: [8, 7, 9],
  mensagem: "",
};

const estudante2: Estudante = {
  nome: "Bruno",
  cursoId: 2,
  notas: [6, 5, 7],
  mensagem: "",
};

const estudante3: Estudante = {
  nome: "Carla",
  cursoId: 3,
  notas: [4, 3, 5],
  mensagem: "",
};

const mediaEstudante = (a: number, b: number, c:number): number => {
  return (mediaEstudante ( a + b  + c / 3));
};

const estiloAprendizado = function (estudante: Estudante): string {
  const media = mediaEstudante(estudante);

  if (media >= 7) {
    return "Exploradora confiante.";
  } else if (media >= 5) {
    return "Brilha como aprendiz.";
  } else {
    return "Desbravando a programação.";
  }
};

// estou tendo que usar dois computadores emprestados (porque nao tenho um próprio) dependendo se estou na faculdade em santo andre
// ou em casa em são paulo, ambos dando problemas que eu fiquei as duas aulas inteiras falando com a luiza (uma diva muito paciente)
// e no final deu certo mas eu nao peguei o conteúdo e esse foi meu máximo meninas ;\