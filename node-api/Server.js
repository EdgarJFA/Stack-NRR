const express = require('express');
const mongoose = require('mongoose');

//Inicializando o App
const app = express();

//Inicializando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser:true, useUnifiedTopology: true });

//Criando rotas
app.get('/', (req, res) => {
    res.send('Hello nodemon');
});

app.listen(3333);