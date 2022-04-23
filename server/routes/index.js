const { Router } = require('express');
const Tarefa = require('../controllers/Tarefa');

const route = Router();

route.get('/edit/:id', async (req, res) => {
    var id = req.params;
    const tarefa = await Tarefa.getById({ id });
    return res.render('edit', { tarefa });
});

route.get('/', async (req, res) => {
    const data = await Tarefa.paginate(req.query || { page: 0 });
    return res.render('index', { data });
});

module.exports.indexRoute = route;