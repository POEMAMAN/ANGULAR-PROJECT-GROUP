const express = require('express');
const {
  getPlanetsUplift,
  getOnePlanetUplift,
  postPlanetUplift,
  putPlanetUplift,
  deletePlanetUplift,
} = require('../../controllers/controllers.uplift/planets.uplift.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const planetUpliftRoutes = express.Router();

planetUpliftRoutes.get('/', getPlanetsUplift);
planetUpliftRoutes.get('/:id', getOnePlanetUplift);
planetUpliftRoutes.post('/post', [isAuth], upload.single('image'), postPlanetUplift);
planetUpliftRoutes.put('/edit/:id', upload.single('image'), [isAuth], putPlanetUplift);
planetUpliftRoutes.delete('/delete/:id', [isAuth], deletePlanetUplift);

module.exports = planetUpliftRoutes;
