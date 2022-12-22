const autores = require('../model/autor')
// const livros = require('../model/livros')

//O que é uma classe? 
class AutorController {

    // O que é o static?
    static findAllAuthors = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static findById = (req, res) => {
        const id = req.params.id
        autores.findById(id, (err, autores) => {
            //tratar o erro ou o sucesso, baseado na função de callback utilizando os parametros err, livros

            if (err) {
                res.status(404).send({
                    message: 'Autor não encontrado',
                    erro: err.message
                })
            } else {
                res.status(200).json(autores)
            }
        })
    }

    static createAutor = (req, res) => {
        let autor = new autores(req.body)

        autor.save(err => {
            if (err) {
                res.status(500).send(
                    {
                        message: 'Erro ao salvar o autor',
                        error: err.message
                    })
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static deleteAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndDelete(id, (err) => {
            //tratar o erro ou o sucesso, baseado na função de callback utilizando os parametros err, livros

            if (err) {
                console.log('1')
                res.status(404).send({
                    message: 'Autor não encontrado',
                    erro: err.message
                })
            } else {
                console.log('2')
                res.status(200).send({message: 'O autor foi deletado'})
            }
        })
    }
        static updateAutor = (req, res) => {
            let id = req.params.id

            autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
                if (err) {
                    res.status(404).send({
                        message: 'Não foi possível atualizar.'
                    })
                } else {
                    res.status(200).send({message:'O autor foi atualizado'})
                }
            })
        }
}

module.exports = AutorController

