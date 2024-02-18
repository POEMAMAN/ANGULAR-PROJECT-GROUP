const express = require('express');
const {
  getPlanetsForeverWar,
  getOnePlanetForeverWar,
  postPlanetForeverWar,
  putPlanetForeverWar,
  deletePlanetForeverWar,
} = require('../../controllers/controllers.foreverWar/planets.foreverWar.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const planetForeverWarRoutes = express.Router();

planetForeverWarRoutes.get('/', getPlanetsForeverWar);
planetForeverWarRoutes.get('/:id', getOnePlanetForeverWar);
planetForeverWarRoutes.post('/post', [isAuth], upload.single('image'), postPlanetForeverWar);
planetForeverWarRoutes.put('/edit/:id', upload.single('image'), [isAuth], putPlanetForeverWar);
planetForeverWarRoutes.delete('/delete/:id', [isAuth], deletePlanetForeverWar);

module.exports = planetForeverWarRoutes;
