//parâmetros/argumentos
//retorno

// function exibeNomeEstudante(){
//     console.log('Caroline');
// }

// function exibeNomeEstudante(nome){
//     console.log(nome);
// }

// exibeNomeEstudante('Caroline');
// exibeNomeEstudante('Ana');

// function exibeInfosEstudante(nome, nota){
//     console.log(`o nome é ${nome} e a nota é ${nota}`);
// }

// exibeInfosEstudante('Caroline', 10);
// exibeInfosEstudante('Ana', 7);

function exibeInfosEstudante(nome, nota){
    return `o nome é ${nome} e a nota é ${nota}`;
}

console.log(exibeInfosEstudante('Caroline', 10));
console.log(exibeInfosEstudante('Ana', 7));
