const express = require('express')
const LivroController = require('../controllers/Livro.Controller')

const routes = express.Router()

routes
    .get('/livros', LivroController.findAllBooks)
    .get('/livro/:id', LivroController.findById)
    .post('/livro', LivroController.createBook)
    .delete('livro/:id', LivroController.deleteBook)
    
module.exports = routes