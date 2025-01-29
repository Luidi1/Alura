function verificaMaioridade(idade) {
    if (idade >= 18) {
        return 'É maior de idade.';
    } else {
        return 'É menor de idade.';
    }
}

console.log(verificaMaioridade(25)); // É maior de idade.
console.log(verificaMaioridade(15)); // É menor de idade.