const express = require('express');
const {
  getPlanetsFundacion,
  getOnePlanetFundacion,
  postPlanetFundacion,
  putPlanetFundacion,
  deletePlanetFundacion,
} = require('../../controllers/controllers.fundacion/planets.fundacion.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const planetFundacionRoutes = express.Router();

planetFundacionRoutes.get('/', getPlanetsFundacion);
planetFundacionRoutes.get('/:id', getOnePlanetFundacion);
planetFundacionRoutes.post('/post', [isAuth], upload.single('image'), postPlanetFundacion);
planetFundacionRoutes.put('/edit/:id', upload.single('image'), [isAuth], putPlanetFundacion);
planetFundacionRoutes.delete('/delete/:id', [isAuth], deletePlanetFundacion);

module.exports = planetFundacionRoutes;
