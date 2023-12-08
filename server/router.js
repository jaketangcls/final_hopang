const express = require("express");
const router = express.Router();

const Book = require('./model/book');

router.get('/', async (req, res, next) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).send("Book not found");
        res.json(book);
    } catch (err) {
        next(err);
    }
});


router.post('/', async (req, res, next) => {
    console.log('Received book data:', req.body);
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        console.error('Error saving book:', err);
        res.status(500).json({ error: err.message });
    }
});


router.put('/:id', async (req, res, next) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!book) return res.status(404).send("Book not found");
        res.json(book);
    } catch (err) {
        next(err);
    }
});


router.delete('/:id', async (req, res, next) => {
    try {
        const book = await Book.findByIdAndRemove(req.params.id);
        if (!book) return res.status(404).send("Book not found");
        res.json({ message: "success" });
    } catch (err) {
        next(err);
    }
});



module.exports = router;

