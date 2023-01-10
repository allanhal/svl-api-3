const express = require('express')
const app = express()
const db = require('./config/db')
const routes = require('./routes/index')
routes(app)
db.on('error', console.log.bind(console, 'Erro ao conectar com o banco de dados'))
db.once('open', () => {
    console.log('Conexão realizada com sucesso')
})
const port = 10000
app.get('/', function (req, res) {
    res.send('Servidor Subiu');
});
app.listen(port, function () {
    console.log('Servidor rodando');
});
