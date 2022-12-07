const express = require('express')
const LivroController = require('../controllers/Livro.Controller')


const routes = express.Router()


routes
    .get('/books', LivroController.findAllBooks)
    .get('/book/:id', LivroController.findById)
    
module.exports = routes