// Definição do tipo
type Filmes = {
  titulo: string;
  nota: number;
}

type filmes = {
    titulo: string;
}

const nome: string = "vencedores";

// Lista de filmes
let filmes = [
  { titulo: "It a coisa", nota: 9 },
  { titulo: "Hora do mal", nota: 9 },
  { titulo: "Sorria", nota: 8 },
  { titulo: "Boneco do mal", nota: 9 },
  { titulo: "Annabelle", nota: 8 },
  { titulo: "Quando as luzes se apagam", nota: 7 },
  { titulo: "A chave mestra", nota: 8 },
  { titulo: "nao tenho mais ideia", nota: 9 }
];

// Função de comparação
function vencedor(filme1:Filmes , filme2:Filmes) {
  if (filme1.nota > filme2.nota) return filme1;
  if (filme2.nota > filme1.nota) return filme2;
  //empate
  else return filme1.titulo.localeCompare(filme2.titulo) < 0 ? filme1 : filme2;
}

// Primeira fase: primeiro x último
function primeiraFase(filmes) {
  let vencedores = [];
  for (let i = 0; i < filmes.length / 2; i++) {
    vencedores.push(vencedor(filmes[i], filmes[filmes.length - 1 - i]));
  }
  return vencedores;
}

// semifinais
function segundaFase(vencedores) {
  let semifinalistas = [];
  for (let i = 0; i < vencedores.length; i += 2) {
    semifinalistas.push(vencedor(vencedores[i], vencedores[i + 1]));
  }
  return semifinalistas;
}

// Final
function final(filmes) {
  let campeao = vencedor(filmes[0], filmes[1]);
  let vice = filmes[0] === campeao ? filmes[1] : filmes[0];
  return { campeao, vice };
}

// Execução do campeonato
let fase1 = primeiraFase(filmes);
let fase2 = segundaFase(fase1);
let resultado = final(fase2);

// Resultado final
console.log(`🏆 Campeão: ${resultado.campeao.titulo} Nota: ${resultado.campeao.nota}`);
console.log(`🥈 Vice-campeão: ${resultado.vice.titulo} Nota: ${resultado.vice.nota}`);
