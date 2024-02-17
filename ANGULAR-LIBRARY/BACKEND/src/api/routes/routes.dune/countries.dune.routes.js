const express = require('express');
const {
  getCountriesDune,
  getOneCountryDune,
  postCountryDune,
  putCountryDune,
  deleteCountryDune,
} = require('../../controllers/controllers.dune/countries.dune.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const countriesDuneRoutes = express.countriesDuneRoutes();

countriesDuneRoutes.get('/', getCountriesDune);
countriesDuneRoutes.get('/:id', getOneCountryDune);
countriesDuneRoutes.post('/post', [isAuth], upload.single('image'), postCountryDune);
countriesDuneRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCountryDune);
countriesDuneRoutes.delete('/delete/:id', [isAuth], deleteCountryDune);

module.exports = countriesDuneRoutes;
