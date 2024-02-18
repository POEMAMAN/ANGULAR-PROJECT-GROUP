const CountryUltraW40K = require('../../models/models.UltraW40K/countries.UltraW40K.model');

const getCountriesUltraW40K = async (req, res) => {
  try {
    const allCountriesUltraW40K = await CountryUltraW40K.find();
    return res.status(200).json(allCountriesUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCountryUltraW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountryUltraW40K = await CountryUltraW40K.findById(id);
    return res.status(200).json(oneCountryUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCountryUltraW40K = async (req, res) => {
  try {
    const newCountryUltraW40K = new CountryUltraW40K(req.body);
    const createdCountryUltraW40K = await newCountryUltraW40K.save();
    return res.status(201).json(createdCountryUltraW40K);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putCountryUltraW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const putCountriesUltraW40K = new CountryUltraW40K(req.body);
    putCountriesUltraW40K._id = id;
    const updateCountriesUltraW40K = await CountryUltraW40K.findByIdAndUpdate(id, putCountriesUltraW40K, {
      new: true,
    });
    if (!updateCountriesUltraW40K) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(updateCountriesUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCountryUltraW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCountryUltraW40K = await CountryUltraW40K.findByIdAndDelete(id);
    if (!deleteCountryUltraW40K) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(deleteCountryUltraW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCountriesUltraW40K,
  getOneCountryUltraW40K,
  postCountryUltraW40K,
  putCountryUltraW40K,
  deleteCountryUltraW40K,
};
