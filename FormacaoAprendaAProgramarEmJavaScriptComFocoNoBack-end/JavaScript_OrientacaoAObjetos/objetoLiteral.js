const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

// user.exibirInfos();

const exibir = user.exibirInfos; //a variável exibir perde contexto com o objeto user.
// const exibir = function(){ // essa forma é como a linha de cima está sendo interpretada.
//     console.log(this.nome, this.email);
// } 
// exibir();

const exibirNome = exibir.bind(user); //bind faz o vinculo entre a const exibir com o objeto user.
exibirNome();
