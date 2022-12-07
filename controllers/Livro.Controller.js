const livros = require('../model/livros')


//O que é uma classe? 
class LivroController {

    // O que é o static?
    static findAllBooks = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static findById = (req, res) => {
        const id = req.params.id
        livros.findById((err, livros) => {
            res.status(200).json(livros)
        })
    }
}

module.exports = LivroController