/* 1- Pergunte ao usuário qual é o dia da semana. 
Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
Caso contrário, mostre "Boa semana!".*/
let diaSemana = prompt('Digite o dia da semana:');

if(diaSemana.toLowerCase() == 'sabado' || diaSemana.toLowerCase() == 'domingo'){
    alert('Bom fim de semana!');
}
else{
    alert('Boa semana!'); 
}

/*Verifique se um número digitado pelo usuário é positivo ou negativo. 
Mostre um alerta informando.*/
let numeroUsuario = prompt('Digite um número: ');

if(numeroUsuario > 0){
    alert(`O número digitado: ${numeroUsuario} é positivo.`);
}
else{
    if(numeroUsuario < 0){
        alert(`O número digitado: ${numeroUsuario} é negativo.`);
    }
    else{
        alert(`O número digitado: ${numeroUsuario} é neutro.`); 
    }
}

/*Crie um sistema de pontuação para um jogo. 
Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
Caso contrário, mostre "Tente novamente para ganhar.".*/
let pontuacao = 99;

if(pontuacao >= 100){
    alert('Parabéns, você venceu!');
}
else{
    alert('Tente de novo para ganhar.');
}

/*Crie uma mensagem que informa o usuário sobre o saldo da conta, 
usando uma template string para incluir o valor do saldo.*/
let saldoConta = 45000;
alert(`O seu saldo é: R$${saldoConta}`);

/*Peça ao usuário para inserir seu nome usando prompt. 
Em seguida, mostre um alerta de boas-vindas usando esse nome.*/
let nomeUsuario = prompt('Digite seu nome: ');
alert('Seja bem vindo ' + nomeUsuario + '!');

