function somaElementosDoArray(arr) {
    return arr.reduce((acum, atual) => acum + atual, 0); // Soma os elementos do array
}
  
const listaNumeros = [1, 2, 3, 4, 5];
const somaTotal = somaElementosDoArray(listaNumeros);
console.log(somaTotal); // Saída: 15