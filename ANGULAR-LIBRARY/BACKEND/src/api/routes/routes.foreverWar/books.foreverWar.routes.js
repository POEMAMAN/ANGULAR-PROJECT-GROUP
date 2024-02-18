const express = require('express');
const {
  getBooksForeverWar,
  getOneBookForeverWar,
  postBookForeverWar,
  putBookForeverWar,
  deleteBookForeverWar,
} = require('../../controllers/controllers.foreverWar/books.foreverWar.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksForeverWarRoutes = express.Router();

booksForeverWarRoutes.get('/', getBooksForeverWar);
booksForeverWarRoutes.get('/:id', getOneBookForeverWar);
booksForeverWarRoutes.post('/post', [isAuth], upload.single('image'), postBookForeverWar);
booksForeverWarRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookForeverWar);
booksForeverWarRoutes.delete('/delete/:id', [isAuth], deleteBookForeverWar);

module.exports = booksForeverWarRoutes;

