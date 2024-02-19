const BooksGalacticCenter = require('../../models/models.galacticCenter/books.galacticCenter.model');

const getBooksGalacticCenter = async (req, res) => {
  try {
    const allBooksGalacticCenter = await BooksGalacticCenter.find();
    return res.status(200).json(allBooksGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookGalacticCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookGalacticCenter = await BooksGalacticCenter.findById(id);
    return res.status(200).json(oneBookGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookGalacticCenter = async (req, res) => {
  try {
    const newBookGalacticCenter = new BooksGalacticCenter(req.body);
    const createdBookGalacticCenter = await newBookGalacticCenter.save();
    return res.status(201).json(createdBookGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookGalacticCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksGalacticCenter = new BooksGalacticCenter(req.body);
    putvs._id = id;
    const updateBooksGalacticCenter = await BooksGalacticCenter.findByIdAndUpdate(id, putBooksGalacticCenter, {
      new: true,
    });
    if (!updateBooksGalacticCenter) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookGalacticCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookGalacticCenter = await BooksGalacticCenter.findByIdAndDelete(id);
    if (!deleteBookGalacticCenter) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksGalacticCenter, getOneBookGalacticCenter, postBookGalacticCenter, putBookGalacticCenter, deleteBookGalacticCenter };
