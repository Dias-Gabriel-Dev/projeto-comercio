class Usuario {
    #nome;
    #email;

    constructor(nome, email) {
        this.#nome = nome;
        this.#email = email;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    exibirInfos() {
        return `Nome: ${this.#nome}, Email: ${this.#email}`
    }
}
export default Usuario;