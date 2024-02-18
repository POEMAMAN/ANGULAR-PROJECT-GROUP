const express = require('express');
const {
  getPlanetsGauntW40K,
  getOnePlanetGauntW40K,
  postPlanetGauntW40K,
  putPlanetGauntW40K,
  deletePlanetGauntW40K,
} = require('../../controllers/controllers.GauntW40K/planets.GauntW40K.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const planetGauntW40KRoutes = express.Router();

planetGauntW40KRoutes.get('/', getPlanetsGauntW40K);
planetGauntW40KRoutes.get('/:id', getOnePlanetGauntW40K);
planetGauntW40KRoutes.post('/post', [isAuth], upload.single('image'), postPlanetGauntW40K);
planetGauntW40KRoutes.put('/edit/:id', upload.single('image'), [isAuth], putPlanetGauntW40K);
planetGauntW40KRoutes.delete('/delete/:id', [isAuth], deletePlanetGauntW40K);

module.exports = planetGauntW40KRoutes;
