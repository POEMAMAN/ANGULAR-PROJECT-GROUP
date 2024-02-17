const express = require('express');
const {
  getCharactersExpanse,
  getOneCharacterExpanse,
  postCharacterExpanse,
  putCharacterExpanse,
  deleteCharacterExpanse,
} = require('../../controllers/controllers.expanse/characters.expanse.controller');
const { isAuth } = require('../../../middlewares/auth');

const characterExpanseRoutes = express.Router();

characterExpanseRoutes.get('/', getCharactersExpanse);
characterExpanseRoutes.get('/:id', getOneCharacterExpanse);
characterExpanseRoutes.post('/', [isAuth], postCharacterExpanse);
characterExpanseRoutes.put('/:id', [isAuth], putCharacterExpanse);
characterExpanseRoutes.delete('/:id', [isAuth], deleteCharacterExpanse);

module.exports = characterExpanseRoutes;
