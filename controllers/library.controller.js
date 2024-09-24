const lModel = require("../models/library.Schema");
const wrapAsyc = require("../utils/wrapAsyc");

const allBook = wrapAsyc(async (req, res) => {

    const Book = await lModel.find()
    res.json(Book)

})

const userBook = wrapAsyc(async (req, res) => {

    const Book = await lModel.find({ userID: req.body.userID })
    res.json(Book)

})

const singleBook = wrapAsyc(async (req, res) => {

    const Book = await lModel.findById(req.params.id).populate('userID');
    if (!Book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(Book);

});

const addBook = wrapAsyc(async (req, res) => {

    const Book = await lModel.create(req.body)
    res.json(Book)

})

const updateBook = wrapAsyc(async (req, res) => {

    let { id } = req.params
    const Book = await lModel.findByIdAndUpdate(id, req.body, { new: true })
    res.json(Book)

})

const deleteBook = wrapAsyc(async (req, res) => {

    let { id } = req.params
    const Book = await lModel.findByIdAndDelete(id)
    res.json("Delete succefully")

})

const borrow = wrapAsyc(async (req, res) => {
    const book = await lModel.findById(req.params.id);
    if (!book || !book.availability) {
        return res.status(400).json({ error: 'Book is not available' });
    }
    else {
        book.availability = false;
        book.borrowedBy = req.body.userID;
        await book.save();
        res.json({ message: 'Book borrowed successfully',book });
    }
})

const Return =wrapAsyc(async(req,res)=>{
    const book = await lModel.findById(req.params.id);
        if (!book || book.availability || !book.borrowedBy.equals(req.body.userID)) {
            return res.status(400).json({ error: 'Cannot return this book' });
        }
        else{
        book.availability = true;
        book.borrowedBy = null;
        await book.save();
        res.json({ message: 'Book returned successfully' });
        }
})

module.exports = { allBook, userBook, addBook, updateBook, deleteBook, singleBook,borrow,Return }