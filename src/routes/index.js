const express = require('express')
const livros = require('./livro.route')
const autores = require('./autor.route')

const routes = (app) => {
    app.use(
        express.urlencoded({
            extended: true
        })
    )
    app.use(
        express.json(), livros, autores)
}

module.exports = routes
