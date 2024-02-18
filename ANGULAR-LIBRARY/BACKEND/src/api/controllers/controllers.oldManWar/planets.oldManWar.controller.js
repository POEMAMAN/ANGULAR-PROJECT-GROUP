const PlanetOldManWar = require('../../models/models.oldManWar/planets.oldManWar.model');
const CountryOldManWar = require('../../models/models.oldManWar/countries.oldManWar.model');

const getPlanetsOldManWar = async (req, res) => {
  try {
    const allPlanetsOldManWar = await PlanetOldManWar.find();
    return res.status(200).json(allPlanetsOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOnePlanetOldManWar = async (req, res) => {
  try {
    const { id } = req.params;
    const onePlanetOldManWar = await PlanetOldManWar.findById(id).populate('planetOldManWar');
    return res.status(200).json(onePlanetOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPlanetOldManWar = async (req, res) => {
  try {
    const newPlanetOldManWar = new PlanetOldManWar(req.body);
    const createdPlanetOldManWar = await newPlanetOldManWar.save();
    return res.status(201).json(createdPlanetOldManWar);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putPlanetOldManWar = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlanetsOldManWar = new PlanetOldManWar(req.body);
    putPlanetsOldManWar._id = id;
    const updatePlanetsOldManWar = await PlanetOldManWar.findByIdAndUpdate(id, putPlanetsOldManWar, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(updatePlanetsOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlanetOldManWar = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlanetOldManWar = await PlanetOldManWar.findByIdAndDelete(id);
    if (!deletePlanetOldManWar) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(deletePlanetOldManWar);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getPlanetsOldManWar,
  getOnePlanetOldManWar,
  postPlanetOldManWar,
  putPlanetOldManWar,
  deletePlanetOldManWar,
};
