const PlanetGauntW40K = require('../../models/models.GauntW40K/planets.GauntW40K.model');
const CountryGauntW40K = require('../../models/models.GauntW40K/countries.GauntW40K.model');

const getPlanetsGauntW40K = async (req, res) => {
  try {
    const allPlanetsGauntW40K = await PlanetGauntW40K.find();
    return res.status(200).json(allPlanetsGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getOnePlanetGauntW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const onePlanetGauntW40K = await PlanetGauntW40K.findById(id).populate('planetGauntW40K');
    return res.status(200).json(onePlanetGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPlanetGauntW40K = async (req, res) => {
  try {
    const newPlanetGauntW40K = new PlanetGauntW40K(req.body);
    const createdPlanetGauntW40K = await newPlanetGauntW40K.save();
    return res.status(201).json(createdPlanetGauntW40K);
  } catch (error) {
    s;
    return res.status(500).json(error);
  }
};
const putPlanetGauntW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const putPlanetsGauntW40K = new PlanetGauntW40K(req.body);
    putPlanetsGauntW40K._id = id;
    const updatePlanetsGauntW40K = await PlanetGauntW40K.findByIdAndUpdate(id, putPlanetsGauntW40K, {
      new: true,
    });
    if (!updatevs) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(updatePlanetsGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePlanetGauntW40K = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlanetGauntW40K = await PlanetGauntW40K.findByIdAndDelete(id);
    if (!deletePlanetGauntW40K) {
      return res.status(404).json({ message: 'Planet not found' });
    }
    return res.status(200).json(deletePlanetGauntW40K);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getPlanetsGauntW40K,
  getOnePlanetGauntW40K,
  postPlanetGauntW40K,
  putPlanetGauntW40K,
  deletePlanetGauntW40K,
};
