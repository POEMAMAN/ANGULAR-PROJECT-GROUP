const express = require('express');
const {
  getCountriesForeverWar,
  getOneCountryForeverWar,
  postCountryForeverWar,
  putCountryForeverWar,
  deleteCountryForeverWar,
} = require('../../controllers/controllers.foreverWar/countries.foreverWar.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const countriesForeverWarRoutes = express.Router();

countriesForeverWarRoutes.get('/', getCountriesForeverWar);
countriesForeverWarRoutes.get('/:id', getOneCountryForeverWar);
countriesForeverWarRoutes.post('/post', [isAuth], upload.single('image'), postCountryForeverWar);
countriesForeverWarRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCountryForeverWar);
countriesForeverWarRoutes.delete('/delete/:id', [isAuth], deleteCountryForeverWar);

module.exports = countriesForeverWarRoutes;
