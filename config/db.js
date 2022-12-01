const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://fs01:fs01@svl-db.lnj91aw.mongodb.net/svl');

let db = mongoose.connection;

//exporta a conexão com o Mongo (Atlas ou local , dependendo da string de conexão)
//
module.exports = db
