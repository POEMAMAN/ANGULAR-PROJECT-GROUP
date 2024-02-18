const express = require('express');
const {
  getBooksSeaford,
  getOneBookSeaford,
  postBookSeaford,
  putBookSeaford,
  deleteBookSeaford,
} = require('../../controllers/controllers.seaford/books.seaford.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksSeafordRoutes = express.Router();

booksSeafordRoutes.get('/', getBooksSeaford);
booksSeafordRoutes.get('/:id', getOneBookSeaford);
booksSeafordRoutes.post('/post', [isAuth], upload.single('image'), postBookSeaford);
booksSeafordRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookSeaford);
booksSeafordRoutes.delete('/delete/:id', [isAuth], deleteBookSeaford);

module.exports = booksSeafordRoutes;


