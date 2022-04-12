/*
Script para solicitação de cor ao
usuario.Quando o usuario digitar a cor
fundo body. Caso o usuario digite uma 
cor não listada, mudaremos a cor de 
fundo para uma pré estabelecida e será
exibida uma mensagem ao usuario
 */ 
var cor = prompt("Digite: \n\n" +
                   "1 - preto"+
                   "\n2 - amarelo"+
                   "\n3 - Vermelho"+
                   "\n4 - azul"+
                   "\n5 - laranja"); 
if(cor ==1){
    document.body.style.backgroundColor="black";
}
else if(cor ==2){
    document.body.style.backgroundColor="yellow";
}
else if(cor ==3){
    document.body.style.backgroundColor="red";
}
else if(cor ==4){
    document.body.style.backgroundColor="blue";
}
else if(cor ==5){
    document.body.style.backgroundColor="orange";
}
else{
    document.body.style.backgroundColor="teal";
    alert("Você digitou uma opção inexistente");

}
