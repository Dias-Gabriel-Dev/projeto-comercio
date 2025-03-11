import Usuario from "./Usuario.js";

class Operador extends Usuario {
    constructor(nome, email) {
        super(nome, email);
    }

    visualizarProdutos(produtos) {
        produtos.forEach(produto => {
           console.log(produto.exibirInfos());
        });
    }

    arualizarQuantidade(produto, novaQuantidade) {
        produto.quantidade = novaQuantidade; // Usando o set
        console.log(`Quantidade do produto ${produto.nome} atualizada para ${novaQuantidade}`);
        
    }
}

export default Operador;