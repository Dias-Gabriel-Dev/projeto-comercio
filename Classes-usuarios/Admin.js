import Usuario from "./Usuario.js";
import Produto from "../Classes-produtos/Produto.js";

class Admin extends Usuario {
    constructor(nome , email) {
        super(nome, email);
    }

    adicionarProduto(nome, preco, quantidade, produtos) {
        const novoProduto = new Produto(nome, preco, quantidade);
        produtos.push(novoProduto);
        console.log(`Produto ${novoProduto.nome}  adicionado com sucesso!`);
        }
    
    removerProduto(produto, produtos) {
        const index = produtos.indexOf(produto);
        if (index > -1) {
            produtos.splice(index, 1);
            console.log(`Produto ${produto.nome} removido com sucesso!`);
        } else {
            console.log(`Produto ${produto.nome} não encontrado.`);    
            }
        }
    }

export default Admin;