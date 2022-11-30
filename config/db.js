const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://fs01:fs01@svl-db.z1oqycz.mongodb.net/svl');

let db = mongoose.connection;

//exporta a conexão com o Mongo (Atlas ou local , dependendo da string de conexão)
//
module.exports = db
