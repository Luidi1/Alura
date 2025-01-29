// function retornarMenorEMaiorValorNoArray(arr){
//     let menorNumero = arr[0], maiorNumero = arr[0];
//     for(valor of arr){
//         if(valor < menorNumero){
//             menorNumero = valor;
//         }
//         else if(valor > maiorNumero){
//             maiorNumero = valor;
//         }
//     }

//     console.log(`O menor número é ${menorNumero} e o maior número é ${maiorNumero}`);
    
// }

// retornarMenorEMaiorValorNoArray([1, 2, 3, 4, 5]);

const arrMenoresMaiores = [5, 37, 18, 59, 12, -5];

function imprimeMaiorEMenor(arr) {

  let maior = 0;
  let menor = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i]
    }
    if (arr[i] < menor) {
      menor = arr[i]
    }
  }
  return `o maior número é ${maior} e o menor número é ${menor}`;
}

console.log(imprimeMaiorEMenor(arrMenoresMaiores));