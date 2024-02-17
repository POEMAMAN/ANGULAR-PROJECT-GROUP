const express = require('express');
const {
  getCountriesHonorverse,
  getOneCountryHonorverse,
  postCountryHonorverse,
  putCountryHonorverse,
  deleteCountryHonorverse,
} = require('../../controllers/controllers.honorverse/countries.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth');

const countriesHonorverseRoutes = express.countriesHonorverseRoutes();

countriesHonorverseRoutes.get('/', getCountriesHonorverse);
countriesHonorverseRoutes.get('/:id', getOneCountryHonorverse);
countriesHonorverseRoutes.post('/', [isAuth], postCountryHonorverse);
countriesHonorverseRoutes.put('/:id', [isAuth], putCountryHonorverse);
countriesHonorverseRoutes.delete('/:id', [isAuth], deleteCountryHonorverse);

module.exports = countriesHonorverseRoutes;
