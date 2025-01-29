// const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

// for(num of numeros){
//     if(num % 2 === 0){
//         console.log(num);
//     }
// }

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
console.log('Números pares do array:');

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}