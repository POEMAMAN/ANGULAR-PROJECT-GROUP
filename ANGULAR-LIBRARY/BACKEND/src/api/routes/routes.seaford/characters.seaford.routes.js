const express = require('express');
const {
  getCharactersSeaford,
  getOneCharacterSeaford,
  postCharacterSeaford,
  putCharacterSeaford,
  deleteCharacterSeaford,
} = require('../../controllers/controllers.seaford/characters.seaford.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterSeafordRoutes = express.Router();

characterSeafordRoutes.get('/', getCharactersSeaford);
characterSeafordRoutes.get('/:id', getOneCharacterSeaford);
characterSeafordRoutes.post('/post', [isAuth], upload.single('image'), postCharacterSeaford);
characterSeafordRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterSeaford);
characterSeafordRoutes.delete('/delete/:id', [isAuth], deleteCharacterSeaford);

module.exports = characterSeafordRoutes;
