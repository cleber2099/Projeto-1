const Sequelize = require('sequelize');
const connection = new Sequelize('tarefa','root','2099',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});
module.exports = connection;