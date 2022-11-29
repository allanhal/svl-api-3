const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://fs01:fs01@svl-db.z1oqycz.mongodb.net/svl');

let db = mongoose.connection;

module.exports = db