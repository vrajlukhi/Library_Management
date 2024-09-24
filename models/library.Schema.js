const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    availability: { type: Boolean, default: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    borrowedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
});

const lModel = mongoose.model('Book', bookSchema);

module.exports = lModel