
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
    });
});
router.post('/deletar', (req, res) =>{
    var id = req.body.id;
    Tarefa.destroy({
        where: {
            id: id
        }
    }).then(()=>{
      res.redirect('/');
    });
});

router.get('/edit/:id', (req, res) =>{
  var id = req.params.id;
  Tarefa.findByPk(id).then((tarefa)=>{
    res.render('edit', {tarefa: tarefa});
  });
}
);

router.post('/update', (req, res) =>{
  var id = req.body.id;
  var descricao = req.body.descricao;
  Tarefa.update({
    descricao: descricao
  },{
    where: {
      id: id
    }
  }).then(()=>{
    res.redirect('/');
  });
});

router.get('/page/:num', (req, res) =>{
  var page = req.params.num;
  var offset = 0;
  if(isNaN(page) || page < 1){
  offset = 0;
  }else{
  offset = (parseInt(page) - 1) * 3;
  }
  Tarefa.findAndCountAll({
    limit: 3,
    offset: offset,
    order: [
      ['id', 'DESC']
    ]
  }).then(tarefas =>{
    var next;
    if(offset + 3 < tarefas.count){
      next = false;
    }else{
      next = true;
    }
    var result = {
      page: parseInt(page),
      next: next,
      tarefas: tarefas
    }
    Tarefa.findAll().then(tarefas =>{
      res.render('page', {result: result, tarefas: tarefas});
    });
  });

});




 module.exports = router