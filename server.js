const express = require('express')
const app = express()

const { Model } = require('mongoose')
const db = require('./config/db')
const livros = require('./model/livros')

const routes = require('./routes/index.js')
routes(app)



db.on('error', console.log.bind(console, 'Erro ao conectar com o banco de dados'))
db.once('open', () => {
    console.log('Conexão realizada com sucesso')
})





const port = 5000

app.get('/', function (req, res) {
    res.send('Servidor Subiu');
});

// app.get('/livros', function (req, res) {
//     livros.find((error, livros) => {
//         res.status(200).json(livros)
//     })
// });


app.listen(port, function () {
    console.log('Servidor rodando');
});

// const db = require('./config/db')

// db.on('error', console.log.bind('Erro ao conectar com o banco!'))

// db.once('open' , ()=> { 
//     console.log('Conexão realizada com sucesso')
// })

//netstat -na | find "8080"