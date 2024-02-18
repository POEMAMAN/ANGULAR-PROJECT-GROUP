const CountryOldManWar = require('../../models/models.oldManWar/countries.oldManWar.model');

const getCountriesOldManWar = async (req, res) => {
  try {
    const allCountriesOldManWar = await CountryOldManWar.find();
    return res.status(200).json(allCountriesOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCountryOldManWar = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountryOldManWar = await CountryOldManWar.findById(id);
    return res.status(200).json(oneCountryOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCountryOldManWar = async (req, res) => {
  try {
    const newCountryOldManWar = new CountryOldManWar(req.body);
    const createdCountryOldManWar = await newCountryOldManWar.save();
    return res.status(201).json(createdCountryOldManWar);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putCountryOldManWar = async (req, res) => {
  try {
    const { id } = req.params;
    const putCountriesOldManWar = new CountryOldManWar(req.body);
    putCountriesOldManWar._id = id;
    const updateCountriesOldManWar = await CountryOldManWar.findByIdAndUpdate(id, putCountriesOldManWar, {
      new: true,
    });
    if (!updateCountriesOldManWar) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(updateCountriesOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCountryOldManWar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCountryOldManWar = await CountryOldManWar.findByIdAndDelete(id);
    if (!deleteCountryOldManWar) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(deleteCountryOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCountriesOldManWar,
  getOneCountryOldManWar,
  postCountryOldManWar,
  putCountryOldManWar,
  deleteCountryOldManWar,
};
