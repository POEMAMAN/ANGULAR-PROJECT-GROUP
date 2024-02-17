const express = require('express');
const {
  getCountriesHonorverse,
  getOneCountryHonorverse,
  postCountryHonorverse,
  putCountryHonorverse,
  deleteCountryHonorverse,
} = require('../../controllers/controllers.honorverse/countries.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const countriesHonorverseRoutes = express.countriesHonorverseRoutes();

countriesHonorverseRoutes.get('/', getCountriesHonorverse);
countriesHonorverseRoutes.get('/:id', getOneCountryHonorverse);
countriesHonorverseRoutes.post('/post', [isAuth], upload.single('image'), postCountryHonorverse);
countriesHonorverseRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCountryHonorverse);
countriesHonorverseRoutes.delete('/delete/:id', [isAuth], deleteCountryHonorverse);

module.exports = countriesHonorverseRoutes;
