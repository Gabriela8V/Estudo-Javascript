/*
estrutura de backend, onde iremos selecionar,
cadastrar, atualizar e deletar dados sobre os
clientes, ou seja, criaremos um crud 
CRUD
      C -> Create:Quando cria-se dados no banco
      R -> Read:Quando lemos dados no banco
      U -> Update:Quanto atualizamos dados no banco
      D -> Delete:Quando apagamos dados do banco
      
      Vamos usar os verbos:GET,Post,PUT,DELETE, onde
      GET -> Read
      POST -> Create
      PUT -> Update
      DELETE -> Delete
      
      */
    //  importação do modulo express
    const express = require('express');

    // importação do modulo mangoose
    const mongoose = require('mongoose');

    // importação do modulo de requimento
    const cors = require('cors');

     
    // criação do app refente ao express
    const app = express();

    // preparar p servidor para receber json
    app.use(express.json());    

    // use do cors para o servidor para receber json
    app.use(cors());

/* caminho do banco de dados mongoDB
  mongodb+srv://gabriela:<password>@cluster0.702zl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority */
   
 const urldb = "mongodb+srv://gabriela:gabi0518@cluster0.702zl.mongodb.net/bancodedados?retryWrites=true&w=majority"

mongoose.connect(urldb,{useNewUrlParser:true,useUnifiedTopology:true});

 /*
 Defição do esquema de dados da tabala 
 Schema
 */

 const tabela = mongoose.Schema({
     nome:{type:String,require},
     email:{type:String,require},
     telefone:{type:String,require},
     cidades:{type:String,require},
 });


const Cliente = mongoose.model("tbcliente",tabela);


// definição de uma rota padrao
    const default_route = "/api/clientes";

    // rota para listar os  clientes com endponti listar 
    app.get(`${default_route}/listar`,(req, res)=>{
        Cliente.find().then((dados)=>{
            
            res.status(200).send({output:dados});
        })
        .catch((erro)=>
         res.status(500).send({output:`Erro interno ao processar a consulta -> ${erro}`}));
        

    });

    // rota para cadastrar os clientes com endponti cadastrar
    app.post(`${default_route}/cadastrar`,(req, res)=>{
        
        const cli = new Cliente(req.body);
        cli.save().then((dados)=>{
            res.status(201).send({output:`Cadastro realizado`,paylod:dados}); 
        })

        .catch((erro) => console.error(`Erro ao tentar cadastrar: ${erro}`));
        
        
        
        
    
    });
    // rota para atualizar os clientes com endponti atualizar
    // passagem de argumentos pela url com o id do cliente
    app.put(`${default_route}/atualizar/:id`,(req, res)=>{
        
        Cliente.findByIdAndUpdate(req.params.id,req.body,{new:true},(erro,dados)=>{
            if(erro){
             return res.status(500).send({output:`Não atualizou -> ${erro}`});
            }
            res.status(204).send({output:`Dados atualizados`});
        })
         
    });
// rota para apagar cliente com endponti delete
app.delete(`${default_route}/apagar/:id`,(req, res)=>{
    Cliente.findByIdAndDelete(req.params.id, (erro,dados)=>{
        if(erro){
            return res.status(500).send({output:`Erro ao tentar apagar -> ${erro}`});
        }
        res.status(204).send({output:`apagar`});
    });
});
    // definir a porta de comunicação do servidor
    app.listen(5000,()=>console.log("Servidor on-line em http://localhost:5000"));