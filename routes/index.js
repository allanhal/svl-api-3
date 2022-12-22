const express = require('express')
const livros = require('./livrosRoutes')
const autores = require('./autoresRoutes')

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