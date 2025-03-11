class Produto {
    #nome;
    #preco;
    #quantidade;

    constructor(nome, preco, quantidade) {
        this.#nome = nome;
        this.#preco = preco;
        this.#quantidade = quantidade;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
    }

    set preco(novoPreco) {
        if (typeof novoPreco !== 'number' || novoPreco <= 0 ) {
            throw new Error('O preço deve ser um número positivo!')
        }
        this.#preco = novoPreco
    }

    set quantidade(novaQuantidade) {
        if (!Number.isInteger(novaQuantidade) || novaQuantidade < 0) {
            throw new Error('A quantidade deve ser um número inteiro e não negativo!')
        }
        this.#quantidade = novaQuantidade;
    }

    get nome() {
        return this.#nome;
    }

    exibirInfos() {
        return `Produto: ${this.#nome}, Preço: ${this.#preco.toFixed(2)}, Quantidade: ${this.#quantidade}`;
    }
};

export default Produto;

