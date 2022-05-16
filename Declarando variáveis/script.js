//var É mais solta, não recomendada a uso

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area)
//var area;

//let Permite trocar os valores,tem que declarar ela antes de ser utilizada

//let forma = "retângulo"
//let altura = 5;
//let comprimento = 7;
//let area;

//if (forma === "retângulo") {
//  area = altura * comprimento;
//} else {
//    area = (altura * comprimento) / 2;
//}

//console.log(area)

//const Valor sempre constante, não muda.. tem que ser declarado antes

const forma = "triangulo"
const altura = 5;
const comprimento = 7;
let area;

if (forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)

//Se o valor da variavel vai precisar mudar  'let', pra todos os utros casos usa 'const'