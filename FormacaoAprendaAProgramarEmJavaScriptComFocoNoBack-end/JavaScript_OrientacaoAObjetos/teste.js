class User {
    _role = 'oi';

    set role(tipoRole) {
        if (tipoRole !== 'admin') {
        tipoRole = 'estudante'
        }
        this._role = tipoRole
    }

    get role() {
        return this._role
    }

    constructor(nome) {
        this._nome = nome;
    }
}

// criar o usuário
let novoUser = new User('Rodrigo');

// modificar o role
novoUser._role = 'admini'; 
console.log(novoUser.role);