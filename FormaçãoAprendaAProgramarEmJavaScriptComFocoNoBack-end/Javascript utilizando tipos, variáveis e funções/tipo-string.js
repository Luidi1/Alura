const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "Nosso lema é 'estudar bastante!'";
const citacao = `Ju diz: "Nosso lema é 'estudar bastante!'"`;

console.log(cumprimento);
console.log(citacao);

//console.log('a estudante chama ' + estudante);

//template string
console.log(`a estudante chama ${estudante}`);

const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);

