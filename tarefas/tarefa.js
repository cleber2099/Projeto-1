const Sequelize = require("sequelize");
const connection = require("../database/database");

const Tarefa = connection.define('tarefas',{
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});
Tarefa.sync({force: true});
module.exports = Tarefa;
