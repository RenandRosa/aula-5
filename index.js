/*
* primeiro programa em JavaScript
* Renan da Rosa
*/

console.log("olá mundo");
//prompt("Qual é o seu nome?");
//const
const VariavelA = 100;
const VariavelB = VariavelA + 50;
const VariavelC = VariavelA / VariavelB;
console.log(VariavelA);
console.log(VariavelB);
console.log(VariavelC);

//variavel let
/*let numero = 5;
console.log(numero);
numero = 120 + 5;
console.log(numero);

//concatenar textos
let nome = "Renan";
let sobrenome = "Rosa";
let idade = "15";
console.log("Olá", nome, sobrenome, "você tem", idade, "anos");
*/
//booleanas
const variavelFalsa = false;
const variavelVerdadeira = true;

console.log("Variável verdadeira: " + variavelVerdadeira);
console.log("Variavel falsa: " + variavelFalsa);

//Exercicio 1
/*
let nome = "Renan";
let sobrenome = "Rosa";
let idade = 15;
let estudante = true;
console.log("Olá", nome, sobrenome, "você tem", idade, "anos", "você é", estudante);


//typeof
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estudante);

let banana;
console.log(typeof banana);
banana = "fruta";
console.log(typeof banana);

const vazio = null;
console.log(typeof vazio);


//PROMPT

let valor = prompt("Seu nome");
console.log(valor);
*/

//Exercicio 2
let nome = prompt("Seu nome");
console.log(nome);

let idade = prompt("Sua idade");
console.log(idade);
