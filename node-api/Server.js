const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

//Inicializando o App
const app = express();

//Inicializando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser:true, useUnifiedTopology: true }
);
requireDir('./src/models');

const Product = mongoose.model("Product");

//Criando rotas
app.get('/', (req, res) => {
    Product.create({
        title: "ReactJs",
        description: "Build powerful sites with React",
        url: "http://github.com/facebook/react-native"
    });
    return res.send('Hello nodemon');
});

app.listen(3333);