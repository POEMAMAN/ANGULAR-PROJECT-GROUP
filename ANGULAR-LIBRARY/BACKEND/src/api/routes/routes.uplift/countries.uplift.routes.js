const express = require('express');
const {
  getCountriesUplift,
  getOneCountryUplift,
  postCountryUplift,
  putCountryUplift,
  deleteCountryUplift,
} = require('../../controllers/controllers.uplift/countries.uplift.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const countriesUpliftRoutes = express.countriesUpliftRoutes();

countriesUpliftRoutes.get('/', getCountriesUplift);
countriesUpliftRoutes.get('/:id', getOneCountryUplift);
countriesUpliftRoutes.post('/post', [isAuth], upload.single('image'), postCountryUplift);
countriesUpliftRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCountryUplift);
countriesUpliftRoutes.delete('/delete/:id', [isAuth], deleteCountryUplift);

module.exports = countriesUpliftRoutes;
