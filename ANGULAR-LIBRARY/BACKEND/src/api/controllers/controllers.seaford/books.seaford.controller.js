const BooksSeaford = require('../../models/models.seaford/books.seaford.model');

const getBooksSeaford = async (req, res) => {
  try {
    const allBooksSeaford = await BooksSeaford.find();
    return res.status(200).json(allBooksSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookSeaford = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookSeaford = await BooksSeaford.findById(id);
    return res.status(200).json(oneBookSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookSeaford = async (req, res) => {
  try {
    const newBookSeaford = new BooksSeaford(req.body);
    const createdBookSeaford = await newBookSeaford.save();
    return res.status(201).json(createdBookSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookSeaford = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksSeaford = new BooksSeaford(req.body);
    putvs._id = id;
    const updateBooksSeaford = await BooksSeaford.findByIdAndUpdate(id, putBooksSeaford, {
      new: true,
    });
    if (!updateBooksSeaford) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookSeaford = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookSeaford = await BooksSeaford.findByIdAndDelete(id);
    if (!deleteBookSeaford) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksSeaford, getOneBookSeaford, postBookSeaford, putBookSeaford, deleteBookSeaford };
