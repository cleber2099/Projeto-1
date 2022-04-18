
const express = require('express');
const router = express.Router();
const Tarefa = require('./tarefa');

router.post('/salvar', (req, res) =>{
    var descricao = req.body.descricao;
    console.log(descricao);
    Tarefa.create({
        descricao: descricao
    }).then(()=>{
        res.redirect('/');
    }).catch((error)=>{
        res.send(error);
    });
 
});




 module.exports = router