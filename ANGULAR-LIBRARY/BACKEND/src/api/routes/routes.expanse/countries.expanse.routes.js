const express = require('express');
const {
  getCountriesExpanse,
  getOneCountryExpanse,
  postCountryExpanse,
  putCountryExpanse,
  deleteCountryExpanse,
} = require('../../controllers/controllers.expanse/countries.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const countriesExpanseRoutes = express.Router();

countriesExpanseRoutes.get('/', getCountriesExpanse);
countriesExpanseRoutes.get('/:id', getOneCountryExpanse);
countriesExpanseRoutes.post('/post', [isAuth], upload.single('image'), postCountryExpanse);
countriesExpanseRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCountryExpanse);
countriesExpanseRoutes.delete('/delete/:id', [isAuth], deleteCountryExpanse);

module.exports = countriesExpanseRoutes;
