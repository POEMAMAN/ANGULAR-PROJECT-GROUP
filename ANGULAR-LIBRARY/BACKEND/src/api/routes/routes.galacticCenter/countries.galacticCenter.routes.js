const express = require('express');
const {
  getCountriesGalacticCenter,
  getOneCountryGalacticCenter,
  postCountryGalacticCenter,
  putCountryGalacticCenter,
  deleteCountryGalacticCenter,
} = require('../../controllers/controllers.galacticCenter/countries.galacticCenter.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const countriesGalacticCenterRoutes = express.Router();

countriesGalacticCenterRoutes.get('/', getCountriesGalacticCenter);
countriesGalacticCenterRoutes.get('/:id', getOneCountryGalacticCenter);
countriesGalacticCenterRoutes.post('/post', [isAuth], upload.single('image'), postCountryGalacticCenter);
countriesGalacticCenterRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCountryGalacticCenter);
countriesGalacticCenterRoutes.delete('/delete/:id', [isAuth], deleteCountryGalacticCenter);

module.exports = countriesGalacticCenterRoutes;
