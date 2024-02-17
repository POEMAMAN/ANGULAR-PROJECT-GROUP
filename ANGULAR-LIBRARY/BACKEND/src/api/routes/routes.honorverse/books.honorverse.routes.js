const express = require('express');
const {
  getBooksHonorverse,
  getOneBookHonorverse,
  postBookHonorverse,
  putBookHonorverse,
  deleteBookHonorverse,
} = require('../../controllers/controllers.honorverse/books.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksHonorverseRoutes = express.Router();

booksHonorverseRoutes.get('/', getBooksHonorverse);
booksHonorverseRoutes.get('/:id', getOneBookHonorverse);
booksHonorverseRoutes.post('/post', [isAuth], upload.single('image'), postBookHonorverse);
booksHonorverseRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookHonorverse);
booksHonorverseRoutes.delete('/delete/:id', [isAuth], deleteBookHonorverse);

module.exports = booksHonorverseRoutes;
