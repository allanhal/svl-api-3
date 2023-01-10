const express = require('express')
const LivroController = require('../controllers/livro.controller')

const routes = express.Router()

routes
    .get('/livros', LivroController.findAllBooks)
    .get('/livro/:id', LivroController.findById)
    .post('/livro', LivroController.createBook)
    .delete('/livro/:id', LivroController.deleteBook)
    .put('/livro/:id', LivroController.updateBook)
    
module.exports = routes
