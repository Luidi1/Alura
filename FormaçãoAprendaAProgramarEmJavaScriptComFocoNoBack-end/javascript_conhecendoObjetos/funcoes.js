const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'Javascript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    media: 7.5,
    estaAprovado: function(mediaBase){
        return this.media >= mediaBase ? true : false
    }
    // estaAprovado: (mediaBase) => this.media >= mediaBase ? true : false // Não usar arrow function em objetos
    
}

// console.log(); //O console.log() é uma função dentro de um objeto. O console é o objeto e a função é o log()
console.log(estudante.estaAprovado(7));