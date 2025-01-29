import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

 const novoUser = new User("Juliana", "j@j.com", "2024-01-01");
 console.log(novoUser.exibirInfos());
// console.log(novoUser.montaObjUser());
// novoUser.nome = "Julia"; //Aqui estamos usando o método especial set, mas quando o usamos, fazemos isso como se estivessemos
//...acessando uma propriedade.
// novoUser.nome = "";
// console.log(novoUser.nome);

// novoUser.nome = 'Márcia'; //Lembre que se a propriedade não existir dentro do objeto, ela é criada
// novoUser.#nome = 'Márcia'; //Não é possível acessar atributo privado
// console.log(novoUser.exibirInfos());
// console.log(novoUser.nome);

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.exibeNome());
// console.log(novoAdmin.nome); //Esse "nome" aparece com sendo uma propriedade mas na verdade ele é o método especial get
//quem está fora da classe User não sabe disso. Não sabe da implementação.

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01");
// console.log(novoAdmin.exibirInfos());

// const novaDocente = new Docente("Ana", "a@a.com", "2024-01-01");
// console.log(novaDocente.exibirInfos());

const dadosFicticios = User.exibirInfosGenericas('Cassio', 'c@c.com');
console.log(dadosFicticios);

