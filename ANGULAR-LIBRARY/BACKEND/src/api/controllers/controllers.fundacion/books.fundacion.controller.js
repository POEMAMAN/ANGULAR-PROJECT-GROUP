const BooksFundacion = require('../../models/models.fundacion/books.fundacion.model');

const getBooksFundacion = async (req, res) => {
  try {
    const allBooksFundacion = await BooksFundacion.find();
    return res.status(200).json(allBooksFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneBookFundacion = async (req, res) => {
  try {
    const { id } = req.params;
    const oneBookFundacion = await BooksFundacion.findById(id);
    return res.status(200).json(oneBookFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postBookFundacion = async (req, res) => {
  try {
    const newBookFundacion = new BooksFundacion(req.body);
    const createdBookFundacion = await newBookFundacion.save();
    return res.status(201).json(createdBookFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putBookFundacion = async (req, res) => {
  try {
    const { id } = req.params;
    const putBooksFundacion = new BooksFundacion(req.body);
    putvs._id = id;
    const updateBooksFundacion = await BooksFundacion.findByIdAndUpdate(id, putBooksFundacion, {
      new: true,
    });
    if (!updateBooksFundacion) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(updateBooksFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteBookFundacion = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBookFundacion = await BooksFundacion.findByIdAndDelete(id);
    if (!deleteBookFundacion) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(deleteBookFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getBooksFundacion, getOneBookFundacion, postBookFundacion, putBookFundacion, deleteBookFundacion };
