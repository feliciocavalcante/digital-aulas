// String (texto)
// ""
// ''
// ´´
console.log(typeof "Hello World");


// Number (números)
// 1
// 2
// 99999
console.log(typeof 1);


// Boolean (lógico)
// true
// false
console.log(typeof true);


// Object (objeto)
// { }

// Array (lista)
// [ ]




// Variaveis
// let
let idade = 20;
console.log(idade);
idade = 32;
console.log(idade)


// const
const nome = "Felicio";
console.log(nome)


// Estruturas condicionais
idade = 15;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade")
}



// Exercícios

// 1. Receba 3 notas de um aluno e calcule a média
const nota1 = 7;
const nota2 = 4;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado")
}



// 2. Crie uma calculadora que receba 2 numeros e retorne a soma
const numero1 = 10;
const numero2 = 20;

const soma = numero1 + numero2;
console.log(soma);


// 3. Faça um calculo de IMC
const peso = prompt("Insira seu peso em quilos");
const altura = prompt("Insira sua altura em metros");

const imc = peso / (altura * altura);
console.log(imc);

if (imc <= 18.5) {
    alert("Abaixo do peso")
} else if (imc < 25) {
    alert("Peso adequado")
} else if (imc < 30) {
    alert("sobrepeso")
} else if (imc > 30) {
    alert("obesidade")
}
