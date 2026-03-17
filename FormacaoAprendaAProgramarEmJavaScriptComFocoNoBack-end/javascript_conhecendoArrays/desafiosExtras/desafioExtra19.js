// const numeros = [10, 20, 30, 40, 50];
// const numeroProcurado = 30;

// console.log(`Posição do número ${numeroProcurado}: ${numeros.indexOf(39)}`);

const numeros = [10, 20, 30, 40, 50];
const numeroProcurado = 30;
let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === numeroProcurado) {
    posicao = i;
    break;
  }
}

console.log(`Posição do número ${numeroProcurado}: ${posicao}`);