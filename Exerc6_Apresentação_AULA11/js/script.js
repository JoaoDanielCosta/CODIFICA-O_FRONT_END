const nomeLoja = "Minha Loja Online";

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

console.log(exibirProduto(produtos[2]));