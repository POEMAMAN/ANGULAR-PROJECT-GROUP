const express = require('express');
const {
  getBooksFundacion,
  getOneBookFundacion,
  postBookFundacion,
  putBookFundacion,
  deleteBookFundacion,
} = require('../../controllers/controllers.fundacion/books.fundacion.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const booksFundacionRoutes = express.Router();

booksFundacionRoutes.get('/', getBooksFundacion);
booksFundacionRoutes.get('/:id', getOneBookFundacion);
booksFundacionRoutes.post('/post', [isAuth], upload.single('image'), postBookFundacion);
booksFundacionRoutes.put('/edit/:id', upload.single('image'), [isAuth], putBookFundacion);
booksFundacionRoutes.delete('/delete/:id', [isAuth], deleteBookFundacion);

module.exports = booksFundacionRoutes;
