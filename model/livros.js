const mongoose = require('mongoose')

// Criar o esquema da entidade no mongo


const livroSchema = new mongoose.Schema({
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref:'autores', required: true},
    editora: {type: String, required: true},
    numeroPag: {type: Number}
})


// Se a collectiion não tiver sido criada, ela será criada automaticamente
const livros = mongoose.model('livros', livroSchema)

module.exports = livros