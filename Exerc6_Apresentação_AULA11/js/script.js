/*const nomeLoja = "Minha Loja Online";

let produto1 = "Smartphone";
let preco1 = 1500
let emPromocao = true;

console.log(`Produto: ${produto1}`);

function calcularDesconto(preco,desconto){
    return preco - (preco*desconto);
}

let precoFinal;
if(emPromocao){
    precoFinal = calcularDesconto(preco1,0.1);
}else{
        precoFinal = preco1;

}

console.log(`Preço Final: R$`);

const produtos = [
    {nome:"Smartphone",preco:1500},
    {nome:"Camiseta",preco:80},
    {nome:"Relógio",preco:250}
];

for(let i=0;i<produtos.length;i++){
    console.log(`Produto: ${produtos[i].nome} - R$ ${produtos[i].preco}`);

}

const exibirProduto = (produto) => {
    return `Produto: ${produto.nome} - R$ ${produto.preco}`;

};

console.log(exibirProduto(produtos[2]));*/

const produtos = [
    {
        id:1,
        nome:"Carrinho controle remoto",
        preco: 340.00,
        categoria:"Brinquedos",
        imagem:"carrinho.jpg"
    },
    {
        id:2,
        nome:"Martelo",
        preco: 40.00,
        categoria:"Ferramentas",
        imagem:"martelo.jpg"
    },
    {
        id:3,
        nome:"Smartphone",
        preco: 1340.00,
        categoria:"Eletrônicos",
        imagem:"Smartphone.jpg"
    },
    {
        id:4,
        nome:"Camisa",
        preco: 60.00,
        categoria:"Roupas",
        imagem:"camisa.jpg"
    },
    {
        id:5,
        nome:"Relógio",
        preco: 690.00,
        categoria:"Acessórios",
        imagem:"relogio.jpg"
    }

];

function listaProdutos(lista){
    lista.forEach(produto => {
        const{id,nome,preco,categoria,imagem } = produto
        console.log(`Id:${id} 
            Nome:${nome}
            Preço:${preco}
            Categoria:${categoria}
            Imagem:${categoria}`);
    });
}

listaProdutos (produtos);

function filtrarPorCategoria(categoria){
    return produtos.filter(produto => produto.categoria === categoria);

}



const produtosNovos = [
    ...produtos17,
    {
        id:1,
        nome:"Notebook",
        preco: 7340.00,
        categoria:"Brinquedos",
        imagem:"notebook.jpg"
    },

];