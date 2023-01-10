const express = require('express')
const AutorController = require('../controllers/autor.controller')

const routes = express.Router()


routes
    .get('/autores', AutorController.findAllAuthors)
    .get('/autor/:id', AutorController.findById)
    .post('/autor', AutorController.createAutor)
    .delete('/autor/:id', AutorController.deleteAutor)
    .put('/autor/:id', AutorController.updateAutor)

    module.exports = routes
