const CountryGalacticCenter = require('../../models/models.galacticCenter/countries.galacticCenter.model');

const getCountriesGalacticCenter = async (req, res) => {
  try {
    const allCountriesGalacticCenter = await CountryGalacticCenter.find();
    return res.status(200).json(allCountriesGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCountryGalacticCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountryGalacticCenter = await CountryGalacticCenter.findById(id);
    return res.status(200).json(oneCountryGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCountryGalacticCenter = async (req, res) => {
  try {
    const newCountryGalacticCenter = new CountryGalacticCenter(req.body);
    const createdCountryGalacticCenter = await newCountryGalacticCenter.save();
    return res.status(201).json(createdCountryGalacticCenter);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putCountryGalacticCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const putCountriesGalacticCenter = new CountryGalacticCenter(req.body);
    putCountriesGalacticCenter._id = id;
    const updateCountriesGalacticCenter = await CountryGalacticCenter.findByIdAndUpdate(id, putCountriesGalacticCenter, {
      new: true,
    });
    if (!updateCountriesGalacticCenter) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(updateCountriesGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCountryGalacticCenter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCountryGalacticCenter = await CountryGalacticCenter.findByIdAndDelete(id);
    if (!deleteCountryGalacticCenter) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(deleteCountryGalacticCenter);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCountriesGalacticCenter,
  getOneCountryGalacticCenter,
  postCountryGalacticCenter,
  putCountryGalacticCenter,
  deleteCountryGalacticCenter,
};
