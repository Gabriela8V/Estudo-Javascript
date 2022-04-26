function carregarCompras(){
    // fazer o carregamento da url com filmes
    // vamos usar o comando fetch  para localizar a
    // carregar o filmes e exibir em pagina html
    fetch("https://dribbble.com/shots/12493536-Sanses-Coffee-product-app-design/attachments/4101990?mode=media")
    .then((response)=>response.json())
    .then((dados)=>{
        console.log(dados);
        var saida = "<div id=compras>";
        dados.map((item,x)=>{
            saida+= `
                 <div>
                 <img src=${item.img_linki}>
                 <p class=voto>${item.vote_average}</p>
                 <h2>${item.title}</h2>
                 <p class=data> ${item.release_date}</p>
                 </div>
            `;
        })
        saida+="</div>";
        document.body.innerHTML =  saida;
    })


}