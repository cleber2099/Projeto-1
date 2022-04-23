
const express = require('express');
const router = express.Router();
const Tarefa = require('./tarefa');

router.post('/salvar', (req, res) => {
  var descricao = req.body.descricao;
  console.log(descricao);
  Tarefa.create({
    descricao: descricao
  }).then(() => {
    res.redirect('/');
  });
});
router.post('/deletar', (req, res) => {
  var id = req.body.id;
  Tarefa.destroy({
    where: {
      id: id
    }
  }).then(() => {
    res.redirect('/');
  });
});

router.get('/edit/:id', (req, res) => {
  var id = req.params.id;
  Tarefa.findByPk(id).then((tarefa) => {
    res.render('edit', { tarefa: tarefa });
  });
}
);

router.post('/update', (req, res) => {
  var id = req.body.id;
  var descricao = req.body.descricao;
  Tarefa.update({
    descricao: descricao
  }, {
    where: {
      id: id
    }
  }).then(() => {
    res.redirect('/');
  });
});

router.get('/page/:num', async (req, res) => {
  const page = req.params.num;
  const offset = (isNaN(page) || page < 1) ? 0 : (parseInt(page) - 1) * 3;

  const tarefas = await Tarefa.findAndCountAll({
    limit: 3,
    offset: offset,
    order: [
      ['id', 'DESC']
    ]
  });
  
  const next = !(offset + 3 < tarefas.count);
  const result = {
    page: parseInt(page),
    next,
    tarefas
  };
  return res.json(result);

});




module.exports = router