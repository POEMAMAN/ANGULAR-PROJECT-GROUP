const express = require('express');
const {
  getCharactersExpanse,
  getOneCharacterExpanse,
  postCharacterExpanse,
  putCharacterExpanse,
  deleteCharacterExpanse,
} = require('../../controllers/controllers.expanse/characters.expanse.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterExpanseRoutes = express.Router();

characterExpanseRoutes.get('/', getCharactersExpanse);
characterExpanseRoutes.get('/:id', getOneCharacterExpanse);
characterExpanseRoutes.post('/post', [isAuth], upload.single('image'), postCharacterExpanse);
characterExpanseRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterExpanse);
characterExpanseRoutes.delete('/delete/:id', [isAuth], deleteCharacterExpanse);

module.exports = characterExpanseRoutes;
