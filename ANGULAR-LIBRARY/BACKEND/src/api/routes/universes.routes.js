const express = require('express');
const {
  getUniverses,
  putUniverse,
  postUniverse,
  deleteUniverse,
} = require('../controllers/universes.controller');
const { isAuth } = require('../../middlewares/auth.middleware');
const upload = require('../../middlewares/updateFile.middleware');

const router = express.Router();

router.get('/', getUniverses);
router.post('/post', { isAuth }, upload.single('image'), postUniverse);
router.put('/edit/:id', upload.single('image'), [isAuth], putUniverse);
router.delete('/delete/:id', [isAuth], deleteUniverse);

module.exports = router;

