const express = require('express');
const {
  getCharactersHonorverse,
  getOneCharacterHonorverse,
  postCharacterHonorverse,
  putCharacterHonorverse,
  deleteCharacterHonorverse,
} = require('../../controllers/controllers.honorverse/characters.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterHonorverseRoutes = express.Router();

characterHonorverseRoutes.get('/', getCharactersHonorverse);
characterHonorverseRoutes.get('/:id', getOneCharacterHonorverse);
characterHonorverseRoutes.post('/post', [isAuth], upload.single('image'), postCharacterHonorverse);
characterHonorverseRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterHonorverse);
characterHonorverseRoutes.delete('/delete/:id', [isAuth], deleteCharacterHonorverse);

module.exports = characterHonorverseRoutes;
