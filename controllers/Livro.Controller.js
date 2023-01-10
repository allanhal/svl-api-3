const livros = require('../model/livros')
// const livros = require('../model/livros')

//O que é uma classe? 
class LivroController {

    // O que é o static? é uma forma de declarar um variável
    static findAllBooks = (req, res) => {
        livros.find()
        .populate('autores')
        .exec((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static findById = (req, res) => {
        const id = req.params.id
        livros.findById(id, (err, livros) => {
            //tratar o erro ou o sucesso, baseado na função de callback utilizando os parametros err, livros

            if (err) {
                res.status(404).send({
                    message: 'Livro não encontrado',
                    erro: err.message
                })
            } else {
                res.status(200).json(livros)
            }npm
        })
    }

    static createBook = (req, res) => {
        let livro = new livros(req.body)

        livro.save(err => {
            if (err) {
                res.status(500).send(
                    {
                        message: 'Erro ao salvar o livro',
                        error: err.message
                    })
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static deleteBook = (req, res) => {
        const id = req.params.id
        livros.findByIdAndDelete(id, (err) => {
            //tratar o erro ou o sucesso, baseado na função de callback utilizando os parametros err, livros

            if (err) {
                console.log('1')
                res.status(404).send({
                    message: 'Livro não encontrado',
                    erro: err.message
                })
            } else {
                console.log('2')
                res.status(200).send({message: 'O livro foi deletado'})
            }
        })
    }
        static updateBook = (req, res) => {
            let id = req.params.id

            livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
                if (err) {
                    res.status(404).send({
                        message: 'Não foi possível atualizar.'
                    })
                } else {
                    res.status(200).send({message:'O livro foi atualizado'})
                }
            })
        }
}

module.exports = LivroController

