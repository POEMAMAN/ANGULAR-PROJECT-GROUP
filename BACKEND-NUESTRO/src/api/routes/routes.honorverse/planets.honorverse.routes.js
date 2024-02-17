const express = require('express');
const {
  getPlanetsHonorverse,
  getOnePlanetHonorverse,
  postPlanetHonorverse,
  putPlanetHonorverse,
  deletePlanetHonorverse,
} = require('../../controllers/controllers.honorverse/planets.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth');

const planetRoutes = express.Router();

planetRoutes.get('/', getPlanetsHonorverse);
planetRoutes.get('/:id', getOnePlanetHonorverse);
planetRoutes.post('/', postPlanetHonorverse);
planetRoutes.put('/:id', [isAuth], putPlanetHonorverse);
planetRoutes.delete('/:id', [isAuth], deletePlanetHonorverse);

module.exports = planetRoutes;
