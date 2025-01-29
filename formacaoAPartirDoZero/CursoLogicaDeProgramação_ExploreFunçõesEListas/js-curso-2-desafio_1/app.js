let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarCliqueBotaoConsole(){
    console.log('O botão foi clicado');
}

function verificarCliqueBotaoAlert(){
    alert('Eu amo JS');
}

function verificarCliqueBotaoPrompt(){
    let nomeCidadeBrasil = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${nomeCidadeBrasil} e lembrei de você`)
}

function verificarCliqueBotaoSoma(){
    let numero1 = parseInt(prompt('Digite um número'));
    let numero2 = parseInt(prompt('Digite outro número'));
    let soma = numero1 + numero2;
    alert(`A soma de ${numero1} com ${numero2} é ${soma}`);
}