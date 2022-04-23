const { Router } = require('express');
const { indexRoute } = require('.');
const { tarefasRoute } = require('./tarefas');

const router = Router()
.use('/tarefas', tarefasRoute)
.use('/', indexRoute)

module.exports = router;