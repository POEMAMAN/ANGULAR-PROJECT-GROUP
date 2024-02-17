const express = require('express');
const {
  getSagas,
  postSagas,
  putSagas,
  deleteSagas,
} = require('../controllers/sagas.controller');
const { isAuth } = require('../../middlewares/auth');

const router = express.Router();

router.get('/',getSagas);
router.post('/',postSagas);
router.put('/:id', [isAuth], putSagas);
router.delete('/:id', [isAuth], deleteSagas);

module.exports = router;