const express = require('express')
const db = require('./config/db')


db.on('error', console.log.bind(console, 'Erro ao conectar com o banco de dados'))
db.once('open', () => {
    console.log('Conexão realizada com sucesso')
})

const app = express()

const port = 5000

app.get('/', function (req, res) {
    res.send('Servidor Subiu');
});


app.listen(port, function () {
    console.log('Servidor rodando');
});

const db = require('./config/db')

db.on('error', console.log.bind('Erro ao conectar com o banco!'))

db.once('open' , ()=> { 
    console.log('Conexão realizada com sucesso')
})