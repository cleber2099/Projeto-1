const { Router } = require('express');
const Tarefa = require('../controllers/Tarefa');

const route = Router();

route.post('/salvar', async (req, res) => {
    await Tarefa.create(req.body);
    return res.redirect('/')
});

route.delete('/:id', async (req, res) => {
    await Tarefa.delete(req.params);
    const data = await Tarefa.paginate(req.params);
    return res.render('index', { data });
});

route.get('/edit/:id', async (req, res) => {
    const tarefa = await Tarefa.getById(req.params);
    return res.render('edit', { tarefa });
});

route.post('/update', async (req, res) => {
    await Tarefa.edit(req.body)
    return res.redirect('/');
});

route.get('/pagination/:page', async (req, res) => {
    const data = await Tarefa.paginate(req.params);
    return res.render('index', { data });

});

module.exports.tarefasRoute = route;