const Saga = require("../models/sagas.model");
const Book = require("../models/book.model")

const getSagas = async (req, res) => {    

  try {
    const allSagas = await Saga.find().populate("book")

    return res.status(200).json(allSagas);
  } catch (error) {
    return res.status(500).json(error);
  }
};
// con la formula de aqui, primero posteas los noombres y luego haces un get
const postSagas = async (req, res) => {
  try {
    req.body.book = [];
    const allBooks = await Book.find()
    const mapped = allBooks.map((elem) => {
    return {
      saga: elem.saga,
      id: elem._id
    };
  });
 
  mapped.forEach((book) => {
    if (book.saga === req.body.saga) {
      req.body.book.push(book.id)
    }
  });
    const newSaga = new Saga(req.body);
    const createdSaga = await newSaga.save();
    return res.status(201).json(createdSaga);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const deleteSagas = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSaga = await Saga.findByIdAndDelete(id);
    if (!deletedSaga) {
      return res.status(404).json({ message: "book'id not exists" });
    }
    return res.status(200).json(deletedSaga);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const putSagas = async (req, res) => {
  try {
    const { id } = req.params;
    const putSaga = new Saga(req.body);
    putSaga._id = id;

    const updatedSaga = await Saga.findByIdAndUpdate(id, putSaga, {
      new: true,
    });
    if (!updatedSaga) {
      return res.status(404).json({ message: "book'id not exists" });
    }
    return res.status(200).json(updatedSaga);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getSagas, postSagas, deleteSagas, putSagas };
