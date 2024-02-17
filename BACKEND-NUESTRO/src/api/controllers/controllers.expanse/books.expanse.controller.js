const BooksExpanse = require('../../models/models.expanse/books.expanse.model');

const getBooksExpanse = async (req, res) => {
  try {
    const allBooksExpanse = await BooksExpanse.find();
    return res.status(200).json(allBooksExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookExpanse = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookExpanse = await BooksExpanse.findById(id);
    return res.status(200).json(oneBookExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookExpanse = async (req, res) => {
  try {
    const newBookExpanse = new BooksExpanse(req.body);
    const createdBookExpanse = await newBookExpanse.save();
    return res.status(201).json(createdBookExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookExpanse = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksExpanse = new BooksExpanse(req.body);
    putvs._id = id;
    const updateBooksExpanse = await BookExpanse.findByIdAndUpdate(id, putBooksExpanse, {
      new: true,
    });
    if (!updateBooksExpanse) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookExpanse = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookExpanse = await BooksExpanse.findByIdAndDelete(id);
    if (!deleteBookExpanse) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksExpanse, getOneBookExpanse, postBookExpanse, putBookExpanse, deleteBookExpanse };
