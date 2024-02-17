const express = require('express');
const {
  getCountriesExpanse,
  getOneCountryExpanse,
  postCountryExpanse,
  putCountryExpanse,
  deleteCountryExpanse,
} = require('../../controllers/controllers.expanse/countries.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth');

const countriesExpanseRoutes = express.countriesExpanseRoutes();

countriesExpanseRoutes.get('/', getCountriesExpanse);
countriesExpanseRoutes.get('/:id', getOneCountryExpanse);
countriesExpanseRoutes.post('/', [isAuth], postCountryExpanse);
countriesExpanseRoutes.put('/:id', [isAuth], putCountryExpanse);
countriesExpanseRoutes.delete('/:id', [isAuth], deleteCountryExpanse);

module.exports = countriesExpanseRoutes;
