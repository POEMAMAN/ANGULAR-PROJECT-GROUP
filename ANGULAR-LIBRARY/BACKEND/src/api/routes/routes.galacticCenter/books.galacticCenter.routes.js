const express = require('express');
const {
  getBooksGalacticCenter,
  getOneBookGalacticCenter,
  postBookGalacticCenter,
  putBookGalacticCenter,
  deleteBookGalacticCenter,
} = require('../../controllers/controllers.galacticCenter/books.galacticCenter.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksGalacticCenterRoutes = express.Router();

booksGalacticCenterRoutes.get('/', getBooksGalacticCenter);
booksGalacticCenterRoutes.get('/:id', getOneBookGalacticCenter);
booksGalacticCenterRoutes.post('/post', [isAuth], upload.single('image'), postBookGalacticCenter);
booksGalacticCenterRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookGalacticCenter);
booksGalacticCenterRoutes.delete('/delete/:id', [isAuth], deleteBookGalacticCenter);

module.exports = booksGalacticCenterRoutes;

