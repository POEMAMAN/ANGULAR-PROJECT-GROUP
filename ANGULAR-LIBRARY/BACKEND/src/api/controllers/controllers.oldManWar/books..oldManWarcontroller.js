const BooksOldManWar = require('../../models/models.oldManWar/books.oldManWar.model');
OldManWar
const getBooksOldManWar = async (req, res) => {
  try {
    const allBooksOldManWar = await BooksOldManWar.find();
    return res.status(200).json(allBooksOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookOldManWar = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookOldManWar = await BooksOldManWar.findById(id);
    return res.status(200).json(oneBookOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookOldManWar = async (req, res) => {
  try {
    const newBookOldManWar = new BooksOldManWar(req.body);
    const createdBookOldManWar = await newBookOldManWar.save();
    return res.status(201).json(createdBookOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookOldManWar = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksOldManWar = new BooksOldManWar(req.body);
    putvs._id = id;
    const updateBooksOldManWar = await BooksOldManWar.findByIdAndUpdate(id, putBooksOldManWar, {
      new: true,
    });
    if (!updateBooksOldManWar) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookOldManWar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookOldManWar = await BooksOldManWar.findByIdAndDelete(id);
    if (!deleteBookOldManWar) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksOldManWar, getOneBookOldManWar, postBookOldManWar, putBookOldManWar, deleteBookOldManWar };
