const express = require('express');
const {
  getAuthors,
  postAuthors,
  putAuthors,
  deleteAuthors,
} = require('../controllers/author.controller');
const { isAuth } = require('../../middlewares/auth.middleware');
const upload = require('../../middlewares/updateFile.middleware');

const router = express.Router();

router.get('/', getAuthors);
// router.post('/post', { isAuth }, upload.single('image'), postAuthors);
router.put('/edit/:id', upload.single('image'), [isAuth], putAuthors);
router.get('/delete/:id', [isAuth], deleteAuthors);

module.exports = router;