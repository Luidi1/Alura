// let nota = 9.75;
// let novaNota = nota;

// nota = 10;

// console.log(nota);
// console.log(novaNota);

const notas = [7, 7, 8, 9];
// const novaListaNotas = notas; // passando referência do array notas à novaListaNotas
// const novaListaNotas = [...notas]; // spread operator: passando o valor(clonando) do array notas à novaListaNotas
const novaListaNotas = [...notas, 10];

// novaListaNotas.push(10);


console.log(notas);
console.log(novaListaNotas);