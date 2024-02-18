const express = require('express');
const {
  getCharactersDune,
  getOneCharacterDune,
  postCharacterDune,
  putCharacterDune,
  deleteCharacterDune,
} = require('../../controllers/controllers.dune/characters.dune.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterDuneRoutes = express.Router();

characterDuneRoutes.get('/', getCharactersDune);
characterDuneRoutes.get('/:id', getOneCharacterDune);
characterDuneRoutes.post('/post', [isAuth], upload.single('image'), postCharacterDune);
characterDuneRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterDune);
characterDuneRoutes.delete('/delete/:id', [isAuth], deleteCharacterDune);

module.exports = characterDuneRoutes;
