// Objetos e coleções
// vamos criar uma coleção de nomes
var nomes = ["Paula", "Henrique", "Vanessa"];

// Usando
for(var i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

/*
outra forma de ler coleções é usando iteradores,
neste caso, você pode usar foreach ou map
*/
// nomes.forEach()...
// nomes.map()...
nomes.forEach(saida);

function saida(valor, indice) {
    console.log("Do forEach -> " + valor);
}

// variação do forEach com a função dento da estrutura
nomes.forEach(function(valor,indice){
    console.log(valor)
});

// variação do foreach com arrow function
nomes.forEach((valor,indice)=>{
    console.log("Arrow Fuction =>"+valor);
});

// ---------------------------map--------------------------------

nomes.map((valor,indice)=>{
    console.log("Posição :" +indice +" Nome: "+ valor);
});

// vamos criar um objeto chamado cliente
// para as definição dos dados do clientes é importante
// que estes fiquem entre chaves.
// estra estrutura é do tipo chave = valor

const endereco = {
    tipo: "Rua",
    logradouro: "Soldado Fernandes",
    numero: "17",
    complemento: "casa 3",
    bairro: "Jardim colonial"
}

const cliente = {
    id: 1,
    nome:"Paula de Oliveira",
    idade: 25,
    cpf:"22015478",
    endereco: endereco,
};
 
const prodCalca ={
    id: 1,
    nome: "Calça jeans",
    preco:"R$ 50,00",
};

const prodBlusa ={
    id: 2,
    nome: "Blusa de algodão",
    preco: "30,00",
};

const prodTenis ={
    id: 3,
    nome: "All Stars",
    preco: "120,00",
};


const pedido ={
    id:"5514",
    data:"20/04/2022",
    hora:"15:01",
    cliente:cliente,
    produtos:[prodCalca, prodBlusa, prodTenis],
    entrega: endereco
}

console.log("Saida do objeto cliente");
console.log(pedido);


const out = document.getElementById("output");
out.innerHTML += `id do pedido ${pedido.id}`;
out.innerHTML += `<br>Nome do Cliente: ${pedido.cliente.nome}`;

pedido.produtos.map((pr,ix)=>{
    out.innerHTML += `<br>Pedido do cliente : ${pr.nome}`
});
out.innerHTML += `<br>Entregar em :  ${pedido.entrega.logradouro} ` ;