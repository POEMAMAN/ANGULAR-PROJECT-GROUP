const express = require('express');
const {
  getBooks,
  getOneBook,
  postBook,
  putBook,
  deleteBook,
} = require('../controllers/book.controller');
const { isAuth } = require('../../middlewares/auth.middleware');
const upload = require('../../middlewares/updateFile.middleware');

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getOneBook);
// router.post('/post', { isAuth }, upload.single('image'), postBook);
router.put('/edit/:id', upload.single('image'), [isAuth], putBook);
router.delete('/delete/:id', [isAuth], deleteBook);

module.exports = router;