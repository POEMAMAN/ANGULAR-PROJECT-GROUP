const CountryFundacion = require('../../models/models.fundacion/countries.fundacion.model');

const getCountriesFundacion = async (req, res) => {
  try {
    const allCountriesFundacion = await CountryFundacion.find();
    return res.status(200).json(allCountriesFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCountryFundacion = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountryFundacion = await CountryFundacion.findById(id);
    return res.status(200).json(oneCountryFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCountryFundacion = async (req, res) => {
  try {
    const newCountryFundacion = new CountryFundacion(req.body);
    const createdCountryFundacion = await newCountryFundacion.save();
    return res.status(201).json(createdCountryFundacion);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putCountryFundacion = async (req, res) => {
  try {
    const { id } = req.params;
    const putCountriesFundacion = new CountryFundacion(req.body);
    putCountriesFundacion._id = id;
    const updateCountriesFundacion = await CountryFundacion.findByIdAndUpdate(id, putCountriesFundacion, {
      new: true,
    });
    if (!updateCountriesFundacion) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(updateCountriesFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCountryFundacion = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCountryFundacion = await CountryFundacion.findByIdAndDelete(id);
    if (!deleteCountryFundacion) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(deleteCountryFundacion);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCountriesFundacion,
  getOneCountryFundacion,
  postCountryFundacion,
  putCountryFundacion,
  deleteCountryFundacion,
};
