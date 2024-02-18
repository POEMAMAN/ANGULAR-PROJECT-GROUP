const express = require('express');
const {
  getBooksOldManWar,
  getOneBookOldManWar,
  postBookOldManWar,
  putBookOldManWar,
  deleteBookOldManWar,
} = require('../../controllers/controllers.oldManWar/books.oldManWar.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksOldManWarRoutes = express.Router();

booksOldManWarRoutes.get('/', getBooksOldManWar);
booksOldManWarRoutes.get('/:id', getOneBookOldManWar);
booksOldManWarRoutes.post('/post', [isAuth], upload.single('image'), postBookOldManWar);
booksOldManWarRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookOldManWar);
booksOldManWarRoutes.delete('/delete/:id', [isAuth], deleteBookOldManWar);

module.exports = booksOldManWarRoutes;
