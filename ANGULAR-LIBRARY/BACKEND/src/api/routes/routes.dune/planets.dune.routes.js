const express = require('express');
const {
  getPlanetsDune,
  getOnePlanetDune,
  postPlanetDune,
  putPlanetDune,
  deletePlanetDune,
} = require('../../controllers/controllers.dune/planets.dune.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const planetDuneRoutes = express.Router();

planetDuneRoutes.get('/', getPlanetsDune);
planetDuneRoutes.get('/:id', getOnePlanetDune);
planetDuneRoutes.post('/post', [isAuth], upload.single('image'), postPlanetDune);
planetDuneRoutes.put('/edit/:id', upload.single('image'), [isAuth], putPlanetDune);
planetDuneRoutes.delete('/delete/:id', [isAuth], deletePlanetDune);

module.exports = planetDuneRoutes;
