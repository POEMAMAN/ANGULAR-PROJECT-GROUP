const CountryForeverWar = require('../../models/models.foreverWar/countries.foreverWar.model');

const getCountriesForeverWar = async (req, res) => {
  try {
    const allCountriesForeverWar = await CountryForeverWar.find();
    return res.status(200).json(allCountriesForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCountryForeverWar = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountryForeverWar = await CountryForeverWar.findById(id);
    return res.status(200).json(oneCountryForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCountryForeverWar = async (req, res) => {
  try {
    const newCountryForeverWar = new CountryForeverWar(req.body);
    const createdCountryForeverWar = await newCountryForeverWar.save();
    return res.status(201).json(createdCountryForeverWar);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putCountryForeverWar = async (req, res) => {
  try {
    const { id } = req.params;
    const putCountriesForeverWar = new CountryForeverWar(req.body);
    putCountriesForeverWar._id = id;
    const updateCountriesForeverWar = await CountryForeverWar.findByIdAndUpdate(id, putCountriesForeverWar, {
      new: true,
    });
    if (!updateCountriesForeverWar) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(updateCountriesForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCountryForeverWar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCountryForeverWar = await CountryForeverWar.findByIdAndDelete(id);
    if (!deleteCountryForeverWar) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(deleteCountryForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCountriesForeverWar,
  getOneCountryForeverWar,
  postCountryForeverWar,
  putCountryForeverWar,
  deleteCountryForeverWar,
};
