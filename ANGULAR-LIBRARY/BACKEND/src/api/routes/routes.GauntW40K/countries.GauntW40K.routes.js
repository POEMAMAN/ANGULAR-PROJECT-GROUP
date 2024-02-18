const express = require('express');
const {
  getCountriesGauntW40K,
  getOneCountryGauntW40K,
  postCountryGauntW40K,
  putCountryGauntW40K,
  deleteCountryGauntW40K,
} = require('../../controllers/controllers.GauntW40K/countries.GauntW40K.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const countriesGauntW40KRoutes = express.Router();

countriesGauntW40KRoutes.get('/', getCountriesGauntW40K);
countriesGauntW40KRoutes.get('/:id', getOneCountryGauntW40K);
countriesGauntW40KRoutes.post('/post', [isAuth], upload.single('image'), postCountryGauntW40K);
countriesGauntW40KRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCountryGauntW40K);
countriesGauntW40KRoutes.delete('/delete/:id', [isAuth], deleteCountryGauntW40K);

module.exports = countriesGauntW40KRoutes;
