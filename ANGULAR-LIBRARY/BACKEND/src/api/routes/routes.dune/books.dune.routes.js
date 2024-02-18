const express = require('express');
const {
  getBooksDune,
  getOneBookDune,
  postBookDune,
  putBookDune,
  deleteBookDune,
} = require('../../controllers/controllers.dune/books.dune.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksDuneRoutes = express.Router();

booksDuneRoutes.get('/', getBooksDune);
booksDuneRoutes.get('/:id', getOneBookDune);
booksDuneRoutes.post('/post', [isAuth], upload.single('image'), postBookDune);
booksDuneRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookDune);
booksDuneRoutes.delete('/delete/:id', [isAuth], deleteBookDune);

module.exports = booksDuneRoutes;
