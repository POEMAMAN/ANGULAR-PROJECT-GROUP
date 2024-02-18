const CountryExpanse = require('../../models/models.expanse/countries.expanse.model');

const getCountriesExpanse = async (req, res) => {
  try {
    const allCountriesExpanse = await CountryExpanse.find();
    return res.status(200).json(allCountriesExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCountryExpanse = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountryExpanse = await CountryExpanse.findById(id);
    return res.status(200).json(oneCountryExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCountryExpanse = async (req, res) => {
  try {
    const newCountryExpanse = new CountryExpanse(req.body);
    const createdCountryExpanse = await newCountryExpanse.save();
    return res.status(201).json(createdCountryExpanse);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putCountryExpanse = async (req, res) => {
  try {
    const { id } = req.params;
    const putCountriesExpanse = new CountryExpanse(req.body);
    putCountriesExpanse._id = id;
    const updateCountriesExpanse = await CountryExpanse.findByIdAndUpdate(id, putCountriesExpanse, {
      new: true,
    });
    if (!updateCountriesExpanse) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(updateCountriesExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCountryExpanse = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCountryExpanse = await CountryExpanse.findByIdAndDelete(id);
    if (!deleteCountryExpanse) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(deleteCountryExpanse);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCountriesExpanse,
  getOneCountryExpanse,
  postCountryExpanse,
  putCountryExpanse,
  deleteCountryExpanse,
};
