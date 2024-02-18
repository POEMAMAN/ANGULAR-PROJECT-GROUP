const express = require('express');
const {
  getCharactersUltraW40K,
  getOneCharacterUltraW40K,
  postCharacterUltraW40K,
  putCharacterUltraW40K,
  deleteCharacterUltraW40K,
} = require('../../controllers/controllers.UltraW40K/characters.UltraW40K.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterUltraW40KRoutes = express.Router();

characterUltraW40KRoutes.get('/', getCharactersUltraW40K);
characterUltraW40KRoutes.get('/:id', getOneCharacterUltraW40K);
characterUltraW40KRoutes.post('/post', [isAuth], upload.single('image'), postCharacterUltraW40K);
characterUltraW40KRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterUltraW40K);
characterUltraW40KRoutes.delete('/delete/:id', [isAuth], deleteCharacterUltraW40K);

module.exports = characterUltraW40KRoutes;
