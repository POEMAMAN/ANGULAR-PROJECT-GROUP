const express = require('express');
const {
  getCharactersGalacticCenter,
  getOneCharacterGalacticCenter,
  postCharacterGalacticCenter,
  putCharacterGalacticCenter,
  deleteCharacterGalacticCenter,
} = require('../../controllers/controllers.galacticCenter/characters.galacticCenter.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterGalacticCenterRoutes = express.Router();

characterGalacticCenterRoutes.get('/', getCharactersGalacticCenter);
characterGalacticCenterRoutes.get('/:id', getOneCharacterGalacticCenter);
characterGalacticCenterRoutes.post('/post', [isAuth], upload.single('image'), postCharacterGalacticCenter);
characterGalacticCenterRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterGalacticCenter);
characterGalacticCenterRoutes.delete('/delete/:id', [isAuth], deleteCharacterGalacticCenter);

module.exports = characterGalacticCenterRoutes;
