const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    let DB_URI = process.env.DB_URI || "mongodb+srv://jake:jake@cluster0.dbbdbut.mongodb.net/BookList?retryWrites=true&w=majority";
    await mongoose.connect( DB_URI, {useNewUrlParser: true, useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

  } catch (error) {
    console.error('Failed to connect MongoDB:', error);

    throw new Error(error);
  }
};

module.exports = connectDB;


