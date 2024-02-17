const express = require('express');
const {
  getPlanetsExpanse,
  getOnePlanetExpanse,
  postPlanetExpanse,
  putPlanetExpanse,
  deletePlanetExpanse,
} = require('../../controllers/controllers.expanse/planets.expanse.controller');
const { isAuth } = require('../../../middlewares/auth');

const planetExpanseRoutes = express.Router();

planetExpanseRoutes.get('/', getPlanetsExpanse);
planetExpanseRoutes.get('/:id', getOnePlanetExpanse);
planetExpanseRoutes.post('/', postPlanetExpanse);
planetExpanseRoutes.put('/:id', [isAuth], putPlanetExpanse);
planetExpanseRoutes.delete('/:id', [isAuth], deletePlanetExpanse);

module.exports = planetExpanseRoutes;
