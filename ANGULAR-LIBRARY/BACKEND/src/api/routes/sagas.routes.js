const express = require('express');
const {
  getSagas,
  postSagas,
  putSagas,
  deleteSagas,
} = require('../controllers/sagas.controller');
const { isAuth } = require('../../middlewares/auth.middleware');
const upload = require('../../middlewares/updateFile.middleware');

const router = express.Router();

router.get('/',getSagas);
router.post('/post', { isAuth }, upload.single('image'),postSagas);
router.put('/edit/:id', upload.single('image'), [isAuth], putSagas);
router.delete('/delete/:id', [isAuth], deleteSagas);

module.exports = router;