const express = require('express');
const {
  getCountriesFundacion,
  getOneCountryFundacion,
  postCountryFundacion,
  putCountryFundacion,
  deleteCountryFundacion,
} = require('../../controllers/controllers.fundacion/countries.fundacion.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const countriesFundacionRoutes = express.Router();

countriesFundacionRoutes.get('/', getCountriesFundacion);
countriesFundacionRoutes.get('/:id', getOneCountryFundacion);
countriesFundacionRoutes.post('/post', [isAuth], upload.single('image'), postCountryFundacion);
countriesFundacionRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCountryFundacion);
countriesFundacionRoutes.delete('/delete/:id', [isAuth], deleteCountryFundacion);

module.exports = countriesFundacionRoutes;
