const arrayVazio = [];
const arrayNaoVazio = [1, 2, 3];

console.log(Boolean(arrayVazio)); // Saída: true - Mesmo sendo um array vazio, é "truthy"
console.log(Boolean(arrayNaoVazio)); // Saída: true - Um array com elementos também é "truthy"
