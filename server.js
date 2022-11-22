const express = require('express')

const app = express()

const port = 5000

app.get('/', function (req, res) {
    res.send('Servidor Subiu');
});


app.listen(port, function () {
    console.log('Servidor rodando');
});

