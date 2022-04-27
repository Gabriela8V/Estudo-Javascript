// importação do módulo de express 
const express = require('express');
 
// realizar a aplicaçao da função do express com
// em uma variavel de aplicativo 
const app = express();
// permitir com que o servidor receba 
// dados no formato json
app.get("/", (req, res) => {
    res.send("Olá,seja bem vindo!");
});
// Criação de uma lista de clientes
const clientes = [
    {
        id:12,
        nome:"Helena",
        idade:13,
    },
    {
        id:45,
        nome:"Rafael",
        idade:21,
    },
];



// rota para clientes
app.get("/api/cliente/listar", (req, res) => {
    res.status(200).send({ontnput:clientes});
});

// Cadastar novos clientes
app.get("/api/cliente/cadastrar", (req, res) => {
    clientes.push(req.body);
    res.status(201).send({output:`Clientes cadastrados`});
})








app.listen(5000,()=> console.log("http://localhost:500"));