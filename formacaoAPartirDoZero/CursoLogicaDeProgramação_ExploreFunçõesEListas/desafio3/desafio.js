/*1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.*/

function calcularIMC(alturaEmMetros, peso){
    return peso / (alturaEmMetros * alturaEmMetros);
}

let alturaEmMetros = 1.75;
let peso = 70;
console.log(`O IMC de altura = ${alturaEmMetros} e peso = ${peso} é ${calcularIMC(alturaEmMetros, peso).toFixed(2)}`);

//2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularValorFatorial(numero){
    let valorFatorial = 1;
    while(numero > 1){
        valorFatorial *= numero;
        numero--;
    }
    return valorFatorial;
}

let numero = 5;
console.log(`O fatorial de ${numero} é ${calcularValorFatorial(5)}`);

/*3. Crie uma função que converte um valor em dólar, passado como parâmetro, 
e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.*/

function converterDolarParaReal(valorEmDolar){
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

let valorEmDolar = 50;
console.log(`A conversão de ${valorEmDolar} para reais é ${converterDolarParaReal(valorEmDolar)}`);

/*4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
utilizando altura e largura que serão dadas como parâmetro.*/

function calcularAreaPerimetroSalaRetangular(altura, largura){
    let area = largura * altura;
    let perimetro = 2 * (largura + altura);

    console.log(`A área da sala retangular é ${area}, o perímetro é ${perimetro}.`);
}

let altura = 3;
let largura = 5;
calcularAreaPerimetroSalaRetangular(altura, largura);

/*5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.*/

function calcularAreaPerimetroSalaCircular(raio){
    let area = 3.14 * (raio * raio);
    let perimetro = 2 * 3.14 * raio;

    console.log(`A área da sala circular é ${area.toFixed(2)}, o perímetro é ${perimetro.toFixed(2)}.`);
}

let raio = 4;
calcularAreaPerimetroSalaCircular(raio);

//6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function mostrarTabelaDeUmNumero(numero){
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} X ${i} = ${numero * i}`);
    }
}

let numeroTabuada = 5;
mostrarTabelaDeUmNumero(numeroTabuada);










