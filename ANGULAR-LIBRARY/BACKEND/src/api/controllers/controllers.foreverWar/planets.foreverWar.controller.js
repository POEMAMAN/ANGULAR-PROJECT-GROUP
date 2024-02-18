const PlanetForeverWar = require('../../models/models.foreverWar/planets.foreverWar.model');
const CountryForeverWar = require('../../models/models.foreverWar/countries.foreverWar.model');

const getPlanetsForeverWar = async (req, res) => {
  try {
    const allPlanetsForeverWar = await PlanetForeverWar.find();
    return res.status(200).json(allPlanetsForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOnePlanetForeverWar = async (req, res) => {
  try {
    const { id } = req.params;
    const onePlanetForeverWar = await PlanetForeverWar.findById(id).populate('planetForeverWar');
    return res.status(200).json(onePlanetForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPlanetForeverWar = async (req, res) => {
  try {
    const newPlanetForeverWar = new PlanetForeverWar(req.body);
    const createdPlanetForeverWar = await newPlanetForeverWar.save();
    return res.status(201).json(createdPlanetForeverWar);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putPlanetForeverWar = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlanetsForeverWar = new PlanetForeverWar(req.body);
    putPlanetsForeverWar._id = id;
    const updatePlanetsForeverWar = await PlanetForeverWar.findByIdAndUpdate(id, putPlanetsForeverWar, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(updatePlanetsForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlanetForeverWar = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlanetForeverWar = await PlanetForeverWar.findByIdAndDelete(id);
    if (!deletePlanetForeverWar) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(deletePlanetForeverWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getPlanetsForeverWar,
  getOnePlanetForeverWar,
  postPlanetForeverWar,
  putPlanetForeverWar,
  deletePlanetForeverWar,
};
