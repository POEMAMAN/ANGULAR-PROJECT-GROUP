const CountryHonorverse = require('../../models/models.honorverse/countries.honorverse.model');

const getCountriesHonorverse = async (req, res) => {
  try {
    const allCountriesHonorverse = await CountryHonorverse.find();
    return res.status(200).json(allCountriesHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCountryHonorverse = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountryHonorverse = await CountryHonorverse.findById(id);
    return res.status(200).json(oneCountryHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCountryHonorverse = async (req, res) => {
  try {
    const newCountryHonorverse = new CountryHonorverse(req.body);
    const createdCountryHonorverse = await newCountryHonorverse.save();
    return res.status(201).json(createdCountryHonorverse);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putCountryHonorverse = async (req, res) => {
  try {
    const { id } = req.params;
    const putCountriesHonorverse = new CountryHonorverse(req.body);
    putCountries._id = id;
    const updateCountriesHonorverse = await CountryHonorverse.findByIdAndUpdate(id, putCountries, {
      new: true,
    });
    if (!updateCountriesHonorverse) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(updateCountriesHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCountryHonorverse = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCountryHonorverse = await CountryHonorverse.findByIdAndDelete(id);
    if (!deleteCountryHonorverse) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(deleteCountryHonorverse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCountriesHonorverse,
  getOneCountryHonorverse,
  postCountryHonorverse,
  putCountryHonorverse,
  deleteCountryHonorverse,
};
