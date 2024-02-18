const express = require('express');
const {
  getCharactersGauntW40K,
  getOneCharacterGauntW40K,
  postCharacterGauntW40K,
  putCharacterGauntW40K,
  deleteCharacterGauntW40K,
} = require('../../controllers/controllers.GauntW40K/characters.GauntW40K.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterGauntW40KRoutes = express.Router();

characterGauntW40KRoutes.get('/', getCharactersGauntW40K);
characterGauntW40KRoutes.get('/:id', getOneCharacterGauntW40K);
characterGauntW40KRoutes.post('/post', [isAuth], upload.single('image'), postCharacterGauntW40K);
characterGauntW40KRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterGauntW40K);
characterGauntW40KRoutes.delete('/delete/:id', [isAuth], deleteCharacterGauntW40K);

module.exports = characterGauntW40KRoutes;
