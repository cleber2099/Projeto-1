
const express = require('express');
const router = express.Router();
const Tarefa = require('./tarefa');




router.post('/salvar', (req, res) =>{
    var descricao = req.body.descricao;
    if (descricao != null && descricao != ""){
        Tarefa.create({
            descricao: descricao
        }).then(()=>{
            res.redirect('/');
        });
    }
});




 module.exports = router;