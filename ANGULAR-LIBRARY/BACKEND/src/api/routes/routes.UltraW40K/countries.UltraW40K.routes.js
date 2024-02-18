const express = require('express');
const {
  getCountriesUltraW40K,
  getOneCountryUltraW40K,
  postCountryUltraW40K,
  putCountryUltraW40K,
  deleteCountryUltraW40K,
} = require('../../controllers/controllers.UltraW40K/countries.UltraW40K.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const countriesUltraW40KRoutes = express.Router();

countriesUltraW40KRoutes.get('/', getCountriesUltraW40K);
countriesUltraW40KRoutes.get('/:id', getOneCountryUltraW40K);
countriesUltraW40KRoutes.post('/post', [isAuth], upload.single('image'), postCountryUltraW40K);
countriesUltraW40KRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCountryUltraW40K);
countriesUltraW40KRoutes.delete('/delete/:id', [isAuth], deleteCountryUltraW40K);

module.exports = countriesUltraW40KRoutes;
