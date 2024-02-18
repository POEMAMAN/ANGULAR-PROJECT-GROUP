const express = require('express');
const {
  getBooksUplift,
  getOneBookUplift,
  postBookUplift,
  putBookUplift,
  deleteBookUplift,
} = require('../../controllers/controllers.uplift/books.uplift.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksUpliftRoutes = express.Router();

booksUpliftRoutes.get('/', getBooksUplift);
booksUpliftRoutes.get('/:id', getOneBookUplift);
booksUpliftRoutes.post('/post', [isAuth], upload.single('image'), postBookUplift);
booksUpliftRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookUplift);
booksUpliftRoutes.delete('/delete/:id', [isAuth], deleteBookUplift);

module.exports = booksUpliftRoutes;

