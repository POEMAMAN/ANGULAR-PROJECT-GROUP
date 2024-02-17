const express = require('express');
const {
  getCharactersHonorverse,
  getOneCharacterHonorverse,
  postCharacterHonorverse,
  putCharacterHonorverse,
  deleteCharacterHonorverse,
} = require('../../controllers/controllers.honorverse/characters.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth');

const characterHonorverseRoutes = express.Router();

characterHonorverseRoutes.get('/', getCharactersHonorverse);
characterHonorverseRoutes.get('/:id', getOneCharacterHonorverse);
characterHonorverseRoutes.post('/', [isAuth], postCharacterHonorverse);
characterHonorverseRoutes.put('/:id', [isAuth], putCharacterHonorverse);
characterHonorverseRoutes.delete('/:id', [isAuth], deleteCharacterHonorverse);

module.exports = characterHonorverseRoutes;
