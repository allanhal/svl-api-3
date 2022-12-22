const mongoose = require('mongoose')


const autorSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String, required: true},
    nacionalidade: {type: String, required: true},
    idade: {type: Number}
})

const autor = mongoose.model('autores', autorSchema)

module.exports = autor