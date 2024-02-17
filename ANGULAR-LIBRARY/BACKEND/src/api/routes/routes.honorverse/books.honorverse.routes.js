const express = require('express');
const {
  getBooksHonorverse,
  getOneBookHonorverse,
  postBookHonorverse,
  putBookHonorverse,
  deleteBookHonorverse,
} = require('../../controllers/controllers.honorverse/books.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth');

const booksHonorverseRoutes = express.Router();

booksHonorverseRoutes.get('/', getBooksHonorverse);
booksHonorverseRoutes.get('/:id', getOneBookHonorverse);
booksHonorverseRoutes.post('/', postBookHonorverse);
booksHonorverseRoutes.put('/:id', [isAuth], putBookHonorverse);
booksHonorverseRoutes.delete('/:id', [isAuth], deleteBookHonorverse);

module.exports = booksHonorverseRoutes;
