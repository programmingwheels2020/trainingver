const Book = require("../model/book.model");
const mongoose = require("mongoose")

const getBooks = async (req, res, next) => {
    try {
        let result = await Book.find({})
        res.json({ data: result })
    } catch (err) {
        res.status(500).json({ "errMsg": err.message })
    }

}

const getBooksById = async (req, res, next) => {
    try {
        let result = await Book.findById(req.params.id)
        res.json({ data: result })
    } catch (err) {
        res.status(500).json({ "errMsg": err.message })
    }

}

const getBooksByAuthor = async (req, res, next) => {
    try {
        let result = await Book.find({ author: req.params.author })
        res.json({ data: result })
    } catch (err) {
        res.status(500).json({ "errMsg": err.message })
    }

}
const createBooks = async (req, res, next) => {

    try {
        const book = new Book({
            name: req.body.name,
            author: req.body.author,
            language: req.body.language,
            price: req.body.price
        });
        await book.save();
        res.json({ "message": "Book Added successfully" })
    } catch (err) {
        res.status(500).json({ "errMsg": err.message })
    }

}

const updateBook = async (req, res, next) => {
    try {
        console.log(req.params.id);
        let book = await Book.findById(req.params.id)
        console.log(book);
        if (!book) {
            return res.json({ "errMsg": "Invalid Book id sent" })
        } else {
            book.name = req.body.name;
            book.author = req.body.author;
            book.language = req.body.language;
            book.price = req.body.price
            await book.save();
            res.json({ "message": "Book Updated successfully" })
        }

    } catch (err) {
        res.status(500).json({ "errMsg": err.message })
    }
}

const deleteBook = async (req, res, next) => {
    try {
        console.log(req.params.id);
        await Book.findByIdAndRemove(req.params.id)
        res.json({ message: "Book Deleted Successfully" })

    } catch (err) {
        res.status(500).json({ "errMsg": err.message })
    }
}

module.exports = {
    getBooks,
    createBooks,
    getBooksById,
    getBooksByAuthor,
    updateBook,
    deleteBook
}
