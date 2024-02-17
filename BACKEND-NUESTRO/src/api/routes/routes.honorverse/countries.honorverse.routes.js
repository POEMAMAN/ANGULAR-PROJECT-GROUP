const express = require('express');
const {
  getCountriesHonorverse,
  getOneCountryHonorverse,
  postCountryHonorverse,
  putCountryHonorverse,
  deleteCountryHonorverse,
} = require('../../controllers/controllers.honorverse/countries.honorverse.controller');
const { isAuth } = require('../../../middlewares/auth');

const router = express.Router();

router.get('/', getCountriesHonorverse);
router.get('/:id', getOneCountryHonorverse);
router.post('/', [isAuth], postCountryHonorverse);
router.put('/:id', [isAuth], putCountryHonorverse);
router.delete('/:id', [isAuth], deleteCountryHonorverse);

module.exports = router;
