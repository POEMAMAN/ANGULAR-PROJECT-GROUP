const express = require('express');
const {
  getBooksExpanse,
  getOneBookExpanse,
  postBookExpanse,
  putBookExpanse,
  deleteBookExpanse,
} = require('../../controllers/controllers.expanse/books.expanse.controller');
const { isAuth } = require('../../../middlewares/auth');

const booksExpanseRoutes = express.Router();

booksExpanseRoutes.get('/', getBooksExpanse);
booksExpanseRoutes.get('/:id', getOneBookExpanse);
booksExpanseRoutes.post('/', postBookExpanse);
booksExpanseRoutes.put('/:id', [isAuth], putBookExpanse);
booksExpanseRoutes.delete('/:id', [isAuth], deleteBookExpanse);

module.exports = booksExpanseRoutes;
