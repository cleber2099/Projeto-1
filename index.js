const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Tarefa = require("./tarefas/tarefa");
const tarefaController = require('./tarefas/tarefaController');
const router = express.Router();


//databsae
connection.authenticate().then(()=>{
    console.log("cenectou ao bd");
}).catch((error)=>{
    console.log(error);
});
// view engine
app.set('view engine','ejs');
//static
app.use(express.static('public'));
//body-parser
app.use(express.json());


//rotas
app.use(router);
app.use("/",tarefaController);

app.get("/", (req,res)=>{
 res.render("index");
    
})

app.listen(8080,()=>{
    console.log("Servidor rodando na 8080")
})