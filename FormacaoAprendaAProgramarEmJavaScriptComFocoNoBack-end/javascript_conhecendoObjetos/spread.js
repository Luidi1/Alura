const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
}

function exibirTelefones(telefone1, telefone2){
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

// exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

// const dadosEnvio = {
//     destinatario: estudante.nome,
//     endereco: estudante.enderecos[0]
// }

// const dadosEnvio = {
//     destinatario: estudante.nome,
//     rua: estudante.enderecos[0].rua,
//     numero: estudante.enderecos[0].numero
// }

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);