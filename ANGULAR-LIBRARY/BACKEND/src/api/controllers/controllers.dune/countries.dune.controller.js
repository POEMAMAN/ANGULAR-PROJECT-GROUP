const CountryDune = require('../../models/models.dune/countries.dune.model');

const getCountriesDune = async (req, res) => {
  try {
    const allCountriesDune = await CountryDune.find();
    return res.status(200).json(allCountriesDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCountryDune = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountryDune = await CountryDune.findById(id);
    return res.status(200).json(oneCountryDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCountryDune = async (req, res) => {
  try {
    const newCountryDune = new CountryDune(req.body);
    const createdCountryDune = await newCountryDune.save();
    return res.status(201).json(createdCountryDune);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putCountryDune = async (req, res) => {
  try {
    const { id } = req.params;
    const putCountriesDune = new CountryDune(req.body);
    putCountriesDune._id = id;
    const updateCountriesDune = await CountryDune.findByIdAndUpdate(id, putCountriesDune, {
      new: true,
    });
    if (!updateCountriesDune) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(updateCountriesDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCountryDune = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCountryDune = await CountryDune.findByIdAndDelete(id);
    if (!deleteCountryDune) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(deleteCountryDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCountriesDune,
  getOneCountryDune,
  postCountryDune,
  putCountryDune,
  deleteCountryDune,
};
