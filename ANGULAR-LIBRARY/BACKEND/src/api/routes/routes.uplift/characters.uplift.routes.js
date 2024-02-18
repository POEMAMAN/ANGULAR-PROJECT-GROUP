const express = require('express');
const {
  getCharactersUplift,
  getOneCharacterUplift,
  postCharacterUplift,
  putCharacterUplift,
  deleteCharacterUplift,
} = require('../../controllers/controllers.uplift/characters.uplift.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterUpliftRoutes = express.Router();

characterUpliftRoutes.get('/', getCharactersUplift);
characterUpliftRoutes.get('/:id', getOneCharacterUplift);
characterUpliftRoutes.post('/post', [isAuth], upload.single('image'), postCharacterUplift);
characterUpliftRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterUplift);
characterUpliftRoutes.delete('/delete/:id', [isAuth], deleteCharacterUplift);

module.exports = characterUpliftRoutes;
