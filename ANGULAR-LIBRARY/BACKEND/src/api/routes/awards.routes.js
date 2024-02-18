const express = require('express');
const {
  getAwards,
  postAward,
  putAward,
  deleteAward,
} = require('../controllers/awards.controller');
const { isAuth } = require('../../middlewares/auth.middleware');
const upload = require('../../middlewares/updateFile.middleware');

const router = express.Router();

router.get('/', getAwards);
// router.post('/post', { isAuth }, upload.single('image'), postAward);
router.put('/edit/:id', upload.single('image'), [isAuth], putAward);
router.delete('/delete/:id', [isAuth], deleteAward);

module.exports = router;