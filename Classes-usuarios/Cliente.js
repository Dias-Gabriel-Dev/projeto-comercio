import Usuario from "./Usuario.js";

class Cliente extends Usuario {
    constructor(nome, email) {
        super(nome, email);
    }

    comprarProduto(produto, quantidade) {
        if (produto.quantidade >= quantidade) {
            produto.quantidade -= quantidade;
            console.log(`Compra realizada: ${quantidade} unidades de ${produto.nome}.`);
            
        }
    }
}

export default Cliente;