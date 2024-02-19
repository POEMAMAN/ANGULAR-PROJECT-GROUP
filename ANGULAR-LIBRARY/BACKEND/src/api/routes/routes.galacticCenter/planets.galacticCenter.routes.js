const express = require('express');
const {
  getPlanetsGalacticCenter,
  getOnePlanetGalacticCenter,
  postPlanetGalacticCenter,
  putPlanetGalacticCenter,
  deletePlanetGalacticCenter,
} = require('../../controllers/controllers.galacticCenter/planets.galacticCenter.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const planetGalacticCenterRoutes = express.Router();

planetGalacticCenterRoutes.get('/', getPlanetsGalacticCenter);
planetGalacticCenterRoutes.get('/:id', getOnePlanetGalacticCenter);
planetGalacticCenterRoutes.post('/post', [isAuth], upload.single('image'), postPlanetGalacticCenter);
planetGalacticCenterRoutes.put('/edit/:id', upload.single('image'), [isAuth], putPlanetGalacticCenter);
planetGalacticCenterRoutes.delete('/delete/:id', [isAuth], deletePlanetGalacticCenter);

module.exports = planetGalacticCenterRoutes;
