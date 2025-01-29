const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'Javascrpt'
}

// estudante.nome //José Silva

function exibeInfoEstudante(objEstudante, infoEstudante){
    return objEstudante[infoEstudante];
}

/*No Javascrpt quando tentamos acessar uma propriedade(chave) que não existe, ele não nos dá um erro, em vez disso retorna
undefined*/
// console.log(estudante.pet);
// console.log(estudante['pet']);

console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));
