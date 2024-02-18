const express = require('express');
const {
  getPlanetsUltraW40K,
  getOnePlanetUltraW40K,
  postPlanetUltraW40K,
  putPlanetUltraW40K,
  deletePlanetUltraW40K,
} = require('../../controllers/controllers.UltraW40K/planets.UltraW40K.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const planetUltraW40KRoutes = express.Router();

planetUltraW40KRoutes.get('/', getPlanetsUltraW40K);
planetUltraW40KRoutes.get('/:id', getOnePlanetUltraW40K);
planetUltraW40KRoutes.post('/post', [isAuth], upload.single('image'), postPlanetUltraW40K);
planetUltraW40KRoutes.put('/edit/:id', upload.single('image'), [isAuth], putPlanetUltraW40K);
planetUltraW40KRoutes.delete('/delete/:id', [isAuth], deletePlanetUltraW40K);

module.exports = planetUltraW40KRoutes;
