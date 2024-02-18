const CountryUplift = require('../../models/models.uplift/countries.uplift.model');

const getCountriesUplift = async (req, res) => {
  try {
    const allCountriesUplift = await CountryUplift.find();
    return res.status(200).json(allCountriesUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCountryUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountryUplift = await CountryUplift.findById(id);
    return res.status(200).json(oneCountryUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCountryUplift = async (req, res) => {
  try {
    const newCountryUplift = new CountryUplift(req.body);
    const createdCountryUplift = await newCountryUplift.save();
    return res.status(201).json(createdCountryUplift);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putCountryUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const putCountriesUplift = new CountryUplift(req.body);
    putCountriesUplift._id = id;
    const updateCountriesUplift = await CountryUplift.findByIdAndUpdate(id, putCountriesUplift, {
      new: true,
    });
    if (!updateCountriesUplift) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(updateCountriesUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCountryUplift = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCountryUplift = await CountryUplift.findByIdAndDelete(id);
    if (!deleteCountryUplift) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(deleteCountryUplift);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCountriesUplift,
  getOneCountryUplift,
  postCountryUplift,
  putCountryUplift,
  deleteCountryUplift,
};
