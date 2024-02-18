const BooksUltraW40K = require('../../models/models.UltraW40K/books.UltraW40K.model');

const getBooksUltraW40K = async (req, res) => {
  try {
    const allBooksUltraW40K = await BooksUltraW40K.find();
    return res.status(200).json(allBooksUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookUltraW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookUltraW40K = await BooksUltraW40K.findById(id);
    return res.status(200).json(oneBookUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookUltraW40K = async (req, res) => {
  try {
    const newBookUltraW40K = new BooksUltraW40K(req.body);
    const createdBookUltraW40K = await newBookUltraW40K.save();
    return res.status(201).json(createdBookUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookUltraW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksUltraW40K = new BooksUltraW40K(req.body);
    putvs._id = id;
    const updateBooksUltraW40K = await BooksUltraW40K.findByIdAndUpdate(id, putBooksUltraW40K, {
      new: true,
    });
    if (!updateBooksUltraW40K) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookUltraW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookUltraW40K = await BooksUltraW40K.findByIdAndDelete(id);
    if (!deleteBookUltraW40K) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksUltraW40K, getOneBookUltraW40K, postBookUltraW40K, putBookUltraW40K, deleteBookUltraW40K };
