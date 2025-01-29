const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor){
    // return lista.find((estudante) => estudante[chave] === valor);
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
// const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'xxxx');
console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '7919437785');
console.log(telefoneEstudante);