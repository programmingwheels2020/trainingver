const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    language: { type: String, required: true },
    price: { type: Number, required: true }
})

module.exports = mongoose.model('Book', bookSchema)
