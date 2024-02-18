const BooksGauntW40K = require('../../models/models.GauntW40K/books.GauntW40K.model');

const getBooksGauntW40K = async (req, res) => {
  try {
    const allBooksGauntW40K = await BooksGauntW40K.find();
    return res.status(200).json(allBooksGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookGauntW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookGauntW40K = await BooksGauntW40K.findById(id);
    return res.status(200).json(oneBookGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookGauntW40K = async (req, res) => {
  try {
    const newBookGauntW40K = new BooksGauntW40K(req.body);
    const createdBookGauntW40K = await newBookGauntW40K.save();
    return res.status(201).json(createdBookGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookGauntW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksGauntW40K = new BooksGauntW40K(req.body);
    putvs._id = id;
    const updateBooksGauntW40K = await BooksGauntW40K.findByIdAndUpdate(id, putBooksGauntW40K, {
      new: true,
    });
    if (!updateBooksGauntW40K) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookGauntW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookGauntW40K = await BooksGauntW40K.findByIdAndDelete(id);
    if (!deleteBookGauntW40K) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksGauntW40K, getOneBookGauntW40K, postBookGauntW40K, putBookGauntW40K, deleteBookGauntW40K };
