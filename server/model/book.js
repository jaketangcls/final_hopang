const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    Pages: {
        type: Number
    }
});

const book = mongoose.model("Books", BookSchema, "300370895-HoPang");

module.exports = book;