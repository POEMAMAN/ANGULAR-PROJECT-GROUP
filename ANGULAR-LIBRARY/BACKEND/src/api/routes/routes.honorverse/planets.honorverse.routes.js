const express = require('express');
const {
  getPlanetsHonorverse,
  getOnePlanetHonorverse,
  postPlanetHonorverse,
  putPlanetHonorverse,
  deletePlanetHonorverse,
} = require('../../controllers/controllers.honorverse/planets.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const planetHonorverseRoutes = express.Router();

planetHonorverseRoutes.get('/', getPlanetsHonorverse);
planetHonorverseRoutes.get('/:id', getOnePlanetHonorverse);
planetHonorverseRoutes.post('/post', [isAuth], upload.single('image'), postPlanetHonorverse);
planetHonorverseRoutes.put('/edit/:id', upload.single('image'), [isAuth], putPlanetHonorverse);
planetHonorverseRoutes.delete('/delete/:id', [isAuth], deletePlanetHonorverse);

module.exports = planetHonorverseRoutes;
