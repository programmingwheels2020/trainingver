const express = require("express");

const route = express.Router();
const { getBooks, createBooks, getBooksById, getBooksByAuthor, updateBook, deleteBook } = require("../controllers/book.controller")

route.get("/books", getBooks)
route.get("/books/:id", getBooksById)
route.get("/books/author/:author", getBooksByAuthor)
route.post("/books", createBooks)
route.put("/books/:id", updateBook)
route.delete("/books/:id", deleteBook)

module.exports = route;

