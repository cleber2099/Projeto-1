
const express = require('express');
const router = express.Router();
const Tarefa = require('./tarefa');




router.post('/salvar', (req, res) =>{
    var descricao = req.body;
 console.log(descricao);
  res.send("ds" );
});




 module.exports = router;