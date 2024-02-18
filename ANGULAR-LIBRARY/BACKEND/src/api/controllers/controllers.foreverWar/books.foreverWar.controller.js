const BooksForeverWar = require('../../models/models.foreverWar/books.foreverWar.model');

const getBooksForeverWar = async (req, res) => {
  try {
    const ForeverWar = await BooksForeverWar.find();
    return res.status(200).json(ForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookForeverWar = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookForeverWar = await BooksForeverWar.findById(id);
    return res.status(200).json(oneBookForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookForeverWar = async (req, res) => {
  try {
    const newBookForeverWar = new BooksForeverWar(req.body);
    const createdBookForeverWar = await newBookForeverWar.save();
    return res.status(201).json(createdBookForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookForeverWar = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksForeverWar = new BooksForeverWar(req.body);
    putvs._id = id;
    const updateBooksForeverWar = await BooksForeverWar.findByIdAndUpdate(id, putBooksForeverWar, {
      new: true,
    });
    if (!updateBooksForeverWar) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookForeverWar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookForeverWar = await BooksForeverWar.findByIdAndDelete(id);
    if (!deleteBookForeverWar) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksForeverWar, getOneBookForeverWar, postBookForeverWar, putBookForeverWar, deleteBookForeverWar };
