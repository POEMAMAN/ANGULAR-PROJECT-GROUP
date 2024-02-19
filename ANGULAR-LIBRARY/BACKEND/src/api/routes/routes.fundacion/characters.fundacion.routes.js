const express = require('express');
const {
  getCharactersFundacion,
  getOneCharacterFundacion,
  postCharacterFundacion,
  putCharacterFundacion,
  deleteCharacterFundacion,
} = require('../../controllers/controllers.fundacion/characters.fundacion.controller');
const { isAuth } = require('../../../middlewares/auth.middleware');
const upload = require('../../../middlewares/updateFile.middleware');

const characterFundacionRoutes = express.Router();

characterFundacionRoutes.get('/', getCharactersFundacion);
characterFundacionRoutes.get('/:id', getOneCharacterFundacion);
characterFundacionRoutes.post('/post', [isAuth], upload.single('image'), postCharacterFundacion);
characterFundacionRoutes.put('/edit/:id', upload.single('image'), [isAuth], putCharacterFundacion);
characterFundacionRoutes.delete('/delete/:id', [isAuth], deleteCharacterFundacion);

module.exports = characterFundacionRoutes;
