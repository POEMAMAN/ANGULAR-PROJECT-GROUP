const express = require('express');
const {
  getPlanetsSeaford,
  getOnePlanetSeaford,
  postPlanetSeaford,
  putPlanetSeaford,
  deletePlanetSeaford,
} = require('../../controllers/controllers.seaford/planets.seaford.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const planetSeafordRoutes = express.Router();

planetSeafordRoutes.get('/', getPlanetsSeaford);
planetSeafordRoutes.get('/:id', getOnePlanetSeaford);
planetSeafordRoutes.post('/post', [isAuth], upload.single('image'), postPlanetSeaford);
planetSeafordRoutes.put('/edit/:id', upload.single('image'), [isAuth], putPlanetSeaford);
planetSeafordRoutes.delete('/delete/:id', [isAuth], deletePlanetSeaford);

module.exports = planetSeafordRoutes;
