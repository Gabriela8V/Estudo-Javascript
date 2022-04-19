// Verificar qual a página que ira abrir este arquivo 
// javascript
//pega a url completa do navegador
var pagina = window.location;
console.log(pagina);
// Vamos quebrara url onde houver barra
pagina = pagina.href.split("/");
console.log(pagina);
// pegar o último elemento do arry página criando 
// acima
pagina = pagina[pagina.length-1];
console.log(pagina);
if(pagina == "home.html"){
    document.body.style.backgroundColor="rgb(150,150,150)";
    /*
    acessar a caixa(input) chamada numeros, capturar
    esses numeros e utilizar a função maior para 
    encontrar o maior valor entre eles. 
    */ 

    // referenciar um elementovde input da tela home
    const txtN = document.getElementById("txtN");
    // aplicar um evento chamaso onblur,ou seja ,
    // quando a caixa perder o foco
    txtN.onblur = function () {
        
   
        // vamos capiturara 
        // txtN, ou seja, os numeros dentros
        // desta caixa e alocar em array
        var valores = txtN.value.split(",");
        alert(maior(valores));
    }

}
if(pagina == "formulario.html"){
    document.body.style.backgroundColor="rgb(120,200,150)";
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone")

    nome.onblur = () => {
        verificarVazio(nome);
    }

    email.onblur = () => {
        verificarVazio(email);
    }

    cpf.onblur = () => {
        verificarVazio(cpf);
    }

    telefone.onblur = () => {
        verificarVazio(telefone);
    }


}


