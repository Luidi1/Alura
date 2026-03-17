const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'Javascrpt'
}

estudante.telefone = '551199999999'; // Criando nova propriedade(chave)
// estudante['telefone'] = '551199999999'; // Outra maneira de criar nova propriedade(chave)
console.log(estudante.telefone);
// console.log(estudante['telefone']); // Outra maneira de exibir no console
console.log(estudante);

estudante.nome = 'José Souza'; // Alterando propriedade(chave) existente
console.log(estudante);