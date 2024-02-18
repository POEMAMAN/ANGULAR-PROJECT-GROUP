const express = require('express');
const {
  getPlanetsOldManWar,
  getOnePlanetOldManWar,
  postPlanetOldManWar,
  putPlanetOldManWar,
  deletePlanetOldManWar,
} = require('../../controllers/controllers.oldManWar/planets.oldManWar.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const planetOldManWarRoutes = express.Router();

planetOldManWarRoutes.get('/', getPlanetsOldManWar);
planetOldManWarRoutes.get('/:id', getOnePlanetOldManWar);
planetOldManWarRoutes.post('/post', [isAuth], upload.single('image'), postPlanetOldManWar);
planetOldManWarRoutes.put('/edit/:id', upload.single('image'), [isAuth], putPlanetOldManWar);
planetOldManWarRoutes.delete('/delete/:id', [isAuth], deletePlanetOldManWar);

module.exports = planetOldManWarRoutes;
