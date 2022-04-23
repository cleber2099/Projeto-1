require('dotenv').config();

const express = require("express");
const app = express();
const router = require('./server/routes/config');

// view engine
app.set('view engine', 'ejs');

//static
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//rotas
app.use(router);


app.listen(8080, () => {
    console.log("Servidor rodando na 8080")
})