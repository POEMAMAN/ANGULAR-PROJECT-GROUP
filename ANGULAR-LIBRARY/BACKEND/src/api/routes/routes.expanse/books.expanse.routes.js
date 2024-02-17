const express = require('express');
const {
  getBooksExpanse,
  getOneBookExpanse,
  postBookExpanse,
  putBookExpanse,
  deleteBookExpanse,
} = require('../../controllers/controllers.expanse/books.expanse.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksExpanseRoutes = express.Router();

booksExpanseRoutes.get('/', getBooksExpanse);
booksExpanseRoutes.get('/:id', getOneBookExpanse);
booksExpanseRoutes.post('/post', [isAuth], upload.single('image'), postBookExpanse);
booksExpanseRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookExpanse);
booksExpanseRoutes.delete('/delete/:id', [isAuth], deleteBookExpanse);

module.exports = booksExpanseRoutes;
