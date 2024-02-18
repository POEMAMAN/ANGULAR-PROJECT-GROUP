const express = require('express');
const {
  getBooksGauntW40K,
  getOneBookGauntW40K,
  postBookGauntW40K,
  putBookGauntW40K,
  deleteBookGauntW40K,
} = require('../../controllers/controllers.GauntW40K/books.GauntW40K.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksGauntW40KRoutes = express.Router();

booksGauntW40KRoutes.get('/', getBooksGauntW40K);
booksGauntW40KRoutes.get('/:id', getOneBookGauntW40K);
booksGauntW40KRoutes.post('/post', [isAuth], upload.single('image'), postBookGauntW40K);
booksGauntW40KRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookGauntW40K);
booksGauntW40KRoutes.delete('/delete/:id', [isAuth], deleteBookGauntW40K);

module.exports = booksGauntW40KRoutes;
