const express = require('express');
const {
  getCharactersOldManWar,
  getOneCharacterOldManWar,
  postCharacterOldManWar,
  putCharacterOldManWar,
  deleteCharacterOldManWar,
} = require('../../controllers/controllers.oldManWar/characters.oldManWar.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterOldManWarRoutes = express.Router();

characterOldManWarRoutes.get('/', getCharactersOldManWar);
characterOldManWarRoutes.get('/:id', getOneCharacterOldManWar);
characterOldManWarRoutes.post('/post', [isAuth], upload.single('image'), postCharacterOldManWar);
characterOldManWarRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterOldManWar);
characterOldManWarRoutes.delete('/delete/:id', [isAuth], deleteCharacterOldManWar);

module.exports = characterOldManWarRoutes;
