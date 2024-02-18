const express = require('express');
const {
  getBooksUltraW40K,
  getOneBookUltraW40K,
  postBookUltraW40K,
  putBookUltraW40K,
  deleteBookUltraW40K,
} = require('../../controllers/controllers.UltraW40K/books.UltraW40K.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksUltraW40KRoutes = express.Router();

booksUltraW40KRoutes.get('/', getBooksUltraW40K);
booksUltraW40KRoutes.get('/:id', getOneBookUltraW40K);
booksUltraW40KRoutes.post('/post', [isAuth], upload.single('image'), postBookUltraW40K);
booksUltraW40KRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookUltraW40K);
booksUltraW40KRoutes.delete('/delete/:id', [isAuth], deleteBookUltraW40K);

module.exports = booksUltraW40KRoutes;
