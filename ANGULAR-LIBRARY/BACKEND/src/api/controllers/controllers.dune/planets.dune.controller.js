const PlanetDune = require('../../models/models.dune/planets.dune.model');
const CountryDune = require('../../models/models.dune/countries.dune.model');

const getPlanetsDune = async (req, res) => {
  try {
    const allPlanetsDune = await PlanetDune.find();
    return res.status(200).json(allPlanetsDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOnePlanetDune = async (req, res) => {
  try {
    const { id } = req.params;
    const onePlanetDune = await PlanetDune.findById(id).populate('planetDune');
    return res.status(200).json(onePlanetDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPlanetDune = async (req, res) => {
  try {
    const newPlanetDune = new PlanetDune(req.body);
    const createdPlanetDune = await newPlanetDune.save();
    return res.status(201).json(createdPlanetDune);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putPlanetDune = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlanetsDune = new PlanetDune(req.body);
    putPlanetsDune._id = id;
    const updatePlanetsDune = await PlanetDune.findByIdAndUpdate(id, putPlanetsDune, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(updatePlanetsDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlanetDune = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlanetDune = await PlanetDune.findByIdAndDelete(id);
    if (!deletePlanetDune) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(deletePlanetDune);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getPlanetsDune,
  getOnePlanetDune,
  postPlanetDune,
  putPlanetDune,
  deletePlanetDune,
};
