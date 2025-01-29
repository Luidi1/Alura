// const listaNumeros = [10, 11, 12, 10, 11, 12, 10, 11, 12, 10, 11, 12];

// function soma(arr) {
//   let total = 0
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// console.log(soma(listaNumeros));

const listaNumeros = [10, 11, 12, 10, 11, 12, 10, 11, 12, 10, 11, 12];

function soma(arr) {
  let total = 0
  for(numero of arr){
    total += numero
  }
  return total;
}

console.log(soma(listaNumeros));