const CountrySeaford = require('../../models/models.seaford/countries.seaford.model');

const getCountriesSeaford = async (req, res) => {
  try {
    const allCountriesSeaford = await CountrySeaford.find();
    return res.status(200).json(allCountriesSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOneCountrySeaford = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountrySeaford = await CountrySeaford.findById(id);
    return res.status(200).json(oneCountrySeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postCountrySeaford = async (req, res) => {
  try {
    const newCountrySeaford = new CountrySeaford(req.body);
    const createdCountrySeaford = await newCountrySeaford.save();
    return res.status(201).json(createdCountrySeaford);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};

const putCountrySeaford = async (req, res) => {
  try {
    const { id } = req.params;
    const putCountriesSeaford = new CountrySeaford(req.body);
    putCountriesSeaford._id = id;
    const updateCountriesSeaford = await CountrySeaford.findByIdAndUpdate(id, putCountriesSeaford, {
      new: true,
    });
    if (!updateCountriesSeaford) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(updateCountriesSeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCountrySeaford = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCountrySeaford = await CountrySeaford.findByIdAndDelete(id);
    if (!deleteCountrySeaford) {
      return res.status(404).json({ message: 'Country not found' });
    }
    return res.status(200).json(deleteCountrySeaford);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getCountriesSeaford,
  getOneCountrySeaford,
  postCountrySeaford,
  putCountrySeaford,
  deleteCountrySeaford,
};
