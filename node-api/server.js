const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o mongoose
const app = express();
app.use(express.json())
app.use(cors())

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/node-api',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
requireDir('./src/models');

// Criando as rotas
app.use('/api', require('./src/routes'))

app.listen(3001);