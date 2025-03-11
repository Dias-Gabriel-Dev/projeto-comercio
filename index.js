import Produto from "./Classes-produtos/Produto.js";
import Admin from "./Classes-usuarios/Admin.js";
import Operador from "./Classes-usuarios/Operador.js";
import Cliente from "./Classes-usuarios/Cliente.js";
import Usuario from "./Classes-usuarios/Usuario.js";

const produtos = [];

const admin = new Admin('Gabriel Dias, gabriel@exemplo.com');

admin.adicionarProduto('Camiseta', 30.99, 10, produtos);
admin.adicionarProduto('Blusa de Moleton', 109.99, 10, produtos);
admin.adicionarProduto('Calça Jeans', 80.99, 10, produtos);
admin.adicionarProduto('Bermuda de Sarja', 60.99, 10, produtos);
admin.adicionarProduto('Boné', 20.99, 10, produtos);
admin.adicionarProduto('Tênis', 159.99, 10, produtos);

console.log('Produtos cadastrados:');
produtos.forEach(produto => {
    console.log(produto.exibirInfos());
});
