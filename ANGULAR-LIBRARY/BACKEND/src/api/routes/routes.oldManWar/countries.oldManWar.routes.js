const express = require('express');
const {
  getCountriesOldManWar,
  getOneCountryOldManWar,
  postCountryOldManWar,
  putCountryOldManWar,
  deleteCountryOldManWar,
} = require('../../controllers/controllers.oldManWar/countries.oldManWar.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const countriesOldManWarRoutes = express.Router();

countriesOldManWarRoutes.get('/', getCountriesOldManWar);
countriesOldManWarRoutes.get('/:id', getOneCountryOldManWar);
countriesOldManWarRoutes.post('/post', [isAuth], upload.single('image'), postCountryOldManWar);
countriesOldManWarRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCountryOldManWar);
countriesOldManWarRoutes.delete('/delete/:id', [isAuth], deleteCountryOldManWar);

module.exports = countriesOldManWarRoutes;
