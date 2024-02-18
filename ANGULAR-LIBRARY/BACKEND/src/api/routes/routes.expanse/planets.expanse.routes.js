const express = require('express');
const {
  getPlanetsExpanse,
  getOnePlanetExpanse,
  postPlanetExpanse,
  putPlanetExpanse,
  deletePlanetExpanse,
} = require('../../controllers/controllers.expanse/planets.expanse.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const planetExpanseRoutes = express.Router();

planetExpanseRoutes.get('/', getPlanetsExpanse);
planetExpanseRoutes.get('/:id', getOnePlanetExpanse);
planetExpanseRoutes.post('/post', [isAuth], upload.single('image'), postPlanetExpanse);
planetExpanseRoutes.put('/edit/:id', upload.single('image'), [isAuth], putPlanetExpanse);
planetExpanseRoutes.delete('/delete/:id', [isAuth], deletePlanetExpanse);

module.exports = planetExpanseRoutes;
