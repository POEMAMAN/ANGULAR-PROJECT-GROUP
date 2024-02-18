const CountryGauntW40K = require('../../models/models.GauntW40K/countries.GauntW40K.model');

const getCountriesGauntW40K = async (req, res) => {
  try {
    const allCountriesGauntW40K = await CountryGauntW40K.find();
    return res.status(200).json(allCountriesGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCountryGauntW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountryGauntW40K = await CountryGauntW40K.findById(id);
    return res.status(200).json(oneCountryGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCountryGauntW40K = async (req, res) => {
  try {
    const newCountryGauntW40K = new CountryGauntW40K(req.body);
    const createdCountryGauntW40K = await newCountryGauntW40K.save();
    return res.status(201).json(createdCountryGauntW40K);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putCountryGauntW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const putCountriesGauntW40K = new CountryGauntW40K(req.body);
    putCountriesGauntW40K._id = id;
    const updateCountriesGauntW40K = await CountryGauntW40K.findByIdAndUpdate(id, putCountriesGauntW40K, {
      new: true,
    });
    if (!updateCountriesGauntW40K) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(updateCountriesGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCountryGauntW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCountryGauntW40K = await CountryGauntW40K.findByIdAndDelete(id);
    if (!deleteCountryGauntW40K) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(deleteCountryGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCountriesGauntW40K,
  getOneCountryGauntW40K,
  postCountryGauntW40K,
  putCountryGauntW40K,
  deleteCountryGauntW40K,
};
