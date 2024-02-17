const express = require('express');
const {
  getCharactersHonorverse,
  getOneCharacterHonorverse,
  postCharacterHonorverse,
  putCharacterHonorverse,
  deleteCharacterHonorverse,
} = require('../../controllers/controllers.honorverse/characters.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth');

const characterRoutes = express.Router();

characterRoutes.get('/', getCharactersHonorverse);
characterRoutes.get('/:id', getOneCharacterHonorverse);
characterRoutes.post('/', [isAuth], postCharacterHonorverse);
characterRoutes.put('/:id', [isAuth], putCharacterHonorverse);
characterRoutes.delete('/:id', [isAuth], deleteCharacterHonorverse);

module.exports = characterRoutes;
