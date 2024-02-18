const BooksUplift = require('../../models/models.uplift/books.uplift.model');

const getBooksUplift = async (req, res) => {
  try {
    const allBooksUplift = await BooksUplift.find();
    return res.status(200).json(allBooksUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookUplift = await BooksUplift.findById(id);
    return res.status(200).json(oneBookUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookUplift = async (req, res) => {
  try {
    const newBookUplift = new BooksUplift(req.body);
    const createdBookUplift = await newBookUplift.save();
    return res.status(201).json(createdBookUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksUplift = new BooksUplift(req.body);
    putvs._id = id;
    const updateBooksUplift = await BooksUplift.findByIdAndUpdate(id, putBooksUplift, {
      new: true,
    });
    if (!updateBooksUplift) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookUplift = await BooksUplift.findByIdAndDelete(id);
    if (!deleteBookUplift) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksUplift, getOneBookUplift, postBookUplift, putBookUplift, deleteBookUplift };
