const express = require('express');
const {
  getPlanetsHonorverse,
  getOnePlanetHonorverse,
  postPlanetHonorverse,
  putPlanetHonorverse,
  deletePlanetHonorverse,
} = require('../../controllers/controllers.honorverse/planets.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth');

const planetHonorverseRoutes = express.Router();

planetHonorverseRoutes.get('/', getPlanetsHonorverse);
planetHonorverseRoutes.get('/:id', getOnePlanetHonorverse);
planetHonorverseRoutes.post('/', postPlanetHonorverse);
planetHonorverseRoutes.put('/:id', [isAuth], putPlanetHonorverse);
planetHonorverseRoutes.delete('/:id', [isAuth], deletePlanetHonorverse);

module.exports = planetHonorverseRoutes;
