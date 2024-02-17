const BooksDune = require('../../models/models.dune/books.dune.model');

const getBooksDune = async (req, res) => {
  try {
    const allBooksDune = await BooksDune.find();
    return res.status(200).json(allBooksDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookDune = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookDune = await BooksDune.findById(id);
    return res.status(200).json(oneBookDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookDune = async (req, res) => {
  try {
    const newBookDune = new BooksDune(req.body);
    const createdBookDune = await newBookDune.save();
    return res.status(201).json(createdBookDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookDune = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksDune = new BooksDune(req.body);
    putvs._id = id;
    const updateBooksDune = await BooksDune.findByIdAndUpdate(id, putBooksDune, {
      new: true,
    });
    if (!updateBooksDune) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookDune = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookDune = await BooksDune.findByIdAndDelete(id);
    if (!deleteBookDune) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksDune, getOneBookDune, postBookDune, putBookDune, deleteBookDune };
