const express = require('express');
const {
  getCharactersForeverWar,
  getOneCharacterForeverWar,
  postCharacterForeverWar,
  putCharacterForeverWar,
  deleteCharacterForeverWar,
} = require('../../controllers/controllers.foreverWar/characters.foreverWar.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterForeverWarRoutes = express.Router();

characterForeverWarRoutes.get('/', getCharactersForeverWar);
characterForeverWarRoutes.get('/:id', getOneCharacterForeverWar);
characterForeverWarRoutes.post('/post', [isAuth], upload.single('image'), postCharacterForeverWar);
characterForeverWarRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterForeverWar);
characterForeverWarRoutes.delete('/delete/:id', [isAuth], deleteCharacterForeverWar);

module.exports = characterForeverWarRoutes;
