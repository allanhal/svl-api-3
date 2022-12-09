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
        livros.findById(id, (err, livros) => {
            //tratar o erro ou o sucesso, baseado na função de callback utilizando os parametros err, livros
            
            if (err) {
                res.status(404).send({message: 'Livro não encontrado', 
                erro: err.message })
            } else {
                res.status(200).json(livros)
            }
        })
    }

    static createBook = (req, res) => {
        let livro = new livros(req.body)

        livro.save(err => {
                if (err) {
                    res.status(500).send(
                        {message: 'Erro ao salvar o livro', 
                        error: err.message
                    })
                } else {
                    res.status(201).send(livro.toJSON())
                }
        })
    }
}

module.exports = LivroController