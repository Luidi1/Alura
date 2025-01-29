//1. Criar uma função que exibe "Olá, mundo!" no console.

function funcaoExibirMensagem(){
    console.log('Olá mundo!');
}

let exibirMensagemNaTela = funcaoExibirMensagem();

//2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function funcaoExibirMensagemComNome(nome){
    console.log(`Olá ${nome}!`);
}

exibirMensagemNaTela = funcaoExibirMensagemComNome('John');

//3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function funcaoRetornarDobroDoNumero(numero){
    return numero * 2;
}

let dobroDoNumero = funcaoRetornarDobroDoNumero(5);
console.log(dobroDoNumero);

//4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function funcaoRetornarMediaAritmetica(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3
}

mediaAritmetica = funcaoRetornarMediaAritmetica(2, 4, 6);
console.log(mediaAritmetica);

//5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function funcaoRetornaMaiorNumero(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}

let maiorNumero = funcaoRetornaMaiorNumero(5, 6);
console.log(maiorNumero);

/*6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação 
desse número por ele mesmo*/
function funcaoRetornaQuadradoDoNumero(numero1){
    return numero1 * numero1;
}

let quadradoDoNumero = funcaoRetornaQuadradoDoNumero(10);
console.log(quadradoDoNumero);

