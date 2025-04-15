let frutas = ["Maça", "Banana", "Laranja"];

let numeros = [1, 2, 3, 4, 5];
let misto = ["Texto", 10, true];

console.log(frutas);
// console.log(frutas.length);
// // console.log(frutas[2]);

// // Ultimo item da lista
// console.log(frutas[frutas.length - 1]);

// console.log(numeros);
// console.log(misto);



// Metodos de arrays:
// Push()


// Adicionar "Pera" no final da lista frutas.

frutas.push("Pera");

console.log(frutas);



// Pop()
// Remove o ultimo item da lista de frutas
frutas.pop();
console.log(frutas);


// Shift()
// Remove o primeiro item da lista de frutas
frutas.shift();

console.log(frutas);


// Unshift
// Adiciona um item no começo da lista de frutas

frutas.unshift("Maça mordida");
console.log(frutas);



// Slice()
// Pega uma parte do array

let frutas2 = frutas.slice(0, 2)
console.log(frutas2);

let frutas3 = frutas.slice(1, 4);
console.log(frutas3);




// Join()
// Transforma o array em um string

let frutasString = frutas.join(" -> ");
console.log(frutasString);



// Reverse()
// Inverte a ordem do array

let frutasReverse = frutas.reverse();
console.log(frutasReverse);


// Concat
// Concatena dois array

const frutasDoces = ["Melancia", "Manga", "Abacaxi"];
const frutasSalgadas = ["Limão", "Tomate", "Cebola"];

const frutasMisturadas = frutasDoces.concat(frutasSalgadas);

console.log(frutasMisturadas);