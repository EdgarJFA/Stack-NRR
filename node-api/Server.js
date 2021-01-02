const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

//Inicializando o App
const app = express();
app.use(express.json());

//Inicializando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser:true, useUnifiedTopology: true }
);
requireDir('./src/models');

//
app.use("/api", require("./src/routes"));

app.listen(3333);