const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const nomesAtualizados = new Set(nomes);

// nomesAtualizados.push("Juliana"); Erro: Set() não é um array para acessar métodos de array como push().

// const listaNomesAtualizados = [...nomesAtualizados]; //Transformando o Set() em um array.
const listaNomesAtualizados = [... new Set(nomes)]; //Criando um Set() com o array nomes e depois criando um array com Set()

// console.log(nomesAtualizados);
console.log(listaNomesAtualizados);