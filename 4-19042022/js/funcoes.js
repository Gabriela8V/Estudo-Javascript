// encontra o maior valor em um array
function maior(numeros){
    //vamos transformar os numeros em 
    //numeros. Reallizando uma parse
    //para interio
    for(var c = 0 ; c < numeros.length ; c++){
        numeros[c] = parseInt(numeros[c]);
    }
    var m = numeros[0]
    for(var i = 1 ; i < numeros.length ; i++){
        if(numeros[i] > m ){
            m = numeros[i]
        }
    }
    return m;
}
// encontra o menor valor em um array
function menor (numeros){
    for(var i = 1 ; numeros.length ; i++){
        if(numeros[i] < m){
            m = numeros[i]
        }
    }
    return m;
}
// verificar se um campo esta vazio e alertar o usuario
function verificarVazio(controle){
     if(controle.value == "" || controle.value == null){
        alert("O campo " + controle.id+" não pode ser vazio");
        controle.focus();
    }
 }
function dataHora() {
    return new Date().toLocaleDateString()+
    " - "+
    new Date().toLocaleTimeString()
}