const express = require('express');
const {
  getCountriesSeaford,
  getOneCountrySeaford,
  postCountrySeaford,
  putCountrySeaford,
  deleteCountrySeaford,
} = require('../../controllers/controllers.seaford/countries.seaford.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const countriesSeafordRoutes = express.countriesSeafordRoutes();

countriesSeafordRoutes.get('/', getCountriesSeaford);
countriesSeafordRoutes.get('/:id', getOneCountrySeaford);
countriesSeafordRoutes.post('/post', [isAuth], upload.single('image'), postCountrySeaford);
countriesSeafordRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCountrySeaford);
countriesSeafordRoutes.delete('/delete/:id', [isAuth], deleteCountrySeaford);

module.exports = countriesSeafordRoutes;
